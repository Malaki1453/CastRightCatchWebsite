const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@castrightcatch.com";
const FROM = process.env.RESEND_FROM ?? "Cast Right Catch Co. <info@castrightcatch.com>";
const SITE_URL = (process.env.URL ?? "https://castrightcatch.com").replace(/\/$/, "");

const FIELDS = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["company", "Company"],
  ["message", "Message"],
  ["consent", "Privacy consent"],
];

export default {
  async formSubmitted(event) {
    const fields = event?.data ?? {};
    if (typeof fields["bot-field"] === "string" && fields["bot-field"].trim()) {
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set; skipping branded inquiry email.");
      return;
    }

    const visitorEmail = String(fields.email ?? "").trim();
    const visitorName = [fields.firstName, fields.lastName].filter(Boolean).join(" ").trim();
    const subject = visitorName
      ? `New inquiry from ${visitorName}`
      : "New inquiry from castrightcatch.com";

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
      throw new Error(`Resend ${response.status}: ${detail}`);
    }
  },
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function displayValue(key, value) {
  if (key === "consent") {
    return value ? "Yes" : "No";
  }
  return String(value ?? "").trim() || "—";
}

function buildText(fields) {
  const lines = FIELDS.map(([key, label]) => `${label}: ${displayValue(key, fields[key])}`);
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
    const raw = displayValue(key, fields[key]);
    const html =
      key === "message"
        ? escapeHtml(raw).replaceAll("\n", "<br />")
        : escapeHtml(raw);
    return `
      <tr>
        <td style="padding:10px 0 4px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#a38432;font-family:Georgia,serif;">
          ${escapeHtml(label)}
        </td>
      </tr>
      <tr>
        <td style="padding:0 0 14px;font-size:16px;line-height:1.5;color:#122846;font-family:'Source Sans 3',Arial,sans-serif;border-bottom:1px solid #e8dfd0;">
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
              <td style="padding:28px 32px 8px;">
                ${rows}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 36px;text-align:center;">
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
