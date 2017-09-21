alert("Welcome to JS class")

var student = "zhiwei"

var student_1 = "zhiwei"
var student_2 = "bala"

var welcome_msg = "Hi, We are friends.." + student_1 + "," + student_2
console.log(welcome_msg)

function greet(nameOfPerson) {
    var greeting_message = "Welcome, Mr" + nameOfPerson
    console.log(greeting_message)
}

greet("Bala")

greet("zhiwei")

greet("kenneth")

function joinNames(input_1, input_2) {
    var join_string = input_1 + " " + input_2
    var advanced_string = input_1 + input_1 + " | " + input_2 + input_2
    return join_string

}

console.log(joinNames("zhiwei", "bala"))