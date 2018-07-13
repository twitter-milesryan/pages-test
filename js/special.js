webpackJsonp([8],{

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp02-nav-block-banner/webpack/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp02-nav-block-banner/webpack/index.scss");

var _aem = __webpack_require__("./source/aem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SP02BlockBanner = function () {
  function SP02BlockBanner(element, attributes) {
    (0, _classCallCheck3.default)(this, SP02BlockBanner);

    this.element = element;

    this.init();
  }

  (0, _createClass3.default)(SP02BlockBanner, [{
    key: 'init',
    value: function init() {}
  }]);
  return SP02BlockBanner;
}();

(0, _aem.registerComponent)('.sp02__item', SP02BlockBanner);

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp02-nav-block-banner/webpack/index.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp03-emoji-banner/webpack/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp03-emoji-banner/webpack/index.scss");

var _aem = __webpack_require__("./source/aem.js");

var _srraf = __webpack_require__("./node_modules/srraf/dist/index.js");

var _srraf2 = _interopRequireDefault(_srraf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SP03EmojiRow = function () {
  function SP03EmojiRow(element, attributes) {
    (0, _classCallCheck3.default)(this, SP03EmojiRow);

    this.element = element;
    this.emojis = [].concat((0, _toConsumableArray3.default)(element.querySelectorAll('img')));
    this.firstEmoji = this.emojis[0];
    this.secondEmoji = this.emojis[1];

    var firstEmojiRect = this.firstEmoji.getBoundingClientRect();

    this.emojiWidth = firstEmojiRect.width;
    this.emojiHeight = firstEmojiRect.height;
    this.minDistance = 40;
    this.maxDistance = 60;
    this.minEmojis = 3;
    this.maxEmojis = this.emojis.length;
    this.currentEmojiCount = this.emojis.length;
    this.droppedEmojis = [];
    this.currentWidth = window.innerWidth;
    this.previousWidth = window.innerWidth;

    this.init();
    _srraf2.default.resize.use(this.handleResize.bind(this));
  }

  (0, _createClass3.default)(SP03EmojiRow, [{
    key: 'init',
    value: function init() {
      var distance = this.getDistance();

      if (distance < this.minDistance && this.currentEmojiCount > this.minEmojis) {
        this.dropEmoji();
      }

      if (distance > this.maxDistance && this.currentEmojiCount < this.maxEmojis) {
        this.addEmoji();
      }

      this.element.classList.remove('is-hidden');
    }
  }, {
    key: 'getDistance',
    value: function getDistance() {
      var firstRect = this.firstEmoji.getBoundingClientRect();
      var secondRect = this.secondEmoji.getBoundingClientRect();
      return secondRect.left - (firstRect.left + this.emojiWidth);
    }
  }, {
    key: 'addEmoji',
    value: function addEmoji() {
      this.currentEmojiCount++;
      var emoji = this.droppedEmojis[this.droppedEmojis.length - 1];
      if (emoji.classList.contains('is-hidden')) {
        emoji.classList.remove('is-hidden');
        this.droppedEmojis.splice(this.droppedEmojis.length - 1, 1);
      }

      this.updateExpandingLayout();
    }
  }, {
    key: 'dropEmoji',
    value: function dropEmoji() {
      this.currentEmojiCount--;
      var lastEmojiNum = this.droppedEmojis.length > 0 ? this.emojis.length - this.droppedEmojis.length - 1 : this.emojis.length - 1;
      var emoji = this.emojis[lastEmojiNum];
      if (!emoji.classList.contains('is-hidden')) {
        emoji.classList.add('is-hidden');
        this.droppedEmojis.push(emoji);
      }

      this.updateShrinkingLayout();
    }
  }, {
    key: 'updateShrinkingLayout',
    value: function updateShrinkingLayout() {
      var distance = this.getDistance();
      if (distance < this.minDistance && this.currentEmojiCount > this.minEmojis) {
        this.dropEmoji();
      }
    }
  }, {
    key: 'updateExpandingLayout',
    value: function updateExpandingLayout() {
      var distance = this.getDistance();
      if (distance > this.maxDistance && this.currentEmojiCount < this.maxEmojis) {
        this.addEmoji();
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      this.previousWidth = this.currentWidth;
      this.currentWidth = window.innerWidth;

      if (this.previousWidth < this.currentWidth) {
        this.updateExpandingLayout();
      }

      if (this.previousWidth > this.currentWidth) {
        this.updateShrinkingLayout();
      }
    }
  }]);
  return SP03EmojiRow;
}();

(0, _aem.registerComponent)('.sp03-emoji-row', SP03EmojiRow);

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp03-emoji-banner/webpack/index.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

__webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/index.scss");

var _aem = __webpack_require__("./source/aem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/scrollProxy.js");
var populateFrame = __webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/populateCerosFrame.js");

var SP04Ceros = function SP04Ceros(element, app) {
  (0, _classCallCheck3.default)(this, SP04Ceros);

  // in case the document is already rendered
  if (document.readyState != 'loading') {
    populateFrame(element);
    // modern browsers
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', populateFrame.bind(null, element));
    // IE <= 8
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState == 'complete') {
        populateFrame(element);
      }
    });
  }
};

(0, _aem.registerComponent)('.sp04', SP04Ceros);

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/index.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/populateCerosFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (element) {

  // Component parts of all attributes used
  var dataPrefix = "data-",
      largePrefix = "lg-",
      smallPrefix = "sm-",
      breakOn = 'break-on',
      id = 'id',
      src = 'src',
      padding = 'padding';

  // List of all attributes without the 'data-' prefix
  var allAttrs = [breakOn, largePrefix + id, largePrefix + src, smallPrefix + id, smallPrefix + src];

  // Find ceros iframe elements
  var cerosFrames = element.querySelectorAll("iframe");

  // For every Ceros iframe element that was found
  for (var i = 0; i < cerosFrames.length; i++) {

    var cerosFrame = cerosFrames[i],

    // The iframe's parent div
    cerosContainer = cerosFrame.parentNode;

    // Test to see if all correct attributes are defined
    var allAttributesSet = true;
    // For every attribute
    for (var a = 0; a < allAttrs.length; a++) {

      var currentAttr = allAttrs[a],
          attrValue = cerosContainer.getAttribute(dataPrefix + currentAttr);

      // If attribute is not set
      if (attrValue === null) {
        allAttributesSet = false;

        // Break out of the loop checking attributes
        break;
      }
    }

    // If all the attributes were set
    if (allAttributesSet) {
      var isMobile,
          sizePrefix,
          breakPoint = cerosContainer.getAttribute(dataPrefix + breakOn);

      // If we are detecting touch events and not browser window size
      if (breakPoint == "touch") {
        isMobile = 'ontouchstart' in window || navigator.maxTouchPoints;
      } else {
        // If we are detected window size and not touch events

        // Calculate the window's width and convert the supplied break point into an int
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            breakPointInt = parseInt(breakPoint);

        // If the breakPointInt was succesfully converted to Int
        if (breakPointInt) {
          // Check to see if the winow's width is smaller than the break point
          isMobile = windowWidth < breakPointInt;
        } else {
          // If we couldn't make the break point an Int, log the error and move on
          //console.error("Unable to parse break point integer");

          continue;
        }
      };
    } else {
      // If not all attributes set, log error and move to next embed
      //console.error("Ceros Embed Tag is missing attribute/s.");

      continue;
    }

    // Select 'data-sm-' or 'data-lg-' if we are on mobile or not
    if (isMobile) {
      sizePrefix = dataPrefix + smallPrefix;
    } else {
      sizePrefix = dataPrefix + largePrefix;
    }

    // Set the correct src attribute on the iframe
    cerosFrame.setAttribute(src, cerosContainer.getAttribute(sizePrefix + src));

    // Set the correct id attribute on the iframe's parent DIV
    cerosContainer.setAttribute(id, cerosContainer.getAttribute(sizePrefix + id));

    // Set the correct padding-bottom CSS on the iframe's parent DIV
    //cerosContainer.style["padding-bottom"] = cerosContainer.getAttribute(sizePrefix + padding);
  }
};

/***/ }),

