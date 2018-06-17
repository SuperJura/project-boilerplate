import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label } from 'storybook-project/dist';
import { connect } from 'react-redux';
import styles from './index.css';
import { increase } from './action.js'

class Home extends React.Component {

	constructor(props)
	{
		super(props);
		this.printA = this.printA.bind(this);
	}

	printA()
	{

	}

	render() {
		return(
			<div className="home">
				<h1> Hello World! </h1>
				<span>{this.props.number}</span>
				<button onClick={this.props.increase1}>+1</button>
				<button onClick={this.props.increase100}>+100</button>
				<h4>Links:</h4>
				<div className={styles.customHome} >
					<Link href="a" to="/somethingNotFound"> Go to Not Found page! </Link>
				</div>
				<div className={styles.customHome} >
					<Link href="a" to="/about"> Go To About! </Link>
				</div>
				<Button text="asdasd" />
			</div>
		);
	}
}

const mapStateToProps = state =>({
	number: state.home.number,
});

const mapDispatchProps = dispatch =>({
	increase1 : () =>dispatch(increase(1)),
	increase100 : () =>dispatch(increase(100)),
});

export default connect(
	mapStateToProps,
	mapDispatchProps,
)(Home);