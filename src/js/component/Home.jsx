import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotrom";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid ">
			<Navbar />
			<div className="container" style={{width: "150rem"}}>
				<Jumbotron/>
				<div className="d-flex justify-content-between">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;
