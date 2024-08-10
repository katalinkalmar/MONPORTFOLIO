import { useNavigate } from "react-router-dom"
import photo from "../../assets/photo_portfolio.JPG"
import fleche from "../../assets/arrow.svg"
import Langue from "../../components/Langue/Langue"

import cssLogo from "../../assets/logo_competence/css.png"
import gitLogo from "../../assets/logo_competence/git.svg"
import gitHubLogo from "../../assets/logo_competence/github.svg"
import htmlLogo from "../../assets/logo_competence/html.svg"
import mongodbLogo from "../../assets/logo_competence/mongodb.svg"
import nodejsLogo from "../../assets/logo_competence/nodejs.svg"
import reactLogo from "../../assets/logo_competence/react.svg"
import jsLogo from "../../assets/logo_competence/js.svg"

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="body-home">
      <div className="box-perso">

        <div className="box-photo">
          <img src={photo} />
        </div>

        <div className="box-metier">
          <p>Katalin Kalmar</p>
          <p>Développeuse Front-End</p>
        </div>

      </div>

      <div className="box-about">
        <span> À propos </span>
        <p>
          Après plusieurs années en tant que opératrice de prise de vues, scénariste et réalisatrice
          de court-métrages j’ai décidé de me former au métier de développeuse front-end, ayant
          toujours été intéressée par la tech et l’expérience utilisateur. Mon appétence pour la
          création ne m’ayant jamais quittée, je souhaite désormais travailler dans le développement
          web et le back-end afin d’élargir mes connaissances et compétences dans le monde
          digital !
        </p>
      </div>

      <div className="box-competence">
        <Langue src={htmlLogo} nbEtoile={3} />
        <Langue src={cssLogo} nbEtoile={3} />
        <Langue src={gitLogo} nbEtoile={3} />
        <Langue src={gitHubLogo} nbEtoile={3} />
        <Langue src={jsLogo} nbEtoile={2} />
        <Langue src={nodejsLogo} nbEtoile={2} />
        <Langue src={reactLogo} nbEtoile={2} />
        <Langue src={mongodbLogo} nbEtoile={2} />
      </div>

      <div className="box-lien-projets">
        <span> Voir mon travail </span>
        <img src={fleche} onClick={() => navigate("/projets")} />
      </div>

    </div>
  )
}