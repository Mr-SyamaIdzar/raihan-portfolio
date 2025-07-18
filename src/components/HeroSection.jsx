import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ, I'm
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
              {" "}
              Muhammad
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Raihan Syamaidzar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
            <br />
            <span className="text-sm text-muted-foreground">
              Inspired by{" "}
              <a
                href="https://www.youtube.com/watch?v=ifOJ0R5UQOc&t=9740s&pp=ygUpcG9ydGZvbGlvIHVzaW5nIHJlYWN0IGpzIGFuZCB0YWlsd2luZCBjc3M%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                PedroTech
              </a>
              's portfolio.
            </span>
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transfrom -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
