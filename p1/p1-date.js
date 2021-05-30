/*
    CIT 281 Project 1
    Name: Elizabeth Yost
*/
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let today = new Date()
console.log(daysOfWeek[(today.getDay())- 1])