import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Carrousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const c1Ref = useRef<HTMLImageElement>(null);
  const chc1Ref = useRef<HTMLImageElement>(null);

  const containerRefM = useRef<HTMLDivElement>(null);
  const cmRef = useRef<HTMLImageElement>(null);
  const cm1Ref = useRef<HTMLImageElement>(null);

  const containerRef3 = useRef<HTMLDivElement>(null);
  const cmRef3 = useRef<HTMLImageElement>(null);
  const cm1Ref3 = useRef<HTMLImageElement>(null);

  const containerRef4 = useRef<HTMLDivElement>(null);
  const cmRef4 = useRef<HTMLImageElement>(null);
  const cm1Ref4 = useRef<HTMLImageElement>(null);

  const containerRef5 = useRef<HTMLDivElement>(null);
  const cmRef5 = useRef<HTMLImageElement>(null);
  const cm1Ref5 = useRef<HTMLImageElement>(null);

  const containerRef6 = useRef<HTMLDivElement>(null);
  const cmRef6 = useRef<HTMLImageElement>(null);
  const cm1Ref6 = useRef<HTMLImageElement>(null);

  const weHaveRef = useRef<HTMLDivElement>(null);
  const freakingRef = useRef<HTMLDivElement>(null);
  const deliciusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (deliciusRef.current) {
      const words = deliciusRef.current.querySelectorAll('span');
      gsap.fromTo(
        words,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: weHaveRef.current,
            start: 'top 60%',
            end: 'booton 20%',
            toggleActions: 'play none none none',
            onEnter: () => {
              gsap.fromTo(
                words,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.4,
                  stagger: 0.1,
                  ease: 'power2.out',
                }
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(words, { opacity: 0 }, {});
            },
          },
        }
      );
    }
    if (freakingRef.current) {
      gsap.fromTo(
        freakingRef.current,
        { clipPath: 'inset(0 50% 0 50%)', opacity: 0 }, 
        {
          clipPath: 'inset(0% 0% 0% 0%)', 
          opacity: 1, 
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: freakingRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
            onEnter: () => {
              gsap.fromTo(
                freakingRef.current,
                { clipPath: 'inset(0 50% 0 50%)', opacity: 0 },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  opacity: 1,
                  duration: 0.7,
                  ease: 'power2.out',
                }
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(
                freakingRef.current,
                { clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 },
                {}
              );
            },
          },
        }
      );
    }
    if (weHaveRef.current) {
      const words = weHaveRef.current.querySelectorAll('span');
      gsap.fromTo(
        words,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: weHaveRef.current,
            start: 'top 80%',
            end: 'booton 20%',
            toggleActions: 'play none none none',
            onEnter: () => {
              gsap.fromTo(
                words,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.4,
                  stagger: 0.1,
                  ease: 'power2.out',
                }
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(words, { opacity: 0 }, {});
            },
          },
        }
      );
    }
    const applyParallaxEffect = (
      container: HTMLDivElement,
      image1: HTMLImageElement,
      image2: HTMLImageElement
    ) => {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5) * 2;
        const yPercent = (y / rect.height - 0.5) * 2;

        gsap.to(image1, {
          x: xPercent * 20,
          
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(image2, {
          x: xPercent * 30,
          y: yPercent * 30,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    };

    if (containerRef.current && c1Ref.current && chc1Ref.current) {
      applyParallaxEffect(containerRef.current, c1Ref.current, chc1Ref.current);
    }
    if (containerRefM.current && cmRef.current && cm1Ref.current) {
      applyParallaxEffect(containerRefM.current, cmRef.current, cm1Ref.current);
    }
    if (containerRef3.current && cmRef3.current && cm1Ref3.current) {
      applyParallaxEffect(
        containerRef3.current,
        cmRef3.current,
        cm1Ref3.current
      );
    }
    if (containerRef4.current && cmRef4.current && cm1Ref4.current) {
      applyParallaxEffect(
        containerRef4.current,
        cmRef4.current,
        cm1Ref4.current
      );
    }
    if (containerRef5.current && cmRef5.current && cm1Ref5.current) {
      applyParallaxEffect(
        containerRef5.current,
        cmRef5.current,
        cm1Ref5.current
      );
    }
    if (containerRef6.current && cmRef6.current && cm1Ref6.current) {
      applyParallaxEffect(
        containerRef6.current,
        cmRef6.current,
        cm1Ref6.current
      );
    }
    const carousel = carouselRef.current;
    if (carousel) {
      const items = gsap.utils.toArray<HTMLDivElement>('.carrousel-item');

      gsap.to(items, {
        xPercent: -100 * (items.length - 1), 
        ease: 'none',
        scrollTrigger: {
          trigger: carousel,
          pin: true, 
          scrub: 1, 
          snap: 1 / (items.length - 1), 
          start: 'top top', 
          end: () => `+=${carousel.offsetWidth * (items.length - 1)}`,
          invalidateOnRefresh: true,
          
        },
      });
    }
  }, []);
  const text_have = 'we have 6';
  const text_delicius = 'delicious flavors';
  return (
    <>
      <section
        ref={carouselRef}
        className="flex flex-col stick -tracking-[.25rem] h-screen uppercase z-10 pt-[7vw] bg-milk"
      >
        <div className="flex top-0 gap-24 ">
          <div className="carrousel-item flex-shrink-0 ml-30 items-center justify-center h-full font-bold p-0 m-0">
            <div
              ref={weHaveRef}
              className="text-dark-brown font-bold tracking-tight text-center text-[7vw]"
            >
              {text_have.split('').map((letter, index) => (
                <span key={index} className="inline-block">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div
                ref={freakingRef}
                className="relative z-20 w-[30vw] -rotate-3 bg-middle-brown border-10 -mt-12 m-0 pt-4 border-milk"
              >
                <div className="-mt-2 text-9xl font-bold text-milk uppercase text-center px-2 pb-5 origin-center">
                  freaking
                </div>
              </div>
            </div>
            <div>
              <div
                ref={deliciusRef}
                className="text-dark-brown font-bold -mt-8 -tracking-[.25rem] text-9xl text-center"
              >
                {text_delicius.split('').map((letter, index) => (
                  <span key={index} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            ref={containerRef}
            className="carrousel-item flex-shrink-0 relative -rotate-8 w-[50rem] h-auto"
          >
            <Image
              className="h-auto"
              src="/cerveja/c1/cb1.svg"
              alt="Flavors"
              width={800}
              height={600}
              priority
            />
            <Image
              ref={c1Ref}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] h-auto"
              src="/cerveja/c1/c1.webp"
              alt="Cerveja"
              width={300}
              height={350}
            />
            <Image
              ref={chc1Ref}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full h-auto"
              src="/cerveja/c1/chc1.webp"
              alt="Chocolate"
              width={300}
              height={350}
            />
            <span className="absolute bottom-0 left-0 p-4 z-15 uppercase text-milk tracking-normal text-5xl font-bold">
              chocolate milk
            </span>
          </div>
          <div
            ref={containerRefM}
            className="carrousel-item flex-shrink-0 -rotate-8 w-[50rem] h-auto"
          >
            <Image
              className="h-auto"
              src="/cerveja/c2/cm1.svg"
              alt="Flavors"
              width={800}
              height={600}
              priority
            />
            <Image
              ref={cmRef}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] h-auto"
              src="/cerveja/c2/cm.webp"
              alt="Cerveja"
              width={300}
              height={350}
            />
            <Image
              ref={cm1Ref}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full h-auto"
              src="/cerveja/c2/cm1.webp"
              alt="Chocolate"
              width={300}
              height={350}
            />
            <span className="absolute bottom-0 left-0 p-4 z-15 uppercase text-milk tracking-normal text-5xl font-bold">
              chocolate milk
            </span>
          </div>
          <div
            ref={containerRef3}
            className="carrousel-item flex-shrink-0 -rotate-8 w-[50rem] h-auto"
          >
            <Image
              className="h-auto"
              src="/cerveja/c3/c3_3.svg"
              alt="Flavors"
              width={800}
              height={600}
              priority
            />
            <Image
              ref={cmRef3}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] h-auto"
              src="/cerveja/c3/c3_1.webp"
              alt="Cerveja"
              width={300}
              height={350}
            />
            <Image
              ref={cm1Ref3}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full h-auto"
              src="/cerveja/c3/c3_2.webp"
              alt="Chocolate"
              width={300}
              height={350}
            />
            <span className="absolute bottom-0 left-0 p-4 z-15 uppercase text-milk tracking-normal text-5xl font-bold">
              chocolate milk
            </span>
          </div>
          <div
            ref={containerRef4}
            className="carrousel-item flex-shrink-0 -rotate-8 w-[50rem] h-auto"
          >
            <Image
              className="h-auto"
              src="/cerveja/c4/c4_3.svg"
              alt="Flavors"
              width={800}
              height={600}
              priority
            />
            <Image
              ref={cmRef4}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] h-auto"
              src="/cerveja/c4/c4_1.webp"
              alt="Cerveja"
              width={300}
              height={350}
            />
            <Image
              ref={cm1Ref4}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full h-auto"
              src="/cerveja/c4/c4_2.webp"
              alt="Chocolate"
              width={300}
              height={350}
            />
            <span className="absolute bottom-0 left-0 p-4 z-15 uppercase text-milk tracking-normal text-5xl font-bold">
              chocolate milk
            </span>
          </div>
          <div
            ref={containerRef5}
            className="carrousel-item flex-shrink-0 -rotate-8 w-[50rem] h-auto"
          >
            <Image
              className="h-auto"
              src="/cerveja/c5/c5_3.svg"
              alt="Flavors"
              width={800}
              height={600}
              priority
            />
            <Image
              ref={cmRef5}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] h-auto"
              src="/cerveja/c5/c5_1.webp"
              alt="Cerveja"
              width={300}
              height={350}
            />
            <Image
              ref={cm1Ref5}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full h-auto"
              src="/cerveja/c5/c5_2.webp"
              alt="Chocolate"
              width={300}
              height={350}
            />
            <span className="absolute bottom-0 left-0 p-4 z-15 uppercase text-milk tracking-normal text-5xl font-bold">
              chocolate milk
            </span>
          </div>
          <div
            ref={containerRef6}
            className="carrousel-item flex-shrink-0 -rotate-8 w-[50rem] h-auto"
          >
            <Image
              className="h-auto"
              src="/cerveja/c6/c6_3.svg"
              alt="Flavors"
              width={800}
              height={600}
              priority
            />
            <Image
              ref={cmRef6}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25rem] h-auto"
              src="/cerveja/c6/c6_1.webp"
              alt="Cerveja"
              width={300}
              height={350}
            />
            <Image
              ref={cm1Ref6}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full h-auto"
              src="/cerveja/c6/c6_2.webp"
              alt="Chocolate"
              width={300}
              height={350}
            />
            <span className="absolute bottom-0 left-0 p-4 z-15 uppercase text-milk tracking-normal text-5xl font-bold">
              chocolate milk
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="felx w-[12rem] mt-[12rem] tracking-tight bg-light-brown p-4 rounded-full cursor-pointer">
            <a
              className="uppercase font-antonio font-bold px-8 py-4 text-dark-brown"
              href="#"
            >
              Shop in store
            </a>
          </div>
        </div>
      </section>
      <div className="w-full h-[1140vh]"></div>
    </>
  );
}
