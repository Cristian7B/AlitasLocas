export function ProductCard({ 
    id, 
    title,
    description,
    image,
    category,
    buttonText
}) {
    return (
        <div className="productCard">
            <div className="imageProduct">
                <img src={image} alt={title} />
            </div>
            <div className="infoProduct">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href="#"><button>{buttonText}</button></a>
                <span className="category">{category}</span>
            </div>
        </div>
    );
}