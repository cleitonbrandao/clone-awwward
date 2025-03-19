'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const c1Ref = useRef<HTMLImageElement>(null);
  const chc1Ref = useRef<HTMLImageElement>(null);

  const containerRefM = useRef<HTMLDivElement>(null);
  const cmRef = useRef<HTMLImageElement>(null);
  const cm1Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll('span');

      gsap.fromTo(
        words,
        { y: 20, opacity: 0 }, // Estado inicial: deslocado para baixo e invisível
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
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
    // Função para aplicar o efeito de parallax
    const applyParallaxEffect = (
      container: HTMLDivElement,
      image1: HTMLImageElement,
      image2: HTMLImageElement
    ) => {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left; // Posição X do mouse relativa ao contêiner
        const y = event.clientY - rect.top; // Posição Y do mouse relativa ao contêiner

        const xPercent = (x / rect.width - 0.5) * 2; // Normaliza para -1 a 1
        const yPercent = (y / rect.height - 0.5) * 2; // Normaliza para -1 a 1

        // Move a primeira imagem
        gsap.to(image1, {
          x: xPercent * 20, // Ajuste o valor para controlar a intensidade do movimento
          // y: yPercent * 20,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Move a segunda imagem
        gsap.to(image2, {
          x: xPercent * 30, // Ajuste o valor para controlar a intensidade do movimento
          y: yPercent * 30,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      // Adiciona o evento de movimento do mouse
      container.addEventListener('mousemove', handleMouseMove);

      // Remove o evento ao desmontar o componente
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    };

    // Aplica o efeito ao primeiro conjunto de elementos
    if (containerRef.current && c1Ref.current && chc1Ref.current) {
      applyParallaxEffect(containerRef.current, c1Ref.current, chc1Ref.current);
    }

    // Aplica o efeito ao segundo conjunto de elementos
    if (containerRefM.current && cmRef.current && cm1Ref.current) {
      applyParallaxEffect(containerRefM.current, cmRef.current, cm1Ref.current);
    }
  }, []);

  const text = `Rev up your rebel spirit and feed the adventure of life with SPYLT,
  where you’re one chug away from epic nostalgia and fearless fun.`;

  return (
    <>
      <main className="animate-scroll-up-out relative flex items-center justify-center h-screen bg-background">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/animation/main-video.webm" type="video/webm" />
        </video>
        <div className="absolute top-0 z-10 uppercase flex flex-col items-center w-full pt-30">
          <div className="font-antonio font-bold w-full p-1 text-dark-brown flex items-center justify-center h-full">
            {Array.from('freaking delicius').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-slide-up"
                style={{
                  animationDelay: `${1.5 + index * 0.1}s`,
                  opacity: 0,
                  fontSize: '8vw',
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div
            className="relative h-full z-10 -rotate-3 bg-middle-brown border-8 p-0 border-orange-100 flex items-center justify-center animate-reveal-horizontal"
            style={{ animationDelay: '1s', opacity: 0, top: '-2rem' }}
          >
            <h1
              className="text-orange-100 uppercase text- font-antonio text-center px-6 pb-5 origin-center"
              style={{ fontSize: '7vw' }}
            >
              protein + caffeine
            </h1>
          </div>
          <div className="w-lg animate-delay-1000 animate-fade-up animate-duration-500 mb-[clamp(1.6rem, 5vw, 4rem)]">
            <p className="text-center overflow-auto whitespace-pre-line normal-case text-dark-brown font-montserrat text-lg p-5">
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid every deliciously smooth chug.
            </p>
          </div>
          <div className="animate-delay-1000 animate-fade-up duration-500 bg-light-brown p-4 rounded-full">
            <a
              className="uppercase font-antonio font-bold px-8 py-4 text-dark-brown cursor-pointer"
              href="#"
            >
              Chug a Spylt
            </a>
          </div>
        </div>
      </main>
      <section className="animation-scroll-reveal h-screen z-10 pt-[7vw] bg-background-section">
        <div className="flex flex-col items-center h-full uppercase font-bold p-0 m-0 -tracking-[.25rem]">
          <h1 className="text-8xl">
            <span>stir up your</span>
          </h1>
          <h1 className="text-8xl">
            <span>fearless past and</span>
          </h1>
          <div className="animation-scroll-reveal-fade-in relative z-10 rotate-3 bg-light-brown border-10 m-0 pt-4 border-background-section flex items-center justify-center animate-reveal-horizontal">
            <div className="-mt-2 tracking-tight text-8xl text-background-section uppercase text-center px-2 pb-5 origin-center">
              fuel up
            </div>
          </div>
          <div className="-mt-12 text-8xl text-justify">
            <h1>
              <span>your future with every</span>
            </h1>
            <h1>
              <span>glup of perfect protein</span>
            </h1>
          </div>
          <div
            ref={textRef}
            className="mt-[3vw] tracking-normal w-lg text-lg text-center font-antonio font-light p-1 text-milk flex flex-wrap justify-center"
          >
            {text.split(' ').map((word, index) => (
              <span key={index} className="inline-block">
                {word}&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center -tracking-[.25rem] uppercase h-screen z-10 pt-[7vw] bg-milk">
        <div className="flex flex-row gap-24 justify-center ">
          <div className="flex flex-col items-center h-full font-bold p-0 m-0">
            <h1 className="text-dark-brown font-bold tracking-tight text-8xl">
              we have 6
            </h1>
            <div className="relative z-20 -rotate-3 bg-light-brown border-10 m-0 pt-4 border-milk">
              <div className="-mt-2 text-8xl font-bold text-milk uppercase text-center px-2 pb-5 origin-center">
                freaking
              </div>
            </div>
            <h1 className="text-dark-brown font-bold -mt-8 -tracking-[.25rem] text-8xl">
              delicious flavors
            </h1>
          </div>
          <div
            ref={containerRef}
            className="relative -rotate-8 w-[50rem] h-auto"
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
            className="relative -rotate-8 w-[50rem] h-auto"
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
        </div>
        <div className="w-[12rem] mt-[12rem] tracking-tight bg-light-brown p-4 rounded-full cursor-pointer">
          <a
            className="uppercase font-antonio font-bold px-8 py-4 text-dark-brown"
            href="#"
          >
            Shop in store
          </a>
        </div>
      </section>
    </>
  );
}
