/*Big O Notation is a system got generalizing code and talking about it and comparing code and it's performance to other pieces of code.
    We can have a numeric representation of the performance of code.
    *It's imporatan to have a precise vocabulary to talk about how our code performs, So even if you're content with your solution to something
    it's helpful to be able to understand how it compares or how it performs compared to other.
    Useful for discussing trade-offs between different approches.
    When you code slows down or crashes, identifying parts of the code that are inefficient can help us pain points in our apps
    It comes up in interviews!! Understand you code.
*/
//TIME OUR CODE:Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

//Very straight forward solution where there is a loop involved. n operations!
function addUpTo(n){
    let total = 0
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
console.log(addUpTo(6))

//Mathematical solution. There's no loop involved. Less intuitive. 3 operations.
function addUpto2(n){
    return n * (n + 1) / 2
}

console.log(addUpto2(6));

//The Problem with time:
/**Different machines will record different times.
 * The same machine will record different times.
 * For fast algorithms, speed measurements may not be precise enough?
 */

 //If not time, then what?
 /**Rather than couting senconds, which are so variable...
  * Let's count the number of simple operations the computer has to perform!
  */

/**Counting is Hard
 * Depending on what we count, the number of operations can be as low as 2n, or as high as 5n + 2
 * But regardless of the exact number, the number of operations grows roughly proportionally with n.
 * Rather than counting seconds, which are so variable, Let's count the number of simple operations the computer has to performe.
 */


 /**=======INTRODUCING BIG O===========
  * Big O Notation is a way to formalize fuzzy counting.
  * It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
  * We don't care about details we only care about trends.
  *
  * We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than constant times f(n),
  * as n increses.
  *
  * Constants Don't Matter!!
  *  0(2n) NO!  just 0(n);
  *
  */

/**Space Complexity
 *  So far, we've been focusing on time complexity: How can we analyze the runtime of an algorithm as the size of the inputs increases?
 *
 * We can also use big O notation to analyze space complexity: How much additional memory do we need to allocate in order to run the code
 * in our algorithm? Here we talk about auxilary space complexity when talking about space complexity.
 *
 *SPACE COMPLEXITY IN JS : RULES OF THUMB:
    - Most primitives(booleans, numbers, undefined, null) are constant space.
    - Strings require O(n) space (where n is the string length).
    - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects);

    Example of space complexity:
 */
function sum (arr){
    let total = 0; //<<--- One number(space)
    for(let i = 0; i < arr.length; i++){// we are not looking at time it takes to execute. let i = 0 inside is the only space that counts in this loop.
        total += arr[i];
    }
    return total;
}
//What are the things that take up space, not time, in the previous example!? The two variables, let total and let i are the space in the algorithm
/*arr can be 10, 50 or a 1000, it doesn't have an impact on space that's taken up because we only have these two variables and the exist no
matter what. So what this really means is that we have constant pace, O(1) space! It's always the same, no matter the size of the input.*/

//ANOTHER EXAMPLE:
function doble(arr){
    let newArr = [];//makes new arr;
    for(let i = 0; i < arr.length; i++){
        newArr.push(2*arr[i]);// multiples each item and makes newArr;
    }
    return newArr; //n numbers.
}
//**The space that's taken up is directly proportionate to N to input array. So n numbers we get 0(n) space!
/**Big O RECAP:
 *  To analyze the performance of an algorithm, we use Big O Notation.
 *  Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
 *  Big O Notation doesn't care about precision, only about general trends(linear? quadratic? constant?)
 *  The time or space complexity (as measured by Big O) depends only on the algorithm not the harware used to run the algorithm.
 */