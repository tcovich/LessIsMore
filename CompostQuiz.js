function buildQuiz() {
    var item = prompt("What item would you like to recycle?");
    var scraps = prompt("Does your item contain leftover food scraps?");

    if (scraps == "yes") {
        alert("Your item is not recyclable until scraps are cleaned off.");
    }
    var plastics = prompt("Does your item contain plastics?")
    if (plastics == "yes") {
        alert("Your item is safe to recycle as long as it contains the universal recycling symbol.")
    }
   var glass = prompt("Does your item contain glass?"); 
    if (glass == "yes") {
        alert("Your item is recyclable as long it is a jar or beverage bottle.");
    }
    var steel= prompt("Does your item contain steel or aluminum?");
    if (steel == "yes") {
        alert("Your item is recyclable as long it has been throroughly rinsed first.")
    }
} 