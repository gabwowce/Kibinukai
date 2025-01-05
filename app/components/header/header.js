import News from "./news";
import Info from "./info";
import Navbar from "./navbar";

export default function Header(){
    return(
        <header>
            <News/>
            <Info/>
            <Navbar/>
        </header>
    );
}