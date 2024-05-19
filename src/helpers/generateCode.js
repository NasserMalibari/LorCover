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

export function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

export function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); 
// new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); 

export default encodeDeck;
