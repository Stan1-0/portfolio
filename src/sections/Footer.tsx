import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    id: 1,
    title: "LinkedIn",
    href: "#",
  },
  {
    id: 2,
    title: "Twitter",
    href: "#",
  },
  {
    id: 3,
    title: "Instagram",
    href: "#",
  },
  {
    id: 4,
    title: "Pinterest",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <a key={link.id} className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
