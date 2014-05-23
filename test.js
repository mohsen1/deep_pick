_ = require('underscore');
require('./index.js');

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


console.assert(
  JSON.stringify(_.deepPick(input, schema)) ===
  '{"one":1,"three":"Three","five":{"alpha":1,"teta":{"beh":2}}}'
);
