let day;

switch (new Date().getDay()) {

    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday"
        break;
    case 7:
        day = "Sunday";
        break;

}

console.log("Today is : " + day);


let name;
let student;
switch (student = "tayyab") {
    case "Abubakar":
        name = "This is first student";
        break;
    case "tayyab":
        name = "This is second student";
        break;
    case "hamayun":
        name = "This is third student";
        break;
    default:
        name = "This is not a student"
}

console.log(name);