Deep Pick
=========

Underscore Deep Pick Plugin

Makes it easy to pick deep inside an object. It's very similiar to XSLT. You need ro provide a schema that defines hieriachy of keys you need in your output instead of a list of keys that you use in regular `_.pick`.

### Example

``` javascript
var input = {
  one: 34,
  two: true,
  three: 'Three',
  four: [1,2,3,4],
  five: {
    alpha: 1,
    beta: 2,
    gamma: 3
  },
  answer: '42.00',
  description: 'This is an object.'
};


var schema = {
  one: true,
  three: true,
  five: {
    beta: true
  }
};

deepPick(input, schema); \\ =>

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

### License 
MIT
