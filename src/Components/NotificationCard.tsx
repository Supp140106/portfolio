import React from "react";
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  Briefcase, 
  Code2, 
  Twitter 
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

/**
 * MeshGlobe: Renders the futuristic wireframe globe seen in your reference.
 */
const MeshGlobe = () => (
  <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] pointer-events-none select-none">
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[60px]" />
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
      <defs>
        <pattern id="dotGrid" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="white" />
        </pattern>
      </defs>
      {/* Globe Sphere */}
      <circle cx="50" cy="50" r="48" fill="url(#dotGrid)" />
      {/* Longitude/Latitude lines for depth */}
      <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.4" />
      <ellipse cx="50" cy="50" rx="18" ry="48" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.4" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />
    </svg>
  </div>
);

export default function PortfolioCard({
  title = "Portfolio Website",
  subtitle = "My Digital Showcase",
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
  if (mode === "website") {
    return (
      <div className="w-full min-h-screen bg-[#050208] flex flex-col items-center justify-center p-6 font-sans text-slate-900">
        <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px] relative">
          
          {/* Left Panel: The Dark Aesthetic */}
          <div className="w-full md:w-[42%] relative bg-[#120621] overflow-hidden flex flex-col items-center p-12 text-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-black/60" />
            
            <div className="relative z-10">
              <h2 className="text-white text-4xl lg:text-5xl font-serif tracking-tight mb-2">
                {title}
              </h2>
              <p className="text-fuchsia-400 italic text-xl lg:text-2xl font-serif opacity-90">
                {subtitle}
              </p>
            </div>

            <MeshGlobe />

            {/* Floating Mini-Browser Mockup */}
            <div className="relative z-20 mt-auto w-full max-w-[300px] aspect-video bg-[#1e0d36] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <div className="h-4 bg-white/5 border-b border-white/5 flex items-center px-2 gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
              </div>
              <div className="p-4 space-y-3">
                <div className="h-2 w-2/3 bg-purple-500/20 rounded" />
                <div className="h-16 w-full bg-white/5 rounded-lg flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-6 bg-white/5 rounded" />
                  <div className="h-6 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Content & Actions */}
          <div className="w-full md:w-[58%] p-10 md:p-16 flex flex-col justify-center relative bg-white">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{title}</h1>
              <div className="w-1.5 h-6 bg-green-400 rounded-full rotate-12" />
            </div>

            <p className="text-fuchsia-600 italic text-2xl font-serif mb-6">
              {subtitle}
            </p>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-prose">
              {message}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold tracking-[0.15em] uppercase border border-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons & Secondary Socials */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onPrimaryClick || (() => window.open(websiteUrl, '_blank'))}
                className="flex items-center gap-3 bg-[#2d1b4d] hover:bg-[#120621] text-white px-10 py-4 rounded-2xl font-semibold transition-all shadow-xl shadow-purple-900/10 active:scale-95"
              >
                {primaryAction}
                <ExternalLink size={18} />
              </button>
              
              <button 
                onClick={onSecondaryClick}
                className="px-8 py-4 rounded-2xl font-semibold text-slate-600 border-2 border-slate-100 hover:bg-slate-50 transition-colors"
              >
                {secondaryAction}
              </button>
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
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
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

