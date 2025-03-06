import Logo from "../../Common/Logo";
import Footer from "./footer";
import OnetimeInputsreen from "./oneTime";
import BgImage from "../../Images/Bg.png";

const HomeContent = () => {
  return (
    <div>
      {/* Header Section - Logo */}
      <Logo />

      {/* Main Content with Background Image */}
      <div
        className="background1 pt-5"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* One-Time Input Screen */}
        <OnetimeInputsreen />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomeContent;
