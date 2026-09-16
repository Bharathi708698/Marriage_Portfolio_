import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCompass,
  FaCalendarAlt,
  FaGlassCheers,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  PrimaryButton,
} from "../shared";

function ReceptionScene({ onNext }) {
  const { language } = useLanguage();
  const text = translations[language].reception;

  const handleNavigate = () => {
    window.open(text.mapUrl, "_blank");
  };

  const handleCalendar = () => {
    const googleCalendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(text.calendarTitle)}` +
      `&dates=20270210T180000/20270210T210000` +
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

        {/* Celebration Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 shadow-[0_0_30px_rgba(255,193,7,0.2)]"
        >
          <FaGlassCheers className="text-xl" />
        </motion.div>

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.45em] text-yellow-500/80 md:text-sm"
        >
          {text.badge}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-3 text-center font-heading text-4xl font-semibold text-yellow-300 md:text-6xl"
        >
          {text.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="my-5 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
          transition={{ duration: 1, delay: 1 }}
          className="relative mt-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-yellow-500/30 bg-black/50 p-5 shadow-[0_0_50px_rgba(255,193,7,0.12)] backdrop-blur-md md:p-7"
        >
          {/* Premium Map */}
          <div className="relative h-64 overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black md:h-72">

            {/* Map Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(rgba(255,215,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Decorative Roads */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="absolute left-[-10%] top-[38%] h-px w-[120%] rotate-12 bg-yellow-500/20"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="absolute left-[10%] top-[65%] h-px w-[90%] -rotate-12 bg-yellow-500/20"
            />

            {/* Animated Route */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "48%", opacity: 1 }}
              transition={{
                duration: 1.8,
                delay: 1.4,
                ease: "easeInOut",
              }}
              className="absolute left-[22%] top-[51%] h-[2px] rotate-[-10deg] origin-left bg-yellow-400 shadow-[0_0_12px_rgba(255,215,0,0.9)]"
            />

            {/* Mahal Pin */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="absolute left-[20%] top-[56%]"
            >
              <div className="relative">
                <span className="absolute -inset-3 animate-ping rounded-full bg-yellow-400/20" />

                <FaMapMarkerAlt className="relative text-3xl text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
              </div>

              <p className="mt-1 whitespace-nowrap text-xs text-yellow-300">
                {text.venue}
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

            {/* Floating Glow */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 right-10 h-20 w-20 rounded-full bg-yellow-400/10 blur-3xl"
            />
          </div>

          {/* Venue Details */}
          <div className="mt-5 text-center">
            <h2 className="font-heading text-xl text-yellow-300 md:text-2xl">
              {text.venue}
            </h2>

            <p className="mt-2 text-sm text-white/60">
              {text.location}
            </p>
          </div>

          {/* Actions */}
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
          transition={{ delay: 2.4, duration: 0.8 }}
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

export default ReceptionScene;