/***/ "../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/scrollProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * # Scroll proxy
 */

(function (root, factory) {
    'use strict';

    // --- CommonJS ---
    //
    // The "exports" variable will exist in the global scope in CommonJS environments.

    if (true) {
        factory(exports);
    }

    // --- RequireJS (AMD) ---
    //
    // The "define" function is created in the global scope by RequireJS. The
    // "exports" dependency can be injected into an AMD module; it is provided
    // by RequireJS as a compatibility feature for CommonJS.
    else if (typeof define === 'function' && define.amd) {
            define(['exports'], factory);
        }

        // --- Standard ---
        //
        // The "root" variable represents the global scope in this
        // context; any object exported onto this variable becomes part of the
        // global scope. In this module, "this" is passed as root, which equates to
        // "window".
        else {
                factory(root);
            }
})(undefined, function (exports) {
    'use strict';

    // The scroll proxy is included in embed code so it might be included more than once if there is more than
    // one ceros embed on the page.  So, we set a flag on window and bail if the flag is set.

    var GLOBAL_FLAG = 'CEROS_SCROLL_PROXY_LOADED';
    if (window[GLOBAL_FLAG]) {
        return;
    }
    window[GLOBAL_FLAG] = true;

    var EVENT_NAMESPACE = 'ceros-embedded-viewport:';
    var EVENTS = {

        // We ping embedded players to let them know that the scroll proxy is ready.  They are expected to respond
        // with the READY event.
        PING: 'ping',

        // The player sends this event when it's loaded.  This lets us know to set up the scroll proxy for that frame.
        READY: 'ready',

        // We send this event to the player when the position of the frame changes (window scroll or resize)
        POSITION: 'position',

        // The player sends us this event when there is a scroll interaction so that we can scroll the parent window.
        SCROLL_TO: 'scroll-to'
    };

    // The ceros frames.  We populate this in response to the ready event.
    var frames = [];

    /**
     * Sends a message to given ceros embed frame letting it know where the frame is on the page.
     *
     * @param HTMLElement frame
     * @returns void
     */
    var sendViewportPositionEvent = function sendViewportPositionEvent(frame) {

        var boundingRect = frame.getBoundingClientRect();
        var data = {
            top: -boundingRect.top,
            bottom: window.innerHeight - boundingRect.top
        };

        sendEvent(frame, EVENTS.POSITION, data);
    };

    /**
     * Sends a viewport change message to all ceros frames
     *
     * @returns void
     */
    var handleViewportPositionChange = function handleViewportPositionChange() {
        for (var i = 0; i < frames.length; i++) {
            sendViewportPositionEvent(frames[i]);
        }
    };

    /**
     * Search list of frames for frame with given content window
     *
     * @param HTMLElement[] frameList
     * @param Window        testWindow
     * @returns HTMLElement
     */
    var findFrameWithWindow = function findFrameWithWindow(frameList, testWindow) {

        var foundFrame = null;
        for (var i = 0; i < frameList.length; i++) {
            if (frameList[i].contentWindow === testWindow) {
                foundFrame = frameList[i];
                break;
            }
        }

        return foundFrame;
    };

    /**
     * Responds to the "READY" event by adding the frame to our list of ceros frames
     *
     * @param Window sourceWindow
     * @returns void
     */
    var handleReadyEvent = function handleReadyEvent(sourceWindow) {

        var foundFrame = findFrameWithWindow(document.getElementsByTagName('iframe'), sourceWindow);

        if (foundFrame) {
            frames.push(foundFrame);
            sendViewportPositionEvent(foundFrame);
        }
    };

    /**
     * Handles a scroll to interaction message coming from the player.  Scrolls window to put the position in view.
     *
     * @param Window sourceWindow
     * @param object data
     *      @prop int scrollPosition - the Y position in ceros page coordinates to scroll to
     *      @prop int pageHeight     - the (over)height of the page in ceros page coordinates
     *      @prop int visibleHeight  - the height of the frame in ceros page coordinates
     * @returns void
     */
    var handleScrollTo = function handleScrollTo(sourceWindow, data) {
        var frame = findFrameWithWindow(frames, sourceWindow);

        if (frame) {

            // The page inside the frame will have been scrolled so we calculate the position of the scroll target
            // (still in experience coordinates) after scroll.
            var positionInFrame = Math.max(0, data.scrollPosition - data.pageHeight + data.visibleHeight);

            var boundingRect = frame.getBoundingClientRect();
            var frameTop = window.pageYOffset + boundingRect.top;
            var frameBottom = window.pageYOffset + boundingRect.bottom;

            var frameHeight = boundingRect.bottom - boundingRect.top;
            var frameScrollPosition = positionInFrame * frameHeight / data.visibleHeight;

            var maxScroll = frameBottom - window.innerHeight;

            window.scroll(0, Math.min(frameScrollPosition + frameTop, maxScroll));
        }
    };

    /**
     * Dispatches incoming messages.
     *
     * @param MessageEvent message
     * @returns void
     */
    var processMessage = function processMessage(message) {
        var data, isValidMessage;

        try {
            data = JSON.parse(message.data);

            // leave this in the try-catch block in case data.event is present but not a string
            isValidMessage = data && data.event && data.event.substr(0, EVENT_NAMESPACE.length) === EVENT_NAMESPACE;
        } catch (e) {
            // this could be a message from a different library so let's ignore it
            return;
        }

        if (isValidMessage) {
            switch (data.event.substr(EVENT_NAMESPACE.length)) {

                case EVENTS.READY:
                    handleReadyEvent(message.source);
                    break;

                case EVENTS.SCROLL_TO:
                    handleScrollTo(message.source, data);
                    break;

                default:
            }
        }
    };

    /**
     * Sends an event to given frame
     *
     * @param HTMLElement targetFrame
     * @param string      event - one of our event constants
     * @param object      data
     */
    var sendEvent = function sendEvent(targetFrame, event, data) {
        var eventData = { event: EVENT_NAMESPACE + event };
        if (data) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    eventData[prop] = data[prop];
                }
            }
        }

        var payload = (0, _stringify2.default)(eventData);
        targetFrame.contentWindow.postMessage(payload, '*');
    };

    //
    // Ping all frames in case there's already a ceros embed that wants to participate in the scroll proxy action.
    // The frames will respond with the READY event.
    //
    var allFrames = document.getElementsByTagName('iframe');

    for (var i = 0; i < allFrames.length; i++) {
        if (frames.indexOf(allFrames[i] === -1)) {
            sendEvent(allFrames[i], EVENTS.PING);
        }
    }

    // Expose this method so that inserted experiences can update the viewport when they're ready
    window.sendViewportPositionEvent = sendViewportPositionEvent;

    window.addEventListener('message', processMessage);

    window.addEventListener('scroll', handleViewportPositionChange);
    window.addEventListener('resize', handleViewportPositionChange);
});

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__("./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/srraf/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var scrollInstance=null,resizeInstance=null,Listener=function(){function a(b){_classCallCheck(this,a),this.type=b,this.pool=0,this.queue=[],this.curr=this.position(),this.prev=this.position(),this.ticking=!1,window.addEventListener(b,this.requestFrame.bind(this))}return _createClass(a,[{key:'position',value:function position(){return'scroll'===this.type?window.scrollY||window.pageYOffset:window.innerWidth}},{key:'requestFrame',value:function requestFrame(b){this.e=b,this.curr=this.position(),this.ticking||(window.requestAnimationFrame(this.run.bind(this)),this.ticking=!0)}},{key:'run',value:function run(){var b=this;this.queue.forEach(function(c){return c[1]({curr:b.curr,prev:b.prev},b.e)}),this.prev=this.curr,this.ticking=!1}},{key:'use',value:function use(b){var c=this,d=c.pool++;return c.queue.push([d,b]),{destroy:function destroy(){return c.queue.forEach(function(f,g){f[0]===d&&c.queue.splice(g,1)}),this},update:function update(){return b({curr:c.curr,prev:c.prev},c.e),this}}}},{key:'update',value:function update(){this.run()}}]),a}();exports.default='undefined'==typeof window?null:{get scroll(){return scrollInstance||(scrollInstance=new Listener('scroll')),scrollInstance},get resize(){return resizeInstance||(resizeInstance=new Listener('resize')),resizeInstance},use:function use(a){var _scroll=this.scroll,b=_scroll.curr,c=_scroll.prev,_resize=this.resize,d=_resize.curr,f=_resize.prev,g={currY:b,prevY:c,currX:d,prevX:f},h=this.scroll.use(function(_ref,m){var k=_ref.curr,l=_ref.prev;g.currY=k,g.prevY=l,a(g,m)}),j=this.resize.use(function(_ref2,m){var k=_ref2.curr,l=_ref2.prev;g.currX=k,g.prevX=l,a(g,m)});return{destroy:function destroy(){return h.destroy(),j.destroy(),this},update:function update(){return h.update(),j.update(),this}}}};

/***/ }),

