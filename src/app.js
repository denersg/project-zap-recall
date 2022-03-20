import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import Page from "./components/Page";
import Deck from "./components/Deck/tela2-dos-flashcards";

export default function App(){
    const [page, setPage] = useState("home");
    return(
        <div className="content">
            {/* ----- Versão para várias tela ----- */}
            {/* {page === "home" && <HomeScreen setPage={setPage} />}
            {page !== "home" && (
                <Page>
                    {page === "deck" && <Deck setPage={setPage} />}
                </Page>
            )} */}

            {/* ----- Versão para 1 tela ----- */}
            {page === "home" ? <HomeScreen setPage={setPage} /> : <Deck setPage={setPage} />}
        </div>
    );
}