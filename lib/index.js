var moment = require('moment')

module.exports = function(opts) {
  opts = opts || {}
  var utc = opts.utc || true
  var start = opts.start || false
  var end = opts.end || false
  if (!start) {
    start = utc
      ? _oneMonthLess(moment.utc())
      : _oneMonthLess(moment())
  }

  if (!end) {
    end = utc
      ? _now(moment.utc())
      : _now(moment())
  }

  end = moment(end)
  var out = []
  var d = moment(start)
  while (d.isBefore(end) || d.isSame(end)) {
    out.push(d.valueOf())
    d = d.add('days', 1)
  }
  return out
}

function _oneMonthLess(s) {
  return s.subtract('months', 1).startOf('day')
}

function _now(s) {
  return s.startOf('day')
}
