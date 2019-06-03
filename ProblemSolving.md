Introduction to problem solve: How do you improve?
1. Devise a plan for solving problems.
2. Master common problem solving patterns.

Problem Solving Strategies:
    - Understand a Problem
    - Explore concerte example.
    - Break it down.
    - Solve / Simplify.
    - Look back and refactor.

UNDERSTAND THE PROBLEM:
    1. Can I restate the problem in my own words?
    2. What are the inputs that go into the problem?
    3. What are the outputs that should come from solution to the problem?
    4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve
        the problem? (You may not be able to answer this question until you set about solving problem).
    5. How shoul I label the important pieces of data that are a part of the problem?

EXPLORE CONCRETE EXAMPLES:
Coming up with examples can help you understand the problem better.
Examples also provide sanity checks that your eventual solution works how it should.
    1. Start with Simple Examples.
    2. Progress to more Complex Examples.
    3. Explore Examples with Empty Inputs.
    4. Explore Examples with Invalid Inputs.

BREAK IT DOWN:
Take the actual steps of the problem and write them down.
Explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

 example:
 function charCount(str){
     //do something.
     //Return an object with keys that are lowercase alphanumeric characters in the string.
 }
 function charCount(str){
     // make an object to return at end.
     //loop over string, for each character...
        //if the char is a number/ letter AND is a key in object, add one to count.
        //if the char us a number/letter AND is not in object, add it to object and set value to 1.
        //if character is something else(space, period, etc) don't do anything.
    //return object at end.
 }

SOLVE/SIMPLIFY:
Solve the problem, but if you can't, solve a simpler problem!
    SIMPLIFY:
        - Find the core difficulty in what you're trying to do.
        - Temporarily ignore that difficulty.
        - Write a simplified solution.
        - Then incorporate that difficulty back in.

