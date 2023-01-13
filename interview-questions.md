# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:
Object-oriented programing is a programing model designed around objects. It allows programmers to interact with small parts of code, objects, without affecting the entire program allowing for more efficiency and reusability. One example of OOP is Ruby.  

Researched answer:
Object-oriented programming (OOP) is a computer programming model that is organized around the collections of objects. Objects have data and behavior and are self-contained. This encapsulation allows for easy troubleshooting and collaboration.  OOP also makes code reusable because all data types are objects, which are defined by a class.  When develops make a change to a class, all objects will inherit the new code. OOP is different then functional programming because functional programming relies exclusively on functions. Functions are referred to as first-class-citizens in FP, which means they can be passed as arguments or returned from other functions. Object-oriented languages are good when there is a fixed set of operations on things, and developers primarily add new things/ new classes. Functional languages are good when this is a fixed set of things, and developeres primarily add new operations on existing things.

1. What is the difference between a Float and an Integer in Ruby?

Your answer:
A float has a decimal place and an integer is a whole number. An example of a float is 1.34, and an example of an integer is 1.

Researched answer:
A float or floating number represents a real number.  Real numbers can be either a rational or an irrational number, numbers that contain a fractional part, such as 1.34. A float in a Ruby program is a number that contains a decimal point.Integers are whole numbers that can be positive, negative, or 0. (…, -1, 0, 1, …)


1. Ruby has an implicit return. What does that mean?

Your answer:
An implicit return means you don't need the keyword "return."  The method will return the last line of code that is executed.

Researched answer:
Ruby has an implicit returns. This means that if a return is the last expression in a path of execution, there's no need for the return keyword.

1. What is a block in Ruby?

Your answer:
A Ruby block is an anonymous function. Blocks start with the keyword do and end with end.

Researched answer:
A Ruby block is an anonymous function that is passed to a method to determine the outcome. A block can accept input in the form of arguments (if it needs any), and will return a value, but it does not have a name.
Blocks are defined with the keywords do and end.

num = 2
num.times do
  p 'Good morning!'
end

1. How do you extract a value in a Ruby hash?

Your answer: A ruby hash is a set of unique key value pairs. To extract the value in a ruby has call on the unique key. 

Researched answer:
A hash is denoted by a set of curly braces ({}) which contains key-value pairs separated by commas. Each value is assigned to a key using a hash rocket (=>). Calling the hash followed by a key name within brackets grabs the value associated with that key.

profile = {
  "name" => "Suzie",
  "breed" => "Blue Heller",
  "obedience_level" => 1,
  "cuteness" => 10
}
"name", "breed", "obedience_level", and "cuteness" are the keys. "Suzie", "Blue Heller", "obedience_level" and "cutenss are the values.

p profile["name"] 
<!-- # => Suzie -->

## Looking Ahead: Terms for Next Week

1. Class Inheritance: allows for reusablity. Develops can use inheritance to create a specialized version of a parent class 

2. RSpec:  RSpec testing framework to Ruby on Rails 

3. CRUD: is how the interent works( create,read, update, delete_

4. Test-driven development: Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed.

5. HTTP: Hyper-text transfer protcol, website are HTTPs
