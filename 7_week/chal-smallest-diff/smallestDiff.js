/*If you sort both lists, you can then compare the smallest items of each list. Find the difference between each smallest item.

If it’s zero, we know we can never do better than that, so we can quit with 0.

Otherwise, remember the smallest-diff seen so far.

Then, for whichever list has the smaller of the two items, move to the next item in that list.

For example, for:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]

We’d sort these into:

[10, 14, 16, 18, 20]
[23, 30, 33, 54, 96]

Then, you’d find the difference between 10 and 23 (13) and remember that our best-so-far. Given that 10 is smaller than 23, we’d move to comparing 14 and 23. This has a difference of 9—an improvement!—so we’d remember that instead.

Fourteen is still less than 23, so we’d move to comparing 16 and 23, and so on.

*/

const smallestDiff = (arrOne, arrTwo) => {
    arrOne = arrOne.sort((a, b) => a - b)
    arrTwo = arrTwo.sort((a, b) => a - b)

    let best = null

    let indexOne = 0
    let indexTwo = 0

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        let diff = arrOne[indexOne] - arrTwo[indexTwo]

        if (diff === 0) {
            return 0
        }

        if (best === null || diff < best) {
            best = diff
        }

        if (arrOne[indexOne] > arrTwo[indexTwo]) {
            indexTwo++
        } else {
            indexOne++
        }
    }

    return best
}

let j = [30, 23, 54, 33, 96]
let s = [10, 20, 14, 16, 18]

console.log(smallestDiff(j,s))