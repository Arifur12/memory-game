import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard.js";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  // shufflecards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort((card) => Math.random(card) - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);

    setTurns(0);
  };
  console.log(choiceOne, "and", choiceTwo);
  // handle click
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

    // HOLYSHIT! *takes note*
    if (choiceTwo) {
      compareChoice();
      resetTurn();
    }
    console.log(choiceOne, "afterand", choiceTwo);
  };
  console.log(choiceOne, "thirdd", choiceTwo);

  const compareChoice = () => {
    if (choiceTwo === choiceOne) {
      console.log("match");
    } else {
      console.log("no match");
    }
  };
  const resetTurn = (turns) => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((turns) => turns++);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="grid-card">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
        <h2>{turns}</h2>
      </div>
    </div>
  );
}

export default App;
