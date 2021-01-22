// https://github.com/Avishek004/Basic-JavaScript

// First Project - KilometerToMeter
function kilometerToMeter(KM) {
    var Meter = KM * 1000;

    if (KM > 0) {
        return Meter;
    }
    else {
        return undefined;
    }
}
var result = kilometerToMeter(7);
console.log(result);



// Second Project - BudgetCalculator
function budgetCalculator(Seiko, Samsung, Asus) {
    var Clock = 50 * Seiko;
    var MobilePhone = 100 * Samsung;
    var Laptop = 500 * Asus;

    var TotalPrice = Clock + MobilePhone + Laptop;
    return TotalPrice;
}
var result = budgetCalculator(7, 7, 4);
console.log(result);



// Third Project - HotelCost
function hotelCost(StayingDays) {
    if (StayingDays > 0 && StayingDays <= 10) {
        var TotalCost = StayingDays * 100;
        return TotalCost;
    }
    else if (StayingDays > 10 && StayingDays <= 20) {
        var TotalCost = ((StayingDays - 10) * 80) + (10 * 100);
        return TotalCost;
    }
    else {
        var TotalCost = ((StayingDays - 20) * 50) + (10 * 80) + (10 * 100);
        return TotalCost;
    }
}
var result = hotelCost(30);
console.log(result);



// Fourth Project - MegaFriend
function megaFriend(Array) {
    var MaxString = Array[0].length;
    var Name = Array[0];
    for (var i = 1; i < Array.length; i++) {
        var Maxi = Array[i].length;
        if (Maxi > MaxString) {
            Name = Array[i];
            MaxString = Maxi;
        }
    }
    return Name;
}
var result = megaFriend(["Chan", "Monica", "Ross", "Rachel", "Joey", "Pheobe"]);
console.log(result);