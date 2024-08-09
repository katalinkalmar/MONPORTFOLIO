import { Link } from 'react-router-dom';

import listeProjets from "../../donnees/projets.json"
import Vignette from "../../components/Vignette/Vignette"

export default function Projets() {
    return (
        <div className="body-projets">
            <div className="box-projets">
                <span> Mes Projets </span>

                <div className="galerie">
                    {listeProjets.map((projet, id) => { return <Vignette fiche={projet} key={id} /> })}
                </div>
            </div>

            <section id="contact-section" className="box-contact">
                <span> Contactez-moi ! </span>

                <div className="box-contact-info">
                    <div className="box-contact-mail">
                        <span> Par mail :</span>
                        <Link to="mailto::katalinkalmarpro@gmail.com" target="_blank">
                            katalinkalmarpro@gmail.com
                        </Link>
                    </div>

                    <div className="box-contact-github">
                        <span>Sur GitHub :</span>
                        <Link to="https://github.com/katalinkalmar" target="_blank">
                            github.com/katalinkalmar
                        </Link>
                    </div>
                </div>


            </section>

        </div>
    )
}