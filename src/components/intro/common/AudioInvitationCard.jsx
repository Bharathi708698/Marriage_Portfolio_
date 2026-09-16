import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import microphone from "../../../assets/audio/microphone.png";
import playButton from "../../../assets/audio/play_button.png";
import waveform from "../../../assets/audio/waveform.png";

import { PrimaryButton } from "../../shared";

function AudioInvitationCard({
  audio,
  title,
  buttonText,
  continueText,
  onComplete,
  onContinue,
}) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const player = audioRef.current;

    if (!player) return;

    const handleEnd = () => {
      setPlaying(false);
      setCompleted(true);

      if (onComplete) {
        onComplete();
      }
    };

    player.addEventListener("ended", handleEnd);

    return () => {
      player.removeEventListener("ended", handleEnd);
    };
  }, [onComplete]);

  const handlePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    audioRef.current.play();

    setPlaying(true);
  };

  return (
    <>
      <audio ref={audioRef} preload="auto" src={audio} />

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          mt-10

          mx-auto

          max-w-md

          rounded-[2rem]

          border
          border-yellow-400/20

          bg-black/30

          backdrop-blur-xl

          px-8
          py-8
        "
      >
        {/* Microphone */}

        <motion.img
          src={microphone}
          alt=""
          animate={
            playing
              ? {
                  scale: [1, 1.08, 1],
                  rotate: [0, -2, 2, 0],
                }
              : {
                  scale: [1, 1.03, 1],
                }
          }
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="
            mx-auto

            w-20
            md:w-24

            drop-shadow-[0_0_30px_rgba(255,215,0,.45)]
          "
        />

        {/* Title */}

        <h3
          className="
            mt-6

            text-center

            text-yellow-300

            text-lg
            md:text-xl

            font-semibold
          "
        >
          {title}
        </h3>

        {/* Wave */}

        <motion.img
          src={waveform}
          alt=""
          animate={
            playing
              ? {
                  opacity: [0.4, 1, 0.4],
                  scaleX: [1, 1.05, 1],
                }
              : {
                  opacity: 0.35,
                }
          }
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="
            mt-5

            mx-auto

            w-52
            md:w-64
          "
        />

        {/* Play */}

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            scale: 1.05,
          }}
          onClick={handlePlay}
          className="
            mt-6

            flex

            mx-auto

            items-center
            justify-center
          "
        >
          <motion.img
            src={playButton}
            alt=""
            animate={
              playing
                ? {
                    rotate: 360,
                  }
                : {}
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              w-16
              md:w-20
            "
          />
        </motion.button>

        {/* Status */}

        <motion.p
          key={playing ? "playing" : "idle"}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="
            mt-4

            text-center

            text-white/80

            text-sm
          "
        >
          {playing ? "♪ Playing Our Voice..." : buttonText}
        </motion.p>

       
      </motion.div>
    </>
  );
}

export default AudioInvitationCard;
