1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
getElementById is a method that return a single element by selecting only id.

getElementsByClassName is a method that return multiple elements by selecting their class name.

querySelector return the first element that matches a CSS selector.

querySelectorAll return all elements that matches a css selector.

2. How do you **create and insert a new element into the DOM**?
Answer:
document.createElement() + appendChild()

const div=document.createElement("div");
div.textContent="hello";
document.body.appendChild(div);

3. What is **Event Bubbling** and how does it work?
Answer:
event moves from child to parent.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
use one parent listener for handling its child element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
preventDefault() =stops default action
stopPropagation() =stops event bubbling