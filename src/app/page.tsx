'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carrousel from './carrousel/page';
import Image from 'next/image';
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaArrowRight,
  FaPlay,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);
  const itStillRef = useRef<HTMLDivElement>(null);
  const bodyGoodRef = useRef<HTMLDivElement>(null);
  const milkRef = useRef<HTMLDivElement>(null);
  const unlockRef = useRef<HTMLDivElement>(null);
  const andMuchRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const playIconRef = useRef<HTMLDivElement>(null);
  const spinningTextRef = useRef<SVGSVGElement>(null);

  const textWhatsRef = useRef<HTMLDivElement>(null);
  const textEveryoneRef = useRef<HTMLDivElement>(null);
  const textTalkingRef = useRef<HTMLDivElement>(null);

  const chugResponsiblyRef = useRef<HTMLDivElement>(null);
  const sectionPhotos = useRef<HTMLDivElement>(null);

  const photo_1 = useRef<HTMLDivElement>(null);
  const photo_2 = useRef<HTMLDivElement>(null);
  const photo_3 = useRef<HTMLDivElement>(null);
  const photo_4 = useRef<HTMLDivElement>(null);
  const photo_5 = useRef<HTMLDivElement>(null);
  const photo_6 = useRef<HTMLDivElement>(null);
  const photo_7 = useRef<HTMLDivElement>(null);

  const sectionPhotoTexts = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (photo_1.current && photo_2.current && photo_3.current && photo_4.current && photo_5.current && photo_6.current && photo_7.current) {
      const photos = [
        photo_1.current,
        photo_2.current,
        photo_3.current,
        photo_4.current,
        photo_5.current,
        photo_6.current,
        photo_7.current,
      ];

      // Timeline para animar as fotos
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionPhotos.current,
          start: "top top",
          end: "+=2000", // Ajuste o valor para controlar o tempo total da animação
          scrub: true,
          pin: true, // Mantém a seção fixa enquanto as animações ocorrem
          markers: true, // Remova em produção
        },
      });

      // Adiciona animações para cada foto
      photos.forEach((photo) => {
        timeline.fromTo(
          photo,
          { y: "170%", x: "50%" },
          { y: "20%", x: "0%", duration: 0.5, ease: "power2.out" },
          `+=0.5` // Tempo entre as animações de cada foto
        );
      });
      timeline.to(
        photos,
        {
          y: "-100%", // Move as fotos para fora da tela para cima
          opacity: 0, // Reduz a opacidade para 0
          duration: 1.5, // Duração da animação de saída
          ease: "power2.inOut", // Transição suave
        },
        "+=0.5" // Adiciona um pequeno atraso após a última animação
      );
      timeline.set(sectionPhotos.current, { display: "none" });

    }
    if(textWhatsRef && textEveryoneRef && textTalkingRef) {
      const texts = [textWhatsRef.current, textEveryoneRef.current, textTalkingRef.current];
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionPhotoTexts.current,
          start: "top top",
          end: "+=1000", // Ajuste o valor para controlar o tempo total da animação
          scrub: true,
          pin: true, // Mantém a seção fixa enquanto as animações ocorrem
          markers: true, // Remova em produção
        },
      });

      texts.forEach((text) => {
        timeline.fromTo(
          text,
          { y: "0%" },
          { y: "0%", duration: 0.5, ease: "power2.out" },
          `+=0.5` // Tempo entre as animações de cada foto
        );
      });
    }
    if (spinningTextRef.current) {
      gsap.to(spinningTextRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: 'linear',
        transformOrigin: 'center center',
      });
    }

    if (andMuchRef.current) {
      const words = andMuchRef.current.querySelectorAll('span');
      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: andMuchRef.current,
            start: 'top 40%',
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

    if (unlockRef.current) {
      const words = unlockRef.current.querySelectorAll('span');
      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: unlockRef.current,
            start: 'top 40%',
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

    if (milkRef.current) {
      const words = milkRef.current.querySelectorAll('span');

      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: milkRef.current,
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

    if (bodyGoodRef.current) {
      gsap.fromTo(
        bodyGoodRef.current,
        { clipPath: 'inset(0 50% 0 50%)', opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bodyGoodRef.current,
            start: 'top 40%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
            onEnter: () => {
              gsap.fromTo(
                bodyGoodRef.current,
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
                bodyGoodRef.current,
                { clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 },
                {}
              );
            },
          },
        }
      );
    }

    if (itStillRef.current) {
      const letters = itStillRef.current.querySelectorAll('span');
      gsap.fromTo(
        letters,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: itStillRef.current,
            start: 'top 60%',
            end: 'booton 20%',
            toggleActions: 'play none none none',
            onEnter: () => {
              gsap.fromTo(
                letters,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.2,
                  stagger: 0.1,
                  ease: 'power2.out',
                }
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(letters, { opacity: 0 }, {});
            },
          },
        }
      );
    }
    if (textRef.current) {
      const words = textRef.current.querySelectorAll('span');

      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
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

    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { clipPath: 'circle(100px at 50% 15%)' },
        {
          clipPath: 'circle(150% at 50% 50%)',
          y: '5%',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 50%',
            end: '+=3000',
            scrub: 2,
            pin: true,
          },
        }
      );
    }

    if (textWhatsRef.current) {
      gsap.fromTo(
        textWhatsRef.current,
        { x: 0, y: 0 },
        {
          x: 1000,
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: textWhatsRef.current,
            start: 'top 30%',
            end: '+=6000',
            scrub: true,
          },
        }
      );
    }
    if (textEveryoneRef.current) {
      gsap.fromTo(
        textEveryoneRef.current,
        { x: 0, y: 0 },
        {
          x: 1000,
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: textEveryoneRef.current,
            start: 'top 30%',
            end: '+=10000',
            scrub: true,
          },
        }
      );
    }
    if (textTalkingRef.current) {
      gsap.fromTo(
        textTalkingRef.current,
        { x: 0, y: 0 },
        {
          x: -1000,
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: textTalkingRef.current,
            start: 'top 30%',
            end: '+=10000',
            scrub: true,
          },
        }
      );
    }
    if (chugResponsiblyRef.current) {
      const words = chugResponsiblyRef.current.querySelectorAll('span');

      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: chugResponsiblyRef.current,
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

    if (playIconRef.current && videoRef.current) {
      gsap.fromTo(
        playIconRef.current,
        { y: 0 },
        {
          y: '50vh',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 50%',
            end: '+=3000',
            scrub: true,
            // markers: true,
          },
        }
      );
    }
  }, []);

  const text = `Rev up your rebel spirit and feed the adventure of life with SPYLT,
  where you’re one chug away from epic nostalgia and fearless fun.`;
  const textItStill = 'it still does';
  const textMilkRef = `Milk contains a wide array of nutrients, including vitamins, minerals, and protein, and this is lactose free.`;
  const textUnlockRef = `Unlock the Advantages: Explore the Key Benefits of Choosing SPYLT`;
  const textAndMuchRef = `And much more`;
  const textChugreResonsablyRef = `#chugresponsibly`;

  return (
    <>
      <main className="animate-scroll-up-out relative flex items-center justify-center h-screen bg-background">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
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
      <Carrousel />
      <div
        className="relative w-full h-[110vh] bg-[#dcccb0]"
        style={{
          backgroundImage: "url('/backgrounds/footer_background.webp')",
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          className="w-full h-auto"
          src="/backgrounds/cream.svg"
          alt="Cream background"
          width={800}
          height={600}
          priority
        />
        <div className="flex flex-row justify-between p-8">
          <div>
            <div
              ref={itStillRef}
              className="uppercase font-bold tracking-tight text-dark-brown text-9xl"
            >
              {textItStill.split('').map((letter, index) => (
                <span key={index} className="inline-block">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
            <div
              ref={bodyGoodRef}
              className="w-140 -mt-4 -rotate-3 bg-middle-brown border-8 border-[#dcccb0] p-4"
            >
              <div className="uppercase text-9xl pb-4 text-[#dcccb0]">
                body good
              </div>
            </div>
          </div>
          <div className="w-70">
            <div
              ref={milkRef}
              className="font-light text-dark-brown text-right text-[1.2rem]"
            >
              {textMilkRef.split(' ').map((word, index) => (
                <span key={index} className="inline-block">
                  {word}&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[80vw] h-50 bg-[#fdebd2] border-8 border-[#e8ddca] rounded-full">
          <div className="grid grid-cols-5 divide-x-5 p-5 items-center justify-around">
            <div className="flex flex-col justify-center border-r-1 items-start ml-8 p-4 text-middle-brown">
              <span className="capitalize text-md font-light text-center">
                potasuim
              </span>
              <span className="text-sm font-light mt-5">up to</span>
              <span className="text-3xl font-bold">245mg</span>
            </div>
            <div className="flex flex-col justify-center border-r-1  items-start ml-8 p-4 text-middle-brown">
              <span className="capitalize text-md font-light text-center">
                calcium
              </span>
              <span className="text-sm font-light mt-5">up to</span>
              <span className="text-3xl font-bold">500mg</span>
            </div>
            <div className="flex flex-col justify-center border-r-1 items-start ml-8 p-4 text-middle-brown">
              <span className="capitalize text-md font-light text-center">
                Vitamina A
              </span>
              <span className="text-sm font-light mt-5">up to</span>
              <span className="text-3xl font-bold">176mg</span>
            </div>
            <div className="flex flex-col justify-center border-r-1 items-start ml-8 p-4 text-middle-brown">
              <span className="capitalize text-md font-light text-center">
                vitamina d
              </span>
              <span className="text-sm font-light mt-5">up to</span>
              <span className="text-3xl font-bold">5mcg</span>
            </div>
            <div className="flex flex-col justify-center items-start ml-8 p-4 text-middle-brown">
              <span className="capitalize text-md font-light text-center">
                iron
              </span>
              <span className="text-sm font-light mt-5">up to</span>
              <span className="text-3xl font-bold">1mg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-screen bg-[#222123] p-5">
        <div
          ref={unlockRef}
          className="w-70 text-xl text-milk text-center pt-14 font-light"
        >
          {textUnlockRef.split(' ').map((word, index) => (
            <span key={index} className="inline-block">
              {word}&nbsp;
            </span>
          ))}
        </div>
        <div className="animate-scroll-reveal-fade-in-out relative border-[#222123] rotate-3 bg-light-brown border-8 p-4">
          <div className="uppercase font-bold text-milk pb-4 text-center text-9xl">
            shelf stable
          </div>
        </div>
        <div className="animate-scroll-reveal-fade-in-out border-[#222123] bg-milk border-8 p-4">
          <div className="uppercase font-bold text-[#222123] pb-4 text-center text-9xl">
            protein + caffeine
          </div>
        </div>
        <div className="animate-scroll-reveal-fade-in-out border-[#222123] rotate-3 bg-red border-8 p-4">
          <div className="uppercase font-bold text-milk pb-4 text-center text-9xl">
            infinitely recyclable
          </div>
        </div>
        <div className="animate-scroll-reveal-fade-in-out border-[#222123] bg-[#fed775] border-8 p-4">
          <div className="uppercase font-bold text-[#222123] pb-4 text-center text-9xl">
            lactose free
          </div>
        </div>
        <div
          ref={andMuchRef}
          className="text-milk text-center text-md font-light"
        >
          {textAndMuchRef.split(' ').map((word, index) => (
            <span key={index} className="inline-block">
              {word}&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[110vh] flex items-center justify-center hover:cursor-pointer">
        <div
          ref={playIconRef}
          className="absolute items-center justify-center top-21 w-[150px] h-[150px] rounded-full backdrop-blur-md z-10 flex"
        >
          {/* Texto giratório ao redor do círculo */}
          <svg
            ref={spinningTextRef}
            className="absolute w-full h-full overflow-visible"
            viewBox="0 0 1200 1200"
          >
            <defs>
              <path
                id="circlePath"
                d="M600,600 m-500,0 a500,500 0 1,1 1000,0 a500,500 0 1,1 -1000,0"
              />
            </defs>
            <text fill="white" fontSize="105" fontWeight="bold">
              {' '}
              {/* Ajusta o tamanho da fonte */}
              <textPath href="#circlePath" startOffset="5%">
                {/* Centraliza o texto */}• PLAY VIDEO • PLAY VIDEO • PLAY VIDEO
                • PLAY VIDEO • PLAY VIDEO • PLAY VIDEO
              </textPath>
            </text>
          </svg>

          {/* Ícone de Play no centro */}
          <div className="absolute w-[50px] h-[50px] rounded-full bg-milk flex items-center justify-center">
            <FaPlay className="text-[#222123] text-2xl" />
          </div>
        </div>
        <div
          ref={videoRef}
          className="flex items-center justify-center top-0 left-0 w-full h-full"
          style={{
            clipPath: 'circle(100px at 50% 15%)',
          }}
        >
          <video
            className="w-full h-full transform -translate-y-1/2 object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/animation/background_video.mp4" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="relative z-20 w-full h-[500vh] bg-milk flex items-center justify-center">
        <div className="absolute top-0">
          <div ref={sectionPhotoTexts}>
            <div ref={textWhatsRef} className="flex text-center h-90 uppercase font-bold text-black text-[20vw]">
              {`what's`}
            </div>
            <div
              ref={textEveryoneRef}
              className="flex text-center h-90 uppercase font-bold text-light-brown text-[20vw]"
            >
              everyone
            </div>
            <div ref={textTalkingRef} className="flex text-center h-90 uppercase font-bold text-black text-[20vw] z-10">
              talking
            </div>
          </div>
          <div ref={sectionPhotos} className="flex p-12 justify-around w-screen h-screen">
            <div ref={photo_1} className="w-140 h-130  -rotate-6 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div ref={photo_2} className="w-140 h-130  rotate-4 -ml-16 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div ref={photo_3} className="w-140 h-130  -rotate-7 -ml-16 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-3.mp4" type="video/mp4" />
              </video>
            </div>
            <div ref={photo_4} className="w-140 h-130  rotate-5 -ml-16 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-4.mp4" type="video/mp4" />
              </video>
            </div>
            <div ref={photo_5} className="w-140 h-130  -rotate-5 -ml-16 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-5.mp4" type="video/mp4" />
              </video>
            </div>
            <div ref={photo_6} className="w-140 h-130  rotate-6 -ml-16 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-6.mp4" type="video/mp4" />
              </video>
            </div>
            <div ref={photo_7} className="w-140 h-130  -rotate-3 -ml-16 border-8 border-dark-brown bg-milk rounded-2xl ">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/animation/video-7.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[110vh] bg-black"
        style={{
          backgroundImage: "url('/backgrounds/splyt_caffeinated.webp')",
          backgroundSize: 'contain',
          backgroundPosition: 'right calc(100% + 150px)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div>
          <Image
            className="w-full h-auto"
            src="/backgrounds/cream.svg"
            alt="Cream background"
            width={800}
            height={600}
            priority
          />
        </div>

        <div
          ref={chugResponsiblyRef}
          className="uppercase text-9xl text-milk font-bold text-center p-5"
        >
          {textChugreResonsablyRef.split('').map((letter, index) => (
            <span key={index} className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        <div className="flex flex-row items-center mt-15 justify-center gap-8">
          <div className="flex flex-row items-center gap-10 justify-center">
            <div className="border-[1px] border-milk rounded-full p-8">
              <FaYoutube className="text-milk text-5xl cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <div className="border-[1px] border-milk rounded-full p-8">
              <FaInstagram className="text-milk text-5xl cursor-pointer hover:scale-110 transition-transform" />
            </div>

            <div className="border-[1px] border-milk rounded-full p-8">
              <FaTiktok className="text-milk text-5xl cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-32 pl-12">
            <div className="font-light hover:cursor-pointer hover:text-middle-brown tracking-wider">
              SPLYT Flavors
            </div>
            <div className="flex flex-col font-light tracking-wider">
              <span className="hover:cursor-pointer hover:text-middle-brown">
                Chug Club
              </span>
              <span className="hover:cursor-pointer hover:text-middle-brown">
                Student Marketing
              </span>
              <span className="hover:cursor-pointer hover:text-middle-brown">
                Dairy Dealers
              </span>
            </div>
            <div className="flex flex-col font-light tracking-wider">
              <span className="hover:cursor-pointer hover:text-middle-brown">
                Company
              </span>
              <span className="hover:cursor-pointer hover:text-middle-brown">
                Contacts
              </span>
              <span className="hover:cursor-pointer hover:text-middle-brown">
                Tasty Talk
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 pr-8">
            <div className="font-light w-[30vw] text-right text-2xl text-milk">
              <span>
                Get Exclusive Early Access and Stay Informed About Product
                Update, Events, an More!
              </span>
              <div className="relative w-[30vw]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-120 bg-transparent mt-12 text-milk text-5xl pb-5 font-bold tracking-tight placeholder-milk border-b-2 border-milk focus:outline-none focus:border-milk"
                />
                <FaArrowRight className="absolute mt-2 right-0 top-1/2 transform -translate-y-1/2 text-milk text-5xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
