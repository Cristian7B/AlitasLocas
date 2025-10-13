import menuImage from "../../assets/Menu.png"
export function Menu() {
    return (
        <div className="menuContainer">
            <h1>El menú</h1>
            <img src={menuImage} alt="Menú de Alitas Locas" />
        </div>
    )
}