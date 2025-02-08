'use client';

export const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return <div className="flex justify-center fixed z-50 items-center top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="/" onClick={(e) => scrollToSection(e, 'home')} className="nav-item">Home</a>
      <a href="/projects" onClick={(e) => scrollToSection(e, 'projects')} className="nav-item">Projects</a>
      <a href="/about" onClick={(e) => scrollToSection(e, 'about')} className="nav-item">About</a>
      <a href="/contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>;
};
