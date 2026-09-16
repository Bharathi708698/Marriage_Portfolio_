import { motion } from "framer-motion";

function PrimaryButton({
  title,
  onClick,
  icon = null,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const variants = {
    primary: `
      border border-yellow-500
      bg-gradient-to-r
      from-yellow-400
      to-amber-500
      text-black
      shadow-lg
      shadow-yellow-500/30
    `,

    outline: `
      border border-yellow-500
      bg-transparent
      text-yellow-400
      shadow-md
      shadow-yellow-500/20
      backdrop-blur-sm
    `,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        !disabled
          ? {
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,215,0,0.45)",
            }
          : {}
      }
      whileTap={!disabled ? { scale: 0.96 } : {}}
      transition={{
        duration: 0.2,
      }}
      className={`
        cursor-pointer
        relative
        z-20

        inline-flex
        items-center
        justify-center
        gap-2

        rounded-full

        px-2
        py-3

        text-sm
        font-semibold

        transition-all
        duration-300

        md:px-4
        md:py-4
        md:text-base

        disabled:pointer-events-none
        disabled:opacity-50

        ${variants[variant]}
        ${className}
      `}
    >
      {icon && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}

      <span>{title}</span>
    </motion.button>
  );
}

export default PrimaryButton;