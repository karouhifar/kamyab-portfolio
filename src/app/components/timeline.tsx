"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  metadata: {
    title: string;
    description: string;
    techStack: string[];
    link: string;
  };
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky top-40 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:-left-[47px] w-8 rounded-full bg-[#051733] flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
              </div>
              <div className="hidden md:grid grid-flow-row-dense grid-rows-2 items-end">
                <h3 className="font-semibold sm:text-3xl md:text-4xl lg:text-5xl text-center">
                  {item.metadata.title}
                </h3>
                <div className="p-2 flex flex-col items-center justify-center">
                  <h3 className="text-sm font-bold text-neutral-500">
                    {item.metadata.description}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    {item.metadata.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-black text-xs bg-neutral-200 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.metadata.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 underline mt-2 block"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block font-semibold sm:text-3xl md:text-4xl lg:text-5xl text-center">
                {item.metadata.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:-left-8 left-8 top-0 overflow-hidden w-[2px]  via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
