import { useState } from "react/cjs/react.development";
import TurnIcon from "../../assets/turn-icon.svg";
import "./styleflashcard.css";

function Footer({ answerFlashCard }){
    return(
        <div className="footer">
            <button className="incorrect" onClick={() => answerFlashCard("incorrect")}>Não lembrei</button>
            <button className="correct" onClick={() => answerFlashCard("correct")}>Quase não lembrei</button>
            <button className="zap" onClick={() => answerFlashCard("zap")}>Zap!</button>
        </div>
    );
}

export default function FlashCard({ index, question, answer }){
    const [isTurnedToQuestion, setIsTurnedToQuestion] = useState(false);
    const [isTurnedToResponse, setIsTurnedToResponse] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [status, setStatus] = useState("");
    // console.log(isTurnedToResponse)

    function answerFlashCard(status){
        setStatus(status);
        setIsAnswered(true);
        //Criar a função de acançar a posição
    }

    if(isAnswered){
        let answeredStyle, answeredIcon;
        if(status === "incorrect"){
            answeredStyle = "incorrect-answer";
            answeredIcon = "close";
        }
        else if(status === "correct"){
            answeredStyle = "correct-answer";
            answeredIcon = "help";
        }
        else{
            answeredStyle = "zap-answer";
            answeredIcon = "checkmark";
        }
        // console.log("Status: "+status)/*Só imprime o status depois
        //                                 que o botão foi escolhido!*/
        return(
            <div className={`answered-card ${answeredStyle}`}>
                <span>{index}</span>
                <ion-icon name={`${answeredIcon}-circle`}></ion-icon>
            </div>
        );
    }

    if(isTurnedToResponse){
        return(
            <div className="flashcard-response">
                <span>{answer}</span>
                <Footer answerFlashCard={answerFlashCard} />
            </div>
        );
    }

    if(isTurnedToQuestion){
        return(
            <div className="flashcard-question">
                <span>{question}</span>
                <div className="turn-button">
                    <img src={TurnIcon} alt="virar" onClick={() => setIsTurnedToResponse(true) } />
                </div>
            </div>
        );
    }

    return(
        <div>
            
            <p onClick={() => setIsTurnedToQuestion(true) }>{index}<ion-icon name="play-outline"></ion-icon></p>
            
        </div>
    );
}
