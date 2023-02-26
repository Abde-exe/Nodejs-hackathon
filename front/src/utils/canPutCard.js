export function canPutCard(player, card) {
    if (player.me) {
        if (card.type === "Spéciale" || card.type === "Personnage") {
            return true
        } else if (card.type === "Distance") {
            if (player.state.type === "Malus") {
                if (player.state?.name === "Impedimenta") {
                    return card.distance <= 50
                }
                return false
            }
            return true
        } else if (card.type === "Bonus") {
            console.log("ici",player.state.name)
            switch (player.state.name) {
                case "Cognard":
                    return card.name === "Vulnera Sanentur";
                    break;
                case "Expeliarmus":
                    return card.name === "Protego";
                    break;
                case "Diffindo":
                    return card.name === "Reparo";
                    break;
                case "Immobulus":
                    return card.name === "Mobilicorpus";
                    break;
                case "Impedimenta":
                    return card.name === "Finite Incantatem";
                    break;
                default:
                    return false
                    break;
            }
        }
    } else {
        if (card.type === "Malus") {
            if (player.state.type === "Malus") {
                return false;
            }

            switch (player.state.name) {
                case "Vulnera Sanentur":
                    return card.name === "Cognard";
                case "Protego":
                    return card.name === "Expeliarmus";
                case "Reparo":
                    return card.name === "Diffindo";
                case "Finite Incantatem":
                    return card.name === "Impedimenta";
                case "Mobilicorpus":
                    return card.name === "Immobulus";
                default:
                    break
            }

            switch (card.name) {
                case "Cognard":
                    return !player.specialCards.some(carte => carte.name === "Cape invisible");
                case "Expeliarmus":
                    return !player.specialCards.some(carte => carte.name === "Baguette de sureau");
                case "Diffindo":
                    return !player.specialCards.some(carte => carte.name === "Phenix");
                case "Impedimenta":
                    return !player.specialCards.some(carte => carte.name === "Voiture volante");
                default:
                    break
            }

            return true;
        }
        return false
    }
}