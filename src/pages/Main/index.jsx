import React from 'react'
import style from './index.css'
import { Header, MainContent, Footer, Card, PopupWindow, Button } from 'storybook-project/dist';
import { connect } from 'react-redux';
import { addFavouriteBeer, removeFavouriteBeer, showPopupBeer, removePopupBeer } from './action.js'
import beers from '../../../assets/beers.js'


class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.toggleFavouriteBeer = this.toggleFavouriteBeer.bind(this)
        this.setPopupBeer = this.setPopupBeer.bind(this)
        this.removePopupBeer = this.removePopupBeer.bind(this)
    }

    toggleFavouriteBeer(beerId)
    {
        if(this.props.favouriteBeers.includes(beerId))
        {
            this.props.removeFavouriteBeer(beerId);
        }
        else
        {
            this.props.addFavouriteBeer(beerId);
        }
    }

    setPopupBeer(beer)
    {
        this.props.showPopupBeer(beer);
    }

    removePopupBeer()
    {
        this.props.removePopupBeer();
    }

    addBeerToCart(beerId)
    {

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

        const div = (
            <div>
                <Header title="Duff Beers" showLogo="true"/>
                <MainContent>
                    {cards}
                </MainContent>
                <Footer>
                    Jurica Adamek 2018
                </Footer>
                {popup}
            </div>
        )
        return div;
    }
}

const mapStateToProps = state =>({
    favouriteBeers : state.main.favouriteBeers,
    popupBeer: state.main.popupBeer
})

const mapDispatchProps = dispatch =>({
    addFavouriteBeer : (beerId) => dispatch(addFavouriteBeer(beerId)),
    removeFavouriteBeer : (beerId) => dispatch(removeFavouriteBeer(beerId)),
    showPopupBeer: (beer) => dispatch(showPopupBeer(beer)),
    removePopupBeer: () => dispatch(removePopupBeer()),
})

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Main)