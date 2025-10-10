import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

export default function Termi(){
    return<>
        <div className="w-full max-w-2xl p-6">
                <Terminal>
                  <TypingAnimation>&gt; pip install Supprit Das</TypingAnimation>
        
                  <TypingAnimation className="text-green-500">
                    &gt; Computer Science graduate from NIT Durgapur.
                  </TypingAnimation>
        
                  <AnimatedSpan className="text-green-500">
                    ✔ Passionate Developer crafting thoughtful<br /> interfaces and robust systems.
                  </AnimatedSpan>

                  <AnimatedSpan className="text-blue-500">
                    <span>ℹ Skills : </span>
                    
                  </AnimatedSpan>
        
                  <AnimatedSpan className="text-green-500">
                    ✔ MERN • Flutter • React Native • Tailwind Css
                  </AnimatedSpan>
        
                  <AnimatedSpan className="text-green-500">
                    ✔ Python • FastApi • Golang 
                  </AnimatedSpan>
        
                  
        
                  <AnimatedSpan className="text-green-500">
                    ✔ Installing dependencies.
                  </AnimatedSpan>
        
                  
        
                  <TypingAnimation className="text-muted-foreground">
                    A passionate Full Stack Developer will craft  
                  </TypingAnimation>
        
                  <TypingAnimation className="text-muted-foreground">
                    You beutiful Application and Website.
                  </TypingAnimation>
                </Terminal>
              </div>
    </>
}