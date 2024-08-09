// J'importe les hooks useParams et Navigate. 
// UseParams me permet d'accéder aux id des projets.
// Navigate me permettra de changer de page si l'id est non trouvé.
import { useParams, Navigate, Link } from "react-router-dom"
import donneeProjets from "../../donnees/projets.json"

export default function FichesLogement() {
    // Je récupère l'id de la fiche projet présente dans l'url à l'aide du hook useParams.
    const { id } = useParams()

    // On récupère les données du projet à l'aide de l'id dans le fichier json
    const ficheProjet = donneeProjets.find(
        (projet) => projet.id === id
    )

    // https://create-react-app.dev/docs/using-the-public-folder/
    const logo = process.env.PUBLIC_URL + "/images/" + `${ficheProjet.logo_du_site}`
    const image = process.env.PUBLIC_URL + "/images/" + `${ficheProjet.image_du_site}`

    return (<>{ficheProjet ? (

        <div className="body-fiche">
            
            <div className="box-logo">
                <img src={logo} className="fiche-logo" />
            </div>

            <img src={image} className="fiche-image" />

            <div className="box-contenu">

                <div className="box-lien-projet">
                    <span> Accéder au projet : <Link to={ficheProjet.lien_du_projet} target="_blank"> {ficheProjet.lien_du_projet} </Link> </span>
                </div>

                <div className="box-description">
                    {ficheProjet.decription_du_projet}
                </div>

            </div>

        </div>

    ) : (<Navigate replace to="/idnotfound" />)}</>)
}