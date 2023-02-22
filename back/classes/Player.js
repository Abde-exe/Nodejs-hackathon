import { CardType } from './cardsAssets';

export class Player {
  constructor(
    pseudo = 'Harry',
    img = 'https://images.rtl.fr/~c/2000v2000/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg',
    color = '#FF0000'
  ) {
    this.pseudo = pseudo;
    this.progress = 0;
    this.img = img;
    this.color = color;
    this.hand = [];
    this.state = null;
    this.specialCards = [];
  }
  //joueur une carte
  playCard = (card, player) => {
    switch (card.type) {
      case CardType.SPEC:
        card.toSetSpecial(player)
        break;
      case CardType.BON:
        card.toSetBonus(player);
        break;
      case CardType.MAL:
        card.toSetMalus(player);
        break;
      case CardType.DIST:
        card.toProgress(player);
        break;
    }
  };
  defausse = (game, card, player) => {
    //recupere la carte dans la main
    const cardDefaussed = player.hand.find(
      (handCard) => handCard.id == card.id
    );
    //retire la carte en question
    player.hand = player.hand.filter(
      (handCard) => (handCard.id = !cardDefaussed)
    );

    //ajoute la carte a la defausse
    game.defausse.push(cardDefaussed);
  };
}
