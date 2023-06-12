import { Component } from "react";
import CardsView from "./CardsView";
import IconSwicth from "./IconSwitch";

class Store extends Component {
    constructor(props){
        super(props); // товары
        this.state={ iconView: 'view_icon' }// иконки/список
        this.products = props.icon; // объект с кросовками
    }

    render() {
        return(
            <>
                <IconSwicth 
                    icon={this.state} 
                    onSwitch={(icon)=>this.setState({iconView: icon})}
                />
                <main className="product-board">
                    {this.products.map(item => <CardsView products={item}/>)}
                </main>
            </>
        )
    }

}

export default Store;