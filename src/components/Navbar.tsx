import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { personalData } from "../data/personal";
import { useTheme } from "../context/ThemeContext";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const HOME_NAV_ITEMS: NavItem[] = [
  { id: "intro", label: "INTRO", href: "#intro" },
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "work", label: "WORK", href: "#work" },
  { id: "education", label: "EDUCATION", href: "#education" },
  { id: "skills", label: "SKILLS", href: "#skills" },
  { id: "contact", label: "CONTACT", href: "#contact" }
];

const WORK_NAV_ITEMS: NavItem[] = [
  { id: "work", label: "WORK", href: "/#work" },
  { id: "archive", label: "ARCHIVE", href: "/work" },
  { id: "contact", label: "CONTACT", href: "/#contact" }
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkRoute = location.pathname === "/work";
  const [activeSection, setActiveSection] = useState<string>(isWorkRoute ? "archive" : "intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems = isWorkRoute ? WORK_NAV_ITEMS : HOME_NAV_ITEMS;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for scroll-spy on home route
  useEffect(() => {
    if (isWorkRoute) {
      setActiveSection("archive");
      return;
    }

    const sectionIds = ["intro", "about", "work", "education", "skills", "contact"];
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isWorkRoute]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setMobileMenuOpen(false);

    if (item.href.startsWith("/#")) {
      e.preventDefault();
      const targetId = item.href.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (item.href.startsWith("#")) {
      e.preventDefault();
      const targetId = item.href.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F5F0]/90 dark:bg-[#121110]/85 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06] py-3.5 shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-[#F7F5F0]/50 dark:bg-[#121110]/40 backdrop-blur-sm py-5 border-b border-black/[0.02] dark:border-white/[0.02]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="font-mono text-sm tracking-[0.25em] font-bold text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] transition-colors flex items-center group"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span>{personalData.name}</span>
          <span className="text-[#84B800] dark:text-[#D6FF4D] ml-0.5 group-hover:translate-x-0.5 transition-transform">.</span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`font-mono text-[10.5px] uppercase tracking-[0.2em] transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-[#7A9E00] dark:text-[#D6FF4D] font-semibold"
                    : "text-[#646059] dark:text-[#8d8a82] hover:text-[#141312] dark:hover:text-[#EDE9E0]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#84B800] dark:bg-[#D6FF4D] rounded-full shadow-[0_0_8px_rgba(214,255,77,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle + Resume Button + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 transition-colors bg-black/[0.03] dark:bg-white/[0.03] cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#D6FF4D]" />
            ) : (
              <Moon className="w-4 h-4 text-[#141312]" />
            )}
          </button>

          {/* Resume link */}
          <a
            href={personalData.resumeUrl}
            download="Nurul_Alam_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1 font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] border border-black/10 dark:border-white/10 hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 px-3.5 py-1.5 rounded-full transition-all duration-200 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-[#D6FF4D]/[0.05]"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3 h-3 text-[#84B800] dark:text-[#D6FF4D]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] p-1.5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5F0]/98 dark:bg-[#121110]/98 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`font-mono text-xs uppercase tracking-[0.2em] py-2 transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-[#7A9E00] dark:text-[#D6FF4D] font-bold"
                      : "text-[#646059] dark:text-[#8d8a82] hover:text-[#141312] dark:hover:text-[#EDE9E0]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#84B800] dark:bg-[#D6FF4D]" />}
                </a>
              );
            })}
            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#646059] dark:text-[#8d8a82] tracking-[0.2em]">RESUME</span>
              <a
                href={personalData.resumeUrl}
                download="Nurul_Alam_Resume.pdf"
                className="font-mono text-[11px] text-[#7A9E00] dark:text-[#D6FF4D] flex items-center gap-1"
              >
                <span>DOWNLOAD</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
