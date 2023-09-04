import { motion } from "framer-motion";
import { styles } from "../styles";
import { BrowserView, MobileView } from "react-device-detect";
import { ComputersCanvas } from "./canvas";
import { socials } from "../constants";
import { pc } from "../assets";

const Hero = () => {
  return (
    <section className="overflow-hidden relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00e7a6]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00e7a6]" />
        </div>

        <div className="z-[2]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#00e7a6]">William</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop graphic designs, user interfaces{" "}
            <br className="sm:block hidden" /> and web applications.
          </p>

          <div className="flex flex-row mt-5">
            {socials.map((social) => (
              <div
                key={`${social.id}`}
                onClick={() => window.open(`${social.url}`, "__blank")}
                className="bg-gradient-to-t from-[#0d3c36] to-[#051614] border-2 border-[#0fbe84] w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer mr-5"
              >
                <img
                  src={social.img}
                  alt={social.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>

      <BrowserView className="relative w-full h-screen mx-auto">
        <ComputersCanvas />
      </BrowserView>
      <MobileView>
        <img
          className="absolute xl:top-[130px] xl:scale-[80%] lg:bottom-[270px] md:bottom-[120px] sm:bottom-[160px] xs:bottom-[100px] bottom-20 scale-150 mx-auto flex justify-center items-center"
          src={pc}
          alt="PC Image"
        />
      </MobileView>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
