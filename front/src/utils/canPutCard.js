import { CardType } from "./cardTypeEnum";

export function canPutCard(player, card) {
    if (player.me) {
        if (card.type === CardType.SPEC || card.type === CardType.PERS) {
            return true
        } else if(card.type === CardType.DIST) {
            if(player.state.type === CardType.MAL){
                if(player.state?.name === "Impedimenta"){
                    return card.distance <= 50
                }
                return false
            }
            return true
        } else if (card.type === CardType.BON) {
            switch (player.state?.name) {
                case "Cognard":
                    return card.name === "Vulnera Sanentur";
                    break;
                case "Expeliarmus":
                    return card.name === "Protego";
                    break;
                case "Diffinito":
                    return card.name === "Reparo";
                    break;
                case "Imobilis":
                    return card.name === "Finite Incantatem";
                    break;
                case "Impedimenta":
                    return card.name === "Mobilicorpus";
                    break;
                default:
                    return false
                    break;
            }
        }
    } else {
        if (card.type === CardType.MAL) {
            switch (player.state?.name) {
                case "Vulnera Sanentur":
                    return card.name === "Cognard";
                    break;
                case "Protego":
                    return card.name === "Expeliarmus";
                    break;
                case "Reparo":
                    return card.name === "Diffinito";
                    break;
                case "Finite Incantatem":
                    return card.name === "Imobilis";
                    break;
                case "Mobilicorpus":
                    return card.name === "Impedimenta";
                    break;
                default:
                    return true
                    break;
            }
        }
        return false
    }
}