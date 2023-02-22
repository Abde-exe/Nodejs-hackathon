export const CardType = {
  PERS: 'Personnage',
  SPEC: 'Spéciale',
  DIST: 'Distance',
  MAL: 'Malus',
  BON: 'Bonus',
};

export const distanceCards = [
  {
    id: 0,
    name: 'Bombe bleue',
    description: '',
    type: CardType.DIST,
    distance: 25,
    number: 10,
    img: '',
  },
  {
    id: 1,
    name: "Flèche d'argent",
    description: '',
    type: CardType.DIST,
    distance: 50,
    number: 10,
    img: '',
  },
  {
    id: 2,
    name: 'Nimbus 2000',
    description: '',
    type: CardType.DIST,
    distance: 75,
    number: 10,
    img: '',
  },
  {
    id: 3,
    name: 'Eclair de feu',
    description: '',
    type: CardType.DIST,
    distance: 100,
    number: 12,
    img: '',
  },
  {
    id: 4,
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
    id: 5,
    name: 'Voiture volante',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    id: 6,
    name: 'Bague de Sureau',
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
  {
    id: 7,
    name: "Cape d'invisibilité",
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
  {
    id: 8,
    name: 'Phénix',
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
];
export const bonusCards = [
  {
    id: 9,
    name: 'Vulnera Sanentur',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 10,
    name: 'Protego',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 11,
    name: 'Balais',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 12,
    name: 'Finite Incantatem',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 13,
    name: 'Mobilicorpus',
    description: '',
    type: CardType.BON,
    number: 1,
    img: '',
  },
];
export const malusCards = [
  {
    id: 14,
    name: 'Cognard',
    description: '',
    type: CardType.MAL,
    number: 3,
    img: '',
  },
  {
    id: 15,
    name: 'Expeliarmus',
    description: '',
    type: CardType.MAL,
    number: 3,
    img: '',
  },
  {
    id: 16,
    name: 'Diffinito',
    description: '',
    type: CardType.MAL,
    number: 3,
    img: '',
  },
  {
    id: 17,
    name: 'Imobilis',
    description: '',
    type: CardType.MAL,
    number: 5,
    img: '',
  },
  {
    id: 18,
    name: 'Impedimenta',
    description: '',
    type: CardType.MAL,
    number: 4,
    img: '',
  },
];
export const characterCards = [
  {
    id: 19,
    name: 'Peter Pettigrew',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 20,
    name: 'Hermione',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 21,
    name: 'Dobby',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 22,
    name: 'Alastor Maugrey',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 23,
    name: 'Harry Potter',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 24,
    name: 'Dumbledore',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 25,
    name: 'Drago',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 26,
    name: 'Voldemort',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
];

export const allCards = [
  //distance
  {
    id: 0,
    name: 'Bombe bleue',
    description: '',
    type: CardType.DIST,
    distance: 25,
    number: 10,
    img: '',
  },
  {
    id: 1,
    name: "Flèche d'argent",
    description: '',
    type: CardType.DIST,
    distance: 50,
    number: 10,
    img: '',
  },
  {
    id: 2,
    name: 'Nimbus 2000',
    description: '',
    type: CardType.DIST,
    distance: 75,
    number: 10,
    img: '',
  },
  {
    id: 3,
    name: 'Eclair de feu',
    description: '',
    type: CardType.DIST,
    distance: 100,
    number: 12,
    img: '',
  },
  {
    id: 4,
    name: 'Foudre VII',
    description: '',
    type: CardType.DIST,
    distance: 200,
    number: 4,
    img: '',
  },
  //speciale
  {
    id: 5,
    name: 'Voiture volante',
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
  {
    id: 6,
    name: 'Bague de Sureau',
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
  {
    id: 7,
    name: "Cape d'invisibilité",
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
  {
    id: 8,
    name: 'Phénix',
    description: '',
    type: CardType.SPEC,
    number: 1,
    img: '',
  },
  //Bonus
  {
    id: 9,
    name: 'Vulnera Sanentur',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 10,
    name: 'Protego',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 11,
    name: 'Balais',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 12,
    name: 'Finite Incantatem',
    description: '',
    type: CardType.BON,
    number: 6,
    img: '',
  },
  {
    id: 13,
    name: 'Mobilicorpus',
    description: '',
    type: CardType.BON,
    number: 1,
    img: '',
  },
  //Malus
  {
    id: 14,
    name: 'Cognard',
    description: '',
    type: CardType.MAL,
    number: 3,
    img: '',
  },
  {
    id: 15,
    name: 'Expeliarmus',
    description: '',
    type: CardType.MAL,
    number: 3,
    img: '',
  },
  {
    id: 16,
    name: 'Diffinito',
    description: '',
    type: CardType.MAL,
    number: 3,
    img: '',
  },
  {
    id: 17,
    name: 'Imobilis',
    description: '',
    type: CardType.MAL,
    number: 5,
    img: '',
  },
  {
    id: 18,
    name: 'Impedimenta',
    description: '',
    type: CardType.MAL,
    number: 4,
    img: '',
  },
  //Personnage
  {
    id: 19,
    name: 'Peter Pettigrew',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 20,
    name: 'Hermione',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 21,
    name: 'Dobby',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 22,
    name: 'Alastor Maugrey',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 23,
    name: 'Harry Potter',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 24,
    name: 'Dumbledore',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 25,
    name: 'Drago',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
  {
    id: 26,
    name: 'Voldemort',
    description: '',
    type: CardType.PERS,
    number: 1,
    img: '',
  },
];