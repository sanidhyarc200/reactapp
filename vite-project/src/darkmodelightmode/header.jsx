import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <header>
            <span>My app [{theme}]</span>
        </header>
    )
};
export default Header;