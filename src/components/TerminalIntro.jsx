import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

export default function TerminalIntro() {
  return (
    <Terminal className="h-80">
      <TypingAnimation className='text-white'>&gt; npm create-angad@latest init</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Summoning boilerplate gods...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ TypeScript engaged. JavaScript feels insecure.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ React + Vite linked. Speed levels over 9000 🚀</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ MongoDB connected. Documents feeling organized.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ JWT secured. Hackers left the chat.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ App deployed: frontend to Vercel, backend to Render.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-blue-500">
        <span>ℹ ESLint + Prettier fighting over code style... again.</span>
      </AnimatedSpan>

      <TypingAnimation delay={5000} className="text-muted-foreground text-gray-500">
        Success! Portfolio designed completely
      </TypingAnimation>

      <TypingAnimation delay={6500} className="text-muted-foreground text-gray-500">
        Scroll down to check it out!
      </TypingAnimation>
    </Terminal>
  );
}
