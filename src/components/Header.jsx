// import React from "react";
// import Logo from "../assets/Logo.png";

// const Header = () => {
//   return (
//     <div>
//       <img src={Logo} alt="Logo" />
//     </div>
//   );
// };

// export default Header;

import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <div className="absolute top-0 left-25 w-full flex items-center px-8 py-4 z-20">
      <img src={Logo} alt="Logo" className="w-36 md:w-44 object-contain" />
    </div>
  );
};

export default Header;
