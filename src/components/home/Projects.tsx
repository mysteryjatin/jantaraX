"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Projects = () => {
  const container = useRef(null);
  const horizontalSection = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const horizontalEl = horizontalSection.current;
      if (!horizontalEl) return;

      const amountToScroll = horizontalEl.scrollWidth - window.innerWidth;

      gsap.to(horizontalEl, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${amountToScroll}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div ref={horizontalSection} className="flex gap-8 px-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="project-card min-w-[80vw] overflow-hidden md:min-w-[40vw] bg-background/30 backdrop-blur-md"
            >
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-left">
                <CardTitle className="text-gray-800 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
