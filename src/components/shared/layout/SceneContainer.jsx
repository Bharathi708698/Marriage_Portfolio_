// function SceneContainer({ children }) {
//   return (
//     <div
//       className="
//         relative
//         flex
//         min-h-screen
//         flex-col
//         items-center
//         justify-center
//         overflow-hidden
//         bg-black
//         px-5
//         py-8

//         sm:px-8
//         md:px-10
//         lg:px-12
//       "
//     >
//       {children}
//     </div>
//   );
// }

// export default SceneContainer;

function SceneContainer({ children, fullScreen = true, centered = true }) {
  return (
    <div
      className={`
        relative
        flex
        flex-col
        items-center
        ${centered ? "justify-center" : "justify-start"}
        overflow-y-auto
        overflow-x-hidden
        bg-black

        px-5
        sm:px-8
        md:px-10
        lg:px-12

        ${fullScreen ? "min-h-dvh py-8" : "min-h-screen py-8"}
      `}
    >
      {children}
    </div>
  );
}

export default SceneContainer;
