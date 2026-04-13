import { Dna } from "lucide-react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className="bg-card border-b border-border sticky top-0 z-50"
        style={{ boxShadow: "0 1px 12px oklch(0.15 0.02 240 / 0.08)" }}
        data-ocid="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Dna
                className="w-5 h-5 text-primary-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-semibold text-foreground text-base tracking-tight leading-none">
                3D Body Explorer
              </span>
              <span className="text-muted-foreground text-xs font-body mt-0.5 leading-none">
                Interactive Human Anatomy
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col" data-ocid="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer
        className="bg-muted/40 border-t border-border"
        data-ocid="main-footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs text-center sm:text-left">
            <span className="font-semibold text-foreground">
              Educational Disclaimer:
            </span>{" "}
            यह ऐप केवल शैक्षिक उद्देश्यों के लिए है। This app is for educational purposes
            only. Content is not a substitute for professional medical advice.
          </p>
          <p className="text-muted-foreground text-xs flex-shrink-0">
            © {year}.{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
