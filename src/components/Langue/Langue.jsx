import etoile from "../../assets/star.svg"

export default function Langue(props) {
    const baliseEtoileUnique = <img src={etoile}/>
    let baliseEtoile = []

    for (let i = 0; i < props.nbEtoile; i++) {
        baliseEtoile.push(baliseEtoileUnique)
    }

    return (
        <div className="box-langue">
          <img src={props.src} className="img-langue"/>
          <div className="box-etoile">
            {baliseEtoile}
          </div>
        </div>
    )
}