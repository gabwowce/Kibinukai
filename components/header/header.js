import News from "./news";
import Info from "./info";
import Navbar from "./navbar";
import SocialMedia from "../ui/socialMedia";

export default function Header() {
    return (
      <>
        {/* <News /> */}
        <Info />
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
      </>
    );
  }
  