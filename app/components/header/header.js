import News from "./news";
import Info from "./info";
import Navbar from "./navbar";
import SocialMedia from "../ui/socialMedia";

export default function Header() {
    return (
        <header>
            <News />
            <Info/>
            <Navbar/>
        </header>
    );
}
