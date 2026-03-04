import type { ProductDisplayProps } from '../../types'

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart}: ProductDisplayProps) {
    return (
        <div id="productCard">
            { product.imageUrl ? <img src={product.imageUrl} id="productImg" style={{height: "300px", width: "300px"}} /> : product.imageUrl}
            <div id="productDetails">
                <div id="productName">{product.name}</div>
                <div id="productPrice">${product.price}</div>
                { showDescription ? <p>{product.description}</p> : showDescription }
                { showStockStatus ?  <p id="itemInStock">Product is in stock</p> : showStockStatus}
            </div>
            <button onClick={() => onAddToCart ? onAddToCart(product.id) : null} id="addToCartButton">Add to Cart</button>
        </div>
    )
}

export default ProductDisplay; 
