function BrandFooter({
  children,
  className = "",
}) {
  return (
    <footer
      className={`
        absolute
        bottom-5
        left-0
        w-full

        flex
        items-center
        justify-center

        text-center

        ${className}
      `}
    >
      {children}
    </footer>
  );
}

export default BrandFooter;