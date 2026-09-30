const CONTACT_EMAIL = process.env.CONTACT_EMAIL?.trim() || "info@castrightcatch.com";
const FROM = process.env.RESEND_FROM?.trim() || "Cast Right Catch Co. <info@castrightcatch.com>";
const SITE_URL = (process.env.URL ?? "https://castrightcatch.com").replace(/\/$/, "");

const FIELDS = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["company", "Company"],
  ["message", "Message"],
];

export function extractFields(input) {
  if (!input || typeof input !== "object") return {};
  if (input.payload?.data && typeof input.payload.data === "object") return input.payload.data;
  if (input.data?.data && typeof input.data.data === "object") return input.data.data;
  if (input.data && typeof input.data === "object") return input.data;
  return input;
}

function asciiSafe(value) {
  return String(value ?? "")
    .replaceAll("\u2014", "-")
    .replaceAll("\u2013", "-")
    .replaceAll("\u2022", "*")
    .replaceAll("\u00B7", "*")
    .replaceAll("\u2018", "'")
    .replaceAll("\u2019", "'")
    .replaceAll("\u201C", '"')
    .replaceAll("\u201D", '"')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "?");
}

export async function sendInquiryEmail(rawFields) {
  const fields = extractFields(rawFields);
  if (typeof fields["bot-field"] === "string" && fields["bot-field"].trim()) {
    return;
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing. In Netlify, the variable name must be RESEND_API_KEY and the value must be the re_ key from Resend.");
  }

  const visitorEmail = String(fields.email ?? "").trim();
  const visitorName = [fields.firstName, fields.lastName].filter(Boolean).join(" ").trim();
  const subject = visitorName
    ? `New inquiry from ${visitorName}`
    : "New inquiry from castrightcatch.com";

  console.log("Sending branded inquiry email", {
    to: CONTACT_EMAIL,
    from: FROM,
    fieldNames: Object.keys(fields),
  });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [CONTACT_EMAIL],
      ...(visitorEmail ? { reply_to: visitorEmail } : {}),
      subject,
      html: buildHtml(fields),
      text: buildText(fields),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(asciiSafe(`Resend ${response.status}: ${detail}`));
  }

  let resendId = "";
  try {
    const payload = await response.json();
    if (payload && typeof payload.id === "string") {
      resendId = payload.id;
    }
  } catch {
    // Response body may be empty; success still counts.
  }
  console.log(
    resendId
      ? `Resend inquiry email sent id=${asciiSafe(resendId)}`
      : "Resend inquiry email sent",
  );
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function displayValue(value) {
  return String(value ?? "").trim() || "-";
}

function buildText(fields) {
  const lines = FIELDS.map(([key, label]) => `${label}: ${displayValue(fields[key])}`);
  return [
    "New inquiry from castrightcatch.com",
    "",
    ...lines,
    "",
    "Cast Right Catch Co.",
    CONTACT_EMAIL,
    SITE_URL,
  ].join("\n");
}

function buildHtml(fields) {
  const rows = FIELDS.map(([key, label]) => {
    const raw = displayValue(fields[key]);
    const html =
      key === "message"
        ? escapeHtml(raw).replaceAll("\n", "<br />")
        : escapeHtml(raw);
    return `
      <tr>
        <td style="padding:16px 8px 6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#a38432;font-family:Georgia,serif;">
          ${escapeHtml(label)}
        </td>
      </tr>
      <tr>
        <td style="padding:0 8px 20px;font-size:16px;line-height:1.6;color:#122846;font-family:'Source Sans 3',Arial,sans-serif;border-bottom:1px solid #e8dfd0;">
          ${html}
        </td>
      </tr>`;
  }).join("");

  const seal = `${SITE_URL}/images/seal.png`;

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#fbf8f2;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbf8f2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#071221;padding:28px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#d4af5a;font-family:'Source Sans 3',Arial,sans-serif;">
                  Cast Right Catch Co.
                </p>
                <h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;color:#ffffff;font-family:Georgia,serif;font-weight:600;">
                  New inquiry
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 44px 16px;">
                ${rows}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 44px 40px;text-align:center;">
                <img src="${seal}" alt="Cast Right Catch Co. emblem" width="88" height="88" style="display:block;margin:24px auto 12px;border:0;" />
                <p style="margin:0;font-size:20px;letter-spacing:0.12em;color:#17375f;font-family:Georgia,serif;font-weight:600;">
                  CAST RIGHT
                </p>
                <p style="margin:6px 0 0;font-size:16px;font-style:italic;color:#17375f;font-family:Georgia,serif;">
                  Catch Co.
                </p>
                <p style="margin:14px 0 0;font-size:14px;color:#1e4a82;font-family:'Source Sans 3',Arial,sans-serif;">
                  <a href="mailto:${escapeHtml(CONTACT_EMAIL)}" style="color:#1e4a82;text-decoration:none;">${escapeHtml(CONTACT_EMAIL)}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
