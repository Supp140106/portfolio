import { useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSending(false);
    setIsSent(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSent(false);
    }, 3000);
  };



  return (
    <section className="relative min-h-[90vh] bg-[#0a0a0a] flex items-center justify-center overflow-hidden py-12 px-6">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* 1. THE PURPLE HALF-PLANET (Horizon) */}
        <div 
          className="absolute -bottom-[400px] left-1/2 -translate-x-1/2 w-[150%] h-[800px] rounded-[100%] 
                     bg-gradient-to-b from-purple-600/30 via-violet-900/10 to-transparent 
                     border-t border-purple-400/20 blur-sm" 
        />
        
        {/* 2. ATMOSPHERIC GLOW (The planet's "air") */}
        <div 
          className="absolute -bottom-[100px] left-0 right-0 h-[300px] 
                     bg-gradient-to-t from-purple-900/40 to-transparent blur-[100px] opacity-60" 
        />

        {/* Existing Purple Halo (Top center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      </div>

      {/* 3. COMPACT FORM CONTAINER */}
      <div className="relative z-10 w-full max-w-md"> {/* Further narrowed to max-w-md */}
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter">
            Get In Touch
          </h2>
          <p className="text-purple-200/40 text-sm md:text-base uppercase tracking-[0.2em] font-light">
            Contact Me
          </p>
        </div>

        {/* Form Card */}
        <div className="relative group">
          {/* Subtle outer glow */}
          <div className="absolute -inset-[1px] bg-purple-500/20 rounded-2xl blur-md group-hover:bg-purple-500/40 transition-all duration-500" />
          
          <div className="relative bg-[#0d0d10]/90 backdrop-blur-3xl rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-[10px] font-bold text-purple-400/60 mb-1.5 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/30" size={16} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-purple-400/60 mb-1.5 uppercase tracking-widest ml-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/30" size={16} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    placeholder="email@provider.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-purple-400/60 mb-1.5 uppercase tracking-widest ml-1">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-purple-400/30" size={16} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Project details..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending || isSent}
                className="relative w-full h-12 overflow-hidden rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-bold text-sm tracking-wide">
                  {isSent ? "Received!" : isSending ? "Sending..." : "Submit Message"}
                  {!isSent && !isSending && <Send size={16} />}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

}