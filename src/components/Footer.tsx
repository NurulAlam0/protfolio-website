import React from "react";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { personalData } from "../data/personal";

const currentYear = new Date().getFullYear();

const socialLinks = personalData.socials.filter((social) =>
  ["GITHUB", "LINKEDIN", "EMAIL"].includes(social.name)
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F5F0] dark:bg-[#121110] text-[#141312] dark:text-[#EDE9E0] transition-colors">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 sm:pt-12 pb-7">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 sm:gap-12 pb-8 sm:pb-9">
          <div className="max-w-md">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#646059] dark:text-[#b0a9c2]">
              Have a project in mind or want to work together? Feel free to reach
              out. I&apos;m always open to discussing new projects and opportunities.
            </p>
          </div>

          <div className="sm:text-right">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#646059] dark:text-[#b0a9c2] mb-4">
              Follow Me
            </p>
            <nav aria-label="Social links" className="flex items-center gap-3 sm:justify-end">
              {socialLinks.map((social) => {
                const Icon =
                  social.name === "GITHUB"
                    ? Code2
                    : social.name === "LINKEDIN"
                      ? BriefcaseBusiness
                      : Mail;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.label}
                    title={social.label}
                    target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white/50 dark:bg-white/[0.04] flex items-center justify-center text-[#646059] dark:text-[#b0a9c2] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="border-t border-black/[0.08] dark:border-white/[0.12] pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#646059] dark:text-[#9b93ae]">
          <p>
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p>Designed &amp; Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
