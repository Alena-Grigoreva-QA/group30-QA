let user_name = "Alyona"
let age = 51
console.log(user_name)
console.log(age)
let person = user_name + ", " + age 
console.log(person)
let work_period = 10
let start_job = age - work_period
let morning = false
console.log("morning =", morning, typeof(morning))
let evening = false
console.log("evening =", evening, typeof(evening))
let apples = 15
let cherries = 20
let compare = apples == cherries
console.log("compare =", compare)
if (compare) {
    console.log("Compare is", compare)
} else if (apples == 15) {
    console.log("apples ==", apples)
} else {
    console.log("!! Compare is", false)
}