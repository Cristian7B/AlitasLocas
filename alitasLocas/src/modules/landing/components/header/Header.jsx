import { Buttons } from "./buttons";
import { Nav } from "./Nav";
import showIcon from "../../../../assets/images/ShowIcon.svg"
import landingImage from "../../../../assets/images/LandingImg.webp"
    
export function Header() {
    return (
        <>
            <header>
                <div className="headerText">
                <Nav/>
                    <div className="importantText">
                        <img src={showIcon} alt="Important icon" />
                        <p>Descubre una nueva adicción</p>
                    </div>
                    <h1 className="titleText">
                        ¡Las mejores alitas de Bogotá!
                    </h1>
                    <p className="descriptionText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Buttons/>
                    <p className="locationText">Por ahora en: Bogotá</p>
                </div>
                <div className="headerImage">
                    <img src={landingImage} alt="Header image" />
                </div>
            </header>
        </>
    )
}