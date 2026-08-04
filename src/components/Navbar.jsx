const NAV_LINKS = ['Projects', 'Skills', 'About', 'Contact'];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/5 bg-light/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-lg font-bold tracking-tight text-accent">
          Muhammad Rafi<span className="text-primary">.</span>
        </a>
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm font-medium text-accent transition-colors duration-300 hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
