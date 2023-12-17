# Recursion Demo - The Odin Project

This is a demo of recursion algorithms (fibonacci Seaquence, merge sort) written in Javascript for the Odin Project.

To run the code simply clone this repo, then go into either Assignment folder and run the following in your terminal:

CMD:

```
    node nameOfFile -input
```

Instead of nameOfFile put the filesname and instead of input the needed testing data (if applicable).

## Folder Struture

```
    /.git           -> This git repository
    Assignment 1
        fibs.js         -> Function for the fibonacci sequence.
        fibsRec.js      -> Recursive function for the fibonacci sequence.
    Assignment 2
        mergeSort.js    -> Recursive merge sort algorithm
    README.md       -> This readme file
```

## Key Concepts

### Recursion

Recursion is the concept of a function calling itself until some sort of parameter is fullfilled (otherwise it would run forever). It took me a good while to get my head around how this works in practice. Its not difficult to image this going one level deep but when you start going a few levels deep its very difficult for me to visualize it.

The two algorithms contained in this project are the fibonacci sequence and merge sort. Both of these can be implemented with recursion in a way that helps you understand the concept and show you how powerful it can be when solving certain problems. Lets go a little more in depth on these two algorithms.

### Sorting

In this project, we implemented the merge sort algorithm. The implementation is contained in mergeSort.js with the following code.

JS:

```
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    function merge(left, right) {
        let sortedArr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sortedArr.push(left.shift());
            } else {
                sortedArr.push(right.shift());
            }
        }
        return [...sortedArr, ...left, ...right];
    }
```

#### Detailed Breakdown

mergeSort Function:

- The mergeSort function takes an array (arr) as an input for sorting.
- If the array is empty or contains only one element, it is considered sorted and returned as is.
- The function calculates the middle index of the array and splits the array into two halves, left and right.
- Each half is recursively sorted by calling mergeSort on them.
- Finally, the sorted halves are merged using the merge function and the merged array is returned.
  merge Function:

merge Function:

- The merge function is designed to merge two sorted halves of an array, named left and right.
- It initializes an empty array, sortedArr, which will store the merged and sorted elements.
- The function enters a while loop, which continues as long as both left and right arrays have elements.
- Inside the loop, the first elements of left and right are compared. The smaller of the two is removed from its original array (using shift()) and added to sortedArr.
- Once the loop exits (when either left or right is empty), the remaining elements in left and right are concatenated to sortedArr. This step ensures that any remaining elements (which are already sorted) are included.
- The function returns the fully merged and sorted array.
- This implementation of merge sort efficiently sorts an array in O(n log n) time complexity, making it effective for larger datasets.

### Fibonacci Sequence

To showcase how recursion is different to other concepts I implemented the fibonacci sequence generator using both recursion and a more traditional loop. Lets look at our loop implementation first:

JS:

```
    const fibs = (num) => {
        let fibs = [0, 1];

        for (var i = 0; i < num - 2; i++) {
            fibs.push(fibs[i] + fibs[i + 1]);
        }
        return fibs;
    };

```

#### Detailed breakdown:

fibs Function:

- Here we define a fibs function that takes some number as its input.
- It then starts out with the first two number in the sequence 0 and 1.
- Then we loop from 0 until the number we inputed - 2 (to take into account the first two numbers)
- Push result of the fibs[i] + fibs[i + 1] into our fibs array.
- When the loop ends we return the entire fibs array.

Now lets look at the recursive implemntation:

JS:

```
    const fibsRec = (num) => {
        if(num === 0) return [0]
        if(num === 1) return [0,1]

        let fibs = fibsRec(num - 1);

        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

        return fibs;
    };
```

#### Detailed breakdown:

The fibsRec function is designed to return the first num elements of the Fibonacci sequence.

It is a recursive function, meaning it calls itself with different arguments to achieve its goal.
Code Breakdown

- fibsRec is declared as a constant and is an arrow function that takes a single argument num.
- The function first checks if num is 0 or 1, which are its base cases:
- If num is 0, the function returns an array containing just 0. This represents the Fibonacci sequence for the zeroth element.
- If num is 1, it returns an array [0, 1], representing the first two elements of the Fibonacci sequence.
  Recursive Case:
- If num is greater than 1, the function proceeds to its recursive case:
- It calls itself with num - 1, effectively asking for the Fibonacci sequence up to the number one less than the current num.
- The result of this recursive call is stored in fibs.
- After receiving the Fibonacci sequence up to num - 1, the function extends this sequence by one more element:
- It calculates the next Fibonacci number by adding the last two elements of the fibs array.
- This new number is then appended to the fibs array using the push method.
- Finally, the function returns the fibs array, which now contains the Fibonacci sequence up to the numth element.

## Final Notes

Overall this project was a great way to wrap my head around recursion as a concept. Using two wildy different examples was good and seeing how the solution can be implemented without recursion helped as well. Feel free to clone this repo and play around with the code!
