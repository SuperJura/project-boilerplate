import React from 'react'
import { PopupWindow, Button } from 'storybook-project/dist'
import style from './index.css'

export default class BeerPopup extends React.Component
{
    render()
    {
        const div = 
        (
            <PopupWindow
                    onClose={this.props.onClose}
                    tooltip={"date: " + this.props.popupBeer.first_brewed + "\nby: " + this.props.popupBeer.contributed_by}
            >
                    <h2>{this.props.popupBeer.name}</h2>
                    <hr/>
                    <img src={this.props.popupBeer.image_url} className={style.popupImage}/>
                    <div className={style.popupParagraph}>
                        <p>
                            {this.props.popupBeer.description}
                        </p>
                        <p>
                            {this.props.popupBeer.brewers_tips}
                        </p>
                    </div>
                    <div className={style.clear_floatd}/>
                    <hr/>
                    <div className={style.popupButtonConteiner}>
                        <Button onClick={this.props.onClose}>
                            Close
                        </Button>
                        <Button onClick={() => {this.props.addBeerToCart(this.props.popupBeer.id)}}>
                            Add to Cart
                        </Button>
                        <Button onClick={() =>{this.props.toggleFavouriteBeer(this.props.popupBeer.id)}}>
                            Toggle Favourite
                        </Button>
                    </div>
                </PopupWindow>
            )
        return div;
    }
}