import { useState } from "react/cjs/react.development";
import TurnIcon from "../../assets/turn-icon.svg";
import "./styleflashcard.css";

export default function FlashCard({ index, question, answer }){
    const [isFlipped, setIsFlipped] = useState(false);

    if(isFlipped){
        return(
            <div className="flashcard-question">
                <span>{question} kkjnak oniaxb cksbxa biwxw bicbw cbksab</span>
                <div className="turn-button">
                    <img src={TurnIcon} alt="virar" />
                </div>
            </div>
        );
    }

    return(
        <div>
            
            <p onClick={() => setIsFlipped(true) }>{index}<ion-icon name="play-outline"></ion-icon></p>
            
        </div>
    );
}
