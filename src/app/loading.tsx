'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loading() {
  const progressRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current && progressRef.current) {
      gsap.fromTo(
        barRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 3,
          ease: 'linear',
          onUpdate: function () {
            if (progressRef.current) {
              const progress = parseFloat(
                gsap.getProperty(barRef.current, 'width', '%') as string
              );
              progressRef.current.innerText = `${Math.round(progress)}%`;
            }
          },
          onComplete: () => {
            console.log('Loading completo!');
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center align-bottom items-center bg-dark-brown">
      <div className="flex flex-col justify-end items-center w-full h-full py-32">
        <div ref={progressRef} className="text-milk text-4xl font-bold mb-4">
          0%
        </div>
        <div className="w-[80%] h-4 bg-[#444] rounded-full overflow-hidden">
          <div ref={barRef} className="h-full bg-milk rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
