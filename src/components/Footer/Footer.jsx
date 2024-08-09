import bande from "../../assets/bande.svg"
import footerLogo from "../../assets/Kacsa.svg"

export default function Footer() {
    return (
        <div className="footer">
            <img src={bande} className="footer-img"/>

            <div className="text-box">
                <p>Katalin Kalmar</p>
                <img src={footerLogo} className="footer-logo"/>
            </div>

        </div>
    )
}