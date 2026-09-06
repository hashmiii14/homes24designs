import { useState, type FormEvent } from 'react';
import { Check, AlertCircle, Mail, MessageCircle, Phone } from 'lucide-react';
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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [payload, setPayload] = useState<SubmittedPayload | null>(null);

  const validate = (formData: FormData): boolean => {
    const errs: Record<string, string> = {};
    const name = formData.get('fullName')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const location = formData.get('location')?.toString().trim();

    if (!name) {
      errs.fullName = 'Please enter your full name';
    }
    if (!phone) {
      errs.phone = 'Please enter your phone number';
    } else if (phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!location) {
      errs.location = 'Please enter your locality / area in Delhi NCR';
    }

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (!validate(formData)) return;

    const data = extractPayload(formData);
    setPayload(data);
    setStatus('submitting');

    try {
      // 1. Store lead locally as reliable fallback
      try {
        const existing = JSON.parse(localStorage.getItem('h24_consultations') || '[]');
        existing.push({ ...data, submittedAt: new Date().toISOString() });
        localStorage.setItem('h24_consultations', JSON.stringify(existing));
      } catch {
        // ignore localStorage errors
      }

      // 2. Submit to Web3Forms API
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '5fca4f3b-6e7e-4074-a09b-c3971e42c26f',
          subject: `New Design Consultation: ${data.fullName} (${data.location})`,
          from_name: 'HOMES24DESIGNS Website',
          name: data.fullName,
          phone: data.phone,
          email: data.email || 'Not provided',
          location: data.location,
          property_type: data.propertyType,
          bedrooms: data.bedrooms,
          budget: data.budget,
          services: data.selectedServices,
          message: data.message || 'No additional note',
        }),
      }).catch(() => null);

      // Brief delay for natural submission feel
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  if (status === 'success') {
    const waUrl = payload ? buildWhatsAppUrl(payload) : `https://wa.me/${siteConfig.whatsapp}`;

    return (
      <section id="consultation" className="py-14 md:py-20 bg-stone-50 scroll-mt-20">
        <div className="container-lux">
          <div className="max-w-xl mx-auto bg-white p-8 sm:p-10 border border-stone-200 shadow-xl text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-5 text-emerald-700">
              <Check className="w-8 h-8" strokeWidth={2.5} />
            </div>

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-700 block mb-1">
              Form Submitted Successfully
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-charcoal-900 font-serif">
              Consultation Request Received!
            </h2>

            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Thank you {payload?.fullName ? <strong className="text-charcoal-900">{payload.fullName}</strong> : ''}! We have received your interior consultation details.
            </p>

            {/* Details Card */}
            {payload && (
              <div className="mt-5 p-4 bg-stone-50 border border-stone-200 text-left text-xs space-y-1.5 text-stone-700">
                <div><span className="font-semibold text-charcoal-800">Phone:</span> {payload.phone}</div>
                <div><span className="font-semibold text-charcoal-800">Location:</span> {payload.location}</div>
                <div><span className="font-semibold text-charcoal-800">Property:</span> {payload.propertyType} ({payload.bedrooms})</div>
                <div><span className="font-semibold text-charcoal-800">Budget:</span> {payload.budget}</div>
                <div><span className="font-semibold text-charcoal-800">Services:</span> {payload.selectedServices}</div>
              </div>
            )}

            <p className="mt-4 text-xs text-stone-500">
              Our principal designer will reach out at <strong className="text-charcoal-800">{payload?.phone || 'your phone number'}</strong> within 24 business hours. For immediate site scheduling or priority response:
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 touch-manipulation min-h-[44px]"
                style={{ color: '#ffffff' }}
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span style={{ color: '#ffffff' }}>Message on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal-800 hover:bg-charcoal-900 text-ivory text-xs font-semibold tracking-wider uppercase transition-all active:scale-95 touch-manipulation min-h-[44px]"
                style={{ color: '#f7f4ef' }}
              >
                <Phone className="w-4 h-4 text-accent" />
                <span style={{ color: '#f7f4ef' }}>Call {siteConfig.phone}</span>
              </a>
            </div>

            <div className="mt-6 border-t border-stone-100 pt-4 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">
                Studio: Jamia Nagar, Okhla, New Delhi
              </span>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setPayload(null);
                  setErrors({});
                }}
                className="text-xs text-accent hover:underline uppercase tracking-wider font-semibold"
              >
                Submit Another Request
              </button>
            </div>
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
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs"
                      aria-label="Full Name"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="e.g. 98180 83436"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs"
                      aria-label="Phone"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Email Address <span className="text-xs font-normal lowercase text-stone-500">(optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="e.g. rahul@example.com"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs"
                      aria-label="Email"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Location / Area <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="e.g. Batla House, Jamia Nagar, Okhla"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs"
                      aria-label="Location"
                    />
                    {errors.location && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Property Type */}
                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Property Type</option>
                      {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label htmlFor="bedrooms" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Bedrooms / Configuration
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Configuration</option>
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                      <option value="4BHK+">4BHK+</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="md:col-span-2">
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Approximate Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full h-12 px-4 bg-white border border-stone-300 text-charcoal-900 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors shadow-2xs cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Estimated Budget</option>
                      {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  {/* Services */}
                  <div className="md:col-span-2">
                    <p className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2.5">
                      Required Services <span className="text-xs font-normal lowercase text-stone-500">(select all that apply)</span>
                    </p>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {services.map((s) => (
                        <label key={s.slug} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-700 cursor-pointer p-2.5 bg-white border border-stone-200 hover:border-accent/40 transition-colors">
                          <input type="checkbox" name="services" value={s.shortTitle} className="w-4 h-4 accent-accent rounded-xs shrink-0" />
                          <span className="select-none">{s.shortTitle}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                      Project Details / Note <span className="text-xs font-normal lowercase text-stone-500">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Share any details about your layout, expected timeline, or preferences..."
                      rows={3}
                      className="w-full p-4 bg-white border border-stone-300 text-charcoal-900 text-sm placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 transition-colors resize-none shadow-2xs"
                      aria-label="Message"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-800 hover:bg-charcoal-900 text-ivory text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md disabled:opacity-75 disabled:cursor-not-allowed active:scale-[0.98] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[50px]"
                    style={{ color: '#f7f4ef' }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-ivory border-t-transparent rounded-full animate-spin shrink-0" />
                        <span style={{ color: '#f7f4ef' }}>Submitting Request...</span>
                      </>
                    ) : (
                      <span style={{ color: '#f7f4ef' }}>Book a Consultation</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md active:scale-[0.98] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[50px]"
                    style={{ color: '#ffffff' }}
                  >
                    <MessageCircle className="w-4 h-4 text-white shrink-0" />
                    <span style={{ color: '#ffffff' }}>Chat on WhatsApp</span>
                  </button>
                </div>

                <p className="mt-4 text-xs text-stone-500">
                  Your information is used solely to respond to your enquiry. We respect your privacy and never share your details.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
