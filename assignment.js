function kilometerToMeter(KM) {
    var Meter = KM * 1000;

    if (Meter > 0) {
        return Meter;
    }
    else {
        console.log("Can Not Possible");
    }
}
var result = kilometerToMeter(7);
console.log(result);



function budgetCalculator(Seiko, Samsung, Asus) {
    var Clock = 50 * Seiko;
    var MobilePhone = 100 * Samsung;
    var Laptop = 500 * Asus;

    var TotalPrice = Clock + MobilePhone + Laptop;
    return TotalPrice;
}
var result = budgetCalculator(7, 7, 4);
console.log(result);



function hotelCost(StayingDays) {
    if (StayingDays <= 10) {
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




function megaFriend(Array) {
    var MaxString = Array[0].length;
    var Ans = Array[0];
    for (var i = 1; i < Array.length; i++) {
        var Maxi = Array[i].length;
        if (Maxi > MaxString) {
            Ans = Array[i];
            MaxString = Maxi;
        }
    }
    return Ans;
}
var result = megaFriend(["Chan", "Monica", "Ross", "Rachel", "Joey", "Pheobe"]);
console.log(result);