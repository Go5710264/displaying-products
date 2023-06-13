import PropTypes from 'prop-types'
import CardsModel from '../models/CardsModel';

const CardsView = (props) => {
    const {products, view} = props;
    
    return (
        <li  className={view === 'view_list' ? "product-position-list" : "product-position-icon"} >
            <div className={view === 'view_list' ? "product-reverse" : "product"}>
                <div className={view === 'view_list' ? "product-title-list" : "product-title-module"}>
                    <h2 className="product-name">{products.name}</h2>
                    <h3 className="product-color">{products.color}</h3>
                </div>

                <img className={view === 'view_list' ? "product-img-list" : 'product-img-module'} src={products.img}/>
            </div>
            <div className={view === 'view_list' ? "product-card-list" : "product-card-module"}>
                <span className="product-card-price">${products.price}</span>
                <button className="product-card-button">Add to cart</button>
            </div>
        </li>

    )
}

CardsView.propTypes = {
    products: PropTypes.instanceOf(CardsModel).isRequired,
    view: PropTypes.string
}


export default CardsView;