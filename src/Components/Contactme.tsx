import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const glow1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const formY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-screen h-screen bg-[#030005] flex items-center justify-center overflow-hidden font-['Inter',sans-serif]"
    >
      {/* DEEP PURPLE PARALLAX BACKGROUND */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        {/* Subtle grid with purple hint */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`, backgroundSize: '100px 100px' }}
        />

        {/* Layered deep violet glows */}
        <motion.div
          style={{ y: glow1Y }}
          className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vh] bg-purple-900/20 rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: glow2Y }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vh] bg-violet-900/15 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-purple-950/5 rounded-full blur-[200px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT: MINIMALIST CONTENT */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400/60 uppercase tracking-[0.4em] text-xs font-bold"
            >
              Contact
            </motion.p>
            <h2 className="text-7xl md:text-8xl font-medium text-white tracking-tighter leading-[0.9]">
              Let's <span className="text-purple-400 italic lavish">Start</span> a <br />
              <span className="text-purple-300 italic">conversation.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
            I'm currently accepting new projects and collaborations. Reach out to discuss how we can build something exceptional together.
          </p>

          <div className="pt-8 grid grid-cols-1 gap-8">
            <div className="group cursor-pointer w-fit">
              <p className="text-[10px] text-purple-400/40 uppercase tracking-[0.3em] font-bold mb-2">Direct Email</p>
              <div className="flex items-center gap-3">
                <a href="mailto:supbuisdas@gmail.com" className="text-2xl text-white hover:text-purple-300 transition-colors">
                  supbuisdas@gmail.com
                </a>
                <ArrowRight size={20} className="text-purple-900 group-hover:translate-x-1 group-hover:text-purple-400 transition-all" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: MINIMALIST FORM */}
        <motion.div
          style={{ y: formY }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="bg-[#08030a] border border-purple-500/10 rounded-none p-10 md:p-14 shadow-2xl relative">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-purple-500/20" />

            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle2 size={48} className="text-purple-400 mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-light text-white tracking-tight mb-4">Message Sent Successfully</h3>
                  <p className="text-gray-500 text-sm mb-10">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-white border-b border-purple-500/30 pb-1 text-xs uppercase tracking-widest hover:border-purple-400 transition-all"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  action="https://formbold.com/s/oPqR0"
                  method="POST"
                  encType="multipart/form-data"
                  className="space-y-10"
                >
                  <div className="space-y-8">
                    {/* Email Input */}
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="EMAIL ADDRESS"
                        className="w-full bg-transparent border-b border-purple-900/30 py-4 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-purple-900 placeholder:uppercase"
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="SUBJECT"
                        className="w-full bg-transparent border-b border-purple-900/30 py-4 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-purple-900 placeholder:uppercase"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative group">
                      <textarea
                        name="message"
                        required
                        rows={1}
                        placeholder="YOUR MESSAGE"
                        className="w-full bg-transparent border-b border-purple-900/30 py-4 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all resize-none placeholder:text-purple-900 placeholder:uppercase min-h-[46px]"
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = 'auto';
                          target.style.height = `${target.scrollHeight}px`;
                        }}
                      />
                    </div>

                    {/* Minimalist File Upload */}
                    <div className="pt-2">
                      <input
                        type="file"
                        name="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-3 text-purple-900 hover:text-purple-400 transition-colors"
                      >
                        {fileName ? (
                          <div className="flex items-center gap-2">
                            <FileText size={16} />
                            <span className="text-xs uppercase tracking-widest text-purple-300">{fileName}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Upload size={16} />
                            <span className="text-xs uppercase tracking-widest">Attach File (Optional)</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}