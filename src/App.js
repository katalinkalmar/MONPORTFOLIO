//Ajout de Routes pour l'arborescence des routes.
//Ajout de Route pour définir une route individuelle.
import { Routes, Route } from "react-router-dom";

//ajout des pages
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FicheProjet from "./pages/FicheProjet";
import Projet from "./pages/projets";

//ajout des composants communs à toutes les pages.

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Banner />
			<main>
				<Routes>
					{/* Définition des différentes routes*/}
					<Route path="/" element={<Home />} />
					<Route path="/projets" element={<Projet />} />
					<Route path="*" element={<ErrorPage />} />
					{/* Pour les fiches logement on passe l'id en paramètre*/}
					<Route path="/projets/:id" element={<FicheProjet />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;