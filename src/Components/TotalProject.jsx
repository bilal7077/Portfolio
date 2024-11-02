import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TotalProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Animation will start when 20% of the element is in view
  });

  const stats = [
    { title: 'Web Projects', value: 30, suffix: '+' },
    { title: 'Designing Projects', value: 100, suffix: '+' },
    { title: 'Virtual Assistant (E-bay)', value: 10, suffix: '+' }
  ];

  return (
    <div ref={ref} className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mb-12 text-5xl font-extrabold text-white">Project Count</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
          >
            <div className="text-4xl font-bold text-white">
              {inView ? <AnimatedNumber value={stat.value} /> : '0'}{stat.suffix}
            </div>
            <p className="mt-4 text-xl font-medium text-gray-200">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Component to animate the number count
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500; // Animation duration in ms
    const increment = value / (duration / 10); // Control the speed

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30); // update every 30ms

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

export default TotalProjects;
