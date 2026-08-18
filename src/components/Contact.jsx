import { useState } from 'react';
import { useToast } from './Toast';

const CONTACT_LINKS = {
  email: 'mailto:athernia06@gmail.com',
  github: 'https://github.com/Athernia06',
  linkedin: 'https://www.linkedin.com/in/muhammad-rafi-a5b8b7206/',
};

const WHATSAPP_NUMBER = '6285881974020';
const EMAIL_ADDRESS = 'athernia06@gmail.com';

const LINK_BUTTONS = [
  { id: 'email', label: 'Email Me', href: CONTACT_LINKS.email, external: false },
  { id: 'github', label: 'GitHub', href: CONTACT_LINKS.github, external: true },
  { id: 'linkedin', label: 'LinkedIn', href: CONTACT_LINKS.linkedin, external: true },
];

const CHANNELS = [
  { id: 'whatsapp', label: 'Send via WhatsApp' },
  { id: 'email', label: 'Send via Email' },
];

const INPUT_CLASSES =
  'w-full rounded-lg border border-gray-300 bg-surface px-4 py-3 font-body text-sm text-gray-700 placeholder:text-gray-400 transition-colors duration-300 focus:border-primary focus:outline-none dark:border-slate-600 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus:border-accent';

export default function Contact() {
  const showToast = useToast();
  const [channel, setChannel] = useState('whatsapp');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleLinkClick = (link) => {
    if (link.id === 'email') {
      navigator.clipboard?.writeText(EMAIL_ADDRESS);
      showToast('Email copied to clipboard!');
      return;
    }
    showToast(`Opening ${link.label} in a new tab...`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Hello, my name is ${name}.\n\nSubject: ${subject}\n\n${message}`;

    if (channel === 'whatsapp') {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="border-t border-line bg-surface py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-accent md:text-4xl">
            Let&apos;s Build Something Reliable Together
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-primary">
            Open to full-time IT and developer opportunities, freelance
            collaborations, and technical consulting. Reach out through any
            channel below.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {LINK_BUTTONS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="cursor-pointer rounded-lg border border-slate-400 bg-card px-8 py-3.5 font-heading text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-300 dark:hover:border-accent dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-accent/10 bg-card p-6 md:p-8"
        >
          <div
            className="relative flex rounded-lg border border-line bg-surface p-1"
            role="tablist"
            aria-label="Select message delivery channel"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-primary transition-transform duration-300 ease-in-out dark:bg-blue-600 ${
                channel === 'email' ? 'translate-x-full' : 'translate-x-0'
              }`}
            />
            {CHANNELS.map((option) => (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={channel === option.id}
                onClick={() => setChannel(option.id)}
                className={`relative z-10 flex-1 cursor-pointer rounded-md px-4 py-2.5 font-heading text-sm font-semibold transition-all duration-300 ease-in-out active:scale-95 ${
                  channel === option.id
                    ? 'text-white'
                    : 'text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-heading text-sm font-semibold text-accent"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className={INPUT_CLASSES}
              />
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block font-heading text-sm font-semibold text-accent"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Collaboration opportunity"
                className={INPUT_CLASSES}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block font-heading text-sm font-semibold text-accent"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className={`${INPUT_CLASSES} resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full cursor-pointer rounded-lg border border-transparent bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-600/90"
          >
            Send Message
          </button>
        </form>

        <footer className="mt-24 border-t border-accent/10 pt-8 text-center">
          <p className="font-body text-sm text-primary">
            &copy; 2026 Muhammad Rafi. Built with React &amp; Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}
