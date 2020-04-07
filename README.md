# 20-04-07 Node and Express CW

#### Attempt this assignment without looking back at your notes first

### Set Up
- Create a JS file called `index.js`
- Generate the `package.json` file by running `npm init` in the terminal (accept all defaults)
- Install express by running `npm install express` in the terminal
- You should see `express` added as a dependency in your `package.json` file

### Exercise 1
- Define a route for the root path that displays the text `Welcome to my node + express server`

### Exercise 2
- Define a variable `userName` and set it equal to your name
- Define a routes for the path `'/displayName'` that displays your name

### Exercise 3
- Create an array of student objects with properties name and average confidence
- Define a route for the path `'/student/:id'` that displays the student whose index position matches the number passed in the path in the browser

### Exercise 4
- Define a route for the path `'/allStudents'` that displays each element in the student object array
- Use the same array from Ex. 3