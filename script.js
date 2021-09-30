
var friends = ['Altair', 'Rose', 'Tycho', 'Aidan', 'Raleigh'];

var locations = ['Kitchen', 'Library', 'Parlor', 'Dining Room', 'Bedroom', 
'Ballroom', 'Garden', 'Study', 'Hall', 'Dungeon'];

var weapons = ['Knife', 'Gun', 'Sword', 'Poison', 'Rope',
'Axe', 'Spear', 'Bow', 'Mace', 'Hammer',
'Fireball', 'Magic Missile', 'Cone of Cold', 'Divine Smite', 'Lightning Bolt',
'Acid Pit', 'Brain-Eating Virus', 'Spike Trap', 'Starving Tiger', 'Rockslide'];


/*for (var i = 1; i <= 100; i++) {
    var testId = document.getElementById('accusation' + i);
    testId.id = i.toString();
    testId.addEventListener('click', function () {
        var j = event.target;
        console.log(j.id);
    });
}*/

function caseFileMaker() {
    for (var i = 1; i <= 100; i++) {
        var accusationID = document.getElementById('accusation' + i);
        accusationID.id = i.toString();
        accusationID.addEventListener("click", function accusationMaker () {
            i = event.target.id;
        if (i <= 20) {
            var friendName = friends[0];
            var weaponChoice = weapons[i - 1];
        } else if (i > 20 && i <= 40) {
            var friendName = friends[1];
            var weaponChoice = weapons[i - 21];
            
        } else if (i > 40 && i <= 60) {
            var friendName = friends[2];
            var weaponChoice = weapons[i - 41];
            
        } else if (i > 60 && i <= 80) {
            var friendName = friends[3];
            var weaponChoice = weapons[i - 61];
            
        } else if (i > 80 && i <= 100) {
            var friendName = friends[4];
            var weaponChoice = weapons[i - 81];
            
        }
        
            var accusationChoice = event.target.textContent;
            var remainder = i % 10;
            var locationName = locations[remainder];
            
            alert(`${accusationChoice}: I accuse ${friendName}, with the ${weaponChoice}, in the ${locationName}!`);
            return accusationMaker;
            //console.log(accusationChoice, friendName, locationName, weaponChoice);
        });
        }
}

caseFileMaker();


