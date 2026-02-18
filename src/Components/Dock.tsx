import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import {

    User,
    Briefcase,
    Code,
    Mail,
    Github,
    Linkedin,
    Twitter
} from "lucide-react";

interface DockIconProps {
    mouseX: MotionValue<number>;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

function DockIcon({ mouseX, icon, label, onClick }: DockIconProps) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            onClick={onClick}
            className="group relative flex aspect-square items-center justify-center rounded-full 
                       bg-purple-300/20 text-purple-100 cursor-pointer
                       transition-colors duration-200 
                       hover:bg-purple-300/40 hover:text-white"
        >
            <span className="pointer-events-none">{icon}</span>

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 
                            rounded-md bg-purple-300/20 
                            px-2 py-1 text-xs text-purple-100 
                            opacity-0 blur-sm transition-all 
                            group-hover:opacity-100 group-hover:blur-0">
                {label}
            </div>
        </motion.div>
    );
}

interface DockProps {
    className?: string;
}

export default function Dock({ className }: DockProps) {
    const mouseX = useMotionValue(Infinity);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const icons = [
        {
            icon: <User size={24} />,
            label: "About",
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
        },
        {
            icon: <Briefcase size={24} />,
            label: "About Me", // Updated label to match behavior requested by user ("briefcase goes to about")
            onClick: () => scrollToSection("about")
        },
        {
            icon: <Code size={24} />,
            label: "Projects",
            onClick: () => scrollToSection("projects")
        },
        { icon: <Mail size={24} />, label: "Contact" },
        { icon: <Github size={24} />, label: "GitHub" },
        { icon: <Linkedin size={24} />, label: "LinkedIn" },
        { icon: <Twitter size={24} />, label: "Twitter" },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className={`mx-auto flex h-16 items-end gap-4 
                            rounded-2xl border border-purple-300/20 
                            px-4 pb-3 backdrop-blur-xl 
                            ${className || "bg-purple-300/10"}`}
            >
                {icons.map((item, i) => (
                    <DockIcon
                        key={i}
                        mouseX={mouseX}
                        icon={item.icon}
                        label={item.label}
                        onClick={item.onClick}
                    />
                ))}
            </motion.div>
        </div>
    );
}
