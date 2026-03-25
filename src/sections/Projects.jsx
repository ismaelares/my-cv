import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "Famiily Hub",
    description:
      "Worked on the development of music applications for smart home applicances, such as Spotify, Amazon Music, iHeartRadio, Pandora and tuneIn.",
    image: "/my-cv/FH.png",
    tags: ["React", "JavaScript", "AngularJS", "TypeScript"],
    link: "https://www.samsung.com/pe/familyhub/?gclsrc=aw.ds&&cid=mx_pd_pmax_google_ref-lao-26q1ao_ecommerce_scom_multi_oneda-mundial-golai_conversion&gad_source=1&gad_campaignid=23617884120&gbraid=0AAAAADgkidfs1J_Zbn-qLuM_C3LgcHwN5&gclid=CjwKCAjwyYPOBhBxEiwAgpT8P1mIeZEr-70r5Du9JS7wUZD2OwRhiThi8fjeNkm2peSBbRvnR271KRoCdzYQAvD_BwE",
    github: "",
  },
  {
    name: "Realty Austin",
    description:
      "worked on the knowledge transfer of the project. I also was responsible for maintaining and improving the main application.",
    image: "/my-cv/RealtyAustin.png",
    tags: ["React", "JavaScript", "TypeScript"],
    link: "https://www.realtyaustin.com/",
    github: "",
  },
  {
    name: "Busca Corp",
    description:
      "Mantained and developed features for the websites Levelup.com, Tomatazos.com y SandiegoRed.com",
    image: "/my-cv/Busca.png",
    tags: ["PHP", "JavaScript", "zend framework", "HTML", "CSS"],
    link: "https://wheat-dolphin-766207.hostingersite.com/es/inicio/",
    github: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects I've{" "}
            <span className="font-serif italic font-normal text-white">
              Worked On
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:bg-primary/50 hover:text-primary transition-all duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
