import { sendInquiryEmail } from "../lib/inquiry-email.mjs";

export default async (request) => {
  const body = await request.json().catch(() => ({}));
  await sendInquiryEmail(body);
  return new Response("ok", { status: 200 });
};

export const handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  await sendInquiryEmail(body);
  return { statusCode: 200, body: "ok" };
};
