import { FaFacebook, FaInstagram, FaFacebookMessenger } from "react-icons/fa";

export default function SocialMedia({forMobile, white}) {
    return (
        // If forMobile true, then we hide social icons when screen at least md (showing icons only mobile)
        <nav className={`flex gap-3 ${forMobile && "block md:hidden"}`} aria-label="Social Media Links">
            <a 
                href="https://www.facebook.com/kibinaivilniujelt" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
            >
                <FaFacebook 
                    className={`${white ? "icon-white" : "icon"}`}
                    size={25} 
                />
            </a>
            <a 
                href="https://messenger.com/jūsų-profilis" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook Messenger"
            >
                <FaFacebookMessenger 
                    className={`${white ? "icon-white" : "icon"}`}
                    size={25} 
                />
            </a>
            <a 
                href="https://www.instagram.com/kibinukai" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
            >
                <FaInstagram 
                    className={`${white ? "icon-white" : "icon"}`}
                    size={25} 
                />
            </a>
        </nav>
    );
}
