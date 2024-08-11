// J'importe les hooks useParams et Navigate. 
// UseParams me permet d'accéder aux id des projets.
// Navigate me permettra de changer de page si l'id est non trouvé.
import { useParams, Navigate, Link } from "react-router-dom"
import donneeProjets from "../../donnees/projets.json"

export default function FichesProjet() {
    // Je récupère l'id de la fiche projet présente dans l'url à l'aide du hook useParams.
    const { id } = useParams()

    // La fonction find permet de trouver le projet dont l'ID correspond à celui extrait de l'URL.
    const ficheProjet = donneeProjets.find(
        (projet) => projet.id === id
    )
// Si aucun projet n'est trouvé on est redirigé vers une page d'erreur.
    if (!(ficheProjet)) {
        return (<Navigate replace to="/idnotfound" />)
    }
    //récupération des images de manière dynamique du public
    // https://create-react-app.dev/docs/using-the-public-folder/
    const logo = `${process.env.PUBLIC_URL}/images/${ficheProjet.logo_du_site}`;
    const image = `${process.env.PUBLIC_URL}/images/${ficheProjet.image_du_site}`;


    return (
        <div className="body-fiche">

            <div className="box-logo">
                <img src={logo} className="fiche-logo" alt="" />
            </div>

            <img src={image} className="fiche-image" alt="" />

            <div className="box-contenu">

                <div className="box-lien-projet">
                    <span> Accéder au projet : <Link to={ficheProjet.lien_du_projet} target="_blank"> {ficheProjet.lien_du_projet} </Link> </span>
                </div>

                <div className="box-description">
                    {ficheProjet.decription_du_projet}
                </div>

            </div>

        </div>
    )
}