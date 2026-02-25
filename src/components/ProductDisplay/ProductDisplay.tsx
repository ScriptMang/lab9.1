import type { ProductDisplayProps } from '../../types'

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
 onAddToCart ? onAddToCart("Item added to cart") : console.log("no funct");
    return (
        <>
         <h1>Product</h1>
         <p>Product ID: {product.id}</p>
         <p>Name: {product.name}</p>
         <p>Price: {product.price}</p>
         { showDescription ? <p>{product.description}</p> : showDescription }
         { product.imageUrl ? <img src={product.imageUrl} /> : product.imageUrl}
         { showStockStatus ?  <p>Product is in stock</p> : showStockStatus}
        {children}
        </>
    )
}

export default ProductDisplay; 
