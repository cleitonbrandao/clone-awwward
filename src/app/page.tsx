export default function Home() {
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
        <h1 className="text-8xl"><span>stir up your</span></h1>
        <h1 className="text-8xl"><span>fearless past and</span></h1>
          <div className="animation-scroll-reveal-fade-in relative z-10 rotate-3 bg-light-brown border-10 m-0 pt-4 border-background-section flex items-center justify-center animate-reveal-horizontal">
            <div className="-mt-2 tracking-tight text-8xl text-background-section uppercase text-center px-2 pb-5 origin-center">fuel up</div>
          </div>
        <div className="-mt-12 text-8xl text-justify"><h1><span>your future with every</span></h1><h1><span>glup of perfect protein</span></h1></div>
      </div>
    </section>
    <div className="animation-scroll-reveal h-screen z-10 pt-[7vw] bg-dark-brown">
</div>
    </>
  );
}
