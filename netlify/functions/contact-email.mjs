import { sendInquiryEmail } from "../lib/inquiry-email.mjs";

export default {
  async formSubmitted(event) {
    await sendInquiryEmail(event);
  },
};
