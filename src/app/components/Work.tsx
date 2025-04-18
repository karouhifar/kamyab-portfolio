import { motion, Variants } from "framer-motion";
import React from "react";
import { Timeline } from "./timeline";
import data from "./lib/data";

const container: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.3,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};
function Work() {
  return (
    <div>
      <motion.div
        variants={container}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
        className="container space-y-4 mx-auto py-24 text-neutral-300"
      >
        <motion.h2
          className="font-semibold sm:text-3xl md:text-4xl lg:text-5xl text-center"
          variants={cardVariants}
        >
          Recent Works
        </motion.h2>
        <motion.h6
          className="font-semibold sm:text-sm md:text-lg lg:text-xl text-center"
          variants={cardVariants}
        >
          Check out the projects that I have done.
        </motion.h6>
        <motion.div variants={cardVariants}>
          <Timeline data={data} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Work;
