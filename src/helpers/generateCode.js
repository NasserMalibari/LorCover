const { DeckEncoder, Deck, Card } = require('runeterra');

// input: array of cardcodes
// output: runterra deck code (string)
const encodeDeck = (cardArray) => {
  let cardObjArray = cardArray.map(card => new Card(card, 1));
  let code = DeckEncoder.encode(cardObjArray);
  // console.log(code);
  return code;
}

export const decodeDeck = (code) => {
  const deck = DeckEncoder.decode(code);
  return deck.map((card) => {return card.code})
  // let cardObjArray = cardArray.map(card => new Card(card, 1));
  // let code = DeckEncoder.encode(cardObjArray);
  // // console.log(code);
  // return code;
}



export const cardArrayToDeckCode = (champions, followers) => {
  let champsList = Object.entries(champions)
    .filter(([key, value]) => value.completed === true)
    .map(([key, value]) => (new Card(key, 1)));

  let followersList = Object.entries(followers)
  .filter(([key, value]) => value.completed === true)
  .map(([key, value]) => (new Card(key, 1)));

  return(DeckEncoder.encode(champsList.concat(followersList)));

}

export default encodeDeck;
