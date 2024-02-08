"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/logos/logo-2.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-3.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-4.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-5.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-6.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-7.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-8.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-9.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-10.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-11.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-12.svg",
    alt: "logo",
  },
  {
    src: "/logos/logo-13.svg",
    alt: "logo",
  },
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="overflow-hidden  w-full">
      <div className="items-center w-full justify-center flex text-3xl font-bold md:pb-10 px-10 text-blue-500">
        More than 100+ brands have built their business with Bird Software
      </div>
      <div className="grid grid-cols-3 p-4 md:flex ">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Carousel;
