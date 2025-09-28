export function ProductCard({ 
    id, 
    title,
    description,
    image,
    category,
    buttonText,
    imageHeight
}) {
    // validamos si se debe aplicar el "overflow"
    const shouldOverflow = imageHeight >= 150;

    return (
        <div className="productCard">
            <div 
              className="imageProduct" 
              style={{ marginTop: shouldOverflow ? `-${imageHeight / 4}px` : "0" }}
            >
                <img 
                  src={image} 
                  alt={title} 
                  style={{ height: `${imageHeight}px`, objectFit: "contain" }} 
                />
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
