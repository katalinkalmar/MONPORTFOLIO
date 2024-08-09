//Je récupère le hook useNavigate de la librairie router.
import { useNavigate } from "react-router-dom"

export default function Vignette(props) {
    const navigate = useNavigate();
    const ficheProjet = props.fiche

    // https://create-react-app.dev/docs/using-the-public-folder/
    const logo = process.env.PUBLIC_URL + "/images/" + `${ficheProjet.logo_du_site}`
    const image = process.env.PUBLIC_URL + "/images/" + `${ficheProjet.image_du_site}`


    return (
        <div className="body-vignette" onClick={() => { navigate(`/projets/${ficheProjet.id}`) }}>
            <img src={image} className="box-image"/>
            <div className="box-logo">
                <img src={logo} />
            </div>  
        </div>
    )
}
