let age_1 = prompt("Please enter age_1 value");
let age_2 = prompt("Please enter age_2 value");
let age_3 = prompt("Please enter age_3 value");

const checkAge = function(age_1, age_2, age_3) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number" 
        && !isNaN(parseInt(arguments[i])) 
        ) 
        {
            //console.log(typeof arguments[i], parseInt(arguments[i]))
            arguments[i] = parseInt(arguments[i])
        } 
    else if (typeof arguments[i] == "number") {
        continue
    } else {
        return console.log("You can use only numbers for age. Your input:", age_1, age_2, age_3) 
    }
    }
    //console.log(age_1, age_2, age_3)
    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It’s less then ")
    } else if (age_1 >= age_2 & age_1 < age_3) {
        console.log("Welcome!")
    } else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }    
}

checkAge(age_1, age_2, age_3)