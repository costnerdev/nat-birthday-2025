import { AnimatePresence, motion, type Variants } from "motion/react"

const Preloader = () => {
  const linesOne = 'お誕生日おめでとう Natalie.'
  const linesTwo = 'Here is a little gift for you.'

  const sentenceOne: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [1, null, 0],
      transition: {
        duration: 4,
        times: [0, 0.8, 1],
        delay: 1,
        staggerChildren: 0.08,
      },
      transitionEnd: {
        opacity: 0
      }
    }
  }
  
  const sentenceTwo: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [1, null, 0],
      transition: {
        duration: 4,
        times: [0, 0.9, 1],
        delay: 5, 
        delayChildren: 5,
        staggerChildren: 0.08,
      },
      transitionEnd: {
        opacity: 0
      }
    }
  }

  const letter: Variants = {
    hidden: { opacity:0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <div className="bg-black w-screen h-screen text-white text-center">
      <div className="flex justify-center items-center text-lg md:text-xl w-full h-full">
        <motion.h3 variants={sentenceOne} initial='hidden' animate='visible' className="absolute top-1/2 left-1/2 -translate-1/2">
          {
            linesOne.split("").map((char, index) => (
              <motion.span key={`letterone-${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))
          }
        </motion.h3>

        <motion.h3 variants={sentenceTwo} initial='hidden' animate='visible' className="absolute top-1/2 left-1/2 -translate-1/2">
          {
            linesTwo.split("").map((char, index) => (
              <motion.span key={`lettertwo-${char}-${index}`} variants={letter}>
                {char}
              </motion.span>
            ))
          }
        </motion.h3>
      </div>
    </div>

  )
}

export default Preloader