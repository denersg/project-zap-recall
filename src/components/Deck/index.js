import "./style.css";
import Logo from "../../assets/lightning.svg";
import { useState } from "react/cjs/react.development";
import FlashCard from "../Flashcard";

function TopLogo(){
    return(
        <header className="top-logo">
            <img src={Logo} alt="logo-zaprecall" />
            <p>ZapRecall</p>
        </header>
    );
}

function FooterProgress({ footer, deckSize }){
    if(footer === "putz"){
        return(
            <footer className="footer-putz">
                <div className="footer-container">
                    <span className="mood">😥 Putz...</span>
                    <span className="message">Ainda faltam alguns... Mas não desanime!</span>
                    <span className="status">4/{deckSize}</span>
                </div>
            </footer>
        );
    }
    else if(footer === "congratulations"){
        return(
            <footer className="footer-congratulations">
                <div className="footer-container">
                    <span className="mood">🥳 Parabéns!</span>
                    <span className="message">Você não esqueceu de nenhum flashcard!</span>
                    <span className="status">4/{deckSize}</span>
                </div>
            </footer>
        );
    }

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
        },{
            index: "Flashcard 5",
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
            status: "not answered"
        },{
            index: "Flashcard 6",
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
            status: "not answered"
        },{
            index: "Flashcard 7",
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes",
            status: "not answered"
        },{
            index: "Flashcard 8",
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            status: "not answered"
        }
    ]);

    const [currentPosition, setCurrentPosition] = useState(0);
    const [footer, setFooter] = useState("");

    function goNext(){
        let nextPosition = currentPosition + 1;
        if(nextPosition === deck.length){
            const incorrectCard = deck.find(card => card.status === "incorrect");
            if(incorrectCard){
                setFooter("putz");
            }
            else{
                setFooter("congratulations");
            }
            return;
        }
        setCurrentPosition(nextPosition);
    }
    
    function updateDeck(flashcardIndex, status){
        const newDeck = [...deck];

        newDeck[flashcardIndex].status = status;

        setDeck(newDeck);
    }

    const pack = deck.map(card => (
        <FlashCard
            key={card.index} 
            currentPosition={currentPosition + 1} 
            updateDeck={updateDeck}
            goNext={goNext}
            index={card.index}
            question={card.question} 
            answer={card.answer}
        />
    ));

    return(
        <div className="deck-content">
            <TopLogo />
            <div className="flashcard">
                {pack}
                <div className="space"></div>
            </div>
            <FooterProgress footer={footer} deckSize={deck.length} />
        </div>
    );
}