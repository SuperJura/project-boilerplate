import React from 'react'
import style from './index.css'
import { Header, MainContent, Footer, Card, PopupWindow, Button, Navigation } from 'storybook-project/dist';
import { connect } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { addFavouriteBeer, removeFavouriteBeer, showPopupBeer, removePopupBeer, changeBeerInCart } from './action.js'
import beers from '../../../assets/beers.js'


class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.toggleFavouriteBeer = this.toggleFavouriteBeer.bind(this)
        this.setPopupBeer = this.setPopupBeer.bind(this)
        this.removePopupBeer = this.removePopupBeer.bind(this)
        this.addBeerToCart = this.addBeerToCart.bind(this)
    }

    toggleFavouriteBeer(beerId)
    {
        if(this.props.favouriteBeers.includes(beerId))
        {
            this.props.removeFavouriteBeer(beerId)  
        }
        else
        {
            this.props.addFavouriteBeer(beerId)
        }
    }

    setPopupBeer(beer)
    {
        this.props.showPopupBeer(beer)
    }

    removePopupBeer()
    {
        this.props.removePopupBeer()
    }

    addBeerToCart(beerId)
    {
        this.props.changeBeerInCart(beerId, 1)
        // toast("Added one beer to cart")
    }

    render()
    {
		const cards = beers.map(beer => 
			<Card
				key={beer.id}
				imgUrl={beer.image_url}
				name={beer.name}
				tagline={beer.tagline}
                onFavourite= {() =>{this.toggleFavouriteBeer(beer.id)}}
                onInfo={() => this.setPopupBeer(beer)}
                onPlus={() => this.addBeerToCart(beer.id)}
                isFavourite = { this.props.favouriteBeers.includes(beer.id) === true ? "true" : "false"}
            >
			</Card>
        )

        const popupBeer = this.props.popupBeer
        const popup = Object.keys(popupBeer).length !== 0 ? 
        <PopupWindow
            onClose={this.removePopupBeer}
            tooltip={"date: " + popupBeer.first_brewed + "\nby: " + popupBeer.contributed_by}
        >
            <h2>{popupBeer.name}</h2>
            <hr/>
            <img src={popupBeer.image_url} className={style.popupImage}/>
            <div className={style.popupParagraph}>
                <p>
                    {popupBeer.description}
                </p>
                <p>
                    {popupBeer.brewers_tips}
                </p>
            </div>
            <div className={style.clear_floatd}/>
            <hr/>
            <div className={style.popupButtonConteiner}>
                <Button onClick={this.removePopupBeer}>
                    Close
                </Button>
                <Button onClick={() => {this.addBeerToCart(popupBeer.id)}}>
                    Add to Cart
                </Button>
                <Button onClick={() =>{this.toggleFavouriteBeer(popupBeer.id)}}>
                    Toggle Favourite
                </Button>
            </div>
        </PopupWindow>
        :
        undefined

        const beerCount = this.props.beerInCart.reduce((a, b) => a + b.amount, 0);
        const div = (
            <div>
                <Header title="Duff Beers" showLogo="true"/>
                <Navigation
                    links =
                    {
                        [
                            {
                                link: "Cart",
                                title: "My Cart (" + beerCount + ")"
                            },
                            {
                                link: "About",
                                title: "About"
                            },
                        ]
                    }
                />
                <MainContent>
                    {cards}
                </MainContent>
                <Footer>
                    Jurica Adamek 2018
                </Footer>
                <div className={style.popup}>
                    {popup}
                </div>
                {/* <ToastContainer /> */}
            </div>
        )

        return div;
    }
}

const mapStateToProps = state =>({
    favouriteBeers : state.main.favouriteBeers,
    popupBeer: state.main.popupBeer,
    beerInCart: state.main.beerInCart
})

const mapDispatchProps = dispatch =>({
    addFavouriteBeer : (beerId) => dispatch(addFavouriteBeer(beerId)),
    removeFavouriteBeer : (beerId) => dispatch(removeFavouriteBeer(beerId)),
    showPopupBeer: (beer) => dispatch(showPopupBeer(beer)),
    removePopupBeer: () => dispatch(removePopupBeer()),
    changeBeerInCart: (beerId, amount) => dispatch(changeBeerInCart(beerId, amount))
})

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Main)