import ContactInfo from "./contactInfo";
import NavMenu from "./header/nav";
import Logo from "./ui/logo";
import SocialMedia from "./ui/socialMedia";
import WorkingTime from "./workingTime";

const bg = "/assets/footer/footer-bg.png";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="border-b-[1px] border-white-transparent30 py-[50px]">
        <div className="container flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <Logo white />
            <NavMenu white className="hidden md:flex" />
            <SocialMedia white />
          </div>
          <NavMenu white className="flex md:hidden dir justify-end" />

          <ContactInfo className="flex flex-col gap-3" white />
          <WorkingTime white />
        </div>
      </div>
      <p className="text-white-transparent30 py-5 flex justify-center">
        Copyright © 2024 Kibinukai
      </p>
    </footer>
  );
}
