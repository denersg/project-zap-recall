import "./style.css";
import Logo from "../../assets/lightning.svg";
import { useState } from "react/cjs/react.development";

function TopLogo(){
    return(
        <header className="top-logo">
            <img src={Logo} alt="logo-zaprecall" />
            <p>ZapRecall</p>
        </header>
    );
}

function Questions({ index, question, answer }){
    const [isFlipped, setIsFlipped] = useState(false);

    if(isFlipped){
        return(
            <div className="teste">k</div>
        );
    }

    return(
        <div>
        {/* <div className="questions"> */}
            <p onClick={() => setIsFlipped(true) }>{index}<ion-icon name="play-outline"></ion-icon></p>
            {/* PAREI AQUI */}
            
            {/* <p>Pergunta 1 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 2 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 3 <ion-icon name="play-outline"></ion-icon></p>
            <p>Pergunta 4 <ion-icon name="play-outline"></ion-icon></p> */}
            {/* <div className="space"></div> */}
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

export default function Deck({ setPage }){
    const [deck, setDeck] = useState([
        {
            index: "Pergunta 1",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            status: "not answered"
        },{
            index: "Pergunta 2",
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            status: "not answered"
        },{
            index: "Pergunta 3",
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
            status: "not answered"
        },{
            index: "Pergunta 4",
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            status: "not answered"
        }
    ]);

    const pack = deck.map(card => (
        <Questions
            key={card.index} 
            index={card.index}
            question={card.question} 
            answer={card.answer}
        />
    ));

    return(
        <div className="deck-content">
            <TopLogo />
            {/* <Questions /> */}
            <div className="questions">
                {pack}{/*Essa parte é o 'deckJSX' que tá lá no 'Deck()'
                        outro projeto.*/}
                <div className="space"></div>
            </div>
            <FooterProgress />
        </div>
    );
}