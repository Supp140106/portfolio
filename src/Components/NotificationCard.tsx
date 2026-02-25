
import {
  ExternalLink,

  Mail,

} from "lucide-react";

interface NotificationCardProps {
  title?: string;
  subtitle?: string;
  message?: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  websiteUrl?: string;
  tags?: string[];
  mode?: "notification" | "website";
}


export default function PortfolioCard({
  title = "Portfolio Website",
  message = "Explore my projects, skills, and professional journey through a modern, responsive web interface.",
  primaryAction = "Project Link",
  secondaryAction = "View Details",
  websiteUrl = "https://your-portfolio.com",
  tags = ["Next.js", "Tailwind CSS", "Canvas API", "Vercel"],
  mode = "website",
  onPrimaryClick,
  onSecondaryClick,
}: NotificationCardProps) {

  // --- WEBSITE SHOWCASE MODE ---
  // --- WEBSITE SHOWCASE MODE ---
  if (mode === "website") {
    return (
      <div className="w-full min-h-screen bg-[#0b0514] flex items-center justify-center p-6">

        {/* Outer Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)] pointer-events-none" />

        <div className="relative w-full max-w-6xl rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(168,85,247,0.25)] 
                      bg-gradient-to-br from-[#f5edff] via-[#efe6ff] to-[#e6dcff] p-[1px]">

          <div className="bg-white/70 backdrop-blur-xl rounded-[36px] flex flex-col md:flex-row min-h-[520px]">

            {/* LEFT SIDE - Browser Preview */}
            <div className="md:w-1/2 p-10 flex items-center justify-center relative">

              <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6">

                {/* Fake Browser Bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 text-xs text-gray-400 truncate">
                    https://skrible.pi.vercel.app/
                  </div>
                </div>

                {/* Preview Area */}
                <div className="h-52 rounded-2xl bg-gradient-to-br from-purple-200/60 to-indigo-200/60 flex items-center justify-center">
                  <div className="text-center text-gray-500 text-sm">
                    <div className="w-16 h-16 bg-purple-300/40 rounded-2xl mx-auto mb-4" />
                    Preview Loading...
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center">

              <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {title}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {message}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide
                             bg-purple-100 text-purple-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">

                <button
                  onClick={onPrimaryClick || (() => window.open(websiteUrl, "_blank"))}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
                           bg-gradient-to-r from-purple-600 to-indigo-600
                           hover:opacity-90 transition shadow-lg"
                >
                  {primaryAction || "Visit Website"}
                  <ExternalLink size={18} />
                </button>

                <button
                  onClick={onSecondaryClick}
                  className="px-8 py-4 rounded-2xl font-semibold text-gray-700
                           bg-white border border-gray-200
                           hover:bg-gray-50 transition"
                >
                  {secondaryAction}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  // --- NOTIFICATION MODE ---
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-sm shadow-2xl p-8 border border-slate-100">
      <div className="w-12 h-12 bg-purple-100 rounded-sm flex items-center justify-center text-purple-600 mb-6">
        <Mail size={24} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2 italic">{title}</h3>
      <p className="text-slate-500 mb-8 leading-relaxed">{message}</p>
      <div className="flex gap-4">
        <button className="flex-1 bg-[#2d1b4d] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity">
          {primaryAction}
        </button>
        <button className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
          {secondaryAction}
        </button>
      </div>
    </div>
  );
}

