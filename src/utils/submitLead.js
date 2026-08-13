const FORMSUBMIT_AJAX = 'https://formsubmit.co/ajax/marketinginsight11@gmail.com';

export async function submitLead(data, context) {
  const subject = context === 'strategy'
    ? `Strategy Call Request — ${data.name}`
    : `New Inquiry: ${data.service || 'Growth Consultation'} — ${data.name}`;

  const autoresponse = context === 'strategy'
    ? `Dear ${data.name},\n\nThank you for requesting a strategy call with Marketing Insight Pro.\n\nWe have received your request and our lead strategist will contact you within 24 hours to confirm your preferred time slot.\n\nIn the meantime, feel free to reach us on WhatsApp: +92 326 6739989\n\nBest regards,\nMarketing Insight Pro Team`
    : `Dear ${data.name},\n\nThank you for your inquiry regarding ${data.service || 'our services'}.\n\nOur growth strategist is reviewing your request and will contact you at ${data.email} within 24 hours with a customized marketing audit.\n\nIn the meantime, feel free to reach us on WhatsApp: +92 326 6739989\n\nBest regards,\nMarketing Insight Pro Team`;

  const payload = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _autoresponse: autoresponse,
    Name: data.name,
    Email: data.email,
    Phone: data.phone || '',
    Service: data.service || 'Growth Consultation',
    Message: data.message || '',
  };

  if (context === 'strategy' && data.preferredTime) {
    payload['Preferred Time'] = data.preferredTime;
  }

  const res = await fetch(FORMSUBMIT_AJAX, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const json = await res.json();
  if (!json.success) {
    throw new Error(json.message || 'Something went wrong. Please try again later.');
  }
}