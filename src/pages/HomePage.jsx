import "../styles/homepage.css";
import SocialLinks from "../components/SocialLinks";
import pic from '../assets/pic-2-no-bg.png'

const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="hpbgxui flex flex-col md:flex-row items-center justify-center overflow-y-hidden
                      gap-10 md:gap-20 
                      px-6 md:px-16 
                      py-12 md:py-2
                      h-[90vh]"
      >
        {/* Circle */}
        <div
          className="bgbox 
                        w-52 h-52 
                        sm:w-80 sm:h-80 
                        md:w-130 md:h-130 md:-translate-y-10 md:-translate-x-30 
                        rounded-full
                        flex
                        items-end
                        justify-center
                        shrink-0
                        overflow-hidden"
        ><img className=" scale-104 md:h-0 -translate-x-3 translate-y-15" src={pic} alt="" />
        </div>
        <img className="absolute h-0 md:h-[90%] z-10 left-30 bottom-0" src={pic} alt="" />

        {/* Text Content */}
        <div
          className="flex flex-col gap-6 md:gap-10 
                        text-center md:text-left 
                        max-w-xl"
        >
          <div className="flex flex-col gap-6 md:gap-14 md:-translate-x-20">
            <h4 className="font-semibold text-base md:text-xl md:-translate-x-5">Hey, I'm</h4>

            <h1 className="text-[50px] md:text-7xl font-bold leading-tight">
              SHUBH
            </h1>

            <h2 className="text-[40px] md:text-6xl font-light md:ml-10 md:translate-x-16">
              Dewangan
            </h2>
          </div>

          <p className="text-[15px] h-auto md:text-base leading-relaxed text-center md:translate-x-5">
            I’m a student who finds interest and creative thinking in both
            simple and complicated things — that’s how I learned problem
            solving. I love to paint whenever I see something interesting around
            me; it’s an easy way for me to find peace. I also love to code and
            learn something new every time.
          </p>
        </div>
      </div>

      <SocialLinks text="Follow me through on:" />
    </div>
  );
};

export default HomePage;
