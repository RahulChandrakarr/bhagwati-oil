"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
      {count}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const stats = [
    {
      number: "40+",
      text: "Years of Excellence",
      value: 40,
      suffix: "+",
    },
    {
      number: "5M+",
      text: "Happy Families",
      value: 5,
      suffix: "M+",
    },
    {
      number: "100%",
      text: "Natural & Pure",
      value: 100,
      suffix: "%",
    },
    {
      number: "15+",
      text: "Industry Awards",
      value: 15,
      suffix: "+",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg p-8 md:p-12 lg:p-16"
          style={{ backgroundColor: "#556B2F" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Counter value={stat.value} suffix={stat.suffix} duration={2} />
                <span className="text-white text-base md:text-lg lg:text-xl font-normal">
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

