import { Buttons } from "./Buttons";
import { Nav } from "./Nav";
import showIcon from "../../../../assets/images/ShowIcon.svg"
import landingImage from "../../../../assets/images/LandingImg.webp"
import downArrow from "../../assets/chevron-down-outline.svg"
    
export function Header() {
    return (
        <>
            <header>
                <section className="containerHeader">
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
                        Alitas llenas de sabor, preparadas al momento, listas para volar directo a tu paladar y el toque perfecto para compartir con quien quieras.
                        </p>
                        <Buttons/>
                        <p className="locationText">Por ahora en: Bogotá</p>
                    </div>
                    <div className="headerImage">
                        <img src={landingImage} alt="Header image" />
                    </div>
                </section>
                <img className="downArrow" src={downArrow} alt="" />
            </header>
        </>
    )
}