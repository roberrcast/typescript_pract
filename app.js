var input = {
    year: "1989",
    month: "09",
    day: "26",
};
var birthDate = new Date("".concat(input.year, "-").concat(input.month, "-").concat(input.day));
var today = new Date();
var calculateAge = function (birthDate, today) {
    var age = today.getFullYear() - birthDate.getFullYear();
    var currentMonth = today.getMonth() + 1;
    var birthMonth = birthDate.getMonth() + 1;
    var currentDay = today.getDate();
    var birthDay = birthDate.getDate();
    if (currentMonth < birthMonth) {
        age -= 1;
    }
    else if (birthMonth === currentMonth) {
        if (currentDay < birthDay) {
            age -= 1;
        }
    }
    return "Su edad es ".concat(age, " a\u00F1os");
};
console.log(calculateAge(birthDate, today));
