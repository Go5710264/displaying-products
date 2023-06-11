import { Component } from "react";
import CardsView from "./CardsView";
import IconSwicth from "./IconSwitch";

class Store extends Component {
    constructor(props){
        super(props); // товары
        // this.state={ iconView: 'icon' }// иконки/список
        this.products = props.icon; // объект с кросовками
    }

    render() {
        return(
            <div>
                <IconSwicth />
                <main className="product-board">
                    {this.products.map(item => <CardsView products={item}/>)}
                </main>
            </div>
        )
    }

}

export default Store;