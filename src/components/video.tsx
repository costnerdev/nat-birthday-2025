import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react"
import { Pause, Play } from "lucide-react";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isPause, setIsPause] = useState<boolean>(false)
 
  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isClicked) {
      video.muted = false;
      setIsClicked(true);
    }

    setIsPause(false);
    video.play();
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsPause(true);
    video.pause();
  };

  const handleVideo = () => {
    if (!videoRef.current) return;

    isPause ? playVideo() : pauseVideo();
  };

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.pause()  
  }, [])

  const videoMotionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 2,
        delay: 10, 
        ease: "easeOut",
      } 
    },
  }

  return (
    <motion.div variants={videoMotionVariants} initial="hidden" animate="visible" className="flex absolute top-1/2 left-1/2 -translate-1/2 w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full h-full p-[1rem] md:p-[5rem] cursor-pointer">
      {/* <h2 className="text-lg font-bold text-white">01. A Weekend away in Hilston, Australia</h2> */}
        <video
          className="h-full w-full"
          id="natVideo"
          controls={false}
          preload="auto"
          autoPlay
          playsInline
          muted
          webkit-playsinline="true"
          ref={videoRef}
          onClick={handleVideo}
        >
          <source src="/nat-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        { !isClicked && (
          <div>
            <div className="z-10 absolute w-full h-full top-0 left-0 backdrop-blur-sm transition-all duration-300"></div>
              <span className="w-full h-full flex justify-center items-center z-20 absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer pointer-events-auto duration-300 transition-all play-btn" onClick={playVideo}>
                <Play size={80} stroke="#FFF" absoluteStrokeWidth />
              </span>
          </div>
        )}

        {
          isPause && (
              <span className="flex z-20 absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer pointer-events-auto duration-300 transition-all play-btn" onClick={playVideo}>
                <Pause size={80} stroke="#FFF" absoluteStrokeWidth />
              </span>
          )
        }
      </div>
    </motion.div>
  );
};

export default Video;