import { useState } from 'react';

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
  'w-full rounded-lg border border-accent/15 bg-light px-4 py-3 font-body text-sm text-accent placeholder:text-primary/50 transition-colors duration-300 focus:border-primary focus:outline-none';

export default function Contact() {
  const [channel, setChannel] = useState('whatsapp');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
    <section id="contact" className="border-t border-accent/5 bg-light py-24">
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
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white px-8 py-3.5 font-heading text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-accent/10 bg-white p-6 md:p-8"
        >
          <div
            className="flex rounded-lg border border-accent/15 p-1"
            role="tablist"
            aria-label="Select message delivery channel"
          >
            {CHANNELS.map((option) => (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={channel === option.id}
                onClick={() => setChannel(option.id)}
                className={`flex-1 cursor-pointer rounded-md px-4 py-2.5 font-heading text-sm font-semibold transition-colors duration-300 ${
                  channel === option.id
                    ? 'bg-accent text-light'
                    : 'text-accent hover:text-primary'
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
            className="mt-6 w-full cursor-pointer rounded-lg bg-accent px-8 py-3.5 font-heading text-sm font-semibold text-light transition-colors duration-300 hover:bg-primary"
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
