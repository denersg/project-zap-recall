import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import Page from "./components/Page";
import MainScreen from "./components/MainScreen/tela2-dos-flashcards";

export default function App(){
    const [page, setPage] = useState("home");
    return(
        <div className="content">
            {/* ----- Versão para várias tela ----- */}
            {/* {page === "home" && <HomeScreen setPage={setPage} />}
            {page !== "home" && (
                <Page>
                    {page === "deck" && <MainScreen setPage={setPage} />}
                </Page>
            )} */}

            {/* ----- Versão para 1 tela ----- */}
            {page === "home" ? <HomeScreen setPage={setPage} /> : <MainScreen setPage={setPage} />}
        </div>
    );
}