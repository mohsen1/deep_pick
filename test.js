_ = require('underscore');
_.mixin({ deepPick: require('./') });

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
  four: [true],
  five: {
    alpha: true,
    teta: {
      beh: true
    }
  },
  six: [
    {
      lamba: true
    }
  ]
};

console.assert(
  JSON.stringify(_.deepPick(input, schema)) ===
  '{"one":1,"three":"Three","four":[1,2,3,4],"five":{"alpha":1,"teta":{"beh":2}}}'
);


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

console.assert(
  JSON.stringify(_.deepPick(arr, arrSchema)) ===
  '[{"blue":100},{"blue":10},{"blue":1}]'
);


var complex = {
  java: 1,
  scala: 2,
  javascript: {
    ignore: true,
    description: 'complex object',
    extra: 'yes',
    coffeescript: [
      {
        iced_coffee: '*',
        capuchino: '*',
        mocha: '*'
      },
      {
        iced_coffee: '#',
        capuchino: '#',
        mocha: '#'
      },
      {
        iced_coffee: '&',
        capuchino: '&',
        mocha: '&',
        extra_key: '&'
      }
    ],
    typescript: [
      {
        microsoft: '%',
        open_source: '%'
      },
      {
        microsoft: '$',
        open_source: '$'
      },
      {
        microsoft: '@',
        open_source: '@'
      },
      {
        microsoft: '!',
        open_source: '!',
        extra_key: '4'
      }
    ]
  }
};

var complexSchema = {
  java: true,
  javascript: {
    coffeescript: [{mocha: true}],
    typescript: [{open_source: true}]
  }
};

console.assert(
  JSON.stringify(_.deepPick(complex, complexSchema)) ===
  '{"java":1,"javascript":{"coffeescript":[{"mocha":"*"},{"mocha":"#"},{"mocha":"&"}],"typescript":[{"open_source":"%"},{"open_source":"$"},{"open_source":"@"},{"open_source":"!"}]}}'
);
