import { ContainerProducts } from "./ContainerProducts";
import { Menu } from "./Menu";

export function GeneralContainer() {
    return (
        <div className="generalContainer">
            <h1>Nuestras Alitas</h1>

            <ContainerProducts/>
            <Menu/>
        </div>
    )
}