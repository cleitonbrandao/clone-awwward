'use client'
import React from 'react';
import {animate, stagger } from "animejs";

const WaterDropGrid = () => {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center bg-black">
            <DotGrid />
        </div>
    );
}
const GRID_WIDTH = 15;
const GRID_HEIGHT = 15;

const DotGrid = () => {
    const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const clickedDot = e.currentTarget.querySelector('.dot-point');
        if (!clickedDot) return;
      
        const dots = document.querySelectorAll('.dot-point');
      
          animate(dots, {
            scale: [
              { from: 1.35, easing: 'easeOutSine', duration: 250 },
              { to: 1, easing: 'easeInOutQuad', duration: 500 }
            ],
            translateY: [
              { from: 30, easing: 'easeOutSine', duration: 250 },
              { to: 0, easing: 'easeInOutQuad', duration: 500 }
            ],
            opacity: [
              { from: 1, easing: 'easeOutSine', duration: 250 },
              { to: 0.5, easing: 'easeInOutQuad', duration: 500 }
            ],
            delay: stagger(55, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: Number(`${e.currentTarget.dataset.index}`),
            }),
          });
    };
      
      
    
    const dots: React.ReactNode[] = []; // Declaração explícita do tipo
    let index = 0;
    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    onClick={handleDotClick}
                    className="group cursor-pointer w-10 h-10 rounded-full flex items-center justify-center m-1"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        data-index={index}
                        className="dot-point w-3 h-3 rounded-full bg-gradient-to-b from-green-950 to-green-100 opacity-50 group-hover:from-indigo-600 group-hover:to-green-600 transform"
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <div
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit">
            {dots}
        </div>
    );
};  

export default WaterDropGrid;
