// J'importe le composant Link de la librairie react-router.
import { Link, useNavigate } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import bannerImg from "../../assets/BannerIMG.png"
import bannerLogo from "../../assets/Kacsa.svg"

export default function Banner() {
    const navigate = useNavigate();

    return (
        <div className="banner">
            <img src={bannerImg} className="banner-img"/>

            <div className="logo-box">
                <img src={bannerLogo} className="banner-logo" onClick={() => navigate("/")}/>
            </div>

            <nav>
                <ul><Link to={"/"}>À propos</Link></ul>
                <ul><Link to={"/projets"}>Projets</Link></ul>
                <ul><HashLink to={"/projets#contact-section"}>Contact</HashLink></ul>
            </nav>
        </div>
    )
}