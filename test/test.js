var should = require('should')
  , moment = require('moment')
  , daysOfMonth = require('../')

describe('past30Days', function() {
  it('should work with utc', function() {
    var o = daysOfMonth()
    var start = moment.utc().subtract('months', 1).startOf('day')
    var end = moment.utc().startOf('day')
    var count = end.diff(start, 'days')
    o.should.have.length(count)
  })

  it('should work without utc', function() {
    var o = daysOfMonth({ utc: false })
    var start = moment().subtract('months', 1).startOf('day')
    var end = moment().startOf('day')
    var count = end.diff(start, 'days')
    o.should.have.length(count)
  })

  it('should work with a start date', function() {
    var start = moment.utc().subtract('days', 10).startOf('day')
    var o = daysOfMonth({ utc: true, start: start })
    var end = moment.utc().startOf('day')
    var count = end.diff(start, 'days')
    o.should.have.length(count)
  })

  it('should work start and end date', function() {
    var start = moment.utc().subtract('days', 45).startOf('day')
    var end = moment.utc().subtract('days', 15).startOf('day')
    var o = daysOfMonth({ utc: true, start: start, end: end })
    var count = end.diff(start, 'days')
    o.should.have.length(count)
  })
})
