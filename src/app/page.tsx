export default function Home() {
  return (
    <main className="relative flex items-center justify-center h-screen bg-background">
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
        <div className="w-lg animate-delay-1000 animate-fade-up animate-duration-500 mb-20">
          <p className="text-center overflow-auto whitespace-pre-line normal-case text-dark-brown font-montserrat text-lg p-5">
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid every deliciously smooth chug.
          </p>
        </div>
        <div className="bg-light-brown p-4 rounded-full">
          <a className="upercase font-antonio font-bold p-8 py-4 text-dark-brown">
            ghug a spylt
          </a>
        </div>
      </div>
    </main>
  );
}
