import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import Deck from "./components/Deck";

export default function App(){
    const [page, setPage] = useState("home");
    return(
        <div className="content">
            {page === "home" ? <HomeScreen setPage={setPage} /> : <Deck setPage={setPage} />}
        </div>
    );
}