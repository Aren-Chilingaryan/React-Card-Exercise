import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { CARDS } from "./helpers/constants";
import { useState } from "react";
import { createCard, sortObjectArray } from "./helpers";
import SingleCard from "./components/card";

function App() {
  const [cards, setCards] = useState(CARDS);

  useEffect(() => {
    const allCards = JSON.parse(localStorage.getItem("cards") as string);
    setCards(() => allCards);
  }, []);

  const deleteCard = (id: string) => {
    const newCards = cards.filter((item) => item.id !== id);
    setCards(newCards);
    localStorage.clear();
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  const addCard = () => {
    cards.push(createCard());
    setCards([...cards]);
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  const sortCards = () => {
    localStorage.clear();
    sortObjectArray(cards);
    setCards([...cards]);
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  return (
    <div>
      <Header addCard={addCard} sortCards={sortCards}></Header>
      <div id="scroll">
        <header id="instructions">
          <p>(Instructions)</p>
        </header>
        {cards.map((card) => (
          <SingleCard
            number={card.innerNumber}
            deleteCard={() => deleteCard(card.id)}
          ></SingleCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
