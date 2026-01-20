export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm muted">© {year} Bommidapu Aditya. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}