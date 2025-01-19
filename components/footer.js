import ContactInfo from "./contactInfo";
import NavMenu from "./header/nav";
import Logo from "./ui/logo";
import SocialMedia from "./ui/socialMedia";

const bg = "/assets/footer/footer-bg.png";


export default function Footer() {
    return (
        <footer
            className="bg-cover bg-center"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <Logo white/>
            <NavMenu white/>
            <SocialMedia white />
            <ContactInfo />
    
        </footer>
    );
}
