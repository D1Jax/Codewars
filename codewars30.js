function declareWinner(fighter1, fighter2, firstAttacker) {
    let currentAttacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let otherFighter = firstAttacker === fighter1.name ? fighter2 : fighter1;
  
    while (currentAttacker.health > 0 && otherFighter.health > 0) {
        otherFighter.health -= currentAttacker.damagePerAttack;
        if (otherFighter.health <= 0) {
            return currentAttacker.name;
        }
  
        // Switch attackers
        let temp = currentAttacker;
        currentAttacker = otherFighter;
        otherFighter = temp;
    }
  
    return currentAttacker.name;
  }