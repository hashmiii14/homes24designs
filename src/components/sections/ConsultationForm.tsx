import { useState, type FormEvent } from 'react';
import { Check, AlertCircle, Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const propertyTypes = ['Apartment', 'Flat', 'Villa', 'Independent House', 'Other'];
const budgetRanges = [
  '₹50,000 – ₹1.5 Lakhs',
  '₹1.5 – ₹3 Lakhs',
  '₹3 – ₹6 Lakhs',
  '₹6 – ₹12 Lakhs',
  '₹12 – ₹25 Lakhs',
  '₹25 Lakhs+',
  'Prefer to discuss',
];

interface SubmittedPayload {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  propertyType: string;
  bedrooms: string;
  budget: string;
  selectedServices: string;
  message: string;
}

export default function ConsultationForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [payload, setPayload] = useState<SubmittedPayload | null>(null);

  const validate = (formData: FormData): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.get('fullName')?.toString().trim()) errs.fullName = 'Please enter your name';
    if (!formData.get('phone')?.toString().trim()) errs.phone = 'Please enter your phone number';
    if (formData.get('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email') as string))
      errs.email = 'Please enter a valid email';
    if (!formData.get('location')?.toString().trim()) errs.location = 'Please enter your location';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const extractPayload = (formData: FormData): SubmittedPayload => ({
    fullName: (formData.get('fullName') as string) || '',
    phone: (formData.get('phone') as string) || '',
    email: (formData.get('email') as string) || '',
    location: (formData.get('location') as string) || '',
    propertyType: (formData.get('propertyType') as string) || 'Apartment',
    bedrooms: (formData.get('bedrooms') as string) || '—',
    budget: (formData.get('budget') as string) || 'Discuss on site',
    selectedServices: formData.getAll('services').join(', ') || 'General Consultation',
    message: (formData.get('message') as string) || '',
  });

  const buildWhatsAppUrl = (data: SubmittedPayload): string => {
    const text = `*New Interior Design Inquiry — HOMES24DESIGNS*
👤 *Name:* ${data.fullName}
📞 *Phone:* ${data.phone}
📍 *Location:* ${data.location}
🏠 *Property:* ${data.propertyType} (${data.bedrooms})
💰 *Budget Range:* ${data.budget}
🛠️ *Services:* ${data.selectedServices}
${data.email ? `✉️ *Email:* ${data.email}\n` : ''}${data.message ? `💬 *Note:* ${data.message}` : ''}`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppDirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.closest('form');
    if (!form) return;
    const formData = new FormData(form);
    if (!validate(formData)) return;
    const data = extractPayload(formData);
    window.open(buildWhatsAppUrl(data), '_blank');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!validate(formData)) return;

    const data = extractPayload(formData);
    setPayload(data);

    // Build mailto fallback
    const fields = [
      `Full Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || '—'}`,
      `Location: ${data.location}`,
      `Property Type: ${data.propertyType}`,
      `Bedrooms: ${data.bedrooms}`,
      `Approximate Budget: ${data.budget}`,
      `Required Services: ${data.selectedServices}`,
      `Message: ${data.message || '—'}`,
    ];
    const subject = 'New Interior Design Consultation Request — HOMES24DESIGNS';
    const body = fields.join('\n');
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  if (status === 'success') {
    const waUrl = payload ? buildWhatsAppUrl(payload) : `https://wa.me/${siteConfig.whatsapp}`;

    return (
      <section id="consultation" className="py-14 md:py-20 bg-stone-50">
        <div className="container-lux">
          <div className="max-w-xl mx-auto text-center bg-white p-8 sm:p-10 border border-stone-200 shadow-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-5">
              <Check className="w-7 h-7 text-emerald-700" strokeWidth={2} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-charcoal-900 font-serif">
              Inquiry Received
            </h2>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Thank you {payload?.fullName ? `, ${payload.fullName}` : ''}! Your interior consultation request has been prepared. For instant response and site scheduling, message proprietor Ehtashamul Islam directly on WhatsApp:
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal-800 hover:bg-charcoal-900 text-ivory text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-stone-500 border-t border-stone-100 pt-4">
              Studio: {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}
            </p>

            <button
              onClick={() => {
                setStatus('idle');
                setPayload(null);
              }}
              className="mt-4 text-xs text-accent hover:underline uppercase tracking-wider font-semibold"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-12 md:py-16 lg:py-18 bg-stone-50">
      <div className="container-lux">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left: heading & trust card */}
          <div className="lg:col-span-2 flex flex-col">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                  Consultation
                </span>
              </div>
              <h2 className="text-section font-light text-charcoal-800">
                Let's design a home that feels like yours.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Share a few details about your space and requirements. We will get back to you promptly to
                schedule your personalised consultation.
              </p>
              <div className="mt-6 space-y-3">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-sm text-charcoal-700 hover:text-accent transition-colors">
                  <span className="w-8 h-8 flex items-center justify-center bg-charcoal-800 text-ivory">
                    <span className="text-xs">PH</span>
                  </span>
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-charcoal-700 hover:text-accent transition-colors">
                  <Mail className="w-8 h-8 p-2 bg-charcoal-800 text-ivory" strokeWidth={1.5} />
                  {siteConfig.email}
                </a>
              </div>

              {/* What to Expect Box (Fills desktop left column void) */}
              <div className="mt-8 p-6 bg-ivory border border-stone-200/80">
                <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium block mb-3">
                  What to Expect Next
                </span>
                <div className="space-y-3 text-xs text-stone-600">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-charcoal-800 text-ivory flex items-center justify-center shrink-0 text-[10px] mt-0.5">1</span>
                    <span>Direct phone or WhatsApp connect within 24 business hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-charcoal-800 text-ivory flex items-center justify-center shrink-0 text-[10px] mt-0.5">2</span>
                    <span>Preliminary space assessment & budget ballpark estimation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-charcoal-800 text-ivory flex items-center justify-center shrink-0 text-[10px] mt-0.5">3</span>
                    <span>Comprehensive 3D layout planning with zero upfront obligation.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="bg-ivory p-6 md:p-10 shadow-sm" noValidate>
                {status === 'error' && (
                  <div className="mb-6 flex items-center gap-2 p-4 bg-error/10 text-error text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder=" "
                      className="input-lux peer"
                      aria-label="Full Name"
                    />
                    <label htmlFor="fullName" className="label-lux peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent">
                      Full Name *
                    </label>
                    {errors.fullName && <p className="mt-1 text-xs text-error">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder=" "
                      className="input-lux peer"
                      aria-label="Phone"
                    />
                    <label htmlFor="phone" className="label-lux peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent">
                      Phone *
                    </label>
                    {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      className="input-lux peer"
                      aria-label="Email"
                    />
                    <label htmlFor="email" className="label-lux peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent">
                      Email
                    </label>
                    {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder=" "
                      className="input-lux peer"
                      aria-label="Location"
                    />
                    <label htmlFor="location" className="label-lux peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent">
                      Location *
                    </label>
                    {errors.location && <p className="mt-1 text-xs text-error">{errors.location}</p>}
                  </div>

                  {/* Property Type */}
                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-medium text-stone-500 mb-1.5">
                      Property Type
                    </label>
                    <select id="propertyType" name="propertyType" className="input-lux cursor-pointer" defaultValue="">
                      <option value="" disabled>Select</option>
                      {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label htmlFor="bedrooms" className="block text-xs font-medium text-stone-500 mb-1.5">
                      Bedrooms
                    </label>
                    <select id="bedrooms" name="bedrooms" className="input-lux cursor-pointer" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                      <option value="4BHK+">4BHK+</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="md:col-span-2">
                    <label htmlFor="budget" className="block text-xs font-medium text-stone-500 mb-1.5">
                      Approximate Budget
                    </label>
                    <select id="budget" name="budget" className="input-lux cursor-pointer" defaultValue="">
                      <option value="" disabled>Select</option>
                      {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  {/* Services */}
                  <div className="md:col-span-2">
                    <p className="block text-xs font-medium text-stone-500 mb-2">Required Services</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {services.map((s) => (
                        <label key={s.slug} className="flex items-center gap-2 text-sm text-stone-600 cursor-pointer">
                          <input type="checkbox" name="services" value={s.shortTitle} className="w-4 h-4 accent-accent" />
                          {s.shortTitle}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 relative">
                    <textarea
                      name="message"
                      id="message"
                      placeholder=" "
                      rows={4}
                      className="input-lux peer resize-none pt-5"
                      aria-label="Message"
                    />
                    <label htmlFor="message" className="label-lux peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent">
                      Message
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-800 text-ivory text-sm font-medium tracking-wide transition-all duration-300 hover:bg-charcoal-900 hover:shadow-lg"
                  >
                    Book a Consultation
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-700 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                <p className="mt-4 text-xs text-stone-500">
                  Your information is used solely to respond to your enquiry. We do not share it with third parties.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
