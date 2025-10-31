import React from "react";

import {Footer } from "./Footer.jsx"; 
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx"; 

import { magicData, dndData } from "./data.js";


const Home = () => {
	return (
		<div>
			{}
			<Navbar />

			{}
			<Jumbotron />

			{/* 3. Contenedor principal para las tarjetas */}
			<div className="container">

				{/* 3a. Sección de Magic: The Gathering */}
				<h2 className="display-6 fw-bold my-4 pt-2">Magic: The Gathering</h2>
				<div className="row">
					{/* Mapeamos los datos de MTG para crear las tarjetas */}
					{magicData.map((card) => (
						<Card
							key={card.id}
							title={card.title}
							text={card.text}
							image={card.img}
							buttonText="Ver Carta"
						/>
					))}
				</div>

				{/* 3b. Sección de Dungeons & Dragons */}
				<h2 className="display-6 fw-bold my-4 pt-2">Dungeons & Dragons</h2>
				<div className="row">
					{/* Mapeamos los datos de D&D para crear las tarjetas */}
					{dndData.map((card) => (
						<Card
							key={card.id}
							title={card.title}
							text={card.text}
							image={card.img}
							buttonText="Ver Aventura"
						/>
					))}
				</div>
			</div>

			{/* 4. Tu Footer */}
			<Footer />
		</div>
	);
};

export default Home;