import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotrom";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			{/* <div className="container" style={{width: "150rem"}}> */}
			<Jumbotron/>
			<Card />
			{/* </div> */}
			<Footer/>
		</div>
	)
}

export default Home;
