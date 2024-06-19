const hero = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-cover bg-repeat bg-center flex-col justify-center px-5 lg:px-[72px]"
    >
      <div className="h-screen max-w-[500px] flex flex-col justify-center text-black gap-y-6 leading-normal">
        <h1 className="text-sky-400 font-bold text-[25px]">
          GET A BETTER ADVICE
        </h1>
        <h2 className="font-bold text-5xl">
          Let's Find a Best Doctor Around The World
        </h2>
        <p className="text-text max-w-[500px]">
          We develop a website to improve your health better and get a life you
          want to life
        </p>
        <div>
          <a
            href="mailto:myemail@gmail.com"
            className="px-6 lg:px-8 py-2 bg-black text-white outline-none rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
