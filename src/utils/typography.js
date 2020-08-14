'use strict'

import Typography from 'typography'

var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _grayPercentage = require('gray-percentage')

var _grayPercentage2 = _interopRequireDefault(_grayPercentage)

var _typographyBreakpointConstants = require('typography-breakpoint-constants')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

var theme = {
  title: 'Wordpress Theme 2016',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: ['Noto Sans JP', 'sans serif'],
  bodyFontFamily: ['Noto Sans JP', 'sans serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: function overrideStyles(_ref, options) {
    var _ref2

    var adjustFontSizeTo = _ref.adjustFontSizeTo
    var scale = _ref.scale
    var rhythm = _ref.rhythm
    // eslint-disable-next-line no-return-assign
    return (
      (_ref2 = {
        h1: {
          fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
        },
        blockquote: _extends({}, scale(1 / 5), {
          color: (0, _grayPercentage2.default)(41),
          fontStyle: 'italic',
          paddingLeft: rhythm(13 / 16),
          marginLeft: rhythm(-1),
          borderLeft:
            rhythm(3 / 16) + ' solid ' + (0, _grayPercentage2.default)(10),
        }),
        'blockquote > :last-child': {
          marginBottom: 0,
        },
        'blockquote cite': _extends(
          {},
          adjustFontSizeTo(options.baseFontSize),
          {
            color: options.bodyColor,
            fontWeight: options.bodyWeight,
          }
        ),
        'blockquote cite:before': {
          content: '"— "',
        },
        ul: {
          listStyle: 'disc',
        },
        'ul,ol': {
          marginLeft: 0,
        },
        // eslint-disable-next-line no-sequences
      }),
      _defineProperty(
        _ref2,
        _typographyBreakpointConstants.MOBILE_MEDIA_QUERY,
        {
          'ul,ol': {
            marginLeft: rhythm(1),
          },
          blockquote: {
            marginLeft: rhythm(-3 / 4),
            marginRight: 0,
            paddingLeft: rhythm(9 / 16),
          },
        }
      ),
      _defineProperty(_ref2, 'h1,h2,h3,h4,h5,h6', {
        marginTop: rhythm(2),
      }),
      _defineProperty(_ref2, 'h4', {
        letterSpacing: '0.140625em',
        textTransform: 'uppercase',
      }),
      _defineProperty(_ref2, 'h6', {
        fontStyle: 'italic',
      }),
      _defineProperty(_ref2, 'a', {
        boxShadow: '0 1px 0 0 currentColor',
        color: '#007acc',
        textDecoration: 'none',
      }),
      _defineProperty(_ref2, 'a:hover,a:active', {
        boxShadow: 'none',
      }),
      _defineProperty(_ref2, 'mark,ins', {
        background: '#007acc',
        color: 'white',
        padding: rhythm(1 / 16) + ' ' + rhythm(1 / 8),
        textDecoration: 'none',
      }),
      _ref2
    )
  },
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
