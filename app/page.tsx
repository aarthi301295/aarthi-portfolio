import Link from "next/link";

// TODO: replace with your real links before deploying
const GITHUB_URL = "https://github.com/your-username";
const EMAIL = "your-email@example.com";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* === NAV === */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="logo-gradient w-9 h-9 rounded-lg flex items-center justify-center">
              <span className="font-mono font-extrabold text-white text-lg leading-none">
                A
              </span>
            </div>
            <span className="font-mono font-semibold text-ink">Aarthi</span>
          </div>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-ink transition-colors"
          >
            GitHub ↗
          </Link>
        </header>

        <div className="h-px bg-slate-200" />

        {/* === HERO === */}
        <section className="pt-6 pb-6 sm:pt-8 sm:pb-8">
          <h1 className="name-gradient font-mono font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tighter">
            Aarthi
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-500">
            Transforming ideas into intelligent applications.
          </p>
        </section>

        {/* === ABOUT === */}
        <section className="py-6 sm:py-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-11 h-px bg-indigo-500" />
            <span className="text-xs font-semibold tracking-eyebrow text-indigo-500">
              ABOUT
            </span>
            <span className="w-11 h-px bg-indigo-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
            Aspiring <span className="font-mono">AI</span> Engineer
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Currently: Senior Engineer at HTC Global Services · M.Sc. Data
            Science (in progress)
          </p>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base text-slate-700 leading-relaxed">
            Aspiring AI Engineer with{" "}
            <span className="text-indigo-600 font-semibold">
              10 years of professional experience
            </span>{" "}
            in regulated technical domains, currently building{" "}
            <span className="text-indigo-600 font-semibold">
              AI-powered applications
            </span>{" "}
            using Python, RAG, agentic workflows, vector databases, and LLMs
            while continuously expanding my expertise in modern AI
            technologies.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center px-5 py-2.5 bg-ink text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-ink text-ink rounded-full text-sm font-medium hover:bg-ink hover:text-white transition-colors"
            >
              GitHub ↗
            </Link>
          </div>
        </section>

        {/* === PROJECTS === */}
        <section className="py-6 sm:py-8">
          <p className="font-mono text-xs font-semibold tracking-eyebrow text-indigo-500">
            ◆&nbsp;&nbsp;SELECTED WORK
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Projects.
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Currently building — first projects launching soon.
          </p>

          <div className="mt-5 space-y-2.5">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="border border-dashed border-slate-300 rounded-xl bg-white/50 p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
              >
                <span className="font-mono text-lg sm:text-xl font-bold text-slate-300 w-8 sm:w-10">
                  {String(n).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-1.5 min-w-0">
                  <div
                    className="h-2 bg-slate-200 rounded-full"
                    style={{ width: `${55 + n * 5}%` }}
                  />
                  <div
                    className="h-1.5 bg-slate-100 rounded-full"
                    style={{ width: `${70 + n * 3}%` }}
                  />
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-500 tracking-wider">
                  COMING SOON
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="py-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-slate-500">
          <span className="font-mono text-xs">
            © 2026 Aarthi · Built with Next.js on Vercel
          </span>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors text-xs"
          >
            github ↗
          </Link>
        </footer>
      </div>
    </main>
  );
}
