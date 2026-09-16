import { motion } from "framer-motion";

import {
  SceneContainer,
  BackgroundGlow,
  BackgroundStars,
  BrandHeader,
  SparkleTrail,
  PrimaryButton,
} from "../shared";

import { translations } from "../../data/translations";
import { useLanguage } from "../../context/LanguageContext";

function EngagementScene({ onNext }) {
  const { language } = useLanguage();

  const text = translations[language].engagement;

  // --------------------------------------------------
  // ENGAGEMENT DETAILS
  // --------------------------------------------------

  const engagementDate = "2027-01-20";
  const engagementStartTime = "18:00";
  const engagementEndTime = "21:00";

  const venue = "Engagement Venue";
  const location = "Chinnasalem, Tamil Nadu";

  // --------------------------------------------------
  // Google Calendar
  // --------------------------------------------------

  const handleGoogleCalendar = () => {
    const start = "20270120T180000";
    const end = "20270120T210000";

    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      `&text=${encodeURIComponent(text.calendarTitle)}` +
      `&dates=${start}/${end}` +
      `&details=${encodeURIComponent(text.calendarDescription)}` +
      `&location=${encodeURIComponent(location)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // --------------------------------------------------
  // Apple Calendar / ICS
  // --------------------------------------------------

  const handleAppleCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EverAfter//Engagement//EN
BEGIN:VEVENT
UID:engagement-2027@everafter
DTSTAMP:20270101T000000Z
DTSTART:20270120T180000
DTEND:20270120T210000
SUMMARY:${text.calendarTitle}
DESCRIPTION:${text.calendarDescription}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "engagement.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <SceneContainer>
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <BackgroundGlow />

      <BackgroundStars />

      <SparkleTrail count={14} />

      {/* ==========================================
          HEADER
      ========================================== */}

      <BrandHeader
        logoProps={{
          size: 90,
          glow: true,
          shine: true,
        }}
      />

      {/* ==========================================
          MAIN
      ========================================== */}

      <div
        className="
          relative
          z-20

          flex
          flex-1
          flex-col

          items-center
          justify-center

          w-full

          overflow-y-auto

          px-6
          pt-24
          pb-10

          md:px-10
        "
      >
        {/* ==========================================
            TOP LABEL
        ========================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            uppercase

            tracking-[0.45em]

            text-yellow-400

            text-xs
            md:text-sm

            text-center
          "
        >
          {text.badge}
        </motion.p>

        {/* ==========================================
            TITLE
        ========================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mt-4

            text-center

            text-white

            text-3xl
            md:text-5xl

            font-bold
          "
        >
          {text.title}
        </motion.h1>

        {/* ==========================================
            GOLD DIVIDER
        ========================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="
            mt-5

            h-[2px]
            w-36

            rounded-full

            bg-gradient-to-r
            from-transparent
            via-yellow-400
            to-transparent
          "
        />

        {/* ==========================================
            RING
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="
            mt-8

            flex
            items-center
            justify-center

            w-24
            h-24

            rounded-full

            border
            border-yellow-400/30

            bg-yellow-400/10

            shadow-[0_0_50px_rgba(255,215,0,.18)]

            backdrop-blur-xl
          "
        >
          <motion.span
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-4xl"
          >
            💍
          </motion.span>
        </motion.div>

        {/* ==========================================
            DATE CARD
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            mt-8

            w-full
            max-w-xl

            rounded-[2rem]

            border
            border-yellow-400/20

            bg-black/35

            backdrop-blur-xl

            p-7
            md:p-9

            text-center

            shadow-[0_0_60px_rgba(255,215,0,.08)]
          "
        >
          {/* Date */}

          <p
            className="
              text-yellow-300

              text-3xl
              md:text-4xl

              font-semibold

              tracking-wide
            "
          >
            {text.date}
          </p>

          {/* Time */}

          <p
            className="
              mt-3

              text-white/90

              text-base
              md:text-lg
            "
          >
            {text.time}
          </p>

          {/* Venue */}

          <p
            className="
              mt-2

              text-white/70

              text-sm
              md:text-base
            "
          >
            {venue}
          </p>

          {/* Location */}

          <p
            className="
              mt-1

              text-white/50

              text-xs
              md:text-sm
            "
          >
            {location}
          </p>

          {/* ========================================
              SAVE DATE
          ======================================== */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.8,
            }}
            className="
              mt-7

              text-white/80

              text-sm
            "
          >
            {text.saveTitle}
          </motion.p>

          {/* Calendar buttons */}

          <div
            className="
              mt-5

              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-3
            "
          >
            <PrimaryButton
              title={text.googleCalendar}
              onClick={handleGoogleCalendar}
              className="
                w-full
                sm:w-auto

                min-w-[190px]
              "
            />

            <PrimaryButton
              title={text.appleCalendar}
              onClick={handleAppleCalendar}
              variant="outline"
              className="
                w-full
                sm:w-auto

                min-w-[190px]
              "
            />
          </div>
        </motion.div>

        {/* ==========================================
            CONTINUE
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.2,
          }}
          className="
            mt-8

            flex
            justify-center
          "
        >
          <PrimaryButton
            title={text.continue}
            onClick={onNext}
            className="
              w-[220px]
              md:w-[260px]
            "
          />
        </motion.div>
      </div>
    </SceneContainer>
  );
}

export default EngagementScene;