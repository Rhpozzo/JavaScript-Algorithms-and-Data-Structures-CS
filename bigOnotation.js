/*Big O Notation is a system got generalizing code and talking about it and comparing code and it's performance to other pieces of code.
    We can have a numeric representation of the performance of code.
    *It's imporatan to have a precise vocabulary to talk about how our code performs, So even if you're content with your solution to something
    it's helpful to be able to understand how it compares or how it performs compared to other.
    Useful for discussing trade-offs between different approches.
    When you code slows down or crashes, idenfifying parts of the code that are inefficient can help us pain ponts in our apps
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