import "./style.css";
import Logo from "../../assets/lightning.svg";
import { useState } from "react/cjs/react.development";
import FlashCard from "../Flashcard/flashcard";

function TopLogo(){
    return(
        <header className="top-logo">
            <img src={Logo} alt="logo-zaprecall" />
            <p>ZapRecall</p>
        </header>
    );
}

function FooterProgress({ deckSize }){
    return(
        <footer className="progress">
            <p>
                <span className="current-position">0</span>/<span className="deck-size">{deckSize}</span> CONCLUÍDOS
            </p>
        </footer>
    );
}

export default function Deck({ setPage }){
    const [deck, setDeck] = useState([
        {
            index: "Flashcard 1",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            status: "not answered"
        },{
            index: "Flashcard 2",
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            status: "not answered"
        },{
            index: "Flashcard 3",
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
            status: "not answered"
        },{
            index: "Flashcard 4",
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            status: "not answered"
        }
    ]);

    //PAREI AQUI: na criação do currentPosition

    const pack = deck.map(card => (
        <FlashCard
            key={card.index} 
            index={card.index}
            question={card.question} 
            answer={card.answer}
        />
    ));

    return(
        <div className="deck-content">
            <TopLogo />
            {/* <FlashCard /> */}
            <div className="flashcard">
                {pack}{/*Essa parte é o 'deckJSX' que tá lá no 'Deck()'
                        outro projeto.*/}
                <div className="space"></div>
            </div>
            <FooterProgress deckSize={deck.length} />
        </div>
    );
}