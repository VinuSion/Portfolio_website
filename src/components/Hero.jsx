import { motion } from 'framer-motion'
import { styles } from '../styles'
// import { BrowserView, MobileView } from 'react-device-detect'
// import { ComputersCanvas } from './canvas'
import { socials, cvLinks } from '../constants'
import { pc, laptop } from '../assets'

const Hero = () => {
  return (
    <section className="overflow-hidden relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} ml-0 lg:ml-10 absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="hidden xs:flex flex-col justify-center items-center mt-5 z-[2]">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 md:h-80 h-56 bg-gradient-to-b from-accent" />
        </div>

        <div className="z-[2] backdrop-blur-[8px] bg-primary/50 p-5 md:p-8 rounded-2xl border-2 border-accent/50">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-accent">William</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I make captivating designs, engaging UIs,{' '}
            <br className="md:block hidden" />
            and breathe life into web applications.
          </p>

          <div className="flex flex-row mt-5">
            {socials.map((social) => (
              <div
                key={`${social.id}`}
                onClick={() => window.open(`${social.url}`, '__blank')}
                className="transition-all duration-[450] bg-gradient-to-t from-g1 via-g2 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 border-2 border-border w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer mr-5"
              >
                <img
                  src={social.img}
                  alt={social.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ))}
            <a
              className="transition-all duration-[450] bg-gradient-to-t from-g1 via-g2 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 border-2 border-border h-[50px] rounded-full w-fit px-4 flex flex-row gap-x-2 justify-center items-center cursor-pointer"
              href={cvLinks.english}
              download="william_gomez_cv.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
              <span className="hidden sm:block font-bold">Download CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* <BrowserView className="relative w-full h-screen mx-auto">
        <ComputersCanvas />
      </BrowserView>
      <MobileView> */}
      <img
        className="hidden w-0 h-0 md:flex md:w-auto md:h-auto absolute xl:w-3/4 left-1/2 -translate-x-1/2 bottom-[20%] sm:bottom-[10%] md:bottom-[5%] lg:bottom-0 mx-auto"
        src={pc}
        alt="Desktop PC Image"
      />
      <img
        className="md:hidden md:w-0 md:h-0 absolute sm:w-3/4 left-1/2 -translate-x-1/2 bottom-[15%] sm:bottom-[10%] md:bottom-[5%] lg:bottom-0 mx-auto"
        src={laptop}
        alt="Mobile Laptop Image"
      />
      {/* </MobileView> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="group inline-block">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 group-hover:border-white transition-colors duration-200">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 group-hover:bg-white transition-colors duration-200"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
