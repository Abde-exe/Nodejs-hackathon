export function checkSpecialCardAgainstMalus(specialCard, malus) {
    switch (malus) {
        case "Cognard":
            return specialCard === "Cape invisible";
            break;
        case "Diffindo":
            return specialCard === "Phenix";
            break;
        case "Impedimenta":
            return specialCard === "Voiture volante";
            break;
        case "Expeliarmus":
            return specialCard === "Baguette de sureau";
            break;
        default:
            return false;
    }
}