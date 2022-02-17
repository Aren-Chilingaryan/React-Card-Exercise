import Header from "./components/header";
import Footer from "./components/footer";
import { createCardData, sortCards } from "./helpers";
import SingleCard from "./components/card";
import { Card } from "./helpers/interfaces";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const allCards = JSON.parse(localStorage.getItem("cards") as string);
    setCards(allCards);
  }, []);

  const deleteCard = (id: string) => {
    const newCards = cards.filter((item) => item.id !== id);
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  const addCard = () => {
    cards.push(createCardData());
    setCards([...cards]);
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  const sortCardsArray = () => {
    localStorage.clear();
    sortCards(cards);
    setCards([...cards]);
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  return (
    <div>
      <Header addCard={addCard} sortCards={sortCardsArray}></Header>
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
};

export default App;
