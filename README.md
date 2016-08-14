# is-positive-number
[![Build Status](https://travis-ci.org/bradarv90/is-positive-number.svg?branch=master)](https://travis-ci.org/bradarv90/is-positive-number)

A javascript module that tests if an object is both a number and positive.

## Install

```
$ npm install --save is-positive-number
```


## Usage

```js
var isPositiveNumber = require('is-positive-number');

isPositiveNumber(1) // = true

isPositiveNumber(0) // = true

isPositiveNumber(1.2) // = true

isPositiveNumber(-0) // = false

isPositiveNumber(-1) // = false

isPositiveNumber(-1.2) // = false

isPositiveNumber({ a: 1 }) // throws TypeError

isPositiveNumber(false) // throws TypeError

isPositiveNumber(true) // throws TypeError
```

## Important note
This module throws a TypeError when the parameter isn't a number.
Also, this returns false for -0.
