import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCompass, FaCalendarAlt } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  PrimaryButton,
} from "../shared";
import { translations } from "../../data/translations";

function MarriageScene({ onNext }) {
  const { language } = useLanguage();
  const text = translations[language].marriage;

  const handleNavigate = () => {
    window.open(text.mapUrl, "_blank");
  };

  const handleCalendar = () => {
    const googleCalendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(text.calendarTitle)}` +
      `&dates=20270210T043000/20270210T060000` +
      `&details=${encodeURIComponent(text.calendarDetails)}` +
      `&location=${encodeURIComponent(text.location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <SceneContainer>
      <BackgroundGlow />
      <BackgroundStars />

      <BrandHeader
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center px-5 py-10 pt-24 md:px-10 md:pt-28">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-xs uppercase tracking-[0.45em] text-yellow-500/80 md:text-sm"
        >
          {text.badge}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center font-heading text-4xl font-semibold text-yellow-300 md:text-6xl"
        >
          {text.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-heading text-3xl text-white md:text-5xl">
            {text.date}
          </p>

          <p className="mt-2 text-sm tracking-[0.25em] text-yellow-400 md:text-base">
            {text.time}
          </p>
        </motion.div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative mt-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-yellow-500/30 bg-black/50 p-5 shadow-[0_0_50px_rgba(255,193,7,0.12)] backdrop-blur-md md:p-7"
        >
          {/* Fake Luxury Map */}
          <div className="relative h-64 overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black md:h-72">

            {/* Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(rgba(255,215,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Animated Route */}
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: 1.3,
                ease: "easeInOut",
              }}
              className="absolute left-[25%] top-[50%] h-[2px] w-[50%] rotate-[-12deg] bg-yellow-400 shadow-[0_0_12px_rgba(255,215,0,0.8)]"
            />

            {/* Temple Pin */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute left-[20%] top-[57%]"
            >
              <div className="relative">
                <span className="absolute -inset-3 animate-ping rounded-full bg-yellow-400/20" />
                <FaMapMarkerAlt className="relative text-3xl text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
              </div>

              <p className="mt-1 whitespace-nowrap text-xs text-yellow-300">
                {text.temple}
              </p>
            </motion.div>

            {/* Compass */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute right-6 top-5"
            >
              <FaCompass className="text-4xl text-yellow-400/80" />
            </motion.div>
          </div>

          {/* Location Details */}
          <div className="mt-5 text-center">
            <h2 className="font-heading text-xl text-yellow-300 md:text-2xl">
              {text.temple}
            </h2>

            <p className="mt-2 text-sm text-white/60">
              {text.location}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton
              title={text.navigate}
              icon={<FaMapMarkerAlt />}
              onClick={handleNavigate}
              className="w-full sm:w-auto"
            />

            <PrimaryButton
              title={text.calendar}
              icon={<FaCalendarAlt />}
              variant="outline"
              onClick={handleCalendar}
              className="w-full sm:w-auto"
            />
          </div>
        </motion.div>

        {/* Continue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="mt-8"
        >
          <PrimaryButton
            title={text.continue}
            onClick={onNext}
            className="min-w-[220px]"
          />
        </motion.div>
      </div>
    </SceneContainer>
  );
}

export default MarriageScene;