import React, { useState, useEffect, useRef } from 'react';
import { STATS_ITEMS } from '../constants';
import { StatItem } from '../types';

const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const startAnimation = () => {
            let start = 0;
            const startTime = performance.now();

            const animateCount = (timestamp: number) => {
                const progress = (timestamp - startTime) / duration;
                const current = Math.min(Math.floor(end * progress), end);
                setCount(current);

                if (current < end) {
                    requestAnimationFrame(animateCount);
                }
            };
            requestAnimationFrame(animateCount);
        };
        
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    startAnimation();
                    if(observerRef.current) observerRef.current.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observerRef.current.observe(node);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [end, duration]);

    return { count, ref };
};

const StatCounter: React.FC<{ item: StatItem }> = ({ item }) => {
    const { count, ref } = useCountUp(item.value);
    return (
        <div className="text-center">
            <p className="text-5xl md:text-6xl font-black text-white">
                <span ref={ref}>{count.toLocaleString()}</span>
                <span className="text-3xl md:text-4xl font-bold text-sky-300 ml-2">{item.suffix}</span>
            </p>
            <p className="text-lg text-white/80 mt-2">{item.label}</p>
        </div>
    );
};


const Stats: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-blue-800 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-8">
            {STATS_ITEMS.map((item) => (
                <StatCounter key={item.label} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;