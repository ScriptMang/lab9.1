import type { ProductDisplayProps } from '../../types'

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
 onAddToCart ? onAddToCart("Item added to cart") : console.log("no funct");
    return (
        <>
         <div id="productName">{product.name}</div>
         <div id="productPrice">${product.price}</div>
         { showDescription ? <p>{product.description}</p> : showDescription }
         { product.imageUrl ? <img src={product.imageUrl} id="productImg" style={{height: "300px", width: "300px"}} /> : product.imageUrl}
         { showStockStatus ?  <p id="itemInStock">Product is in stock</p> : showStockStatus}
        {children}
        </>
    )
}

export default ProductDisplay; 
