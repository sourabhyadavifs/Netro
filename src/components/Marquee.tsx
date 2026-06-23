import React from "react";
import { motion } from "motion/react";

interface MarqueeProps {
  items: { name: string; logoComponent?: React.ReactNode }[];
}

export default function Marquee({ items }: MarqueeProps) {
  // Duplicate the array to ensure seamless infinite looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none" id="marquee-wrapper">
      {/* Absolute Left & Right fade masks to create premium edge feathering */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling block */}
      <motion.div
        className="flex gap-16 whitespace-nowrap min-w-full w-max items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          ease: "linear",
          duration: 24,
          repeat: Infinity,
        }}
        id="marquee-scroll-container"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300 select-none cursor-default py-2"
          >
            {item.logoComponent ? (
              item.logoComponent
            ) : (
              <span className="font-display font-bold text-lg md:text-xl tracking-tight">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
