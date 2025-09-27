import { products } from "../../utils"
import { ProductCard } from "./ProductCard"
export function ContainerProducts() {  
    return (
        <div className="containerProductsGeneral">
            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
        </div>
    )
}
