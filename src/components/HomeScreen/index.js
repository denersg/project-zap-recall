import Logo from "../../assets/lightning.svg";
import "./style.css";

export default function HomeScreen({ setPage }){
    return(
        // <div className="homescreen-content hidden">
        <div className="homescreen-content">
            <div className="logo-top">
                <img src={Logo} alt="logo-zaprecall" />
                <p>ZapRecall</p>
            </div>
            <button onClick={() => setPage("deck")} >Iniciar Recall!</button>
        </div>
    );
}