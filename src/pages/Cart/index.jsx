import React from 'react'
import style from './index.css'
import { Header, MainContent, Navigation, Table } from 'storybook-project/dist';
import FooterLinks from '../../Components/FooterLinks'
import { connect } from 'react-redux';
import { changeBeerInCart }  from '../Main/action.js'
import beers from '../../../assets/beers.js'
import logo from '../../../assets/duff.png'

class Cart extends React.Component
{
	constructor(props)
	{
		super(props)

		this.changeBeersInTable = this.changeBeersInTable.bind(this)
	}

	changeBeersInTable(amount, rowIndex)
	{
		const beerId = this.props.beerInCart[rowIndex].beerId;
		
        this.props.changeBeerInCart(beerId, amount)
	}

	render()
	{
		const tableValues = []

		this.props.beerInCart.map((beer) => 
		{
			tableValues.push([beers.find(x => x.id == beer.beerId).name, beer.amount])
		})

		const div = (
			<div>
				<Header title='My Cart' logo={logo}/>
				<Navigation
					links =
					{
						[
							{
								link: '/',
								title: "Main"
							},
							{
								link: 'About',
								title: 'About'
							},
						]
					}
				/>
				<MainContent>
					<Table headers={["Beer name", "Count"]} values={tableValues} onControlClick={(amount, rowIndex) => {this.changeBeersInTable(amount, rowIndex)}}/>
				</MainContent>
				<FooterLinks/>
			</div>
		)

		return div
	}
}

const mapStateToProps = state =>({
    beerInCart: state.main.beerInCart,
})

const mapDispatchProps = dispatch =>({
    changeBeerInCart: (beerId, amount) => dispatch(changeBeerInCart(beerId, amount)),
})

export default connect(
	mapStateToProps,
	mapDispatchProps
)(Cart)