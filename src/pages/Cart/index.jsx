import React from 'react'
import style from './index.css'
import { Header, MainContent, Navigation, Table } from 'storybook-project/dist';
import FooterLinks from '../../Components/FooterLinks'
import { connect } from 'react-redux';
import beers from '../../../assets/beers.js'

class Cart extends React.Component
{
	render()
	{
		const tableValues = []

		this.props.beerInCart.map((beer) => 
		{
			tableValues.push([beers.find(x => x.id == beer.beerId).name, beer.amount])
		})

		const div = (
			<div>
				<Header title='My Cart'/>
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
					<Table headers={["Beer name", "Count"]} values={tableValues} onControlClick={(amount) => console.log(amount)}/>
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
})

export default connect(
	mapStateToProps,
	mapDispatchProps
)(Cart)