import LogoSneakes from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/Menuicon";
import CartIcon from "@/components/icons/Cart-icon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkheader from "@/components/header/NavLinkHeader";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto  md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto  md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:h-auto md:flex md:flex-row md:gap-4 md:p-0"
    );
  };

  return (
    <>
    <header className="container mx-auto flex items-center gap-8 p-4 md:p-0">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img
        src={LogoSneakes}
        alt="Logo Sneakers"
        className="mb-1 mr-auto h-5 md:mr-0"
      />
      <nav className={navClass}>
        <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <NavLinkheader text="Collections" />
        <NavLinkheader text="Menu" />
        <NavLinkheader text="Women" />
        <NavLinkheader text="About" />
        <NavLinkheader text="Contact" />
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={Avatar} alt="Avatar" className="w-12" />
      </div>
    </header>
    <span className="container mx-auto hidden h-[1px] w-full bg-gray-300 md:block"></span>
    </>
  );
};

export default MainHeader;
