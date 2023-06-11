const CardsView = (props) => {
    const {products} = props;
    console.log(products)
    return (
        <li className="product-position-icon" >
            <h2>{products.name}</h2>
            <h3>{products.color}</h3>
            <img className='product-img' src={products.img}/>
            <div>
                <span>{products.price}</span>
                <button>Add to cart</button>
            </div>
        </li>

    )
}

export default CardsView;