# Unexpected NaN in JavaScript Function

This repository demonstrates a common JavaScript issue where comparing null and undefined values using loose equality (==) can lead to unexpected results, particularly when dealing with numeric operations.

## Bug Description
The function `foo` intends to return 0 if the input `x` is null, and x+1 otherwise. However, when called with `undefined`, it unexpectedly returns NaN instead of 0.  This is because `undefined + 1` results in `NaN`.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js` using a JavaScript environment (e.g., Node.js).
3. Observe the unexpected NaN output for `foo(undefined)`.

## Solution
The solution involves using strict equality (===) to distinguish between null and undefined values for proper handling.

## Solution Description
The `bugSolution.js` file provides a corrected version of the `foo` function that uses strict equality (===) to handle null and undefined separately, ensuring the expected 0 output in both cases.