---
title: NaN Problems
slug: nan-problems
desc: ""
date: 2024/01/07
author: Liam Pulsifer
tags: programming,software,javascript,bug report
display: true
---

I had an interesting discussion with a coworker the other day—they're new to Javascript and while working on some new application code, they ran into
a function that I had written a while back looking something like this:

```js
function removeItem(arr, item) {
	const itemIndex = arr.indexOf(item);

	if (itemIndex > -1) {
		arr.splice(itemIndex, 1);
	}
	return arr;
}
```

It's a pretty simple function that takes in an array and removes the passed-in item from it, if it's present, then returns the modified array.
I wrote it mainly to avoid having to write the `indexOf/splice` combo over and over again, but it does the trick nicely and allows me to avoid
the most annoying feature of `Array.prototype.splice`, that it returns the removed elements rather than the modified array.
My coworker noticed a potential issue with this function, though. It doesn't work with `NaN`, Javascript's representation of the non-number result
of a numeric calculation—that is, an expression like `1 + 'a'`. When you call `removeItem` with `NaN` as the item to be removed,
nothing happens, even when `NaN` is in the array.

```js
const myArray = [1, 2, 3, NaN, 5];
removeItem(myArray, NaN);

myArray // [1, 2, 3, NaN, 5], where my coworker expected it to be [1, 2, 3, 5]
```

The reason for this is simple, at least initially. [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
doesn't work with `NaN`. That's because `indexOf` uses strict equality to determine if an element is contained in an array, and
`NaN === NaN` always evaluates to `false` (we'll get to exactly why that is later). In my coworker's mind, this indicated a bug,
 as `NaN` can be an element of arrays, but `removeItem` didn't work for it.

Astute readers will already have noticed that I've skimmed over a couple of important questions that we really need to answer before we can decide if
this behavior is truly a bug or not, namely stuff like
- What kind of "items" do we expect to be able to remove from arrays with this function?
- What does it mean for an item to be *in* an array?

but for the sake of telling this story in the same fashion it came to me, let's put a pin in those and come back to them a little later.

I wasn't included on the initial discussions about this issue, and I ended up getting looped in when I saw what my coworker had decided to do to
fix the issue for their use case. In fact, that fix had caused a production bug, and it looked something like this:
 
```js
function removeItem(arr, item) {
	let itemIndex = -1;
	if (!isNaN(item)) {
		itemIndex = arr.indexOf()
	}
	else {
		for (let i = 0; i < arr.length; i++) {
			if (isNaN(arr[i])) {
				itemIndex = i;
				break;
			}
		}
	}
	
	if (itemIndex > -1) {
		arr.splice(itemIndex, 1);
	}
	return arr;
}
```

Seems reasonable enough—we add a special case for when the item to be removed is `NaN` and do a direct iterative approach to searching for 
that element as `indexOf` won't work. Unfortunately, it's not quite so simple.
Some necessary background information here: `isNaN` is a function on the JavaScript `window` object that identifies whether an element is `NaN`.
However, this function always returns `true` when the item passed to it is not already a `Number`. So,

```js
const maybeNums = [1, 2, 3, Nan, 5];

removeItem(maybeNums, NaN); // Works fine for arrays with just numbers of `NaN`

const mixedArray = [1, {}, 'hello', NaN, 5];
removeItem(mixedArray, NaN); // [1, 'hello', NaN, 5] 
```

Do you see why? In the `else` branch above, we iterate until `isNan(arr[i]) === true`, but it always evaluates to `true` for non-numbers, so we
remove the empty object instead of the "number NaN".

# TODO: Describe solutions, etc.