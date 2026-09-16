import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function TypewriterText({
  text = "",
  speed = 220,
  delay = 0,
  className = "",
  as = "p",
  cursor = false,
  onComplete,
}) {
  const words = useMemo(() => {
    if (!text) return [];
    return text.split(" ");
  }, [text]);

  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    setVisibleText("");

    if (!words.length) return;

    let cancelled = false;
    let timer;

    const wait = (ms) =>
      new Promise((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const start = async () => {
      await wait(delay);

      let current = "";

      for (let i = 0; i < words.length; i++) {
        if (cancelled) return;

        current += (i === 0 ? "" : " ") + words[i];

        setVisibleText(current);

        const word = words[i];

        let pause = speed;

        if (word.endsWith("...")) {
          pause = speed * 4;
        } else if (
          word.endsWith(".") ||
          word.endsWith("!") ||
          word.endsWith("?")
        ) {
          pause = speed * 3;
        } else if (
          word.endsWith(",") ||
          word.endsWith(";") ||
          word.endsWith(":")
        ) {
          pause = speed * 1.7;
        }

        await wait(pause);
      }

      onComplete?.();
    };

    start();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [words, speed, delay, onComplete]);

  const Component = motion[as] || motion.p;

  return (
    <Component
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {visibleText}

      {cursor && (
        <motion.span
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
          }}
          className="ml-1 inline-block text-yellow-500"
        >
          |
        </motion.span>
      )}
    </Component>
  );
}

export default TypewriterText;