/***/ "./source/aem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.components = undefined;

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.registerComponent = registerComponent;
exports.isAuthorMode = isAuthorMode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

                        _
                       (_)
  __ _  ___ _ __ ___    _ ___
 / _` |/ _ \ '_ ` _ \  | / __|
| (_| |  __/ | | | | |_| \__ \
 \__,_|\___|_| |_| |_(_) |___/
                      _/ |
                     |__/

aem.js is used to support the Twitter component development pattern.
Each component implements an ES6 Class and calls the registerComponent method
to bind an instance of the component class to a DOM element.

The component class below is a placeholder. The goal is to hook into the AEM authoring lifecycle events
so that components with Javascript driven layouts can refresh themselves after the author makes an edit.

*/

var state = {
  id: 0
};

function getNextId() {
  var id = state.id;
  state.id++;
  return id;
}

var components = exports.components = [];

var Component = exports.Component = function Component() {
  (0, _classCallCheck3.default)(this, Component);

  this.componentId = getNextId();
};

function registerComponent(selector, ComponentClass) {
  [].concat((0, _toConsumableArray3.default)(document.querySelectorAll(selector))).forEach(function (element) {
    components.push(new ComponentClass(element, element.dataset));
  });
}

function isAuthorMode() {
  if (document.body.classList.contains('wcmmode')) {
    return true;
  }
  return false;
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp02-nav-block-banner/webpack/index.js");
__webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp03-emoji-banner/webpack/index.js");
module.exports = __webpack_require__("../content/jcr_root/apps/boilerplate-twitter/components/special/sp04-ceros/webpack/index.js");


/***/ })

},[6]);
//# sourceMappingURL=special.js.map