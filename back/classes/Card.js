export class Card {
  constructor(name, description, type, number, img) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.number = number;
    this.img = img;
  }
}

export class DistanceCard extends Card {
  constructor(name, description, type, number, img, distance) {
    super(name, description, type, number, img);
    this.distance = distance;
  }
  toProgress(player) {
    player.progress += this.distance;
  }
}

export class SpecialCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}
export class BonusCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}

export class MalusCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}
export class CharacterCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}

export const CardType = {
  PERS: 'Personnage',
  SPEC: 'Spéciale',
  DIST: 'Distance',
  MAL: 'Malus',
  BON: 'Bonus',
};

export const distanceCards = [
  {
    name: 'Bombe bleue',
    description: '',
    type: CardType.DIST,
    distance: 25,
    number: 10,
    img: '',
  },
  {
    name: "Flèche d'argent",
    description: '',
    type: CardType.DIST,
    distance: 50,
    number: 10,
    img: '',
  },
  {
    name: 'Nimbus 2000',
    description: '',
    type: CardType.DIST,
    distance: 75,
    number: 10,
    img: '',
  },
  {
    name: 'Eclair de feu',
    description: '',
    type: CardType.DIST,
    distance: 100,
    number: 12,
    img: '',
  },
  {
    name: 'Foudre VII',
    description: '',
    type: CardType.DIST,
    distance: 200,
    number: 4,
    img: '',
  },
];
export const specialCards = [
  {
    name: 'Voiture volante',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Bague de Sureau',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: "Cape d'invisibilité",
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Phénix',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
];
export const bonusCards = [
  {
    name: 'Vulnera Sanentur',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Protego',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Balais',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Finite Incantatem',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Mobilicorpus',
    description: '',
    type: CardType.BON,
    number: 1,
  },
];
export const malusCards = [
  {
    name: 'Cognard',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Expeliarmus',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Diffinito',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Imobilis',
    description: '',
    type: CardType.MAL,
    number: 5,
  },
  {
    name: 'Impedimenta',
    description: '',
    type: CardType.MAL,
    number: 4,
  },
];
export const characterCards = [
  {
    name: 'Peter Pettigrew',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Hermione',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dobby',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Alastor Maugrey',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Harry Potter',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dumbledore',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Drago',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Voldemort',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
];

export const allCards = [
  //distance
  {
    name: 'Bombe bleue',
    description: '',
    type: CardType.DIST,
    distance: 25,
    number: 10,
    img: '',
  },
  {
    name: "Flèche d'argent",
    description: '',
    type: CardType.DIST,
    distance: 50,
    number: 10,
    img: '',
  },
  {
    name: 'Nimbus 2000',
    description: '',
    type: CardType.DIST,
    distance: 75,
    number: 10,
    img: '',
  },
  {
    name: 'Eclair de feu',
    description: '',
    type: CardType.DIST,
    distance: 100,
    number: 12,
    img: '',
  },
  {
    name: 'Foudre VII',
    description: '',
    type: CardType.DIST,
    distance: 200,
    number: 4,
    img: '',
  },
  //speciale
  {
    name: 'Voiture volante',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Bague de Sureau',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: "Cape d'invisibilité",
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Phénix',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  //Bonus
  {
    name: 'Vulnera Sanentur',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Protego',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Balais',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Finite Incantatem',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Mobilicorpus',
    description: '',
    type: CardType.BON,
    number: 1,
  },
  //Malus
  {
    name: 'Cognard',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Expeliarmus',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Diffinito',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Imobilis',
    description: '',
    type: CardType.MAL,
    number: 5,
  },
  {
    name: 'Impedimenta',
    description: '',
    type: CardType.MAL,
    number: 4,
  },
  //Personnage
  {
    name: 'Peter Pettigrew',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Hermione',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dobby',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Alastor Maugrey',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Harry Potter',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dumbledore',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Drago',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Voldemort',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
];

// create all cards
export const createCards = () => {
  let cardList = [];

  //create distance cards
  distanceCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new DistanceCard(
        card.name,
        card.description,
        card.number,
        card.type,
        card.img,
        card.distance
      );
      cardList.push(newCard);
    }
  });
  //create special cards
  specialCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new SpecialCard(
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  //create bonus cards
  bonusCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new BonusCard(
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  //create malus cards
  malusCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new MalusCard(
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  //create character cards
  characterCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new CharacterCard(
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  cardList = shuffleArray(cardList);
  console.log('cardList', cardList.length);
  return cardList;
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

createCards();
