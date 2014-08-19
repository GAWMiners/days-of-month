# days-of-month

Simple utility for getting the ordered days in a month to make charting easier

## Install

```bash
$ npm install --save days-of-month
```

## Tests

```bash
$ npm test
```

## API

### daysOfMonth(opts: Object)

`opts` can have the following:

###### `utc` : Boolean

should this be calculated using utc

Default: `true`

###### `start` : String, Date, Moment

the start date

Default: 1 month ago

###### `end` : String, Date, Moment

the end date

Default: today

#### Example

```js
var daysOfMonth = require('days-of-month')
daysOfMonth()
// => [ 1405728000000,
// => 1405814400000,
// => 1405900800000,
// => 1405987200000,
// => 1406073600000,
// => 1406160000000,
// => 1406246400000,
// => 1406332800000,
// => 1406419200000,
// => 1406505600000,
// => 1406592000000,
// => 1406678400000,
// => 1406764800000,
// => 1406851200000,
// => 1406937600000,
// => 1407024000000,
// => 1407110400000,
// => 1407196800000,
// => 1407283200000,
// => 1407369600000,
// => 1407456000000,
// => 1407542400000,
// => 1407628800000,
// => 1407715200000,
// => 1407801600000,
// => 1407888000000,
// => 1407974400000,
// => 1408060800000,
// => 1408147200000,
// => 1408233600000,
// => 1408320000000 ]
```

### Author

Evan Lucas

### License

MIT (See `LICENSE` for more info)
