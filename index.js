var format = require('util').format

module.exports = function(_Hath) {

  var Hath = _Hath || require('hath')

  Hath.helper('assertEquals', function(a, b, message) {
    return this.assert(a === b, message || format('%s is not equal to %s', a, b))
  });

  Hath.helper('assertNotEquals', function(a, b, message) {
    return this.assert(a !== b, message || format('%s is equal to %s', a, b))
  });

  Hath.helper('assertGreater', function(a, b, message) {
    return this.assert(a > b, message || format('%s is not greater than %s', a, b))
  });

  Hath.helper('assertNotGreater', function(a, b, message) {
    return this.assert(a <= b, message || format('%s is greater than or equal to %s', a, b))
  });

  Hath.helper('assertLess', function(a, b, message) {
    return this.assert(a < b, message || format('%s is not less than %s', a, b))
  });

  Hath.helper('assertNotLess', function(a, b, message) {
    return this.assert(a >= b, message || format('%s is less than or equal to %s', a, b))
  });

  Hath.helper('assertMatches', function(regexp, a, message) {
    return this.assert(new RegExp(regexp).test(a), message || format('%s does not match %s', a, regexp))
  });

  Hath.helper('assertNotMatches', function(regexp, a, message) {
    return this.assert(!new RegExp(regexp).test(a), message || format('%s matches %s', a, regexp))
  });

  Hath.helper('assertTruthy', function(a, message) {
    return this.assert(a, message || format('%s is not truthy', a))
  });

  Hath.helper('assertFalsey', function(a, message) {
    return this.assert(!a, message || format('%s is not falsey', a))
  });

  Hath.helper('assertNotError', function(err, message) {
    return this.assert(!err, message || err && err.message)
  });

  Hath.helper('assertThrows', function(fn, regexp) {
    try {
      fn()
      return this.assert(false, 'Did not throw an error')
    } catch(err) {
      return regexp ? this.assert(new RegExp(regexp).test(err), format('%s does not match %s', err.message, regexp)) : false
    }
  });

  return Hath
}