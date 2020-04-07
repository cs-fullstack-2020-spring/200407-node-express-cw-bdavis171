// Node and Express CW

// reference express
let express = require('express');

// create an express server
let app = express();

// Exercise 1:

// define a route for the root
app.get('/',(req, res) => {
    // display the text 'Welcome to my node + express server'
    res.send('Welcome to my node + express server');
})

// Exercise 2:

// define a variable and set it equal to your name
let userName = 'Brandon';

// define a route called '/displayName'
app.get('/displayName', (req,res) => {
    // display the userName variable
    res.send(`The name's ${userName}`);
})

// Exercise 3:

// create an array of student objects with properties name and average confidence
let studentArray = [{name: 'Brandon', confidence:'High'},{name:'Dewayne', confidence:'Medium'},{name:'Seth',confidence:'High'},{name:'Ciara',confidence:'Low'}];

// define a route called '/student/:id'
app.get('/student/:id', (req,res) => {
    // display the student whose index matches the number passed into the url
    studentArray.forEach(
        (student,index) => {
            if (index == req.params.id){
                res.send(`Student Name: ${student.name}, Student Confidence: ${student.confidence}`);
            }
        }
    )
})

// Exercise 4:

// define a route called '/allStudents'
app.get('/allStudents', (req,res) => {
    // display all elements of the previously defined studentArray
    res.send(
        `<div>
        ${studentArray.map(
            (student) => {
                return (`Name: ${student.name},Confidence: ${student.confidence}\r\n`);
            }
        )}
        </div>`
    )
    
})

// listen to the server
app.listen(1997, 'localhost', () => {
    // sanity
    console.log('Port 1997 is being listened to');
});