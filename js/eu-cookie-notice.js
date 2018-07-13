/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

function euCookieNotice() {

  'use strict';

  var COOKIE_LANG_PREFERENCE = 'lang-preference';
  var COOKIE_CONSENT_EXPIRES = 365;
  var ACCEPT_LANGUAGE_REGEX = /[a-z]{2,3}/g;
  var EU_COUNTRIES = document.querySelector('.eu-countries-list').getAttribute('data-eu-countries-list');
  var COOKIE_CONSENT_NAME = "eu_cn";
  var COOKIE_CONSENT_VAL = "1";
  var COOKIE_DOMAIN = ".twitter.com";
  var COOKIE_PATH = "/";
  var LINK_COOKIE_USE = 'https://support.twitter.com/articles/20170514';
  var LINK_DATA_TRANSFER = 'https://support.twitter.com/articles/20174632';

  var consentCookie = Cookies.get(COOKIE_CONSENT_NAME);
  var languageCookie = Cookies.get(COOKIE_LANG_PREFERENCE);

  var userProfile = getUserProfile();
  var profileLanguage = userProfile.profileLanguage;
  var browserLanguage = userProfile.browserLanguage;
  var geoCountryCode = userProfile.geoCountryCode;

  /**
   * Determine if user should see cookie notification.
   */
  function initCookieNotification() {
    // console.log('initCookieNotification()')

    // Get geolocation header (alert only needed for EU countries)
    if (!geoCountryCode) {
      geoCountryCode = "US";
    }

    // if an EU user has never seen the alert before (ie. the cookie is not set), show it:
    if ((consentCookie === undefined || consentCookie === '') && EU_COUNTRIES.indexOf(geoCountryCode) !== -1) {

      // 1. User has language cookie
      if (languageCookie !== undefined && languageCookie !== '') {
        showAlert(languageCookie);
        return;
      }

      // 2. Twitter profile language settings
      if (profileLanguage !== undefined && profileLanguage !== '') {
        showAlert(profileLanguage);
        return;
      }

      // 3. Browser settings
      if (browserLanguage !== undefined && browserLanguage.length > 0) {
        showAlert(browserLanguage.match(ACCEPT_LANGUAGE_REGEX)[0]);
        return;
      }

      // 4. As a last resort, default to English
      showAlert('en');
    }

  }

  /**
   * Show cookie notification.
   *
   * @param languageIso
   */
  function showAlert(languageIso) {
    // console.log('showAlert()', arguments)

    if (languageIso === undefined || languageIso === '') {
      languageIso = 'en';
    }

    var languageMessageContainer = document.querySelector('.eu-cookie-notice-data-' + languageIso);
    var defaultMessageContainer = document.querySelector('.eu-cookie-notice-data-en');

    var message = languageMessageContainer
      ? languageMessageContainer.innerHTML
      : defaultMessageContainer.innerHTML;

    var cookieAlertMessageDiv = document.querySelector('.eu-cookie-notice');

    cookieAlertMessageDiv.innerHTML = cookieAlertMessageDiv.innerHTML
      .replace('###MESSAGE###', message)
      .replace('&lt;x id="START_LINK"/&gt;', '<a href="' + LINK_COOKIE_USE + '" target="_blank">')
      .replace('&lt;x id="END_LINK"/&gt;', '</a>')
      .replace('&lt;x id="START_LINK"/&gt;', '<a href="' + LINK_DATA_TRANSFER + '" target="_blank">')
      .replace('&lt;x id="END_LINK"/&gt;', '</a>');;

    cookieAlertMessageDiv.classList.add('active');

    var dismissBtn = cookieAlertMessageDiv.querySelector('.u10__button');

    dismissBtn.addEventListener('click', function(e) {
      e.preventDefault();
      dismissCookieAlert();
    }, false);

    function setCookie() {
      Cookies.set(COOKIE_CONSENT_NAME, COOKIE_CONSENT_VAL, {
        expires: COOKIE_CONSENT_EXPIRES,
        domain: COOKIE_DOMAIN,
        path: COOKIE_PATH
      });
    }

    function dismissCookieAlert() {
      var cookieAlertActive = cookieAlertMessageDiv.classList.contains('active');
      if (cookieAlertActive) {
        cookieAlertMessageDiv.classList.remove('active');
      }
      setCookie();
    }

    setTimeout(setCookie, 5000);

  }

  // init
  initCookieNotification();

};

function getUserProfile() {
  var dataProfile = JSON.parse(localStorage.getItem('user-profile'))[0];

  var accountLanguage = undefined;
  var browserLanguage = undefined;
  var countryCode = undefined;

  if (dataProfile && dataProfile.value) {
    accountLanguage = dataProfile.value.accountLanguage;
    browserLanguage = dataProfile.value.browserLanguage;
    countryCode = dataProfile.value.countryCode;
  }

  return {
    profileLanguage: accountLanguage,
    browserLanguage: browserLanguage,
    geoCountryCode: countryCode
  }
}

