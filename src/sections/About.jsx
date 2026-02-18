import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    description:
      "I have experience in both frontend and backend development, allowing me to create complete web applications.",
  },
  {
    icon: Rocket,
    title: "Passionate about Technology",
    description:
      "I am passionate about technology and always eager to learn new tools and frameworks to enhance my skills.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "I enjoy collaborating with others and believe that teamwork is essential for successful projects.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I have a strong ability to analyze problems and find effective solutions, which helps me overcome challenges in development.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              I am a passionate developer with experience in full stack
              development and a strong desire to learn and grow in the{" "}
              <span className="font-serif italic font-normal text-white">
                field of technology.{" "}
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p> lorem ipsum lorem ipsum</p>
              <p> lorem ipmsun</p>
              <p> lorem ipsum</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in animation-delay-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
