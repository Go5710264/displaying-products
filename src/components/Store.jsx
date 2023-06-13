import { Component } from "react";
import PropTypes from 'prop-types'
import CardsView from "./CardsView";
import IconSwicth from "./IconSwitch";

class Store extends Component {
    constructor(props){
        super(props); 
        this.state={ iconView: 'view_module' }
        this.products = props.icon; 
    }

    render() {
        return(
            <>
                <IconSwicth 
                    icon={this.state} 
                    onSwitch={(icon)=>this.setState({iconView: icon})}
                />
                <ul className={this.state.iconView === 'view_module' ? "product-board-module" : 'product-board-list'}>
                    {this.products.map(item => 
                        <CardsView 
                            products={item}
                            view={this.state.iconView}
                            key={Math.random()}
                        />
                    )}
                </ul>
            </>
        )
    }

}

Store.propTypes = {
    icon: PropTypes.array
}

export default Store;