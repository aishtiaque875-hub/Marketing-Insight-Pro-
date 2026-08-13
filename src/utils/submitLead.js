export const EMAILJS_CONFIG = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  serviceId: 'service_nh6z2lr',
  leadTemplateId: 'YOUR_EMAILJS_LEAD_TEMPLATE_ID',
  confirmTemplateId: 'YOUR_EMAILJS_CONFIRM_TEMPLATE_ID',
};

async function sendEmail(templateId, templateParams) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_CONFIG.serviceId,
      template_id: templateId,
      user_id: EMAILJS_CONFIG.publicKey,
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Message could not be sent. Please try again.');
  }
}

export async function submitLead(data, context) {
  try {
    await sendEmail(EMAILJS_CONFIG.leadTemplateId, {
      to_name: 'Marketing Insight Pro Team',
      from_name: data.name,
      reply_to: data.email,
      email: data.email,
      phone: data.phone,
      service: data.service || 'Growth Consultation',
      message: data.message || '',
      preferred_time: data.preferredTime || '',
    });
  } catch (err) {
    throw new Error(err.message);
  }

  try {
    await sendEmail(EMAILJS_CONFIG.confirmTemplateId, {
      to_name: data.name,
      to_email: data.email,
      service: data.service || 'Growth Consultation',
      confirmation_html: confirmationEmail(data.name, context),
    });
  } catch (err) {
    throw new Error(err.message);
  }
}

export function confirmationEmail(name, context) {
  const headline =
    context === 'strategy'
      ? 'Your Strategy Call Is Confirmed'
      : 'We Received Your Inquiry';

  const detail =
    context === 'strategy'
      ? 'A senior growth strategist from Marketing Insight Pro will call you at your preferred slot within 24 hours to run your free audit.'
      : 'A senior growth strategist from Marketing Insight Pro will reach out to you within 24 hours with your customized marketing audit.';

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto;padding:28px;border:1px solid #e5e7eb;border-radius:14px;background:#ffffff">
    <div style="text-align:center;padding:6px 0 18px;border-bottom:2px solid #dbb762">
      <h2 style="color:#142d65;margin:0;font-size:22px">${headline}</h2>
    </div>
    <p style="color:#374151;font-size:15px;line-height:1.7">Dear <strong>${name}</strong>,</p>
    <p style="color:#374151;font-size:15px;line-height:1.7">Thank you for choosing <strong>Marketing Insight Pro</strong>. ${detail}</p>
    <div style="background:#f6f8ff;border-radius:10px;padding:16px 20px;margin:18px 0">
      <p style="color:#142d65;font-size:15px;margin:0 0 6px"><strong>What happens next?</strong></p>
      <ul style="color:#4b5563;font-size:14px;line-height:1.8;margin:0;padding-left:18px">
        <li>We review your brand details and current funnel.</li>
        <li>Our lead strategist prepares your growth audit.</li>
        <li>We contact you to walk through the plan — no obligation.</li>
      </ul>
    </div>
    <p style="color:#4b5563;font-size:14px;line-height:1.7">Meanwhile, feel free to reach us anytime on WhatsApp at <strong>+92 326 6739989</strong>.</p>
    <div style="text-align:center;margin-top:22px;padding-top:16px;border-top:1px solid #eee">
      <p style="color:#9ca3af;font-size:12px;margin:2px 0">Marketing Insight Pro · marketinginsight11@gmail.com · Pakistan</p>
      <p style="color:#9ca3af;font-size:12px;margin:2px 0">This is an automated confirmation email.</p>
    </div>
  </div>`;
}