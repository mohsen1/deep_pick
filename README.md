Deep Pick
=========

[![Build Status](https://travis-ci.org/mohsen1/deep_pick.svg)](https://travis-ci.org/mohsen1/deep_pick)

Underscore Deep Pick Plugin

Makes it easy to pick deep inside an object. It's very similiar to XSLT. You need ro provide a schema that defines hieriachy of keys you need in your output instead of a list of keys that you use in regular `_.pick`.

### Example

``` javascript
var input = {
  one: 1,
  two: true,
  three: 'Three',
  four: [1,2,3,4],
  five: {
    alpha: 1,
    beta: 2,
    gamma: 3,
    teta: {
        alef: 1,
        beh: 2,
        peh: 3
    }
  },
  answer: '42.00',
  description: 'This is an object.'
};


var schema = {
  one: true,
  three: true,
  five: {
    alpha: true,
    teta: {
      beh: true
    }
  }
};

deepPick(input, schema); // =>

{
  one: 1,
  three: "Three",
  five: {
    alpha: 1,
    teta: { 
      beh: 2
    }
  }
}
```

### Array Support Example
```
var arr = [
  {
    blue: 100,
    green: 400,
    red: 300,
    grey: 200
  },
  {
    blue: 10,
    green: 40,
    red: 30,
    grey: 20
  },
  {
    blue: 1,
    green: 4,
    red: 3,
    grey: 2
  },

];

var arrSchema = [{blue: true}];

_.deepPick(arr, arrSchema)) // =>
  [
    {
      blue: 100
    },
    {
      blue: 10
    },
    {
      blue: 1
    }
  ]
```

### Available in NPM and Bower

```
npm install deep_pick
```

```
bower install deep_pick
```

### License 
MIT
