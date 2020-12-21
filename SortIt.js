var items = ["fruits and veggies", "pet waste", "leaves and yard waste", "Fats, greases and oils"];
var isItCompost = ["true", "false", "true", "false"];

function sortIt() {
    var i;
    for (var i=0; i <= items.length; i++) {
        var userInput = prompt("Please indicate if the following is compostable typing 'true' or 'false': " + " " + items[i]);

        if (userInput == isItCompost[i]) {
            alert("That is correct!")
        }
        else {
            alert("Sorry that is incorrect.")
        }
    }
}