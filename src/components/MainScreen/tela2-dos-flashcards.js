import "./style.css";
import Logo from "../../assets/lightning.svg";

function TopLogo(){
    return(
        <header className="top-logo">
            <img src={Logo} alt="logo-zaprecall" />
            <p>ZapRecall</p>
        </header>
    );
}

function Questions(){
    return(
        <div className="questions">
            <p>Pergunta 1 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 2 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 3 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 4 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 1 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 2 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 3 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 4 <ion-icon name="play-outline"></ion-icon></p>
            <div className="space"></div>
        </div>
    );
}

function FooterProgress(){
    return(
        <footer className="progress">
            <p>
                <span className="current-position">0</span>/<span className="deck-size">4</span> CONCLUÍDOS
            </p>
        </footer>
    );
}

export default function MainScreen(){
    return(
        <div className="mainscreen-content">
            <TopLogo />
            <Questions />
            <FooterProgress />
        </div>
    );
}