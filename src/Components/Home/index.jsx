import Logo from "../../Common/Logo";
import Footer from "./footer";
import PackageTab from "../../Common/Tab";
import OnetimeInputsreen from "./oneTime";
import BgImage from "../../Images/Bg.png";

const HomeContent = () => {
  return (
    <>
      <div>
        {/* Logo  */}
        <Logo />
        <div
          className="background1 pt-5"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          {/* Tab */}
          <PackageTab />
          {/* body Content */}
          <OnetimeInputsreen />
        </div>
        {/* footer Content */}
        <Footer />
      </div>
    </>
  );
};
export default HomeContent;
