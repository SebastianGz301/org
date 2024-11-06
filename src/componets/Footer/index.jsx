import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer1.png)"}}>
        <div className="redes">
        <a href="https://www.facebook.com/"> 
            <img src="/img/facebook.png" alt="facebook"/>
        </a>
        <a href="https://www.twitter.com/"> 
            <img src="/img/twitter.png" alt="twitter"/>
        </a>
        <a href="https://www.instagram.com/"> 
            <img src="/img/instagram.png" alt="instagram"/>
        </a>
        </div>
        <img className="logo" src="/img/Logo.png" alt="org" />
        <strong>Desarrollador por Sebastian Gomez</strong>
    </footer>
}


export default Footer;