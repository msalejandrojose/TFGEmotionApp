function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    background-color: #54577C;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container>*:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<!--<div class=\"toolbar .container-fluid row collapse navbar-collapse\" role=\"banner\">\n  <div class=\"col-sm-2 col-1 text-center\">\n    <img style=\"cursor: pointer;\" height=\"40px\" width=\"182px\" (click)=\"entrarHome()\"\n      src=\"assets/LogoDefinitivoFinal.png\">\n  </div>\n  <div *ngIf=\"dentro\" class=\"col-7\">\n    <div *ngIf=\"estudiante\">\n\n    </div>\n    <div *ngIf=\"profesor\">\n\n    </div>\n  </div>\n  <div *ngIf=\"!dentro\" class=\"col-7\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"!dentro\" class=\"col-1\">\n    <div class=\"text-right\">\n      <button type=\"button\" (click)=\"entrarProfesor()\" class=\"btn btn-primary\">Profesor</button>\n    </div>\n  </div>\n  <div *ngIf=\"!dentro\" class=\"col-1\">\n    <div class=\"text-right\">\n      <button type=\"button\" (click)=\"entrarEstudiante()\" class=\"btn btn-success\">Estudiante</button>\n    </div>\n  </div>\n  <div *ngIf=\"dentro\" class=\"col-offset-1 text-right \">\n    <button type=\"button\" (click)=\"salir()\" class=\"btn btn-danger\">Salir <i class=\"fa fa-sign-out\"></i></button>\n  </div>\n  <!--<div class=\"col-sm-10 col-11\">\n    <div class=\"row\">\n      <div class=\"row col-12 justify-content-center\">\n        <div *ngIf=\"!dentro\" class=\"col-3 text-right\">\n          <button type=\"button\" (click)=\"entrarProfesor()\" class=\"btn btn-primary\">Profesor</button>\n        </div>\n        <div *ngIf=\"!dentro\" class=\"col-3 text-right\">\n          <button type=\"button\" (click)=\"entrarEstudiante()\" class=\"btn btn-success\">Estudiante</button>\n        </div>\n        <div *ngIf=\"dentro\" class=\"col-auto\">\n          {{personaIniciada.nombre}} {{personaIniciada.apellidos}}\n        </div>\n        <div *ngIf=\"dentro\" class=\"col-md-3 col-auto text-right\">\n          <button type=\"button\" (click)=\"salir()\" class=\"btn btn-danger\">Salir <i class=\"fa fa-sign-out\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>-->\n<nav id=\"barra-navegacion\" class=\"navbar navbar-expand-md bg-dark navbar-dark bg-company-blue sticky-top\">\n\n  <a style=\"cursor: pointer\" class=\"navbar-brand\">\n    <img (click)=\"entrarHome()\" src=\"assets/Logo10.png\" width=\"40\" height=\"40\" alt=\"\">\n    <a style=\"cursor: pointer; color: rgb(233, 239, 255); margin-left: 5px;\" class=\"navbar-brand\" (click)=\"entrarHome()\"><i>EmotionFace</i></a>\n  </a>\n  <!--<a style=\"cursor: pointer; color: rgb(233, 239, 255); margin-left: 0px;\" class=\"navbar-brand\" (click)=\"entrarHome()\"><b>EmotionFace</b></a>-->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n    aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav mr-auto text-center\">\n      <!--<a *ngIf=\"profesor\" style=\"cursor: pointer;color: rgb(233, 239, 255);\"\n        class=\"nav-item nav-link\" (click)=\"abrirActividadActual()\"><i class=\"fa fa-home\"></i>\n        Home</a>-->\n      <!--<a *ngIf=\"profesor && actividadActual\" style=\"cursor: pointer;color: rgb(233, 239, 255);\"\n        class=\"nav-item nav-link\" (click)=\"abrirActividadActual()\"><i class=\"fa fa-external-link\"></i>\n        Actividad Actual</a>-->\n      <!--<a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirAlumnos()\"><i class=\"fa fa-user\"></i>\n        Alumnos</a>\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirClases()\"><i class=\"fa fa-book\"></i>\n        Clases</a>\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirActividades()\"><i class=\"fa fa-university\"></i>\n        Actividades</a>\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirProfesor()\"><i class=\"fa fa-id-card\"></i>\n        Profesores</a>-->\n    </div>\n\n    <form class=\"form-inline my-2 my-lg-0 text-right\">\n      <a *ngIf=\"profesor\" style=\"cursor: pointer;color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirActividadActual()\"><i class=\"fa fa-home\"></i>\n        Home</a>\n      <!--<a *ngIf=\"profesor && actividadActual\" style=\"cursor: pointer;color: rgb(233, 239, 255);\"\n        class=\"nav-item nav-link\" (click)=\"abrirActividadActual()\"><i class=\"fa fa-external-link\"></i>\n        Actividad Actual</a>-->\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirAlumnos()\"><i class=\"fa fa-user\"></i>\n        Alumnos</a>\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirClases()\"><i class=\"fa fa-book\"></i>\n        Clases</a>\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirActividades()\"><i class=\"fas fa-chalkboard-teacher\"></i>\n        Actividades</a>\n      <a *ngIf=\"profesor\" style=\"cursor: pointer; color: rgb(233, 239, 255);\" class=\"nav-item nav-link\"\n        (click)=\"abrirProfesor()\"><i class=\"fa fa-id-card\"></i>\n        Profesores</a>\n      <a *ngIf=\"!dentro\" class=\"text-center\">\n        <button type=\"button\" (click)=\"entrarProfesor()\" class=\"btn btn-primary form-control mr-sm-2\"><i class=\"fas fa-user-graduate\"></i> Profesor</button>\n      </a>\n      <a *ngIf=\"!dentro\" class=\"text-center\">\n        <button type=\"button\" (click)=\"entrarEstudiante()\" class=\"btn btn-success my-2 my-sm-0\"><i class=\"fas fa-user\"></i> Estudiante</button>\n      </a>\n\n      <a *ngIf=\"dentro\" class=\"text-center\">\n        <button type=\"button\" (click)=\"salir()\" class=\"btn btn-danger mr-sm-\">Salir <i\n            class=\"fa fa-sign-out\"></i></button>\n      </a>\n\n    </form>\n  </div>\n\n\n\n\n\n\n\n\n</nav>\n<div class=\"body\">\n  <!--Seccion del profesor-->\n  <div class=\"container-fluid\">\n    <app-profesor id=\"profesor\" *ngIf=\"profesor\"></app-profesor>\n  </div>\n\n  <!--Seccion del estudiante-->\n  <div class=\"container-fluid\">\n    <app-estudiante id=\"estudiante\" *ngIf=\"estudiante\" (estudianteIniciado)=\"iniciarSesion($event)\"></app-estudiante>\n  </div>\n  \n  <div *ngIf=\"(!dentro && !visualizacion) || visualizacion\">\n    <br>\n    <br>\n  </div>\n  <div *ngIf=\"!dentro && !visualizacion\" class=\"row justify-content-center\">\n    <div class=\"col-8 text-center\">\n      <h4>Le damos la bienvenida a la aplicacion web</h4>\n    </div>\n  </div>\n  <div *ngIf=\"(!dentro && !visualizacion) || visualizacion\">\n    <br>\n    <br>\n  </div>\n  <div *ngIf=\"!dentro && !visualizacion\" class=\"row justify-content-center\">\n    <div class=\"col-auto col-sm-6 text-center\">\n      <br>\n      <br>\n      <img height=\"380px\" width=\"380px\" src=\"assets/Logo10.png\">\n    </div>\n    <div class=\"col-auto col-md-auto text-right\">\n      <br>\n      <div class=\"text-center\">\n        <button type=\"button\" (click)=\"entrarProfesor()\" class=\"btn btn-primary btn-circle\"><i class=\"fas fa-user-graduate\"></i> Profesor</button>\n      </div>\n      <br>\n      <div class=\"text-center\">\n        <button type=\"button\" (click)=\"entrarEstudiante()\" class=\"btn btn-success btn-circle\"><i class=\"fas fa-user\"></i> Estudiante</button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"visualizacion\" class=\"row justify-content-center\">\n    <div *ngIf=\"acercaDe\" class=\"col-6\">\n      <h4>Acerca de </h4>\n      <ul>\n        <li>\n          <p>\n            Autor: Alejandro José Martínez Sánchez</p>\n        </li>\n        <li>\n          <p>\n            Encargado de desarrollar la aplicación EmotionFace como correspondencia al Trabajo de Fin de Grado de\n            Ingeniería\n            Informatica, en la intensificación de Tencologias de la Información.</p>\n        </li>\n        <li>\n          <p>\n            Herramienta para facilitar la tarea didactica a los docentes, con posibilidad de elaborar graficos y\n            estadisticas\n            sobre la evolucion de sus alumnos en las activiades realizadas.\n          </p>\n        </li>\n        <li>\n          <p>\n            Fecha: Junio 2020\n          </p>\n        </li>\n      </ul>\n      <div class=\"text-center\">\n        <button type=\"button\" (click)=\"cerrarAcercaDe()\" class=\"btn btn-outline-danger\">Cerrar</button>\n      </div>\n\n    </div>\n    <div *ngIf=\"privacidad\" class=\"col-6\">\n      <h4>Privacidad </h4>\n      <p>\n        El uso de esta aplicación utiliza información de caracter personal, a la hora de hacer un escaneo de la cara,\n        para la realización de la computación afectiva, pero no realiza ningun tipo de almanenamiento de dichas\n        imagenes\n        solo de los datos obtenidos.\n      </p>\n      <br>\n      <div class=\"text-center\">\n        <button type=\"button\" (click)=\"cerrarPrivacidad()\" class=\"btn btn-outline-danger\">Cerrar</button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"(!dentro && !visualizacion) || visualizacion\">\n    <br>\n    <br>\n  </div>\n  <div *ngIf=\"(!dentro && !visualizacion) || visualizacion\">\n    <br>\n    <br>\n  </div>\n</div>\n<div class=\"footer container-fluid\" style=\"background-color:rgba(30, 30, 30,0.9); z-index: 2;\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-auto text-center\">\n      <h4><i>EmotionFace</i></h4>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-4 text-center\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <a style=\"cursor: pointer; color: white;\" (click)=\"ponerAcercaDe()\">\n            <h6>Acerda de</h6>\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <a style=\"cursor: pointer; color: white;\" (click)=\"ponerPrivacidad()\">\n            <h6>Privacidad</h6>\n          </a>\n        </div>\n      </div>\n      <!--<div class=\"row\">\n        <div class=\"col-12\">\n          <a style=\"cursor: pointer; color: white;\"><h6 href=\"\">RGPD</h6></a>\n        </div>\n      </div>-->\n\n    </div>\n    <div class=\"col-4 text-center\">\n\n      <img style=\"cursor: pointer;\" height=\"30px\" width=\"30px\" src=\"assets/Logo10.png\">\n    </div>\n    <div class=\"col-4 text-center\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h6>Redes Sociales</h6>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-1 col-auto\">\n          <a class=\"icono_rrss\" href=\"https://www.instagram.com/?hl=es\" target=\"_blank\"><i class=\"fa fa-instagram fa-2x\"\n              width=\"15\" height=\"15\"></i></a>\n        </div>\n        <br>\n        <div class=\"col-sm-1 col-auto\">\n          <a class=\"icono_rrss\" href=\"https://www.facebook.com/alejandrojose.martinez.12\" target=\"_blank\"><i\n              class=\"fa fa-facebook fa-2x\" width=\"15\" height=\"15\"></i></a>\n        </div>\n        <br>\n        <div class=\"col-sm-1 col-auto\">\n          <a class=\"icono_rrss\" href=\"https://github.com/msalejandrojose/emotionapp\" target=\"_blank\"><i\n              class=\"fa fa-github fa-2x\" width=\"15\" height=\"15\"></i></a>\n        </div>\n        <div class=\"col-sm-1 col-auto\">\n          <a class=\"icono_rrss\" href=\"https://www.linkedin.com/in/alejandro-jos%C3%A9-256a211a9/\" target=\"_blank\"><i\n              class=\"fa fa-linkedin fa-2x\"></i></a>\n        </div>\n        <div class=\"col-sm-1 col-auto\">\n          <a class=\"icono_rrss\" href=\"mailto:msalejandrojose7@gmail.com\" target=\"_blank\"><i\n              class=\"fa fa-envelope fa-2x\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12 text-center\">\n      <p><i>\n          Esta aplicación Web esta desarrollada como Trabajo de Fin de Grado para la Universidad de Castilla-La Mancha\n          UCLM, Escuela Politécnica Superior de Albacete, a fecha de Junio 2020.\n        </i></p>\n    </div>\n  </div>\n  <br>\n</div>\n\n<!--Rutas-->\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/estudiante/estudiante.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estudiante/estudiante.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEstudianteEstudianteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n\n<div *ngIf=\"noHayEstudiante\" class=\"row justify-content-md-center\">\n    <div class=\"card col-md-6\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Iniciar Sesion</h4>\n            <div>\n                <label>Email</label>\n                <input [(ngModel)]=\"estudiante.email\" type=\"email\" class=\"form-control\" id=\"emailIS\" ng-model=\"email\"\n                    placeholder=\"Email\" (keydown.enter)=\"pulsar($event)\">\n                <br>\n                <label>Contraseña</label>\n                <input [(ngModel)]=\"estudiante.contrasena\" type=\"password\" class=\"form-control\" id=\"contrasenaIS\"\n                    ng-model=\"contrasena\" (keydown.enter)=\"pulsar($event)\" placeholder=\"Contraseña\">\n                <br>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-4\">\n                        <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-danger\"><i\n                                class=\"fa fa-trash\"></i> Limpiar</button>\n                    </div>\n                    <div class=\"col-4\">\n                        <button *ngIf=\"!iniciando\" type=\"button\" (click)=\"iniciarSesion()\"\n                            class=\"btn btn-raised btn-success\"><i class=\"fa fa-sign-in\"></i> Iniciar\n                            Sesion</button>\n                        <button *ngIf=\"iniciando\" class=\"btn btn-raised btn-success disabled\" type=\"button\" disabled>\n                            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                            Iniciando ...\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--<div *ngIf=\"!noHayEstudiante\" class=\"row justify-content-right\">\n    <div class=\"col-9\">\n\n    </div>\n    <div class=\"col-3 text-right\">\n        <button type=\"button\" (click)=\"abrirGestionSensores()\" class=\"btn btn-outline-success text-right\"><i\n                class=\"fa fa-cog\"></i>Abrir Sensores</button>\n    </div>\n</div>-->\n<div *ngIf=\"!noHayEstudiante\">\n    <div class=\"row\">\n        <div class=\"col-3\">\n\n        </div>\n        <div *ngIf=\"configurarSensores\" class=\"col-6\">\n            <h3>Sensores</h3>\n            <table class=\"table table-striped\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">Nombre</th>\n                        <th scope=\"col\">Estado</th>\n                        <th scope=\"col\"></th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let sensor of listaSensores\">\n                    <tr>\n                        <td>{{sensor.nombre}}</td>\n                        <td>{{sensor.estado}}</td>\n                        <td *ngIf=\"sensor.estado=='Desconectado' && !sensor.cargando\"><button type=\"button\"\n                                class=\"btn btn-outline-primary\" (click)=\"conectarSensor(sensor)\">Conectarse</button>\n                        </td>\n                        <td *ngIf=\"sensor.cargando\"><button\n                                class=\"btn btn-outline-primary disabled\" type=\"button\" disabled>\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                                Conectando ...\n                            </button></td>\n                        <td *ngIf=\"sensor.estado=='Conectado'  && !sensor.cargando\"><button type=\"button\"\n                                class=\"btn btn-outline-danger\"\n                                (click)=\"desconectarSensor(sensor)\">Desconectarse</button></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div *ngIf=\"!configurarSensores\" class=\"col-6\">\n\n        </div>\n        <div class=\"col-3 text-right\">\n            <button *ngIf=\"!configurarSensores\" type=\"button\" (click)=\"abrirGestionSensores()\"\n                class=\"btn btn-outline-success text-right\"><i class=\"fa fa-cog\"></i> Abrir Sensores</button>\n            <button *ngIf=\"configurarSensores\" type=\"button\" (click)=\"cerrarGestionSensores()\"\n                class=\"btn btn-outline-danger text-right\"><i class=\"fa fa-cog\"></i> Cerrar Sensores</button>\n        </div>\n    </div>\n    <div *ngIf=\"!conectadoaActividad\" class=\"row justify-content-center\">\n        <div class=\"col-12\">\n            <h3>Actividades listas</h3>\n            <table class=\"table table-striped\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">Nombre</th>\n                        <th scope=\"col\">Profesor</th>\n                        <th scope=\"col\">Estado</th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let actividad of listaActividades\">\n                    <tr>\n                        <td>{{actividad.nombre}}</td>\n                        <td>{{actividad.profesor.nombre}}</td>\n                        <td>{{actividad.estado}}</td>\n                        <td><button *ngIf=\"actividad.estado!='Finalizada'\" type=\"button\" class=\"btn btn-outline-primary\"\n                                (click)=\"conectarse(actividad)\">Conectarse</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"conectadoaActividad\"  class=\"row justify-content-center\">\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n    </div>\n    <div *ngIf=\"conectadoaActividad\" class=\"row justify-content-center\">\n        <div class=\"col-3 text-center\">\n            <i class=\"fa fa-wifi fa-5x\"></i>\n        </div>\n    </div>\n    <div *ngIf=\"conectadoaActividad\" class=\"row justify-content-center\">\n        <div class=\"col-3 text-center\">\n            <h5>Conectado</h5>\n        </div>\n    </div>\n    <div *ngIf=\"conectadoaActividad\" class=\"row justify-content-center\">\n        <div class=\"col-3 text-center\">\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"desconectarse()\">Desconectarse</button>\n        </div>\n    </div>\n    <div class=\"row justify-content-md-center\">\n        <!--*ngIf=\"!noHayEstudiante && conectadoaActividad\"-->\n        <div class=\"col-md-8\" style=\"visibility: hidden;\">\n            <video id=\"video\" width=\"480\" height=\"360\" autoplay muted></video>\n        </div>\n        <!--<div *ngIf=\"conectadoaActividad\" class=\"col-md-4\" id=\"estadoAlumno\" class=\"circulo\">\n            <p>Estado</p>\n        </div>-->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-actividad/crear-actividad.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-actividad/crear-actividad.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorCrearActividadCrearActividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Crear Actividad</h5>\n    <mat-horizontal-stepper linear #stepper>\n      <mat-step label=\"Crear Actividad\" [stepControl]=\"datosPrimarios\">\n        <br>\n        <form>\n          <div class=\"row justify-content-around\">\n            <div [formGroup]=\"datosPrimarios\" class=\"col-5 text-left\">\n              <div class=\"row\">\n                <label>Nombre de la Actividad</label>\n              </div>\n              <div class=\"row\">\n                <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"actividadCreate.nombre\" type=\"text\"\n                  class=\"form-control\" name=\"nomAct\" id=\"nombreActividad\" placeholder=\"Nombre de la actividad\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreActividad.errors }\">\n                <div *ngIf=\"submitted && f.fromControlNombreActividad.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.fromControlNombreActividad.errors.required\">Nombre es requerido</div>\n                </div>\n              </div>\n\n              <br>\n              <div class=\"row\">\n                <label>Profesor</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <mat-form-field>\n                    <mat-label> Seleccione un Profesor </mat-label>\n                    <mat-select [(value)]=\"profesorSeleccionado.nombre\">\n                      <mat-select-filter [array]=\"listaProfesores\" [placeholder]=\"'Filtrar por nombre...'\"\n                        [displayMember]=\"'nombre'\" (filteredReturn)=\"filteredList1 = $event\"></mat-select-filter>\n                      <mat-option *ngFor=\"let profesor of filteredList1\" [(value)]=\"profesor.nombre\">\n                        <!--<a (click)=\"selecionarProfesor(profesor)\">{{profesor.nombre}} {{profesor.apellidos}}</a>-->\n                        <div (click)=\"selecionarProfesor(profesor)\">\n                          <a>{{profesor.nombre}} {{profesor.apellidos}}</a>\n                        </div>\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                  <button type=\"button\" (click)=\"verAnadirProfesor()\" class=\"btn btn-outline-success text-right\"><i\n                      class=\"fa fa-plus\"></i> Añadir Profesor</button>\n                </div>\n              </div>\n              <br>\n              <br>\n            </div>\n            <div *ngIf=\"anadirProfesor\" class=\"col-md-5 col-auto card\">\n              <div class=\"card-body\">\n                <h6 class=\"card-title\">Añadir Profesor</h6>\n                <label>Nombre del Profesor</label>\n                <input [(ngModel)]=\"nombreProfesor\" name=\"nomPrf2\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Nombre del profesor\">\n                <br>\n                <label>Apellidos del Profesor</label>\n                <input [(ngModel)]=\"apellidosProfesor\" name=\"nomPrf3\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Apellidos del Profesor\">\n                <br>\n                <label>Nombre del Departamento</label>\n                <input [(ngModel)]=\"departamentoProfesor\" name=\"nomPrf4\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Departamento del Profesor\">\n                <br>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" (click)=\"cancelarAnadirProfesor()\"\n                      class=\"btn btn-outline-danger text-right\"><i class=\"fa fa-times-circle\"></i> Cerrar</button>\n                  </div>\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" (click)=\"anadirProfesorLista()\" class=\"btn btn-outline-success text-right\"><i\n                        class=\"fa fa-plus\"></i> Añadir</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-3 text-center\">\n              <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n                Cancelar</button>\n            </div>\n            <div class=\"col-3 text-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"onSubmit()\">Siguiente Paso <i\n                  class=\"fa fa-arrow-right\"></i></button>\n            </div>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step label=\"Seleccionar Alumnos\">\n        <!--Tabla de alumnos-->\n        <br>\n\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"example-container\">\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"nombre\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"apellidos\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"clase\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button *ngIf=\"selection.selected.length==0\" mat-button class=\"btn btn-success\" (click)=\"seleccionarUnAlumno()\">Siguiente Paso <i\n              class=\"fa fa-arrow-right\"></i></button>\n            <button *ngIf=\"selection.selected.length>0\" mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Siguiente Paso <i\n                class=\"fa fa-arrow-right\"></i></button>\n          </div>\n\n        </div>\n      </mat-step>\n      <mat-step label=\"Localizacion de los alumnos\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-6\">\n            <h4>Localizacion de Alumnos</h4>\n            <div id=\"clase\" class=\"example-boundary\">\n              <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n              <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n                [cdkDragFreeDragPosition]=\"item.estudiante.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n                (cdkDragEnded)=\"dragEnded($event,item)\">\n                {{item.estudiante.nombre}}\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <br>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=guardarActividad()>Guardar <i\n                class=\"fa fa-save\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-clase/crear-clase.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-clase/crear-clase.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorCrearClaseCrearClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Crear Clase</h5>\n    <mat-horizontal-stepper linear #stepper>\n      <mat-step label=\"Crear Clase\" [stepControl]=\"datosPrimarios\">\n        <br>\n        <form>\n          <div class=\"row justify-content-around\">\n            <div [formGroup]=\"datosPrimarios\" class=\"col-5 text-left\">\n              <div class=\"row\">\n                <label>Nombre de la clase</label>\n              </div>\n              <div class=\"row\">\n                <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"claseCreate.nombre\" type=\"text\"\n                  class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la clase\" required\n                  [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreActividad.errors }\">\n                <div *ngIf=\"submitted && f.fromControlNombreActividad.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.fromControlNombreActividad.errors.required\">Nombre es requerido</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <label>Profesor</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <mat-form-field>\n                    <mat-label> Seleccione un Profesor </mat-label>\n                    <mat-select [(value)]=\"profesorSeleccionado.nombre\">\n                      <mat-select-filter [array]=\"listaProfesores\" [placeholder]=\"'Filtrar por nombre...'\"\n                        [displayMember]=\"'nombre'\" (filteredReturn)=\"filteredList1 = $event\"></mat-select-filter>\n                      <mat-option *ngFor=\"let profesor of filteredList1\" [(value)]=\"profesor.nombre\">\n                        <!--<a (click)=\"selecionarProfesor(profesor)\">{{profesor.nombre}} {{profesor.apellidos}}</a>-->\n                        <div (click)=\"selecionarProfesor(profesor)\">\n                          <a>{{profesor.nombre}} {{profesor.apellidos}}</a>\n                        </div>\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                  <button type=\"button\" (click)=\"verAnadirProfesor()\" class=\"btn btn-outline-success text-right\"><i\n                      class=\"fa fa-plus\"></i> Añadir Profesor</button>\n                </div>\n              </div>\n              <br>\n              <br>\n            </div>\n            <div *ngIf=\"anadirProfesor\" class=\"col-md-5 col-auto card\">\n              <div class=\"card-body\">\n                <h6 class=\"card-title\">Añadir Profesor</h6>\n                <label>Nombre del Profesor</label>\n                <input [(ngModel)]=\"nombreProfesor\" name=\"nomPrf2\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Nombre del profesor\">\n                <br>\n                <label>Apellidos del Profesor</label>\n                <input [(ngModel)]=\"apellidosProfesor\" name=\"nomPrf3\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Apellidos del Profesor\">\n                <br>\n                <label>Nombre del Departamento</label>\n                <input [(ngModel)]=\"departamentoProfesor\" name=\"nomPrf4\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Departamento del Profesor\">\n                <br>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" (click)=\"cancelarAnadirProfesor()\"\n                      class=\"btn btn-outline-danger text-right\"><i class=\"fa fa-times-circle\"></i> Cerrar</button>\n                  </div>\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" (click)=\"anadirProfesorLista()\" class=\"btn btn-outline-success text-right\"><i\n                        class=\"fa fa-plus\"></i> Añadir</button>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col-3 text-center\">\n              <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n                Cancelar</button>\n            </div>\n            <div class=\"col-3 text-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"onSubmit()\">Siguiente Paso <i\n                  class=\"fa fa-arrow-right\"></i></button>\n            </div>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step label=\"Seleccionar Alumnos\">\n        <!--Tabla de alumnos-->\n        <br>\n\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"example-container\">\n\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"nombre\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"apellidos\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"clase\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button *ngIf=\"selection.selected.length==0\" mat-button class=\"btn btn-success\" (click)=\"seleccionarUnAlumno()\">Siguiente Paso <i\n              class=\"fa fa-arrow-right\"></i></button>\n            <button *ngIf=\"selection.selected.length>0\" mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Siguiente Paso <i\n                class=\"fa fa-arrow-right\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n      <mat-step label=\"Localizacion de los alumnos\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-6\">\n            <h4>Localizacion de Alumnos</h4>\n            <div id=\"clase\" class=\"example-boundary\">\n              <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n              <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n                [cdkDragFreeDragPosition]=\"item.estudiante.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n                (cdkDragEnded)=\"dragEnded($event,item)\">\n                {{item.estudiante.nombre}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=guardarActividad()>Guardar <i\n                class=\"fa fa-save\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-profesor/crear-profesor.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-profesor/crear-profesor.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorCrearProfesorCrearProfesorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">Crear Profesor</h4>\n        <div>\n            <div [formGroup]=\"datosPrimarios\" class=\"row\">\n                <div class=\"col-12\">\n                    <label>Nombre del Profesor</label>\n                    <input formControlName=\"fromControlNombreProfesor\" [(ngModel)]=\"nombre\" type=\"text\"\n                        class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" required\n                        [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreProfesor.errors }\">\n                    <div *ngIf=\"submitted && f.fromControlNombreProfesor.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.fromControlNombreProfesor.errors.required\">Nombre es requerido</div>\n                    </div>\n                    <br>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <label>Apellidos</label>\n                    <input [(ngModel)]=\"apellidos\" type=\"text\" class=\"form-control\" id=\"apellidos\" ng-model=\"apellidos\"\n                        placeholder=\"Apellidos\">\n                    <br>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <label>Departamento</label>\n                    <input [(ngModel)]=\"departamento\" type=\"text\" class=\"form-control\" id=\"clase\" ng-model=\"clase\"\n                        placeholder=\"Departamento\">\n                    <br>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-3 text-center\">\n                    <button type=\"button\" (click)=\"cerrar()\" class=\"btn btn-raised btn-danger\"><i\n                            class=\"fa fa-times-circle\"></i>\n                        Cancelar</button>\n                </div>\n                <div class=\"col-3 text-center\">\n                    <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-warning\"><i\n                            class=\"fa fa-trash\"></i> Limpiar</button>\n                </div>\n                <div class=\"col-3 text-center\">\n                    <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-raised btn-success\"><i\n                            class=\"fa fa-save\"></i> Guardar</button>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-actividad/editar-actividad.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-actividad/editar-actividad.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorEditarActividadEditarActividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Editar Actividad</h5>\n    <mat-horizontal-stepper linear #stepper>\n      <mat-step label=\"Crear Actividad\" [stepControl]=\"datosPrimarios\">\n        <br>\n        <form>\n          <div class=\"row justify-content-around\">\n            <div [formGroup]=\"datosPrimarios\" class=\"col-5 text-left\">\n              <div class=\"row\">\n                <label>Nombre de la Actividad</label>\n              </div>\n              <div class=\"row\">\n                <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"editarActividad.nombre\" type=\"text\"\n                  class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la actividad\" required\n                  [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreActividad.errors }\">\n                <div *ngIf=\"submitted && f.fromControlNombreActividad.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.fromControlNombreActividad.errors.required\">Nombre es requerido</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <label>Nombre del Profesor</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <mat-form-field>\n                    <mat-select [(value)]=\"profesorSeleccionado.nombre\">\n                      <!--<mat-select-filter [array]=\"listaProfesores\" [placeholder]=\"'Filtrar por nombre...'\"\n                          [displayMember]=\"'nombre'\" (filteredReturn)=\"filteredList1 = $event\"></mat-select-filter>-->\n                      <mat-option *ngFor=\"let profesor of filteredList1\" [(value)]=\"profesor.nombre\">\n                        <!--<a (click)=\"selecionarProfesor(profesor)\">{{profesor.nombre}} {{profesor.apellidos}}</a>-->\n                        <div (click)=\"selecionarProfesor(profesor)\">\n                          <a>{{profesor.nombre}} {{profesor.apellidos}}</a>\n                        </div>\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                  <button type=\"button\" (click)=\"verAnadirProfesor()\" class=\"btn btn-outline-success text-right\"><i\n                      class=\"fa fa-plus\"></i> Añadir Profesor</button>\n                </div>\n              </div>\n              <br>\n              <br>\n            </div>\n          </div>\n          <div *ngIf=\"anadirProfesor\" class=\"col-md-5 col-auto card\">\n            <div class=\"card-body\">\n              <h6 class=\"card-title\">Añadir Profesor</h6>\n              <label>Nombre del Profesor</label>\n              <input [(ngModel)]=\"nombreProfesor\" name=\"nomPrf2\" type=\"text\" class=\"form-control\"\n                placeholder=\"Nombre del profesor\">\n              <br>\n              <label>Apellidos del Profesor</label>\n              <input [(ngModel)]=\"apellidosProfesor\" name=\"nomPrf3\" type=\"text\" class=\"form-control\"\n                placeholder=\"Apellidos del Profesor\">\n              <br>\n              <label>Nombre del Departamento</label>\n              <input [(ngModel)]=\"departamentoProfesor\" name=\"nomPrf4\" type=\"text\" class=\"form-control\"\n                placeholder=\"Departamento del Profesor\">\n              <br>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-6 text-center\">\n                  <button type=\"button\" (click)=\"cancelarAnadirProfesor()\" class=\"btn btn-outline-danger text-right\"><i\n                      class=\"fa fa-times-circle\"></i> Cerrar</button>\n                </div>\n                <div class=\"col-6 text-center\">\n                  <button type=\"button\" (click)=\"anadirProfesorLista()\" class=\"btn btn-outline-success text-right\"><i\n                      class=\"fa fa-plus\"></i> Añadir</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col-3 text-center\">\n              <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n                Cancelar</button>\n            </div>\n            <div class=\"col-3 text-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"onSubmit()\">Siguiente Paso <i\n                  class=\"fa fa-arrow-right\"></i></button>\n            </div>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step label=\"Seleccionar Alumnos\">\n        <!--Tabla de alumnos-->\n        <br>\n\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"example-container\">\n\n          <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"nombre\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"apellidos\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"clase\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button *ngIf=\"selection.selected.length==0\" mat-button class=\"btn btn-success\" (click)=\"seleccionarUnAlumno()\">Siguiente Paso <i\n              class=\"fa fa-arrow-right\"></i></button>\n            <button *ngIf=\"selection.selected.length>0\" mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Siguiente Paso <i\n                class=\"fa fa-arrow-right\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n      <mat-step label=\"Localizacion de los alumnos\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-6\">\n            <h4>Localizacion de Alumnos</h4>\n            <div id=\"clase\" class=\"example-boundary\">\n              <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n              <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n                [cdkDragFreeDragPosition]=\"item.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n                (cdkDragEnded)=\"dragEnded($event,item)\">\n                {{item.estudiante.nombre}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=actualizar()>Actualizar <i\n                class=\"fa fa-save\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-clase/editar-clase.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-clase/editar-clase.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorEditarClaseEditarClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Editar Actividad</h5>\n    <mat-horizontal-stepper linear #stepper>\n      <mat-step label=\"Crear Actividad\" [stepControl]=\"datosPrimarios\">\n        <br>\n        <form>\n          <div class=\"row justify-content-around\">\n            <div [formGroup]=\"datosPrimarios\" class=\"col-5 text-left\">\n              <div class=\"row\">\n                <label>Nombre de la Actividad</label>\n              </div>\n              <div class=\"row\">\n                <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"editarActividad.nombre\" type=\"text\"\n                  class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la clase\" required\n                  [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreActividad.errors }\">\n                <div *ngIf=\"submitted && f.fromControlNombreActividad.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.fromControlNombreActividad.errors.required\">Nombre es requerido</div>\n                </div>\n              </div>\n              <br>\n              <div class=\"row\">\n                <label>Nombre del Profesor</label>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <mat-form-field>\n                    <mat-select [(value)]=\"profesorSeleccionado.nombre\">\n                      <mat-select-filter [array]=\"listaProfesores\" [placeholder]=\"'Filtrar por nombre...'\"\n                        [displayMember]=\"'nombre'\" (filteredReturn)=\"filteredList1 = $event\"></mat-select-filter>\n                      <mat-option *ngFor=\"let profesor of filteredList1\" [(value)]=\"profesor.nombre\">\n                        <!--<a (click)=\"selecionarProfesor(profesor)\">{{profesor.nombre}} {{profesor.apellidos}}</a>-->\n                        <div (click)=\"selecionarProfesor(profesor)\">\n                          <a>{{profesor.nombre}} {{profesor.apellidos}}</a>\n                        </div>\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                  <button type=\"button\" (click)=\"verAnadirProfesor()\" class=\"btn btn-outline-success text-right\"><i\n                      class=\"fa fa-plus\"></i> Añadir Profesor</button>\n                </div>\n              </div>\n              <br>\n              <br>\n            </div>\n            <div *ngIf=\"anadirProfesor\" class=\"col-md-5 col-auto card\">\n              <div class=\"card-body\">\n                <h6 class=\"card-title\">Añadir Profesor</h6>\n                <label>Nombre del Profesor</label>\n                <input [(ngModel)]=\"nombreProfesor\" name=\"nomPrf2\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Nombre del profesor\">\n                <br>\n                <label>Apellidos del Profesor</label>\n                <input [(ngModel)]=\"apellidosProfesor\" name=\"nomPrf3\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Apellidos del Profesor\">\n                <br>\n                <label>Nombre del Departamento</label>\n                <input [(ngModel)]=\"departamentoProfesor\" name=\"nomPrf4\" type=\"text\" class=\"form-control\"\n                  placeholder=\"Departamento del Profesor\">\n                <br>\n                <div class=\"row justify-content-center\">\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" (click)=\"cancelarAnadirProfesor()\"\n                      class=\"btn btn-outline-danger text-right\"><i class=\"fa fa-times-circle\"></i> Cerrar</button>\n                  </div>\n                  <div class=\"col-6 text-center\">\n                    <button type=\"button\" (click)=\"anadirProfesorLista()\" class=\"btn btn-outline-success text-right\"><i\n                        class=\"fa fa-plus\"></i> Añadir</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col-3 text-center\">\n              <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n                Cancelar</button>\n            </div>\n            <div class=\"col-3 text-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\" >Siguiente Paso <i\n                  class=\"fa fa-arrow-right\"></i></button>\n            </div>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step label=\"Seleccionar Alumnos\">\n        <!--Tabla de alumnos-->\n        <br>\n\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"example-container\">\n\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"nombre\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"apellidos\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"clase\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button *ngIf=\"selection.selected.length==0\" mat-button class=\"btn btn-success\" (click)=\"seleccionarUnAlumno()\">Actualizar Alumnos <i\n              class=\"fa fa-arrow-right\"></i></button>\n            <button *ngIf=\"selection.selected.length>0\" mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Actualizar Alumnos <i\n                class=\"fa fa-arrow-right\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n      <mat-step label=\"Localizacion de los alumnos\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-6\">\n            <h4>Localizacion de Alumnos</h4>\n            <div id=\"clase\" class=\"example-boundary\">\n              <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n              <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n                [cdkDragFreeDragPosition]=\"item.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n                (cdkDragEnded)=\"dragEnded($event,item)\">\n                {{item.estudiante.nombre}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-3 text-center\">\n            <button type=\"button\" (click)=\"cerrarModal()\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i>\n              Cancelar</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-dark\"><i class=\"fa fa-arrow-left\"></i> Volver\n              atras</button>\n          </div>\n          <div class=\"col-3 text-center\">\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=actualizar()>Actualizar <i\n                class=\"fa fa-save\"></i></button>\n          </div>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-profesor/editar-profesor.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-profesor/editar-profesor.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorEditarProfesorEditarProfesorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">Crear Profesor</h4>\n        <div>\n            <div [formGroup]=\"datosPrimarios\" class=\"row\">\n                <div class=\"col-12\">\n                    <label>Nombre del Profesor</label>\n                    <input formControlName=\"fromControlNombreProfesor\" [(ngModel)]=\"editarProfesor.nombre\" type=\"text\"\n                        class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreProfesor.errors }\">\n                    <div *ngIf=\"submitted && f.fromControlNombreProfesor.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.fromControlNombreProfesor.errors.required\">Nombre es requerido</div>\n                    </div>\n                    <br>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <label>Apellidos</label>\n                    <input [(ngModel)]=\"editarProfesor.apellidos\" type=\"text\" class=\"form-control\" id=\"apellidos\"\n                        ng-model=\"apellidos\" placeholder=\"Apellidos\">\n                    <br>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <label>Departamento</label>\n                    <input [(ngModel)]=\"editarProfesor.departamento\" type=\"text\" class=\"form-control\" id=\"clase\"\n                        ng-model=\"clase\" placeholder=\"Departamento\">\n                    <br>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-3 text-center\">\n                    <button type=\"button\" (click)=\"cerrar()\" class=\"btn btn-raised btn-danger\"><i\n                            class=\"fa fa-times-circle\"></i>\n                        Cancelar</button>\n                </div>\n                <div class=\"col-3 text-center\">\n                    <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-warning\"><i\n                            class=\"fa fa-trash\"></i> Limpiar</button>\n                </div>\n                <div class=\"col-3 text-center\">\n                    <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-raised btn-success\"><i\n                            class=\"fa fa-save\"></i> Guardar</button>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/mensaje/mensaje.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/mensaje/mensaje.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorMensajeMensajeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"example-pizza-party\">\n    Pizza party!!! 🍕\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"abrirActividad()\">Abrir Actividad</button>\n  </span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/profesor.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/profesor.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorProfesorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"\">\n    <!--<div class=\"col-md-2\">\n        <div class=\"sidenav list-group\">\n            <a style=\"cursor: pointer;\" class=\"item-menu-sidenav\" (click)=\"abrirActividadActual()\"><i\n                    class=\"fa fa-home\"></i> Home</a>\n            <a style=\"cursor: pointer;\" class=\"item-menu-sidenav\" (click)=\"abrirAlumnos()\"><i class=\"fa fa-user\"></i>\n                Alumnos</a>\n            <a style=\"cursor: pointer;\" class=\"item-menu-sidenav\" (click)=\"abrirClases()\"><i class=\"fa fa-book\"></i>\n                Clases</a>\n            <a style=\"cursor: pointer;\" class=\"item-menu-sidenav\" (click)=\"abrirActividades()\"><i\n                    class=\"fa fa-university\"></i>\n                Actividades</a>\n        </div>\n    </div>-->\n    <div *ngIf=\"gestionHome\" class=\"\">\n        <br>\n        <div *ngIf=\"!actividadAbierta\">\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n        <div class=\"row justify-content-center\" *ngIf=\"!actividadAbierta\">\n            <div class=\"col-sm-3 col-auto text-center\">\n                <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"abrirAlumnos()\"><i\n                        class=\"fa fa-user\"></i> Alumnos</button>\n            </div>\n            <div class=\"col-sm-3 col-auto text-center\">\n                <button type=\"button\" class=\"btn btn-success btn-circle\" (click)=\"abrirClases()\"><i\n                        class=\"fa fa-book\"></i> Clases</button>\n            </div>\n            <div class=\"col-sm-3 col-auto text-center\">\n                <button type=\"button\" class=\"btn btn-info btn-circle\" (click)=\"abrirActividades()\"><i class=\"fas fa-chalkboard-teacher\"></i> Actividades</button>\n            </div>\n        </div>\n        <div *ngIf=\"!actividadAbierta\">\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n        <div>\n            <app-ver-actividad *ngIf=\"actividadAbierta\" [actividad]=\"actividadSelected\"></app-ver-actividad>\n        </div>\n    </div>\n    <div *ngIf=\"gestionAlumnos\" class=\"\">\n        <br>\n        <div *ngIf=\"verEstadisticasA\">\n            <app-ver-alumno [alumno]=\"verAlumno\"></app-ver-alumno>\n        </div>\n        <div *ngIf=\"!verEstadisticasA\" class=\"row justify-content-center\">\n            <div class=\"col-6 text-left\">\n                <h3>Alumnos</h3>\n            </div>\n            <div class=\"col-3 text-center\">\n                <!--<button type=\"button\" *ngIf=\"crearEstudiante || editarAlumno\" (click)=\"cerrarCrearEstudiantes()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>-->\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"!crearEstudiante && !editarAlumno\" (click)=\"abrirCrearEstudiantes()\"\n                    class=\"btn btn-outline-success text-right\"><i class=\"fa fa-plus\"></i> Crear\n                    Alumno</button>\n            </div>\n        </div>\n        <br>\n        <nav *ngIf=\"crearEstudiante\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cerrarCrearEstudiantes()\"><a class=\"migas\"><i\n                            class=\"fa fa-user\"></i>\n                        Alumnos</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\"> Crear Alumno</li>\n            </ol>\n        </nav>\n        <nav *ngIf=\"editarAlumno\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cerrarCrearEstudiantes()\"><a class=\"migas\"><i\n                            class=\"fa fa-user\"></i>\n                        Alumnos</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Editar: {{onSelectedAlumno.nombre}}</li>\n            </ol>\n        </nav>\n        <div *ngIf=\"!verEstadisticasA\" class=\"row justify-content-center\">\n            <div *ngIf=\"crearEstudiante\" class=\"col-8 card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Crear Alumno</h4>\n                    <div>\n                        <div class=\"row\">\n                            <div [formGroup]=\"datosPrimarios\" class=\"col-6\">\n                                <label>Nombre del Alumn@</label>\n                                <input formControlName=\"fromControlNombreEstudiante\" [(ngModel)]=\"alumnoCreate.nombre\"\n                                    type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" required\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.fromControlNombreEstudiante.errors }\">\n                                <div *ngIf=\"submitted && f.fromControlNombreEstudiante.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.fromControlNombreEstudiante.errors.required\">Nombre es requerido</div>\n                                </div>\n                                <br>\n                            </div>\n                            <div class=\"col-6\">\n                                <label>Apellidos</label>\n                                <input [(ngModel)]=\"alumnoCreate.apellidos\" type=\"text\" class=\"form-control\"\n                                    id=\"apellidos\" ng-model=\"apellidos\" placeholder=\"Apellidos\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <label>Curso</label>\n                                <input [(ngModel)]=\"alumnoCreate.clase\" type=\"text\" class=\"form-control\" id=\"clase\"\n                                    ng-model=\"clase\" placeholder=\"Curso\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div [formGroup]=\"datosPrimarios\" class=\"col-6\">\n                                <label>Email</label>\n                                <input formControlName=\"fromControlEmailEstudiante\" [(ngModel)]=\"alumnoCreate.email\"\n                                    type=\"email\" class=\"form-control\" id=\"email\" ng-model=\"email\" placeholder=\"Email\"\n                                    required\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.fromControlEmailEstudiante.errors }\">\n                                <div *ngIf=\"submitted && f.fromControlEmailEstudiante.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.fromControlEmailEstudiante.errors.required\">Email es requerido</div>\n                                </div>\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">El email tiene que ser unico</small>\n                                <br>\n                            </div>\n                            <div [formGroup]=\"datosPrimarios\" class=\"col-6\">\n                                <label>Contraseña</label>\n                                <input formControlName=\"fromControlContrasenaEstudiante\"\n                                    [(ngModel)]=\"alumnoCreate.contrasena\" type=\"password\" class=\"form-control\"\n                                    id=\"contrasena\" ng-model=\"contrasena\" placeholder=\"Contraseña\" required\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.fromControlContrasenaEstudiante.errors }\">\n                                <div *ngIf=\"submitted && f.fromControlContrasenaEstudiante.errors\"\n                                    class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.fromControlContrasenaEstudiante.errors.required\">Contraseña es\n                                        requerida</div>\n                                </div>\n                                <small id=\"contrasenaHelp\" class=\"form-text text-muted\">El usuario podrá entrar con esta\n                                    contraseña</small>\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-3 text-center\">\n                                <button type=\"button\" (click)=\"cerrarCrearEstudiantes()\"\n                                    class=\"btn btn-raised btn-danger\"><i class=\"fa fa-times-circle\"></i>\n                                    Cancelar</button>\n                            </div>\n                            <div class=\"col-3 text-center\">\n                                <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-warning\"><i\n                                        class=\"fa fa-trash\"></i> Limpiar</button>\n                            </div>\n                            <div class=\"col-3 text-center\">\n                                <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-raised btn-success\"><i\n                                        class=\"fa fa-save\"></i> Guardar</button>\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"editarAlumno\" class=\"col-8 card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Editar Alumno</h4>\n                    <div  class=\"container\">\n                        <div class=\"row\">\n                            <div [formGroup]=\"datosPrimarios2\" class=\"col-6\">\n                                <label>Nombre del Alumn@</label>\n                                <input formControlName=\"fromControlNombreEstudiante2\"\n                                    [(ngModel)]=\"onSelectedAlumno.nombre\" type=\"text\" class=\"form-control\" id=\"nombre\"\n                                    placeholder=\"Nombre\" required\n                                    [ngClass]=\"{ 'is-invalid': submitted2 && f2.fromControlNombreEstudiante2.errors }\">\n                                <div *ngIf=\"submitted2 && f2.fromControlNombreEstudiante2.errors\"\n                                    class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.fromControlNombreEstudiante2.errors.required\">Nombre es requerido\n                                    </div>\n                                </div>\n                                <br>\n                            </div>\n                            <div class=\"col-6\">\n                                <label>Apellidos</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.apellidos\" type=\"text\" class=\"form-control\"\n                                    id=\"apellidos\" ng-model=\"apellidos\" placeholder=\"Apellidos\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <label>Curso</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.clase\" type=\"text\" class=\"form-control\" id=\"clase\"\n                                    ng-model=\"clase\" placeholder=\"Curso\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div [formGroup]=\"datosPrimarios2\" class=\"col-6\">\n                                <label>Email</label>\n                                <input formControlName=\"fromControlEmailEstudiante2\"\n                                    [(ngModel)]=\"onSelectedAlumno.email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    ng-model=\"email\" placeholder=\"Email\" required\n                                    [ngClass]=\"{ 'is-invalid': submitted && f2.fromControlEmailEstudiante2.errors }\">\n                                <div *ngIf=\"submitted2 && f2.fromControlEmailEstudiante2.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.fromControlEmailEstudiante2.errors.required\">Email es requerido\n                                    </div>\n                                </div>\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">El email tiene que ser unico</small>\n                                <br>\n                            </div>\n                            <div [formGroup]=\"datosPrimarios2\" class=\"col-6\">\n                                <label>Contraseña</label>\n                                <input formControlName=\"fromControlContrasenaEstudiante2\"\n                                    [(ngModel)]=\"onSelectedAlumno.contrasena\" type=\"password\" class=\"form-control\"\n                                    id=\"contrasena\" ng-model=\"contrasena\" placeholder=\"Contraseña\" required\n                                    [ngClass]=\"{ 'is-invalid': submitted && f2.fromControlContrasenaEstudiante2.errors }\">\n                                <div *ngIf=\"submitted2 && f2.fromControlContrasenaEstudiante2.errors\"\n                                    class=\"invalid-feedback\">\n                                    <div *ngIf=\"f2.fromControlContrasenaEstudiante2.errors.required\">Email es requerido\n                                    </div>\n                                </div>\n                                <small id=\"contrasenaHelp\" class=\"form-text text-muted\">El usuario podrá entrar con esta\n                                    contraseña</small>\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-3 text-center\">\n                                <button type=\"button\" (click)=\"cerrarCrearEstudiantes()\"\n                                    class=\"btn btn-raised btn-danger\"><i class=\"fa fa-times-circle\"></i>\n                                    Cancelar</button>\n                            </div>\n                            <div class=\"col-3 text-center\">\n                                <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-warning\"><i\n                                        class=\"fa fa-trash\"></i> Limpiar</button>\n                            </div>\n                            <div class=\"col-3 text-center\">\n                                <button type=\"button\" (click)=\"onSubmit2()\" class=\"btn btn-raised btn-success\"><i\n                                        class=\"fa fa-save\"></i> Actualizar</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"!crearEstudiante && !editarAlumno\" class=\"col-12\">\n                <nav>\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"fa fa-user\"></i> Alumnos</li>\n                    </ol>\n                </nav>\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterE($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceEstudiantes\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell (click)=\"verEstadisticasAlumno(row)\" *matCellDef=\"let row\"> {{row.nombre}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"apellidos\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"verEstadisticasAlumno(row)\"> {{row.apellidos}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"clase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Curso </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"verEstadisticasAlumno(row)\"> {{row.clase}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"estadisticas\">\n                            <mat-header-cell *matHeaderCellDef>Estadisticas</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"verEstadisticasAlumno(row)\"><button type=\"button\"\n                                    class=\"btn btn-sm btn-outline-info\" (click)=\"verEstadisticasAlumno(row)\"><i\n                                        class=\"fa fa-bar-chart\"></i>\n                                    Estadisticas</button></mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"editarborrar\">\n                            <mat-header-cell *matHeaderCellDef>Editar / Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center seccion-edit\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                        <button (click)=\"editar(row)\"\n                                            class=\"btn btn-sm btn-outline-secondary boton-tabla\"><i\n                                                class=\"fa fa-edit\"></i></button>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <button (click)=\"borrar(row)\"\n                                            class=\"btn btn-sm btn-outline-danger boton-tabla\"><i class=\"far fa-trash-alt\"></i></button>\n                                    </div>\n                                </div>\n                            </mat-cell>\n                        </ng-container>\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsEstudiantes\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsEstudiantes;\" class=\"element-row\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n        </div>\n        <br>\n    </div>\n    <div *ngIf=\"gestionActividades\">\n        <br>\n        <div class=\"row justify-content-center\">\n            <div class=\"col-6 text-left\">\n                <h3>Actividades</h3>\n            </div>\n            <div class=\"col-3 text-center\">\n                <!--<button type=\"button\" *ngIf=\"(crearActividad) || editarActividad\" (click)=\"cerrarModal()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>-->\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"(!crearActividad) && !editarActividad\" (click)=\"abrirCrearActividad()\"\n                    class=\"btn btn-outline-success\"><i class=\"fa fa-plus\"></i> Crear\n                    Actividad</button>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <nav *ngIf=\"(!crearActividad || editarActividad) && (crearActividad || !editarActividad)\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"fas fa-chalkboard-teacher\"></i>\n                            Actividades\n                        </li>\n                    </ol>\n                </nav>\n                <nav *ngIf=\"crearActividad\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                            class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item\" (click)=\"cerrarModal()\"><a class=\"migas\"><i class=\"fas fa-chalkboard-teacher\"></i>\n                                Actividades</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"> Crear Actividad\n                        </li>\n                    </ol>\n                </nav>\n                <nav *ngIf=\"editarActividad\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item\" (click)=\"cerrarModal()\"><a class=\"migas\"><i class=\"fas fa-chalkboard-teacher\"></i>\n                                Actividades</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"> Editar Actividad:\n                            {{ActividadparaEditar.nombre}}\n                        </li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n\n        <div>\n            <app-crear-actividad *ngIf=\"crearActividad\" [estudiantes]=\"listaAlumnos\"\n                (actividadCreada)=\"guardarActividad($event)\"></app-crear-actividad>\n            <app-editar-actividad *ngIf=\"editarActividad\" [verClase]=\"vengoDeProfesor\"\n                [editarActividad]=\"ActividadparaEditar\" [estudiantes]=\"listaAlumnos\"\n                (actividadEditada)=\"actualizarActividad($event)\" (cerrarModalOut)=\"cerrarModal()\">\n            </app-editar-actividad>\n        </div>\n        <div *ngIf=\"(!crearActividad || editarActividad) && (crearActividad || !editarActividad)\"\n            class=\"row justify-content-md-center\">\n            <div class=\"col-12\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterA($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceActividades\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\"> {{row.nombre}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"profesor\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\"> {{row.profesor.nombre}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"clase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\"> {{row.clase.nombre}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"estado\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\">\n                                <div *ngIf=\"row.estado=='Creada'\">\n                                    <i class=\"fa fa-check\"></i> {{row.estado}}\n                                </div>\n                                <div *ngIf=\"row.estado=='Comenzada'\">\n                                    <i class=\"fa fa-play-circle\"></i> {{row.estado}}\n                                </div>\n                                <div *ngIf=\"row.estado=='Finalizada'\">\n                                    <i class=\"fa fa-bar-chart\"></i> {{row.estado}}\n                                </div>\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"acciones\">\n                            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-primary\"\n                                    (click)=\"abrirActividad(row)\"><i class=\"fa fa-external-link\"></i> Acceder</button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"editarborrar\">\n                            <mat-header-cell *matHeaderCellDef>Editar / Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center seccion-edit\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                        <button (click)=\"editarA(row)\"\n                                            class=\"btn btn-sm btn-outline-secondary boton-tabla\"><i\n                                                class=\"fa fa-edit\"></i></button>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <button (click)=\"borrarA(row)\"\n                                            class=\"btn btn-sm btn-outline-danger boton-tabla\"><i\n                                                class=\"fa fa-trash-o\"></i></button>\n                                    </div>\n                                </div>\n                            </mat-cell>\n                        </ng-container>\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsActividades\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsActividades;\" class=\"element-row\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n        </div>\n        <br>\n    </div>\n    <div *ngIf=\"gestionClases\">\n        <br *ngIf=\"(!verClase || verEstadisticasC) && (verClase || !verEstadisticasC)\">\n        <div *ngIf=\"(!verClase || verEstadisticasC) && (verClase || !verEstadisticasC)\"\n            class=\"row justify-content-center\">\n            <div class=\"col-6 text-left\">\n                <h3>Clases</h3>\n            </div>\n            <div class=\"col-3 text-center\">\n                <!--<button type=\"button\" *ngIf=\"crearClase || editarClase\" (click)=\"cerrarModal()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>-->\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"!crearClase || !editarClase\" (click)=\"abrirCrearClase()\"\n                    class=\"btn btn-outline-success\"><i class=\"fa fa-plus\"></i> Crear\n                    Clase</button>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <nav\n                    *ngIf=\"(!crearClase || editarClase) && (crearClase || !editarClase) && !verClase && !verEstadisticasC\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"fa fa-book\"></i> Clases</li>\n                    </ol>\n                </nav>\n                <nav *ngIf=\"crearClase\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item\" (click)=\"cerrarModal()\"><a class=\"migas\"><i class=\"fa fa-book\"></i>\n                                Clases</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Crear Clase</li>\n                    </ol>\n                </nav>\n                <nav *ngIf=\"editarClase\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item\" (click)=\"cerrarModal()\"><a class=\"migas\"><i class=\"fa fa-book\"></i>\n                                Clases</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Editar Clase: {{ClaseparaEditar.nombre}}\n                        </li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n        <app-crear-clase *ngIf=\"crearClase\" [estudiantes]=\"listaAlumnos\"></app-crear-clase>\n        <app-editar-clase *ngIf=\"editarClase\" [estudiantes]=\"listaAlumnos\" [editarActividad]=\"ClaseparaEditar\">\n        </app-editar-clase>\n        <app-ver-estadisticas-clase *ngIf=\"verEstadisticasC\" [clase]=\"objClaseEstadisticas\">\n        </app-ver-estadisticas-clase>\n        <app-ver-clase *ngIf=\"verClase\" [clase]=\"claseSelected\"></app-ver-clase>\n        <div *ngIf=\"(!crearClase || editarClase) && (crearClase || !editarClase) && !verClase && !verEstadisticasC\"\n            class=\"row justify-content-md-center\">\n\n            <div class=\"col-12\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterC($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceClases\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"verEstadisticasClase(row)\"> {{row.nombre}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"profesor\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"verEstadisticasClase(row)\"> {{row.profesor.nombre}}\n                            </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"accion1\">\n                            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\">\n                                <button *ngIf=\"!creandoActividadAsociada\" type=\"button\"\n                                    class=\"btn btn-sm btn-outline-success\" (click)=\"crearActividadAsociada(row)\"><i\n                                        class=\"fa fa-plus\"></i> Crear\n                                    Actividad</button>\n                                <button *ngIf=\"creandoActividadAsociada\" class=\"btn btn-sm btn-outline-success disabled\"\n                                    type=\"button\" disabled>\n                                    <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                        aria-hidden=\"true\"></span>\n                                    Creando ...\n                                </button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"accion2\">\n                            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"abrirClase(row)\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-primary\"\n                                    (click)=\"abrirClase(row)\"><i class=\"fa fa-external-link\"></i> Ver\n                                    Clase</button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"accion3\">\n                            <mat-header-cell *matHeaderCellDef>Estadisticas</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"verEstadisticasClase(row)\">\n                                <button type=\"button\" class=\"btn btn-sm btn-outline-info\"\n                                    (click)=\"verEstadisticasClase(row)\"><i class=\"fa fa-bar-chart\"></i> Ver\n                                    Estadisticas</button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"editarborrar\">\n                            <mat-header-cell *matHeaderCellDef>Editar / Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center seccion-edit\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                        <button (click)=\"editarC(row)\"\n                                            class=\"btn btn-sm btn-outline-secondary boton-tabla\"><i\n                                                class=\"fa fa-edit\"></i></button>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <button (click)=\"borrarC(row)\"\n                                            class=\"btn btn-sm btn-outline-danger boton-tabla\"><i\n                                                class=\"fa fa-trash-o\"></i></button>\n                                    </div>\n                                </div>\n                            </mat-cell>\n                        </ng-container>\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsClases\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsClases;\" class=\"element-row\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n            <br>\n        </div>\n    </div>\n    <div *ngIf=\"gestionProfesores\">\n        <br>\n        <div class=\"row justify-content-center\">\n            <div class=\"col-6 text-left\">\n                <h3>Profesores</h3>\n            </div>\n            <div class=\"col-3 text-center\">\n                <!--<button type=\"button\" *ngIf=\"(crearActividad) || editarActividad\" (click)=\"cerrarModal()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>-->\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"(!crearProfesor) && !editarProfesor\" (click)=\"abrirCrearProfesor()\"\n                    class=\"btn btn-outline-success\"><i class=\"fa fa-plus\"></i> Crear Profesor</button>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <nav *ngIf=\"(!crearProfesor) && !editarProfesor\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"fa fa-id-card\"></i> Profesores\n                        </li>\n                    </ol>\n                </nav>\n                <nav *ngIf=\"crearProfesor\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item\" (click)=\"cerrarModal()\"><a class=\"migas\"><i\n                                    class=\"fa fa-id-card\"></i>\n                                Profesores</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Crear Profesor</li>\n                    </ol>\n                </nav>\n                <nav *ngIf=\"editarProfesor\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\" (click)=\"abrirActividadActual()\"><a class=\"migas\"><i\n                                    class=\"fa fa-home\"></i>\n                                Home</a></li>\n                        <li class=\"breadcrumb-item\" (click)=\"cerrarModal()\"><a class=\"migas\"><i\n                                    class=\"fa fa-id-card\"></i>\n                                Profesores</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Editar Profesor:\n                            {{ProfesorparaEditar.nombre}}\n                        </li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n        <div *ngIf=\"crearProfesor || editarProfesor\" class=\"row justify-content-center\">\n            <div class=\"col-8\">\n                <app-crear-profesor *ngIf=\"crearProfesor\">\n                </app-crear-profesor>\n                <app-editar-profesor *ngIf=\"editarProfesor\" [editarProfesor]=\"ProfesorparaEditar\">\n                </app-editar-profesor>\n            </div>\n        </div>\n        <div *ngIf=\"(!crearProfesor || editarProfesor) && (crearProfesor || !editarProfesor)\"\n            class=\"row justify-content-md-center\">\n            <div class=\"col-12\">\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterP($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceProfesores\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"editarP(row)\"> {{row.nombre}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"apellidos\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"editarP(row)\"> {{row.apellidos}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"departamento\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Departamento </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" (click)=\"editarP(row)\"> {{row.departamento}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"accion1\">\n                            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\">\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"editarborrar\">\n                            <mat-header-cell *matHeaderCellDef>Editar / Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center seccion-edit\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                        <button (click)=\"editarP(row)\"\n                                            class=\"btn btn-sm btn-outline-secondary boton-tabla\"><i\n                                                class=\"fa fa-edit\"></i></button>\n                                    </div>\n                                    <div class=\"col-6\">\n                                        <button (click)=\"borrarP(row)\"\n                                            class=\"btn btn-sm btn-outline-danger boton-tabla\"><i\n                                                class=\"fa fa-trash-o\"></i></button>\n                                    </div>\n                                </div>\n                            </mat-cell>\n                        </ng-container>\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsProfesores\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsProfesores;\" class=\"element-row\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/sidenav-profesor/sidenav-profesor.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/sidenav-profesor/sidenav-profesor.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorSidenavProfesorSidenavProfesorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sidenav list-group\">\n    <a  href=\"#\">Actividades</a>\n    <a \n     href=\"#\">Alumno</a>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-actividad/ver-actividad.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-actividad/ver-actividad.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorVerActividadVerActividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3 class=\"text-center\">{{actividad.nombre}}</h3>\n    </div>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <nav>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"cerrarActividad()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Ver Actividad</li>\n            </ol>\n        </nav>\n    </div>\n</div>\n<div class=\"row justify-content-md-center\">\n    <div class=\"col-12\">\n        <h5 class=\"text-center\" *ngIf=\"actividad.estado=='Creada'\">Actividad sin empezar</h5>\n        <h5 class=\"text-center\" *ngIf=\"actividad.estado=='Comenzada'\">Actividad empezada</h5>\n        <h5 class=\"text-center\" *ngIf=\"actividad.estado=='Finalizada'\">Actividad finalizada</h5>\n    </div>\n</div>\n<div class=\"row justify-content-md-center text-center\">\n    <div class=\"col-3 text-left\">\n        <button\n            *ngIf=\"actividad.estado=='Creada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\"\n            type=\"button\" class=\"btn btn-outline-success disenable\" (click)=\"comenzar()\"><i\n                class=\"fa fa-play-circle\"></i> Comenzar</button>\n        <button *ngIf=\"botonCreadaCargando\" class=\"btn btn-outline-success\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Comenzando...\n        </button>\n        <button\n            *ngIf=\"actividad.estado=='Comenzada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\"\n            type=\"button\" class=\"btn btn-outline-danger disenable\" (click)=\"terminar()\"><i\n                class=\"fa fa-stop-circle\"></i>\n            Terminar</button>\n        <button *ngIf=\"botonFinalizadaCargando\" class=\"btn btn-outline-danger\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Terminando...\n        </button>\n        <button\n            *ngIf=\"actividad.estado=='Finalizada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\"\n            type=\"button\" class=\"btn btn-outline-success disenable\" (click)=\"comenzar()\"><i class=\"fa fa-undo\"></i>\n            Reanudar Actividad</button>\n        <button *ngIf=\"actividad.estado=='Finalizada' && botonReanudarCargando\" class=\"btn btn-outline-danger\"\n            type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Reanunando..\n        </button>\n    </div>\n    <div class=\"row col-6 justify-content-center text-center\" *ngIf=\"!actividadAbierta\">\n        <div class=\"col-2 text-center\">\n            <div class=\"row justify-content-center\">\n                <button type=\"button\" class=\"btn btn-success btn-circle2\" disabled>\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n            <div class=\"row justify-content-center\">\n                Creada\n            </div>\n        </div>\n        <div class=\"col-3\">\n            <hr style=\"margin-top: 20%;\">\n        </div>\n        <div class=\"col-2 text-center\">\n            <div class=\"row justify-content-center\">\n                <button *ngIf=\"actividad.estado=='Comenzada' || actividad.estado=='Finalizada'\" type=\"button\"\n                    class=\"btn btn-success btn-circle2\" disabled>\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </button>\n                <button *ngIf=\"actividad.estado=='Creada'\" type=\"button\" class=\"btn btn-outline-secondary btn-circle2\"\n                    disabled>\n\n                </button>\n            </div>\n            <div class=\"row justify-content-center\">\n                Comenzada\n            </div>\n        </div>\n        <div class=\"col-3\">\n            <hr style=\"margin-top: 20%;\">\n        </div>\n        <div class=\"col-2 text-center\">\n            <div class=\"row justify-content-center\">\n                <button *ngIf=\"actividad.estado=='Finalizada'\" type=\"button\" class=\"btn btn-success btn-circle2\"\n                    disabled>\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </button>\n                <button *ngIf=\"actividad.estado=='Creada' || actividad.estado=='Comenzada'\" type=\"button\"\n                    class=\"btn btn-outline-secondary btn-circle2\" disabled>\n\n                </button>\n            </div>\n            <div class=\"row justify-content-center\">\n                Finalizada\n            </div>\n        </div>\n    </div>\n    <div class=\"col-3 text-right\">\n        <button *ngIf=\" !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\" type=\"button\"\n            class=\"btn btn-dark\" (click)=\"cerrarActividad()\"><i class=\"fa fa-times-circle\"></i> Volver atrás</button>\n        <button *ngIf=\"botonCreadaCargando || botonFinalizadaCargando || botonReanudarCargando\" type=\"button\"\n            class=\"btn btn-dark\" (click)=\"cerrarActividad()\" disabled><i class=\"fa fa-times-circle\"></i>\n            Volver atrás</button>\n    </div>\n</div>\n<br>\n<div class=\"row justify-content-center text-center\">\n    <div *ngIf=\"vistaGeneral\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\" checked> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAEvolucion()\"> Evolucion\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMedia()\"> Media\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAAlumnos()\"> Alumnos\n        </label>\n    </div>\n    <div *ngIf=\"vistaMapaDeLaClase\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\" checked> Mapa de la clase\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAEvolucion()\"> Evolucion\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMedia()\"> Media\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAAlumnos()\"> Alumnos\n        </label>\n    </div>\n    <div *ngIf=\"evolucion\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAEvolucion()\" checked> Evolucion\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMedia()\"> Media\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAAlumnos()\"> Alumnos\n        </label>\n    </div>\n    <div *ngIf=\"conectados\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAEvolucion()\"> Evolucion\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMedia()\"> Media\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAAlumnos()\"> Alumnos\n        </label>\n    </div>\n    <div *ngIf=\"media\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAEvolucion()\"> Evolucion\n        </label>\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMedia()\" checked> Media\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAAlumnos()\"> Alumnos\n        </label>\n    </div>\n    <div *ngIf=\"tablaAlumnos\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAEvolucion()\"> Evolucion\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMedia()\"> Media\n        </label>\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAAlumnos()\" checked> Alumnos\n        </label>\n    </div>\n</div>\n<br>\n<div *ngIf=\"actividad.estado=='Comenzada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\"\n    class=\"row justify-content-center text-center\">\n    <div class=\"col-2\">\n        <button *ngIf=\"!simulandoDatos\" (click)=\"simularDatos()\" type=\"button\" class=\"btn btn-outline-success\"> <i\n                class=\"fa fa-bar-chart\"></i> Simular datos </button>\n        <button *ngIf=\"simulandoDatos\" (click)=\"simularDatos()\" type=\"button\" class=\"btn btn-outline-danger\"> <i\n                class=\"fa fa-bar-chart\"></i> Parar simulacion </button>\n    </div>\n</div>\n<br>\n<div id=\"vistaGeneral\">\n    <div class=\"row justify-content-center\">\n        <!--<div id=\"conectadosPequeños\" class=\"col-4 card\">\n            <div class=\"card-body\">\n                <h6 class=\"card-title text-center\">Usuarios Conectados</h6>\n                <canvas id=\"usersConectados\"></canvas>\n                <h6 class=\"text-center\">{{porUsuariosConectados}}% Usuarios conectados</h6>\n            </div>\n        </div>-->\n        <div id=\"conectadosPequeños\" class=\"col-auto\">\n            <h5 class=\"text-center card-title\">Usuarios Conectados</h5>\n            <canvas id=\"usersConectados\"></canvas>\n            <h6 class=\"text-center\">{{porUsuariosConectados}}% Alumnos conectados</h6>\n        </div>\n        <!--<div class=\"col-auto card\">\n            <div class=\"card-body\">\n                <h6 class=\"card-title text-center\">Grafica</h6>\n                <div class=\"row text-center justify-content-center\">\n                    <div class=\"col-4\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Estado\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <div class=\"dropdown-item\" *ngFor=\"let estado of estados\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"estado.checked\">\n                                    <a>{{estado.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-4\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Alumnos\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a *ngIf=\"alumnoSeleccionadoAlumno\" class=\"dropdown-item\">Media de la clase</a>\n                                <div class=\"dropdown-item\" *ngFor=\"let alumno of alumnosSelect\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"alumno.checked\">\n                                    <a>{{alumno.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-4\">\n                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"actualizarGraficaLineal()\"><i\n                                class=\"fa fa-refresh\"></i> Actualizar</button>\n                    </div>\n                </div>\n                <div class=\"row text-center justify-content-center\">\n                    <canvas id=\"graficaLineal\"></canvas>\n                </div>\n            </div>\n        </div>-->\n        <div class=\"col-9\">\n            <div>\n                <div class=\"row\">\n                    <h5 class=\"col-12 text-center card-title\">Grafica</h5>\n                </div>\n                <div class=\"row text-center justify-content-center\">\n                    <div class=\"col-6\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Estado\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <div class=\"dropdown-item\" *ngFor=\"let estado of estados\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" (click)=\"actualizarGraficaLineal()\"\n                                        [(ngModel)]=\"estado.checked\">\n                                    <a>{{estado.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Alumnos\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a *ngIf=\"alumnoSeleccionadoAlumno\" class=\"dropdown-item\">Media de la clase</a>\n                                <div class=\"dropdown-item\" *ngFor=\"let alumno of alumnosSelect\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" (click)=\"actualizarGraficaLineal()\"\n                                        [(ngModel)]=\"alumno.checked\">\n                                    <a>{{alumno.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--<div class=\"col-4\">\n                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"actualizarGraficaLineal()\"><i\n                                class=\"fa fa-refresh\"></i> Actualizar</button>\n                    </div>-->\n                </div>\n            </div>\n            <div>\n                <canvas id=\"graficaLineal\"></canvas>\n            </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-auto col-md-7\">\n            <div class=\"text-center\">\n                <i class=\"fa fa-users fa-2x\"></i>\n                <h5>Alumnos</h5>\n            </div>\n            <div class=\"example-header\">\n                <mat-form-field>\n                    <input matInput (keyup)=\"applyFilterA($event.target.value)\" placeholder=\"Filtrar\">\n                </mat-form-field>\n            </div>\n            <div class=\"example-container\">\n                <mat-table [dataSource]=\"dataSourceAlumnos\" class=\"mat-elevation-z1\" matSort>\n                    <ng-container matColumnDef=\"nombre\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                        <mat-cell *matCellDef=\"let element\"> {{element.nombre}} </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"estado\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.estado}} </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"pulsaciones\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> \n                            <div *ngIf=\"actividad.estado!='Finalizada'\">Pulsaciones</div>\n                            <div *ngIf=\"actividad.estado=='Finalizada'\">Pulsaciones Media</div>  \n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\">\n                            <div *ngIf=\"row.pulsaciones<=95\">{{row.pulsaciones}} ppm</div>\n                            <div *ngIf=\"row.pulsaciones>95\" style=\"color:red\">{{row.pulsaciones}} ppm</div>\n                        </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"webcam\">\n                        <mat-header-cell *matHeaderCellDef><button class=\"btn btn-sm btn-primary\"\n                                (click)=\"activarTodasWebCam()\"><i class=\"fa fa-video-camera\"></i> Todos</button>\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\">\n                            <button *ngIf=\"row.webcam!=true && row.estado!='Desconectado' && !row.cargandoC\"\n                                class=\"btn btn-sm btn-outline-primary\" (click)=\"activarWebCam(row.estudiante)\"><i\n                                    class=\"fa fa-video-camera\"></i>\n                                Activar</button>\n                            <button *ngIf=\"row.cargandoC\" class=\"btn btn-sm btn-outline-primary disabled\" type=\"button\"\n                                disabled>\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                                Activando ...\n                            </button>\n                            <button *ngIf=\"row.webcam==true && row.estado!='Desconectado' && !row.cargandoC\"\n                                class=\"btn btn-sm btn-outline-danger\" (click)=\"desactivarWebCam(row.estudiante)\"><i\n                                    class=\"fa fa-video-camera\"></i>\n                                Desactivar</button>\n                        </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"pulsera\">\n                        <mat-header-cell *matHeaderCellDef><button class=\"btn btn-sm btn-primary\"\n                                (click)=\"activarTodasPulseras()\"><i class=\"fa fa-heartbeat\"></i> Todos</button>\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\">\n                            <button *ngIf=\"row.pulsera!=true && row.estado!='Desconectado' && !row.cargandoP\"\n                                class=\"btn btn-sm btn-outline-primary\" (click)=\"activarPulsera(row.estudiante)\"><i\n                                    class=\"fa fa-heartbeat\"></i>\n                                Activar</button>\n                            <button *ngIf=\"row.cargandoP\" class=\"btn btn-sm btn-outline-primary disabled\" type=\"button\"\n                                disabled>\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                                Activando ...\n                            </button>\n                            <button *ngIf=\"row.pulsera==true && row.estado!='Desconectado' && !row.cargandoP\"\n                                class=\"btn btn-sm btn-outline-danger\" (click)=\"desactivarPulsera(row.estudiante)\"><i\n                                    class=\"fa fa-heartbeat\"></i>\n                                Desactivar</button>\n                        </mat-cell>\n                    </ng-container>\n                    <ng-container matColumnDef=\"led\">\n                        <mat-header-cell *matHeaderCellDef>\n                            <button class=\"btn btn-sm btn-primary\" (click)=\"activarTodosLeds()\"><i\n                                    class=\"fa fa-lightbulb-o\"></i> Todos</button>\n                        </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\">\n                            <button *ngIf=\"row.led!=true && row.estado!='Desconectado' && !row.cargandoL\"\n                                class=\"btn btn-sm btn-outline-primary\" (click)=\"activarLed(row.estudiante)\"><i\n                                    class=\"fa fa-lightbulb-o\"></i> Activar</button>\n                            <button *ngIf=\"row.cargandoL\" class=\"btn btn-sm btn-outline-primary disabled\" type=\"button\"\n                                disabled>\n                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                                Activando ...\n                            </button>\n                            <button *ngIf=\"row.led==true && row.estado!='Desconectado' && !row.cargandoL\"\n                                class=\"btn btn-sm btn-outline-danger\" (click)=\"desactivarLed(row.estudiante)\"><i\n                                    class=\"fa fa-lightbulb-o\"></i> Desactivar</button>\n                        </mat-cell>\n                    </ng-container>\n                    <mat-header-row *matHeaderRowDef=\"displayedColumnsAlumnos\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumnsAlumnos;\">\n                    </mat-row>\n                </mat-table>\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n            </div>\n        </div>\n        <!--<div class=\"col-auto text-center card\">\n            <div class=\"card-body\">\n                <h6 class=\"card-title text-center\">Estado de la clase</h6>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-5\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Estado\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <div class=\"dropdown-item\" *ngFor=\"let estado of estadosGlobales\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"estado.checked\">\n                                    <a>{{estado.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-5\">\n                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"actualizarGraficaGlobal()\"> <i\n                                class=\"fa fa-refresh\"></i> Actualizar</button>\n                    </div>\n                </div>\n                <br>\n                <div>\n                    <canvas id=\"estadoGlobal\"></canvas>\n                </div>\n            </div>\n        </div>-->\n        <div class=\"col-auto text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 text-center\">\n                    <h5>Estado de la clase</h5>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-5 text-center\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{estadosConjuntoSeleccionado.nombre}}\n                        </button>\n                        <div class=\"dropdown-menu\">\n                            <div class=\"dropdown-item\" *ngFor=\"let estado of estadosConjunto2\" (click)=\"seleccionarEstadoGlobal(estado)\">\n                                <a>{{estado.nombre}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--<div class=\"col-5\">\n                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"actualizarGraficaGlobal()\"> <i\n                            class=\"fa fa-refresh\"></i> Actualizar</button>\n                </div>-->\n            </div>\n            <br>\n            <div>\n                <canvas id=\"estadoGlobal\"></canvas>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"vistaMapaDeLaClase\" class=\"col-12\" style=\"display: none;\">\n    <div class=\"row\">\n        <div class=\"card col-12\">\n            <div class=\"card-body\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-6 text-center\">\n                        <h5 class=\"card-title\">Distribucion de la clase</h5>\n                    </div>\n                </div>\n                <div class=\"row justify-content-center\">\n                    <!--<div class=\"col-4 text-center\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                {{visualizacionSelected}}\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a *ngIf=\"alumnoSeleccionadoAlumno\" class=\"dropdown-item\">Media de la clase</a>\n                                <div class=\"dropdown-item\" *ngFor=\"let visualizacion of visualizaciones\"\n                                    (click)=\"seleccionVisualizacion(visualizacion)\">\n                                    <a>{{visualizacion.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>-->\n                    <div class=\"col-md-6\">\n\n                    </div>\n                    <div class=\"col-md-6 col-auto\">\n                        <div class=\"row justify-content-center\">\n                            <div class=\"col-6 text-center\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                                        {{estadoConjuntoSeleccionado}}\n                                    </button>\n                                    <div class=\"dropdown-menu\">\n                                        <div class=\"dropdown-item\" (click)=\"seleccionarEstadoConjunto(estado)\"\n                                            *ngFor=\"let estado of estadosConjunto\">\n                                            <a>{{estado.nombre}}</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"actividad.estado=='Comenzada'\" class=\"col-6 text-center\">\n                                <button *ngIf=\"!actualizandoResumen\" type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"actualizarResumen()\"><i class=\"fa fa-refresh\"></i> Actualizar</button>\n                                <!--actualizandoResumen-->\n                                <button *ngIf=\"actualizandoResumen\" class=\"btn btn-outline-success disabled\"\n                                    type=\"button\" disabled>\n                                    <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                        aria-hidden=\"true\"></span>\n                                    Actualizando ...\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-auto\">\n                        <div id=\"clase\" class=\"example-boundary\">\n                            <div id=\"{{item.id_item}}\" *ngFor=\"let item of actividad.alumnos\" class=\"example-box\"\n                                ondrop=\"myFunction(item)\" [cdkDragFreeDragPosition]=\"item.posicion\"\n                                cdkDragBoundary=\".example-boundary\" cdkDrag (cdkDragEnded)=\"dragEnded($event,item)\">\n                                {{item.estudiante.nombre}}\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"visualizacionSelected.nombre == 'Mapa de Calor'\" class=\"col-auto\">\n                        <div class=\"example-boundary heatmap\" data=\"data\"></div>\n                    </div>\n                    <div class=\"col-sm-6 col-12\">\n                        <div id=\"datoAlegria\">\n                            <div class=\"text-left\">\n                                <h6>Alegria</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-alegria\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(255,255,84,1)\" aria-valuenow=\"25\"\n                                        aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.alegria}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datoAsco\">\n                            <div class=\"text-left\">\n                                <h6>Asco</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-asco\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(0,0,0,0.5)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.asco}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datoMiedo\">\n                            <div class=\"text-left\">\n                                <h6>Miedo</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-miedo\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(0,150,0,1)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.miedo}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datoSorpresa\">\n                            <div class=\"text-left\">\n                                <h6>Sorpresa</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-sorpresa\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(89,189,255,1)\" aria-valuenow=\"25\"\n                                        aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.sorpresa}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datoTristeza\">\n                            <div class=\"text-left\">\n                                <h6>Tristeza</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-tristeza\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(81,81,255,1)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.tristeza}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datoIra\">\n                            <div class=\"text-left\">\n                                <h6>Ira</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-ira\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(255,0,0,1)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.ira}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datoconcentrado\">\n                            <div class=\"text-left\">\n                                <h6>Concentrado</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-concentrado\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(84,255,84,1)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.concentrado}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datodistraido\">\n                            <div class=\"text-left\">\n                                <h6>Distraido</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-distraido\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(70,70,70,1)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.distraido}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datomotivado\">\n                            <div class=\"text-left\">\n                                <h6>Motivado</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-motivado\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(84,25,80,1)\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                        aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.motivado}}%\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"datofrustrado\">\n                            <div class=\"text-left\">\n                                <h6>Frustrado</h6>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"progress col-10\">\n                                    <div id=\"progress-frustrado\" class=\"progress-bar\" role=\"progressbar\"\n                                        style=\"background-color: rgba(123,123,123,1)\" aria-valuenow=\"25\"\n                                        aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                </div>\n                                <div class=\"col-2\">\n                                    {{datosResumenSeleccionados.frustrado}}%\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <br>\n        </div>\n    </div>\n</div>\n<div id=\"GraficoEvolucion\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-8\">\n            <div>\n                <div class=\"row\">\n                    <h4 class=\"col-12 text-left card-title\">Grafica</h4>\n                </div>\n                <div class=\"row text-center justify-content-center\">\n                    <div class=\"col-6\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Estado\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <div class=\"dropdown-item\" *ngFor=\"let estado of estados\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" (click)=\"actualizarGraficaLineal()\"\n                                        [(ngModel)]=\"estado.checked\">\n                                    <a>{{estado.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Alumnos\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a *ngIf=\"alumnoSeleccionadoAlumno\" class=\"dropdown-item\">Media de la clase</a>\n                                <div class=\"dropdown-item\" *ngFor=\"let alumno of alumnosSelect\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" (click)=\"actualizarGraficaLineal()\"\n                                        [(ngModel)]=\"alumno.checked\">\n                                    <a>{{alumno.nombre}}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--<div class=\"col-4\">\n                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"actualizarGraficaLineal()\"><i\n                                class=\"fa fa-refresh\"></i> Actualizar</button>\n                    </div>-->\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <canvas id=\"graficaLinealEntera\"></canvas>\n                    </div>\n                </div>\n            </div>\n            <!--<div>\n                <canvas id=\"graficaLinealEntera\"></canvas>\n            </div>-->\n        </div>\n    </div>\n</div>\n<!--<div id=\"gUsuariosConectados\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-8\">\n            <h4 class=\"text-left card-title\">Alumnos Conectados</h4>\n            <canvas id=\"usersConectadosEntera\"></canvas>\n            <h6 class=\"text-center\">{{porUsuariosConectados}}%</h6>\n        </div>\n    </div>\n\n</div>-->\n<div id=\"gEstadoUsuarios\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-8\">\n            <div class=\"row\">\n                <div class=\"col-12 text-left\">\n                    <h4>Estado de la clase</h4>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-5 text-center\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{estadosConjuntoSeleccionado.nombre}}\n                        </button>\n                        <div class=\"dropdown-menu\">\n                            <div class=\"dropdown-item\" *ngFor=\"let estado of estadosConjunto2\" (click)=\"seleccionarEstadoGlobal(estado)\">\n                                <a>{{estado.nombre}}</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--<div class=\"col-5\">\n                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"actualizarGraficaGlobal()\"> <i\n                            class=\"fa fa-refresh\"></i> Actualizar</button>\n                </div>-->\n            </div>\n            <br>\n            <div>\n                <canvas id=\"estadoGlobalEntero\"></canvas>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"tablaUsuarios\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-10\">\n            <div class=\"text-left\">\n                <h4>Alumnos</h4>\n            </div>\n            <div class=\"example-header\">\n                <mat-form-field>\n                    <input matInput (keyup)=\"applyFilterA($event.target.value)\" placeholder=\"Filtrar\">\n                </mat-form-field>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12\">\n                    <div class=\"example-container\">\n                        <mat-table [dataSource]=\"dataSourceAlumnos\" class=\"mat-elevation-z1\" matSort>\n                            <ng-container matColumnDef=\"nombre\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\"> {{element.nombre}} </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"estado\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.estado}} </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"pulsaciones\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header> \n                                    <div *ngIf=\"actividad.estado!='Finalizada'\">Pulsaciones</div>\n                                    <div *ngIf=\"actividad.estado=='Finalizada'\">Pulsaciones Media</div>  \n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\">\n                                    <div *ngIf=\"row.pulsaciones<=95\">{{row.pulsaciones}} ppm</div>\n                                    <div *ngIf=\"row.pulsaciones>95\" style=\"color:red\">{{row.pulsaciones}} ppm</div>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"webcam\">\n                                <mat-header-cell *matHeaderCellDef><button class=\"btn btn-sm btn-primary\"\n                                        (click)=\"activarTodasWebCam()\"><i class=\"fa fa-video-camera\"></i> Todos</button>\n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\">\n                                    <button *ngIf=\"row.webcam!=true && row.estado!='Desconectado' && !row.cargandoC\"\n                                        class=\"btn btn-sm btn-outline-primary\"\n                                        (click)=\"activarWebCam(row.estudiante)\"><i class=\"fa fa-video-camera\"></i>\n                                        Activar</button>\n                                    <button *ngIf=\"row.cargandoC\" class=\"btn btn-sm btn-outline-primary disabled\"\n                                        type=\"button\" disabled>\n                                        <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                            aria-hidden=\"true\"></span>\n                                        Activando ...\n                                    </button>\n                                    <button *ngIf=\"row.webcam==true && row.estado!='Desconectado' && !row.cargandoC\"\n                                        class=\"btn btn-sm btn-outline-danger\"\n                                        (click)=\"desactivarWebCam(row.estudiante)\"><i class=\"fa fa-video-camera\"></i>\n                                        Desactivar</button>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"pulsera\">\n                                <mat-header-cell *matHeaderCellDef><button class=\"btn btn-sm btn-primary\"\n                                        (click)=\"activarTodasPulseras()\"><i class=\"fa fa-heartbeat\"></i> Todos</button>\n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\">\n                                    <button *ngIf=\"row.pulsera!=true && row.estado!='Desconectado' && !row.cargandoP\"\n                                        class=\"btn btn-sm btn-outline-primary\"\n                                        (click)=\"activarPulsera(row.estudiante)\"><i class=\"fa fa-heartbeat\"></i>\n                                        Activar</button>\n                                    <button *ngIf=\"row.cargandoP\" class=\"btn btn-sm btn-outline-primary disabled\"\n                                        type=\"button\" disabled>\n                                        <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                            aria-hidden=\"true\"></span>\n                                        Activando ...\n                                    </button>\n                                    <button *ngIf=\"row.pulsera==true && row.estado!='Desconectado' && !row.cargandoP\"\n                                        class=\"btn btn-sm btn-outline-danger\"\n                                        (click)=\"desactivarPulsera(row.estudiante)\"><i class=\"fa fa-heartbeat\"></i>\n                                        Desactivar</button>\n                                </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"led\">\n                                <mat-header-cell *matHeaderCellDef>\n                                    <button class=\"btn btn-sm btn-primary\" (click)=\"activarTodosLeds()\"><i\n                                            class=\"fa fa-lightbulb-o\"></i> Todos</button>\n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\">\n                                    <button *ngIf=\"row.led!=true && row.estado!='Desconectado' && !row.cargandoL\"\n                                        class=\"btn btn-sm btn-outline-primary\" (click)=\"activarLed(row.estudiante)\"><i\n                                            class=\"fa fa-lightbulb-o\"></i> Activar</button>\n                                    <button *ngIf=\"row.cargandoL\" class=\"btn btn-sm btn-outline-primary disabled\"\n                                        type=\"button\" disabled>\n                                        <span class=\"spinner-border spinner-border-sm\" role=\"status\"\n                                            aria-hidden=\"true\"></span>\n                                        Activando ...\n                                    </button>\n                                    <button *ngIf=\"row.led==true && row.estado!='Desconectado' && !row.cargandoL\"\n                                        class=\"btn btn-sm btn-outline-danger\" (click)=\"desactivarLed(row.estudiante)\"><i\n                                            class=\"fa fa-lightbulb-o\"></i> Desactivar</button>\n                                </mat-cell>\n                            </ng-container>\n                            <mat-header-row *matHeaderRowDef=\"displayedColumnsAlumnos\"></mat-header-row>\n                            <mat-row *matRowDef=\"let row; columns: displayedColumnsAlumnos;\">\n                            </mat-row>\n                        </mat-table>\n                        <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<br>\n<br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-alumno/ver-alumno.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-alumno/ver-alumno.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorVerAlumnoVerAlumnoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n    <div class=\"col-7 text-left\">\n        <h3>Alumno: {{alumno.nombre}} {{alumno.apellidos}}</h3>\n    </div>\n    <div class=\"col-5\">\n        <div class=\"row\">\n            <div class=\"col-6 text-right\">\n                <button *ngIf=\"!editarActividadesView\" type=\"button\" class=\"btn btn btn-outline-success\" (click)=\"editarActividades()\"><i\n                    class=\"fa fa-edit\"></i> Editar actividades</button>\n            </div>\n            <div class=\"col-6 text-right\">\n                <button *ngIf=\"!editarActividadesView\" type=\"button\" class=\"btn btn-dark\" (click)=\"cancelar()\"><i class=\"fa fa-times-circle\"></i> Cerrar Alumno</button>\n                <!--<button *ngIf=\"editarActividadesView\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancelarEdicion()\">Cancelar eleccion de actividades</button>-->\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<nav>\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\" (click)=\"irHome()\"><a class=\"migas\"><i\n                    class=\"fa fa-home\"></i>\n                Home</a></li>\n        <li class=\"breadcrumb-item\" (click)=\"cancelar()\"><a class=\"migas\"><i\n                    class=\"fa fa-user\"></i>\n                Alumnos</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\"><i class=\"fa fa-user\"></i> Estadisticas:\n            {{alumno.nombre}}</li>\n    </ol>\n</nav>\n<br>\n<div class=\"col-12\" *ngIf=\"editarActividadesView\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"example-header\">\n                <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n                </mat-form-field>\n            </div>\n            <div class=\"example-container\">\n\n                <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n\n                    <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                                [aria-label]=\"checkboxLabel()\">\n                            </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                                [aria-label]=\"checkboxLabel(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- ID Column -->\n                    <ng-container matColumnDef=\"nombre\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Progress Column -->\n                    <ng-container matColumnDef=\"profesor\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.profesor.nombre}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"clase\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"estado\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.estado}} </mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                    </mat-row>\n                </mat-table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n            </div>\n            <div class=\"row justify-content-center text-center\">\n                <div class=\"col-3\">\n                    <button class=\"btn btn btn-danger\" (click)=\"cancelarEdicion()\"><i class=\"fa fa-times-circle\"></i> Cancelar</button>\n                </div>\n                <div class=\"col-3\">\n                    <button class=\"btn btn btn-success\" (click)=\"actualizar()\"><i class=\"fa fa-refresh\"></i> Actualizar Actividades</button>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"graficas\">\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <h5>Estadisticas de las actividades</h5>\n        </div>\n        <div class=\"col-4\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{estadoSeleccionado}}\n                </button>\n                <div class=\"dropdown-menu\">\n                    <div class=\"dropdown-item\" (click)=\"seleccionarEstado(estado)\" *ngFor=\"let estado of estados\">\n                        <a>{{estado.nombre}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <canvas id=\"progresoTotal\"></canvas>\n        </div>\n    </div>\n    <br>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <h5>Estadisticas conjuntas</h5>\n        </div>\n        <div class=\"col-4\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{estadoConjuntoSeleccionado.nombre}}\n                </button>\n                <div class=\"dropdown-menu\">\n                    <div class=\"dropdown-item\" (click)=\"seleccionarEstadoConjunto(estado)\" *ngFor=\"let estado of estadosConjunto\">\n                        <a>{{estado.nombre}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <canvas id=\"progresoConjuntoTotal\"></canvas>\n        </div>\n    </div>\n    <br>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <h5>Estadisticas Globales del alumno</h5>\n        </div>\n        <div class=\"col-4\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{estadoGeneralSeleccionado.nombre}}\n                </button>\n                <div class=\"dropdown-menu\">\n                    <div class=\"dropdown-item\" (click)=\"seleccionarEstadoGeneral(estado)\" *ngFor=\"let estado of estadosConjunto\">\n                        <a>{{estado.nombre}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-center text-center\">\n        <div  class=\"col-8\">\n            <canvas class=\"grafica\" id=\"resumenGeneral\"></canvas>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-clase/ver-clase.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-clase/ver-clase.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorVerClaseVerClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!verEstadisticasClase\" class=\"row justify-content-center\">\n    <div class=\"col-7 text-left\">\n        <h3>Actividades de la clase {{clase.nombre}}</h3>\n    </div>\n    <div class=\"col-5\">\n        <div *ngIf=\"!editarActividad\" class=\"row\">\n            <div class=\"col-6 text-right\">\n                <button *ngIf=\"!creandoActividad\" type=\"button\" class=\"btn btn btn-outline-success\"\n                    (click)=\"crearActividad()\"><i class=\"fa fa-plus\"></i> Crear Actividad</button>\n                <button *ngIf=\"creandoActividad\" class=\"btn btn-outline-success disabled\" type=\"button\" disabled>\n                    <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    Creando ...\n                </button>\n            </div>\n            <div class=\"col-6 text-right\">\n                <button *ngIf=\"!editarActividad\" type=\"button\" class=\"btn btn-dark\" (click)=\"cerrarClase()\"><i\n                        class=\"fa fa-times-circle\"></i> Cerrar\n                    Clase</button>\n\n            </div>\n        </div>\n    </div>\n</div>\n<br *ngIf=\"!verEstadisticasClase\">\n<br *ngIf=\"verEstadisticasClase\">\n<div class=\"row\">\n    <div class=\"col-12\">\n        <nav *ngIf=\"!verEstadisticasClase && !editarActividad\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"irHome()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cerrarClase()\"><a class=\"migas\"><i class=\"fa fa-book\"></i>\n                        Clases</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Ver Clase: {{clase.nombre}}</li>\n            </ol>\n        </nav>\n        <nav *ngIf=\"editarActividad\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"irHome()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cerrarClase()\"><a class=\"migas\"><i class=\"fa fa-book\"></i>\n                        Clases</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cancelar()\"><a class=\"migas\">\n                    Ver Clase: {{clase.nombre}}</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Editar Actividad: {{actividad.nombre}}</li>\n            </ol>\n        </nav>\n        <nav *ngIf=\"verEstadisticasClase\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"irHome()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cerrarClase()\"><a class=\"migas\"><i class=\"fa fa-book\"></i>\n                        Clases</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cancelar()\"><a class=\"migas\">\n                    Ver Clase: {{clase.nombre}}</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Estadisticas: {{clase.nombre}}</li>\n            </ol>\n        </nav>\n    </div>\n</div>\n<div>\n    <app-editar-actividad *ngIf=\"editarActividad\" [estudiantes]=\"listaAlumnos\" [verClase]=\"vengoDeProfesor\"\n        [editarActividad]=\"actividad\" (actividadEditada)=\"actualizarActividad($event)\" (cerrarModalOut)=\"cancelar()\">\n    </app-editar-actividad>\n</div>\n<div *ngIf=\"!verEstadisticasClase && !editarActividad\" class=\"row justify-content-md-center\">\n\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-12 example-header\">\n                <mat-form-field>\n                    <input matInput (keyup)=\"applyFilterA($event.target.value)\" placeholder=\"Filtrar\">\n                </mat-form-field>\n            </div>\n            <!--<div class=\"col-3 text-right\">\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"abrirEstadisticasClase()\"><i\n                        class=\"fas fa-chart-bar\"></i>Ver Estadisticas</button>\n            </div>-->\n        </div>\n        <div class=\"example-container\">\n            <mat-table [dataSource]=\"dataSourceActividades\" class=\"mat-elevation-z1\" matSort>\n                <ng-container matColumnDef=\"nombre\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\"> {{row.nombre}} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"profesor\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\"> {{row.profesor.nombre}} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"estado\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\">\n                        <div *ngIf=\"row.estado=='Creada'\">\n                            <i class=\"fa fa-check\"></i> {{row.estado}}\n                        </div>\n                        <div *ngIf=\"row.estado=='Comenzada'\">\n                            <i class=\"fa fa-play-circle\"></i> {{row.estado}}\n                        </div>\n                        <div *ngIf=\"row.estado=='Finalizada'\">\n                            <i class=\"fa fa-bar-chart\"></i> {{row.estado}}\n                        </div>\n                    </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"acciones\">\n                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\" (click)=\"abrirActividad(row)\">\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"abrirActividad(row)\"><i\n                                class=\"fa fa-external-link\"></i> Acceder</button>\n                    </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"editarborrar\">\n                    <mat-header-cell *matHeaderCellDef>Editar / Borrar</mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\" class=\"seccion-edit\">\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <button (click)=\"editarA(row)\" class=\"btn btn-sm btn-outline-secondary boton-tabla\"><i\n                                        class=\"fa fa-edit\"></i></button>\n                            </div>\n                            <div class=\"col-6\">\n                                <button style=\"width: 40px;\" (click)=\"borrarA(row)\"\n                                    class=\"btn btn-sm btn-outline-danger boton-tabla\"><i\n                                        class=\"fa fa-trash-o\"></i></button>\n                            </div>\n                        </div>\n                    </mat-cell>\n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"displayedColumnsActividades\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumnsActividades;\" class=\"element-row\">\n                </mat-row>\n            </mat-table>\n            <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n        </div>\n    </div>\n</div>\n<br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorVerEstadisticasClaseVerEstadisticasClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div style=\"background-color: red;\" class=\"row justify-content-center\">\n    <div class=\"col-6 text-left\">\n        <h3>Datos de la clase: {{clase.nombre}}</h3>\n    </div>\n    <div class=\"col-auto row justify-content-right\">\n        <div class=\"col-6 text-right\">\n            <button *ngIf=\"!editarActividadesView\" type=\"button\" class=\"btn btn btn-outline-success\"\n                (click)=\"editarActividades()\"><i\n                class=\"fa fa-edit\"></i> Editar actividades</button>\n        </div>\n        <div class=\"col-6 text-right\">\n            <button *ngIf=\"!editarActividadesView\" type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\"><i\n                class=\"fa fa-times-circle\"></i> Cerrar\n                Clase</button>\n        </div>\n    </div>\n</div>-->\n<div class=\"row justify-content-center\">\n    <div class=\"col-7 text-left\">\n        <h3>Datos de la clase: {{clase.nombre}}</h3>\n    </div>\n    <div class=\"col-5\">\n        <div class=\"row\">\n            <div class=\"col-6 text-right\">\n                <button *ngIf=\"!editarActividadesView\" type=\"button\" class=\"btn btn btn-outline-success\"\n                    (click)=\"editarActividades()\"><i\n                    class=\"fa fa-edit\"></i> Editar actividades</button>\n            </div>\n            <div class=\"col-6 text-right\">\n                <button *ngIf=\"!editarActividadesView\" type=\"button\" class=\"btn btn-dark\" (click)=\"cancelar()\"><i\n                    class=\"fa fa-times-circle\"></i> Cerrar\n                    Clase</button>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <nav>\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\" (click)=\"irHome()\"><a class=\"migas\"><i class=\"fa fa-home\"></i>\n                        Home</a></li>\n                <li class=\"breadcrumb-item\" (click)=\"cancelar()\"><a class=\"migas\"><i class=\"fa fa-book\"></i>\n                        Clases</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Estadisticas: {{clase.nombre}}</li>\n            </ol>\n        </nav>\n    </div>\n</div>\n<div class=\"col-12\" *ngIf=\"editarActividadesView\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"example-header\">\n                <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n                </mat-form-field>\n            </div>\n            <div class=\"example-container\">\n\n                <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n\n                    <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                                [aria-label]=\"checkboxLabel()\">\n                            </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\n                                [aria-label]=\"checkboxLabel(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- ID Column -->\n                    <ng-container matColumnDef=\"nombre\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Progress Column -->\n                    <ng-container matColumnDef=\"profesor\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.profesor.nombre}} </mat-cell>\n                    </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"clase\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"estado\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                        <mat-cell *matCellDef=\"let row\"> {{row.estado}} </mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                    </mat-row>\n                </mat-table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n            </div>\n            <div class=\"row justify-content-center text-center\">\n                <div class=\"col-3\">\n                    <button class=\"btn btn btn-danger\" (click)=\"cancelarEdicion()\"><i class=\"fa fa-times-circle\"></i> Cancelar</button>\n                </div>\n                <div class=\"col-3\">\n                    <button class=\"btn btn btn-success\" (click)=\"actualizar()\"><i class=\"fa fa-refresh\"></i> Actualizar Actividades</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"graficas\">\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <h5>Estadisticas de las actividades</h5>\n        </div>\n        <div class=\"col-4\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    {{estadoSeleccionado}}\n                </button>\n                <div class=\"dropdown-menu\">\n                    <div class=\"dropdown-item\" (click)=\"seleccionarEstado(estado)\" *ngFor=\"let estado of estados\">\n                        <a>{{estado.nombre}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <canvas id=\"progresoTotal\"></canvas>\n        </div>\n    </div>\n    <br>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <h5>Estadisticas conjuntas</h5>\n        </div>\n        <div class=\"col-4\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    {{estadoConjuntoSeleccionado.nombre}}\n                </button>\n                <div class=\"dropdown-menu\">\n                    <div class=\"dropdown-item\" (click)=\"seleccionarEstadoConjunto(estado)\"\n                        *ngFor=\"let estado of estadosConjunto\">\n                        <a>{{estado.nombre}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row justify-content-center text-center\">\n        <div class=\"col-8\">\n            <canvas id=\"progresoConjuntoTotal\"></canvas>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Modelos/modelos.ts":
  /*!************************************!*\
    !*** ./src/app/Modelos/modelos.ts ***!
    \************************************/

  /*! exports provided: Estudiante, Alumnos, AlumnosClase */

  /***/
  function srcAppModelosModelosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estudiante", function () {
      return Estudiante;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alumnos", function () {
      return Alumnos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlumnosClase", function () {
      return AlumnosClase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Estudiante = function Estudiante() {
      _classCallCheck(this, Estudiante);

      this._id = '';
      this.nombre = '';
      this.apellidos = '';
      this.clase = '';
      this.email = '';
      this.contrasena = '';
    };

    var Alumnos =
    /*#__PURE__*/
    function () {
      function Alumnos(est, posicion, act, datos) {
        _classCallCheck(this, Alumnos);

        this.id_item = '';
        this.posicion = {};
        this.datos = {
          alegria: [],
          asco: [],
          miedo: [],
          sorpresa: [],
          tristeza: [],
          ira: [],
          pulsaciones: [],
          tiempo: [],
          distraido: [],
          concentrado: [],
          frustrado: [],
          motivado: []
        };
        this.sensorWebCam = false;
        this.sensorPulsera = false;
        this.sensorLed = false;
        this.estudiante = est;
        this.id_item = est._id + act._id;
        this.posicion = posicion;
        this.sensorWebCam = false;
        this.sensorPulsera = false;
        this.sensorLed = false;

        if (datos == null) {
          this.datos = {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            tiempo: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          };
        } else {
          this.datos = datos;
        }
      }

      _createClass(Alumnos, [{
        key: "setActividad",
        value: function setActividad(act) {
          this.id_item = this.estudiante._id + act._id;
        }
      }]);

      return Alumnos;
    }();

    var AlumnosClase = function AlumnosClase(est, posicion) {
      _classCallCheck(this, AlumnosClase);

      this.posicion = {};
      this.sensorWebCam = false;
      this.sensorPulsera = false;
      this.sensorLed = false;
      this.estudiante = est;
      this.posicion = posicion;
      this.sensorWebCam = false;
      this.sensorPulsera = false;
      this.sensorLed = false;
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titulo {\n    color: rgba(233, 239, 255,1);\n    text-align: center;\n}\n.body{\n    min-height: 100vh;\n}\n.btn-circle {\n    width: 200px;\n    height: 200px;\n    padding: 6px 0px;\n    border-radius: 200px;\n    text-align: center;\n    font-size: 23px;\n    line-height: 1.42857;\n}\n.footer {\n    color: aliceblue;\n    bottom: 0;\n }\n.icono_rrss{\n    width: 15px;\n    height: 15px;\n }\n.nav-link{\n    font-size: 17px;\n    color: #ECFFB0;\n}\n.nav-link:hover{\n    color: #ECFFB0;\n    z-index: 1;\n}\nnav.navbar {\n    background-color: #CC1414;\n}\n.bg-company-blue{\n    background-color: rgb(84, 88, 123) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7Q0FDWjtBQUVBO0lBQ0csV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksNkNBQTZDO0FBQ2pEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxvIHtcbiAgICBjb2xvcjogcmdiYSgyMzMsIDIzOSwgMjU1LDEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2R5e1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYnRuLWNpcmNsZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogNnB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xufVxuLmZvb3RlciB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBib3R0b206IDA7XG4gfVxuXG4gLmljb25vX3Jyc3N7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuIH1cbi5uYXYtbGlua3tcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICNFQ0ZGQjA7XG59XG4ubmF2LWxpbms6aG92ZXJ7XG4gICAgY29sb3I6ICNFQ0ZGQjA7XG4gICAgei1pbmRleDogMTtcbn1cbm5hdi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQzE0MTQ7XG59XG4uYmctY29tcGFueS1ibHVle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgODgsIDEyMykgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _estudiante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./estudiante.service */
    "./src/app/estudiante.service.ts");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(estudiantes) {
        _classCallCheck(this, AppComponent);

        this.estudiantes = estudiantes;
        this.title = 'cliente';
        this.dentro = false;
        this.profesor = false;
        this.estudiante = false;
        this.actividadActual = false;
        this.visualizacion = false;
        this.acercaDe = false;
        this.privacidad = false;
        this.personaIniciada = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
      }

      _createClass(AppComponent, [{
        key: "iniciarSesion",
        value: function iniciarSesion(personal) {
          this.personaIniciada = personal;
        }
      }, {
        key: "entrarHome",
        value: function entrarHome() {
          if (this.profesor == true) {
            this.pComponente.abrirActividadActual();
            $('html, body').animate({
              scrollTop: 0
            }, 'slow');
          }
        }
      }, {
        key: "abrirActividadActual",
        value: function abrirActividadActual() {
          this.pComponente.abrirActividadActual();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "abrirAlumnos",
        value: function abrirAlumnos() {
          this.pComponente.abrirAlumnos();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "abrirClases",
        value: function abrirClases() {
          this.pComponente.abrirClases();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "abrirActividades",
        value: function abrirActividades() {
          this.pComponente.abrirActividades();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "abrirProfesor",
        value: function abrirProfesor() {
          this.pComponente.abrirProfesores();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "activarActividadActual",
        value: function activarActividadActual() {
          this.actividadActual = true;
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "desactivarActividadActual",
        value: function desactivarActividadActual() {
          this.actividadActual = false;
        }
      }, {
        key: "entrarProfesor",
        value: function entrarProfesor() {
          this.dentro = true;
          this.profesor = true;
          this.cerrarAcercaDe();
          this.cerrarPrivacidad();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow'); //console.log("Se ha accedido");
          //console.log(this.estudiantes.getEstudiantes());
        }
      }, {
        key: "entrarEstudiante",
        value: function entrarEstudiante() {
          this.dentro = true;
          this.estudiante = true;
          this.cerrarAcercaDe();
          this.cerrarPrivacidad();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "salir",
        value: function salir() {
          this.dentro = false;
          this.profesor = false;
          this.estudiante = false;
          this.personaIniciada = {
            _id: '',
            nombre: '',
            apellidos: '',
            clase: '',
            email: '',
            contrasena: ''
          }; //this.video = document.getElementById('video');
        }
      }, {
        key: "ponerAcercaDe",
        value: function ponerAcercaDe() {
          this.visualizacion = true;
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
          this.acercaDe = true;
          this.privacidad = false;

          if (this.estudiante) {
            document.getElementById("estudiante").style.display = "none";
          }

          if (this.profesor) {
            document.getElementById("profesor").style.display = "none";
          }
        }
      }, {
        key: "ponerPrivacidad",
        value: function ponerPrivacidad() {
          this.visualizacion = true;
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
          this.privacidad = true;
          this.acercaDe = false;

          if (this.estudiante) {
            document.getElementById("estudiante").style.display = "none";
          }

          if (this.profesor) {
            document.getElementById("profesor").style.display = "none";
          }
        }
      }, {
        key: "cerrarAcercaDe",
        value: function cerrarAcercaDe() {
          try {
            this.visualizacion = false;
            this.acercaDe = false;

            if (this.estudiante) {
              document.getElementById("estudiante").style.display = "block";
            }

            if (this.profesor) {
              document.getElementById("profesor").style.display = "block";
            }
          } catch (e) {}
        }
      }, {
        key: "cerrarPrivacidad",
        value: function cerrarPrivacidad() {
          try {
            this.visualizacion = false;
            this.privacidad = false;

            if (this.estudiante) {
              document.getElementById("estudiante").style.display = "block";
            }

            if (this.profesor) {
              document.getElementById("profesor").style.display = "block";
            }
          } catch (e) {}
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _estudiante_service__WEBPACK_IMPORTED_MODULE_2__["EstudianteService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_profesor_profesor_component__WEBPACK_IMPORTED_MODULE_3__["ProfesorComponent"], {
      static: false
    })], AppComponent.prototype, "pComponente", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _socketio_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./socketio.service */
    "./src/app/socketio.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var mat_select_filter__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! mat-select-filter */
    "./node_modules/mat-select-filter/fesm2015/mat-select-filter.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _estudiante_estudiante_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./estudiante/estudiante.component */
    "./src/app/estudiante/estudiante.component.ts");
    /* harmony import */


    var _profesor_sidenav_profesor_sidenav_profesor_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./profesor/sidenav-profesor/sidenav-profesor.component */
    "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.ts");
    /* harmony import */


    var _profesor_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./profesor/crear-actividad/crear-actividad.component */
    "./src/app/profesor/crear-actividad/crear-actividad.component.ts");
    /* harmony import */


    var _profesor_ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./profesor/ver-actividad/ver-actividad.component */
    "./src/app/profesor/ver-actividad/ver-actividad.component.ts");
    /* harmony import */


    var _profesor_editar_actividad_editar_actividad_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./profesor/editar-actividad/editar-actividad.component */
    "./src/app/profesor/editar-actividad/editar-actividad.component.ts");
    /* harmony import */


    var _profesor_crear_clase_crear_clase_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./profesor/crear-clase/crear-clase.component */
    "./src/app/profesor/crear-clase/crear-clase.component.ts");
    /* harmony import */


    var _profesor_editar_clase_editar_clase_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./profesor/editar-clase/editar-clase.component */
    "./src/app/profesor/editar-clase/editar-clase.component.ts");
    /* harmony import */


    var _profesor_ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./profesor/ver-clase/ver-clase.component */
    "./src/app/profesor/ver-clase/ver-clase.component.ts");
    /* harmony import */


    var _profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./profesor/mensaje/mensaje.component */
    "./src/app/profesor/mensaje/mensaje.component.ts");
    /* harmony import */


    var _profesor_ver_alumno_ver_alumno_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./profesor/ver-alumno/ver-alumno.component */
    "./src/app/profesor/ver-alumno/ver-alumno.component.ts");
    /* harmony import */


    var _profesor_ver_estadisticas_clase_ver_estadisticas_clase_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./profesor/ver-estadisticas-clase/ver-estadisticas-clase.component */
    "./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.ts");
    /* harmony import */


    var _profesor_crear_profesor_crear_profesor_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./profesor/crear-profesor/crear-profesor.component */
    "./src/app/profesor/crear-profesor/crear-profesor.component.ts");
    /* harmony import */


    var _profesor_editar_profesor_editar_profesor_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./profesor/editar-profesor/editar-profesor.component */
    "./src/app/profesor/editar-profesor/editar-profesor.component.ts");
    /*
    import { NgModule } from '@angular/core';
    import {MatSidenavModule} from '@angular/material/sidenav';
    import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
    import {MatDialogModule} from '@angular/material/dialog';
    import { MatButtonModule } from '@angular/material/button';
    import {MatStepperModule} from '@angular/material/stepper';*/
    //import {ClipboardModule} from '@angular/cdk/clipboard';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_51__["AppComponent"], _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_53__["ProfesorComponent"], _estudiante_estudiante_component__WEBPACK_IMPORTED_MODULE_54__["EstudianteComponent"], _profesor_sidenav_profesor_sidenav_profesor_component__WEBPACK_IMPORTED_MODULE_55__["SidenavProfesorComponent"], _profesor_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_56__["CrearActividadComponent"], _profesor_ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_57__["VerActividadComponent"], _profesor_editar_actividad_editar_actividad_component__WEBPACK_IMPORTED_MODULE_58__["EditarActividadComponent"], _profesor_crear_clase_crear_clase_component__WEBPACK_IMPORTED_MODULE_59__["CrearClaseComponent"], _profesor_editar_clase_editar_clase_component__WEBPACK_IMPORTED_MODULE_60__["EditarClaseComponent"], _profesor_ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_61__["VerClaseComponent"], _profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_62__["MensajeComponent"], _profesor_ver_alumno_ver_alumno_component__WEBPACK_IMPORTED_MODULE_63__["VerAlumnoComponent"], _profesor_ver_estadisticas_clase_ver_estadisticas_clase_component__WEBPACK_IMPORTED_MODULE_64__["VerEstadisticasClaseComponent"], _profesor_crear_profesor_crear_profesor_component__WEBPACK_IMPORTED_MODULE_65__["CrearProfesorComponent"], _profesor_editar_profesor_editar_profesor_component__WEBPACK_IMPORTED_MODULE_66__["EditarProfesorComponent"]],
      exports: [mat_select_filter__WEBPACK_IMPORTED_MODULE_49__["MatSelectFilterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], //ClipboardModule,
      _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_62__["MensajeComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_48__["FontAwesomeModule"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_50__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_52__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_45__["WebcamModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_46__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__["BrowserModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], mat_select_filter__WEBPACK_IMPORTED_MODULE_49__["MatSelectFilterModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]],
      providers: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _socketio_service__WEBPACK_IMPORTED_MODULE_47__["SocketioService"]],
      entryComponents: [_profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_62__["MensajeComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_51__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/estudiante.service.ts":
  /*!***************************************!*\
    !*** ./src/app/estudiante.service.ts ***!
    \***************************************/

  /*! exports provided: EstudianteService */

  /***/
  function srcAppEstudianteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudianteService", function () {
      return EstudianteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EstudianteService =
    /*#__PURE__*/
    function () {
      function EstudianteService(http) {
        _classCallCheck(this, EstudianteService);

        this.http = http;
        this.urlapi = 'http://localhost:5000/';
      }

      _createClass(EstudianteService, [{
        key: "getEstudiantes",
        value: function getEstudiantes() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return EstudianteService;
    }();

    EstudianteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EstudianteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EstudianteService);
    /***/
  },

  /***/
  "./src/app/estudiante/estudiante.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/estudiante/estudiante.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEstudianteEstudianteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The sidebar menu */\n\n.sidenav {\n  height: 100%;\n  /* Full-height: remove this if you want \"auto\" height */\n  z-index: 1;\n  /* Stay on top */\n  top: auto;\n  /* Stay at the top */\n  left: 0;\n  background-color: #4A7B9D;\n  /* Black */\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n}\n\n/* The navigation menu links */\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #ECFFB0;\n  display: block;\n}\n\n/* When you mouse over the navigation links, change their color */\n\n.sidenav a:hover {\n  color: #9AA899;\n}\n\n.circulo {\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  background: red;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.circulo>p {\n  font-family: sans-serif;\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0dWRpYW50ZS9lc3R1ZGlhbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWix1REFBdUQ7RUFDdkQsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLGlFQUFpRTs7QUFFakU7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lc3R1ZGlhbnRlL2VzdHVkaWFudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cblxuLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcImF1dG9cIiBoZWlnaHQgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU3RheSBvbiB0b3AgKi9cbiAgdG9wOiBhdXRvO1xuICAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRBN0I5RDtcbiAgLyogQmxhY2sgKi9cbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG59XG5cbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI0VDRkZCMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICM5QUE4OTk7XG59XG5cbi5jaXJjdWxvIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNpcmN1bG8+cCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/estudiante/estudiante.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/estudiante/estudiante.component.ts ***!
    \****************************************************/

  /*! exports provided: EstudianteComponent */

  /***/
  function srcAppEstudianteEstudianteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudianteComponent", function () {
      return EstudianteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../socketio.service */
    "./src/app/socketio.service.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var EstudianteComponent =
    /*#__PURE__*/
    function () {
      function EstudianteComponent(socketService) {
        _classCallCheck(this, EstudianteComponent);

        this.socketService = socketService;
        this.estudianteIniciado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ColorHappy = 'rgba(255,255,84,1)'; //Color de la felicidad Correcto

        this.ColorNeutral = 'rgba(84,255,84,1)'; //Color Neutro Incorrecto

        this.ColorSad = 'rgba(81,81,255,1)'; //Color de la tristeza Correcto

        this.ColorAngry = 'rgba(255,0,0,1)'; //Color del enfado Correcto

        this.ColorFearful = 'rgba(0,150,0,1)'; //Color del miedo Correcto

        this.ColorDisgusted = 'rgba(0,0,0,0.5)'; //Color del disgusto Incorrecto

        this.ColorSurprised = 'rgba(89,189,255,1)'; //Color de la Sorpresa Correcto

        this.ColorHappy2 = [255, 255, 0, 1];
        this.ColorNeutral2 = [84, 255, 84, 1];
        this.ColorSad2 = [81, 81, 255, 1];
        this.ColorAngry2 = [255, 0, 0, 1];
        this.ColorFearful2 = [0, 150, 0, 1];
        this.ColorDisgusted2 = [80, 80, 80, 1];
        this.ColorSurprised2 = [89, 189, 255, 1];
        this.iniciando = false;
        this.estudiante = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
        this.camara = {
          nombre: 'Camara',
          estado: 'Desconectado',
          cargando: false,
          data: null
        };
        this.led = {
          nombre: 'Led',
          estado: 'Desconectado',
          cargando: false,
          data: null
        };
        this.pulsera = {
          nombre: 'Pulsera',
          estado: 'Desconectado',
          cargando: false,
          data: null
        };
        this.noHayEstudiante = true;
        this.conectadoaActividad = false;
        this.listaActividades = [];
        this.listaGestionActividades = {};
        this.listaSensores = [];
        this.id = '';
        this.intervaloDeEnvio = null;
        this.estoyComputando = false;
        this.pulsaciones = 0;
        this.pulsacionesMax = 180;
        this.pulsacionesMin = 30;
        this.emocionAlegria = 0;
        this.emocionTristeza = 0;
        this.emocionIra = 0;
        this.emocionMiedo = 0;
        this.emocionAsco = 0;
        this.emocionSorpresa = 0;
        this.emocionNeutra = 0;
        this.datosTotalesEmocionales = 0;
        this.contador = 0;
        this.canvas = null;
        this.intervaloGenerarDatos = null;
        this.intervaloPulsaciones = null;
        this.intervaloEnvio = null;
        this.band = null;
        this.chart = [];
        this.configurarSensores = false;

        this.soyEstudiante = function () {
          this.socket.emit('soyEstudiante', this.estudiante);
        };

        this.crearActividadLista = function (actividad) {
          this.socket.emit('crearActividadLista', actividad); //console.log("Actividad: " + actividad._id + " está lista.");
        };

        this.borrarActividadLista = function (actividad) {
          this.socket.emit('borrarActividadLista', actividad); //console.log("Actividad: " + actividad._id + " YA NO está lista.");
        };

        this.enviarDatos = function (datos) {
          this.socket.emit('envioDeDatos', datos, this.actividadActual);
        };

        this.meConectoActividad = function (actividad) {
          this.socket.emit('meConectoActividad', actividad, this.estudiante);
        };

        this.meDesconectoActividad = function (actividad) {
          this.socket.emit('meDesconectoActividad', actividad, this.estudiante);
        };

        this.webCamConectada = function (actividad) {
          this.socket.emit('webCamConectada', actividad, this.estudiante);
        };

        this.pulseraConectada = function (actividad) {
          this.socket.emit('pulseraConectada', actividad, this.estudiante);
        };

        this.ledConectada = function (actividad) {
          console.log("led conectado");
          this.socket.emit('ledConectada', actividad, this.estudiante);
        };

        this.webCamDesconectada = function (actividad) {
          this.socket.emit('webCamDesonectada', actividad, this.estudiante);
        };

        this.pulseraDesconectada = function (actividad) {
          this.socket.emit('pulseraDesonectada', actividad, this.estudiante);
        };

        this.ledDesconectada = function (actividad) {
          this.socket.emit('ledDesonectada', actividad, this.estudiante);
        };

        this.lanzarSocketSrv = function () {
          var cli = this;
          this.socket.on('connect', function () {//console.log("Conectado al servidor de WebSockets");
          });
          this.socket.on('actividadAnadida', function (res) {//console.log("Se ha añadido una actividad a las listas: " + res._id);
          });
          this.socket.on('actividadBorrada', function (res) {//console.log("Se ha borrado una actividad a las listas: " + res._id);
          });
          this.socket.on('actividades', function (res) {
            /*console.log(res._id);
            console.log(cli.listaGestionActividades[res._id]);
            console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\")
            if (!cli.listaGestionActividades[res._id]) {
              cli.listaGestionActividades[res._id] = res;
              console.log(cli.listaGestionActividades[res._id]);
              cli.listaActividades == null;
              for (var key in cli.listaGestionActividades) {
                cli.listaActividades.push(cli.listaGestionActividades[key]);
              }
            }*/
            //callback(res);
            cli.listaGestionActividades[res._id] = res; //console.log(cli.listaGestionActividades);
            //console.log(cli.listaGestionActividades[res._id]);

            cli.listaActividades.length = 0;

            for (var key in cli.listaGestionActividades) {
              //console.log(cli.listaGestionActividades[key]);
              cli.listaActividades.push(cli.listaGestionActividades[key]);
            }
          });
          this.socket.on('borrarActividad', function (res) {
            //console.log(cli.listaGestionActividades[res._id]);
            delete cli.listaGestionActividades[res._id]; //console.log(cli.listaGestionActividades)
            //console.log(cli.listaGestionActividades[res._id]);

            cli.listaActividades.length = 0; //console.log(cli.listaActividades);

            for (var key in cli.listaGestionActividades) {} //cli.listaActividades.push(cli.listaGestionActividades[key]);
            //callback(res);

          });
          this.socket.on('enviaDatos', function (actividad) {
            //console.log("Listo! voy a enviar datos");
            cli.actividad = actividad;
            cli.empezar();
          });
          this.socket.on('noEnviaDatos', function (actividad) {
            console.log('Ya no voy a enviar datos');
            cli.desconectarse();
          });
          this.socket.on('recepcionEmociones', function (datos) {
            console.log(datos);
          });
          this.socket.on('conectarWebCam', function (estudiante) {
            if (cli.camara.estado == "Conectado") {
              cli.webCamConectada(cli.actividadActual, estudiante);
            } else {
              cli.conectarSensor(cli.camara);
            }
          });
          this.socket.on('conectarLed', function (estudiante) {
            //console.log("Conectar Led");
            //cli.conectarSensor(cli.led);
            if (cli.led.estado == "Conectado") {
              cli.ledConectada(cli.actividadActual, estudiante);
            } else {
              Swal.fire({
                title: '¿Se desea conectar el Led?',
                text: "El led se conectará",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Si, deseo conectarlo'
              }).then(function (result) {
                if (result.value) {
                  cli.conectarLed(cli.led);
                }
              });
            }
          });
          this.socket.on('conectarPulsera', function (estudiante) {
            //console.log("Conectar Pulsera");
            //cli.conectarSensor(cli.pulsera);
            if (cli.pulsera.estado == "Conectado") {
              cli.pulseraConectada(cli.actividadActual, estudiante);
            } else {
              Swal.fire({
                title: '¿Se desea conectar el la pulsera?',
                text: "La pulsera se conectará",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Si, deseo conectarla'
              }).then(function (result) {
                if (result.value) {
                  cli.conectarPulsera(cli.pulsera);
                }
              });
            }
          });
          this.socket.on('desconectarWebCam', function (estudiante) {
            cli.desconectarSensor(cli.camara);
          });
          this.socket.on('desconectarLed', function (estudiante) {
            cli.desconectarSensor(cli.led);
          });
          this.socket.on('desconectarPulsera', function (estudiante) {
            cli.desconectarSensor(cli.pulsera);
          });
          /*
           this.listaSensores.push(this.camara);
          this.listaSensores.push(this.led);
          this.listaSensores.push(this.pulsera);
          */
        };
      }

      _createClass(EstudianteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //window.onbeforeunload = this.preguntarAntesDeSalir();
          //this.empezar();
          window.addEventListener("beforeunload", function (event) {
            if (_this.conectadoaActividad) {
              //event.preventDefault();
              event.returnValue = "Se ha desconectado de la actividad"; //console.log(event);
              //this.meDesconectoActividad(this.actividadActual);

              _this.desconectarse();

              return event;
            }
          });
          this.listaSensores.push(this.camara);
          this.listaSensores.push(this.led);
          this.listaSensores.push(this.pulsera);
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          return "Write something clever here...";
        }
      }, {
        key: "prueba",
        value: function prueba(act) {
          console.log(act);
        }
      }, {
        key: "conectarse",
        value: function conectarse(actividad) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //console.log("Me he conectado a la actividad");
                    this.conectadoaActividad = true;
                    console.log(actividad);
                    this.actividadActual = actividad; //console.log(this.actividadActual.alumnos);

                    /*for (var key in this.actividadActual.alumnos) {
                      if(this.actividadActual.alumnos[key].estudiante._id=this.estudiante._id){
                        console.log("Estudiate id: "+this.estudiante._id)
                        this.id_item=this.actividadActual.alumnos[key].id_item;
                        //console.log(this.id_item);
                      }
                    }*/

                    this.id_item = this.estudiante._id + actividad._id; //this.empezar();
                    //this.soyEstudiante();
                    //this.conectarActividad();
                    //console.log("asd");
                    //this.conectarLed();

                    this.meConectoActividad(this.actividadActual);
                    _context2.next = 7;
                    return this.conectarWebCam(this.camara);

                  case 7:
                    _context2.next = 9;
                    return this.conectarLed(this.led);

                  case 9:
                    _context2.next = 11;
                    return this.conectarPulsera(this.pulsera);

                  case 11:
                    //console.log(actividad);
                    if (actividad.estado == "Comenzada") {
                      this.empezar();
                    } //this.empezar();


                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "desconectarse",
        value: function desconectarse() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var ju;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    ju = this;
                    this.webCamDesconectada(this.actividadActual);
                    this.pulseraDesconectada(this.actividadActual);
                    this.ledDesconectada(this.actividadActual); //console.log("Me he desconectado de la actividad");
                    //console.log(this.actividadActual.alumnos);

                    /*for (var key in this.actividadActual.alumnos) {
                      if(this.actividadActual.alumnos[key].estudiante._id=this.estudiante._id){
                        console.log("Estudiate id: "+this.estudiante._id)
                        this.id_item=this.actividadActual.alumnos[key].id_item;
                        //console.log(this.id_item);
                      }
                    }*/

                    this.id_item = null; //this.soyEstudiante();
                    //this.conectarActividad();
                    //console.log("asd");
                    //this.conectarLed();

                    this.meDesconectoActividad(ju.actividadActual);
                    clearInterval(ju.intervaloDeEnvio);
                    this.conectadoaActividad = false;
                    this.actividadActual = null;
                    clearInterval(ju.intervaloGenerarDatos);
                    clearInterval(ju.intervaloDeEnvio);
                    console.log(this.intervaloDeEnvio);
                    _context3.next = 14;
                    return 0;

                  case 14:
                    this.listaActividades.length = _context3.sent;
                    _context3.next = 17;
                    return this.obtenerActividadesComenzadas();

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.estudiante = {
            _id: '',
            nombre: '',
            apellidos: '',
            clase: '',
            email: '',
            contrasena: ''
          };
        }
      }, {
        key: "iniciarSesion",
        value: function iniciarSesion() {
          var ju = this;
          this.iniciando = true;
          $.ajax({
            type: 'POST',
            url: '/estudianteIniciarSesion',
            data: JSON.stringify(ju.estudiante),
            success: function success(data) {
              //console.log(data);
              //console.log(data);
              if (data._id == null) {
                Swal.fire({
                  icon: 'error',
                  title: 'Usuario no regitrado',
                  text: 'No se ha encontrado usuario!',
                  timer: 2000,
                  timerProgressBar: true
                });
                ju.limpiar();
              } else {
                Swal.fire({
                  icon: 'success',
                  title: 'Correcto',
                  text: 'Se ha podido iniciar sesion exitosamente',
                  timer: 4000,
                  timerProgressBar: true
                });
                ju.estudiante = data;
                ju.noHayEstudiante = false;
                ju.estudianteIniciado.emit(ju.estudiante);
                ju.id = ju.estudiante._id;
                ju.ini();
                ju.obtenerActividadesComenzadas();
              }

              ju.iniciando = false; //ju.socket = new SocketioService(ju.estudiante._id);
              //ju.socket.ini();
              //ju.socketService.setupSocketConnection();
              //ju.conectadoaActividad = true;
              //ju.empezar();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "obtenerActividadesComenzadas",
        value: function obtenerActividadesComenzadas() {
          var ju = this;
          $.ajax({
            type: 'POST',
            url: '/verActividadesComenzadas',
            data: JSON.stringify(ju.estudiante),
            success: function success(data) {
              ju.listaActividades = data;
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "conectarWebCam",
        value: function conectarWebCam(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var constraints, stream;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    setTimeout(function (async) {
                      _this2.camara.cargando = false;
                    }, 7000);
                    sensor.cargando = true;
                    sensor.data = document.getElementById('video');
                    constraints = {
                      audio: false,
                      video: {
                        width: 720,
                        height: 480
                      }
                    };
                    _context4.prev = 4;

                    if (!(sensor.data != null || sensor.data != undefined)) {
                      _context4.next = 13;
                      break;
                    }

                    _context4.next = 8;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 8:
                    stream = _context4.sent;
                    this.camara.data.srcObject = stream;
                    sensor.cargando = false;
                    sensor.estado = "Conectado";
                    this.webCamConectada(this.actividadActual);

                  case 13:
                    _context4.next = 18;
                    break;

                  case 15:
                    _context4.prev = 15;
                    _context4.t0 = _context4["catch"](4);
                    //errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
                    //console.log(e);
                    this.navegadorNoCompatible();

                  case 18:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[4, 15]]);
          }));
        }
      }, {
        key: "handleSuccess",
        value: function handleSuccess(stream) {
          //window.stream = stream;
          this.camara.data.srcObject = stream;
        }
      }, {
        key: "conectarWebCam2",
        value: function conectarWebCam2(sensor) {
          sensor.data = document.getElementById('video');

          try {
            navigator.mediaDevices.getUserMedia({
              video: true
            }).then(function (stream) {
              //console.log(stream)
              //this.video.srcObject = stream;
              sensor.data.srcObject = stream;
              sensor.estado = "Conectado";
            }).catch(function (err) {
              return console.log(err);
            });
          } catch (err) {
            console.log("Error al conectar la WebCam");
          } //this.empezar();

        }
      }, {
        key: "empezar",
        value: function empezar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    //console.log(this.video.srcObject);
                    if (this.camara.data) {
                      Promise.all([faceapi.nets.ageGenderNet.loadFromUri('assets/modelos'), faceapi.nets.faceExpressionNet.loadFromUri('assets/modelos'), faceapi.nets.faceLandmark68Net.loadFromUri('assets/modelos'), faceapi.nets.faceLandmark68TinyNet.loadFromUri('assets/modelos'), faceapi.nets.faceRecognitionNet.loadFromUri('assets/modelos'), faceapi.nets.ssdMobilenetv1.loadFromUri('assets/modelos'), faceapi.nets.tinyFaceDetector.loadFromUri('assets/modelos')]);

                      try {
                        this.canvas = faceapi.createCanvasFromMedia(this.camara.data);
                        document.body.append(this.canvas);
                        this.displaySize = {
                          width: this.camara.data.width,
                          height: this.camara.data.height
                        };
                        faceapi.matchDimensions(this.canvas, this.displaySize);
                        this.intervaloGenerarDatos = setInterval(function () {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee5() {
                            var detections, datosNeutral, datosHappy, datosSad, datosAngry, datosFearful, datosSurprised, datosDisgusted;
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    _context5.prev = 0;
                                    _context5.next = 3;
                                    return faceapi.detectSingleFace(this.camara.data, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

                                  case 3:
                                    detections = _context5.sent;
                                    //var datos = faceapi.resizeResults(detections, this.displaySize).expressions;
                                    //var datosFisicos = await faceapi.detectSingleFace(this.camara.data).withFaceLandmarks().withAgeAndGender()
                                    datosNeutral = faceapi.resizeResults(detections, this.displaySize).expressions.neutral;
                                    datosHappy = faceapi.resizeResults(detections, this.displaySize).expressions.happy;
                                    datosSad = faceapi.resizeResults(detections, this.displaySize).expressions.sad;
                                    datosAngry = faceapi.resizeResults(detections, this.displaySize).expressions.angry;
                                    datosFearful = faceapi.resizeResults(detections, this.displaySize).expressions.fearful;
                                    datosSurprised = faceapi.resizeResults(detections, this.displaySize).expressions.surprised;
                                    datosDisgusted = faceapi.resizeResults(detections, this.displaySize).expressions.disgusted;

                                    if (!this.estoyComputando) {
                                      this.emocionAlegria += datosHappy;
                                      this.emocionAsco += datosDisgusted;
                                      this.emocionIra += datosAngry;
                                      this.emocionMiedo += datosFearful;
                                      this.emocionSorpresa += datosSurprised;
                                      this.emocionTristeza += datosSad;
                                    }

                                    _context5.next = 16;
                                    break;

                                  case 14:
                                    _context5.prev = 14;
                                    _context5.t0 = _context5["catch"](0);

                                  case 16:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this, [[0, 14]]);
                          }));
                        }, 1000);
                      } catch (e) {//console.log(e);
                      }
                    }

                    this.intervaloDeEnvio = setInterval(function (async) {
                      _this3.computacionDatos();
                    }, 7000);

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "computacionDatos",
        value: function computacionDatos() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this4 = this;

            var datos, x, predominante;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    /*
                    push({
                        x: moment().format(),
                        y: -30
                      });
                    */
                    this.estoyComputando = true;
                    datos = {};
                    console.log("COMPUTACION DATOS");

                    try {
                      datos['id_actividad'] = this.actividadActual._id;
                    } catch (e) {//console.log(e);
                    }

                    x = moment__WEBPACK_IMPORTED_MODULE_4__().format();

                    if (this.pulsera.estado == "Conectado") {
                      datos['pulsaciones'] = {
                        x: x,
                        y: this.pulsaciones
                      };
                    }

                    if (this.camara.estado == "Conectado") {
                      predominante = 0; //Estado Emocional

                      this.datosTotalesEmocionales = this.emocionAlegria + this.emocionAsco + this.emocionIra + this.emocionMiedo + this.emocionSorpresa + this.emocionTristeza; //+this.emocionNeutra;

                      datos['id_item'] = this.id_item;
                      this.colorPredominante = this.ColorNeutral2; //Alegria

                      datos['alegria'] = {
                        x: x,
                        y: Math.round(this.emocionAlegria / this.datosTotalesEmocionales * 100)
                      };

                      if (predominante < datos['alegria'].y) {
                        predominante = datos['alegria'].y;
                        this.colorPredominante = this.ColorHappy2;
                      } //Asco


                      datos['asco'] = {
                        x: x,
                        y: Math.round(this.emocionAsco / this.datosTotalesEmocionales * 100)
                      };

                      if (predominante < datos['asco'].y) {
                        predominante = datos['asco'].y;
                        this.colorPredominante = this.ColorDisgusted2;
                      } //Ira


                      datos['ira'] = {
                        x: x,
                        y: Math.round(this.emocionIra / this.datosTotalesEmocionales * 100)
                      };

                      if (predominante < datos['ira'].y) {
                        predominante = datos['ira'].y;
                        this.colorPredominante = this.ColorAngry2;
                      } //Miedo


                      datos['miedo'] = {
                        x: x,
                        y: Math.round(this.emocionMiedo / this.datosTotalesEmocionales * 100)
                      };

                      if (predominante < datos['miedo']) {
                        predominante = datos['miedo'].y;
                        this.colorPredominante = this.ColorFearful2;
                      } //Sorpresa


                      datos['sorpresa'] = {
                        x: x,
                        y: Math.round(this.emocionSorpresa / this.datosTotalesEmocionales * 100)
                      };

                      if (predominante < datos['sorpresa']) {
                        predominante = datos['sorpresa'].y;
                        this.colorPredominante = this.ColorSurprised2;
                      } //Triteza


                      datos['tristeza'] = {
                        x: x,
                        y: Math.round(this.emocionTristeza / this.datosTotalesEmocionales * 100)
                      };

                      if (predominante < datos['tristeza'].y) {
                        predominante = datos['tristeza'].y;
                        this.colorPredominante = this.ColorSad2;
                      }

                      predominante = 0;
                      /*datos['neutra']=this.emocionNeutra/this.datosTotalesEmocionales;
                      if(datos['tristeza']<datos['neutra']){
                        this.colorPredominante=this.ColorNeutral2;
                      }*/

                      if (this.ColorAngry2 == this.colorPredominante) {
                        datos['estadoEmocional'] = 'Ira';
                      }

                      if (this.ColorDisgusted2 == this.colorPredominante) {
                        datos['estadoEmocional'] = 'Asco';
                      }

                      if (this.ColorFearful2 == this.colorPredominante) {
                        datos['estadoEmocional'] = 'Miedo';
                      }

                      if (this.ColorHappy2 == this.colorPredominante) {
                        datos['estadoEmocional'] = 'Feliz';
                      }

                      if (this.ColorSad2 == this.colorPredominante) {
                        datos['estadoEmocional'] = 'Triste';
                      }

                      if (this.ColorSurprised2 == this.colorPredominante) {
                        datos['estadoEmocional'] = 'Sorpresa';
                      }

                      datos['color'] = 'rgba(' + this.colorPredominante[0] + ',' + this.colorPredominante[1] + ',' + this.colorPredominante[2] + ',' + this.colorPredominante[3] + ')'; //console.log('rgba('+this.colorPredominante[0]+','+this.colorPredominante[1]+','+this.colorPredominante[2]+','+this.colorPredominante[3]+')');
                      //$('#estadoAlumno').css('background-color', 'rgba(' + this.colorPredominante[0] + ',' + this.colorPredominante[1] + ',' + this.colorPredominante[2] + ',' + this.colorPredominante[3] + ')');

                      if (this.led.data) {
                        if (this.pulsera.estado == "Conectado") {
                          if (this.pulsaciones < 100) {
                            this.ponerColor();
                            this.limpiarIntervalos();
                          } else if (this.pulsaciones >= 100 && this.pulsaciones < 120) {
                            this.limpiarIntervalos();
                            this.intervaloAlto = setInterval(function (async) {
                              setTimeout(function (async) {
                                _this4.ponerColor();
                              }, 900);
                              setTimeout(function (async) {
                                _this4.ponerNegro();
                              }, 100);
                            }, 1000);
                          } else if (this.pulsaciones >= 120 && this.pulsaciones < 140) {
                            this.limpiarIntervalos();
                            this.intervaloMuyAlto = setInterval(function (async) {
                              setTimeout(function (async) {
                                _this4.ponerColor();
                              }, 600);
                              setTimeout(function (async) {
                                _this4.ponerNegro();
                              }, 100);
                            }, 700);
                          } else if (this.pulsaciones >= 140) {
                            this.limpiarIntervalos();
                            this.intervaloAltisimo = setInterval(function (async) {
                              setTimeout(function (async) {
                                _this4.ponerColor();
                              }, 300);
                              setTimeout(function (async) {
                                _this4.ponerNegro();
                              }, 100);
                            }, 400);
                          }
                        }
                      }

                      this.emocionAlegria = 0;
                      this.emocionAsco = 0;
                      this.emocionIra = 0;
                      this.emocionMiedo = 0;
                      this.emocionSorpresa = 0;
                      this.emocionTristeza = 0;
                      this.emocionNeutra = 0;
                      this.datosTotalesEmocionales = 0; //Estado de las Pulsaciones
                      //Estado temporal

                      datos['tiempo'] = x; //Estado Cognitivo

                      datos['distraido'] = {
                        x: x,
                        y: 0
                      };

                      if (this.pulsera.estado == "Conectado") {
                        if (datos['pulsaciones'].y > 85 || datos['pulsaciones'].y < 50) {
                          datos['distraido'] = {
                            x: x,
                            y: Math.round(datos['sorpresa'].y)
                          };
                        }
                      } else {
                        datos['distraido'] = {
                          x: x,
                          y: Math.round(datos['sorpresa'].y)
                        };
                      }

                      console.log(datos);

                      if (datos['alegria'].y == NaN || datos['alegria'].y == null) {
                        datos['distraido'] = {
                          x: x,
                          y: 100
                        };
                      }

                      console.log(datos);
                      datos['concentrado'] = {
                        x: x,
                        y: Math.round(100 - datos['distraido'].y)
                      };
                      console.log(datos);
                      datos['frustrado'] = {
                        x: x,
                        y: 0
                      };

                      if (datos['sorpresa'].y + datos['tristeza'].y > 25) {
                        datos['frustrado'] = {
                          x: x,
                          y: Math.round(datos['frustrado'].y + 25)
                        };
                      }

                      if (datos['asco'].y + datos['ira'].y > 25) {
                        datos['frustrado'] = {
                          x: x,
                          y: Math.round(datos['frustrado'].y + 25)
                        };
                      }

                      if (datos['miedo'].y + datos['tristeza'].y > 25) {
                        datos['frustrado'] = {
                          x: x,
                          y: Math.round(datos['frustrado'].y + 25)
                        };
                      }

                      if (datos['sorpresa'].y + datos['ira'].y > 25) {
                        datos['frustrado'] = {
                          x: x,
                          y: Math.round(datos['frustrado'].y + 25)
                        };
                      }

                      if (datos['alegria'].y == NaN || datos['alegria'].y == null) {
                        datos['frustrado'] = {
                          x: x,
                          y: 100
                        };
                      }

                      datos['motivado'] = {
                        x: x,
                        y: Math.round(100 - datos['frustrado'].y)
                      };
                    }

                    console.log("Datos listos para enviar");
                    console.log(datos);
                    this.enviarDatos(datos); //this.enviarEmocionesWebCam(datos);

                    this.estoyComputando = false;

                  case 11:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "limpiarIntervalos",
        value: function limpiarIntervalos() {
          clearInterval(this.intervaloAlto);
          clearInterval(this.intervaloMuyAlto);
          clearInterval(this.intervaloAltisimo);
        }
      }, {
        key: "parar",
        value: function parar() {
          /*this.video.addEventListener('stop', function () {
            console.log("Se ha parado");
          })*/
        }
      }, {
        key: "pulsar",
        value: function pulsar(event) {
          if (event.keyCode === 13 && !event.shiftKey) {
            this.iniciarSesion();
          }
        }
      }, {
        key: "navegadorNoCompatible",
        value: function navegadorNoCompatible() {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Navegador no valido'
          });
        }
      }, {
        key: "noSeHaPodidoConectar",
        value: function noSeHaPodidoConectar() {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'No se ha podido conectar, comprueba el estado del Bluetooth',
            timer: 3000,
            timerProgressBar: true
          });
        }
      }, {
        key: "actualizaNavegador",
        value: function actualizaNavegador() {
          var _this5 = this;

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cierra los programas que utilicen la WebCam y vuelvelo a intentar.',
            timer: 4000,
            timerProgressBar: true
          }).then(function (async) {
            if (_this5.conectadoaActividad) {
              _this5.desconectarse();
            }

            document.location.reload();
          });
        } //Gestion de los Sensore

      }, {
        key: "conectarSensor",
        value: function conectarSensor(sensor) {
          if (sensor.nombre == "Led") {
            this.conectarLed(sensor);
          }

          if (sensor.nombre == "Camara") {
            this.conectarWebCam(sensor); //this.empezar()
          }

          if (sensor.nombre == "Pulsera") {
            this.conectarPulsera(sensor);
          }
        }
      }, {
        key: "conectarPulsera",
        value: function conectarPulsera(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var conectado;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    setTimeout(function (async) {
                      _this6.pulsera.cargando = false;
                    }, 7000);
                    _context8.prev = 1;
                    sensor.cargando = true;
                    _context8.next = 5;
                    return pulseraMiband.connect();

                  case 5:
                    conectado = _context8.sent;

                    //console.log(conectado);
                    if (conectado) {
                      sensor.estado = "Conectado";
                      this.intervaloPulsaciones = setInterval(function (async) {
                        _this6.pulsometro(sensor);
                      }, 2000);
                    } else {
                      sensor.cargando = false;
                      this.noSeHaPodidoConectar();
                    }

                    _context8.next = 13;
                    break;

                  case 9:
                    _context8.prev = 9;
                    _context8.t0 = _context8["catch"](1);
                    //console.log(e);
                    sensor.cargando = false;
                    this.navegadorNoCompatible();

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[1, 9]]);
          }));
        }
      }, {
        key: "pulsometro",
        value: function pulsometro(sensor) {
          if (sensor.estado == "Conectado") {
            this.pulsaciones = pulseraMiband.pulsacionesActuales; //console.log(this.pulsaciones);

            if (this.pulsaciones > 0) {
              sensor.cargando = false;
              this.pulseraConectada(this.actividadActual); //console.log(this.pulsaciones);
            }
          }
        }
      }, {
        key: "desconectarSensor",
        value: function desconectarSensor(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var constraints, stream, track;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (sensor.nombre == "Led") {
                      //console.log(sensor);
                      sensor.cargando = true;
                      this.ponerNegro();
                      sensor.data.close();
                      sensor.data = null;
                      sensor.cargando = false;
                      sensor.estado = "Desconectado";
                      this.ledDesconectada(this.actividadActual);
                    }

                    if (!(sensor.nombre == "Camara")) {
                      _context9.next = 19;
                      break;
                    }

                    /*navigator.getUserMedia({ audio: false, video: true },
                      function (stream) {
                        // can also use getAudioTracks() or getVideoTracks()
                        var track = stream.getTracks()[0];  // if only one media track
                        // ...
                        track.stop();
                        sensor.data = null;
                        sensor.estado = "Desconectado";
                      },
                      function (error) {
                        console.log('getUserMedia() error', error);
                      });*/
                    ///
                    //sensor.data = document.getElementById('video');
                    constraints = {
                      audio: false,
                      video: {
                        width: 720,
                        height: 480
                      }
                    };
                    _context9.prev = 3;
                    sensor.cargando = true;
                    _context9.next = 7;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 7:
                    stream = _context9.sent;
                    track = stream.getTracks()[0]; // if only one media track
                    // ...

                    track.stop();
                    sensor.data = null;
                    sensor.cargando = false;
                    sensor.estado = "Desconectado";
                    this.webCamDesconectada(this.actividadActual);

                    if (this.intervaloGenerarDatos != null) {
                      clearImmediate(this.intervaloGenerarDatos);
                    }

                    _context9.next = 19;
                    break;

                  case 17:
                    _context9.prev = 17;
                    _context9.t0 = _context9["catch"](3);

                  case 19:
                    if (sensor.nombre == "Pulsera") {
                      sensor.cargando = true;
                      pulseraMiband.desconnect();
                      clearInterval(this.intervaloPulsaciones);
                      sensor.data = null;
                      sensor.cargando = false;
                      sensor.estado = "Desconectado";
                      this.pulseraDesconectada(this.actividadActual);
                    }

                  case 20:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[3, 17]]);
          }));
        } //Implementacion del led

      }, {
        key: "conectarLed",
        value: function conectarLed(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this7 = this;

            var ju, led;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    setTimeout(function (async) {
                      _this7.led.cargando = false;
                    }, 7000);
                    ju = this;
                    sensor.cargando = true; //console.log("Conectandose...");

                    _context10.prev = 3;
                    _context10.next = 6;
                    return navigator.hid.requestDevice({
                      filters: [{
                        vendorId: 0x20a0,
                        productId: 0x41e5
                      }]
                    });

                  case 6:
                    led = _context10.sent;

                    if (!(led.length != 0)) {
                      _context10.next = 17;
                      break;
                    }

                    this.socket.emit('ledConectada', this.actividadActual, this.estudiante);
                    _context10.next = 11;
                    return led[0].open();

                  case 11:
                    sensor.data = led[0]; //console.log(sensor.data);

                    this.ponerBlanco();
                    sensor.cargando = false;
                    this.led.estado = "Conectado"; //await ju.ledConectada(ju.actividadActual);

                    _context10.next = 18;
                    break;

                  case 17:
                    sensor.cargando = false;

                  case 18:
                    _context10.next = 24;
                    break;

                  case 20:
                    _context10.prev = 20;
                    _context10.t0 = _context10["catch"](3);
                    // No device was selected.
                    sensor.cargando = false;
                    this.navegadorNoCompatible();

                  case 24:
                    //console.log(this.listaSensores)
                    if (this.device !== undefined) {// Add |device| to the UI.
                    }

                  case 25:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[3, 20]]);
          }));
        }
      }, {
        key: "desconectarCamara",
        value: function desconectarCamara() {
          this.desconectarSensor(this.camara);
        }
      }, {
        key: "conectarCamara",
        value: function conectarCamara() {
          this.conectarSensor(this.camara);
        }
      }, {
        key: "abrirGestionSensores",
        value: function abrirGestionSensores() {
          this.configurarSensores = true;
        }
      }, {
        key: "cerrarGestionSensores",
        value: function cerrarGestionSensores() {
          this.configurarSensores = false;
        }
      }, {
        key: "ponerHappy",
        value: function ponerHappy() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.fadeToColor(this.led.data, [255, 255, 0]);

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "ponerNeutral",
        value: function ponerNeutral() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.fadeToColor(this.led.data, [84, 255, 84]);

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "ponerSad",
        value: function ponerSad() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.fadeToColor(this.led.data, [81, 81, 255]);

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "ponerAngry",
        value: function ponerAngry() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.fadeToColor(this.led.data, [255, 0, 0]);

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "ponerFearful",
        value: function ponerFearful() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.fadeToColor(this.led.data, [0, 150, 0]);

                  case 2:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "ponerDisgusted",
        value: function ponerDisgusted() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.fadeToColor(this.led.data, [80, 80, 80]);

                  case 2:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "ponerSurprised",
        value: function ponerSurprised() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.fadeToColor(this.led.data, [89, 189, 255]);

                  case 2:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "ponerColor",
        value: function ponerColor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.fadeToColor(this.led.data, [this.colorPredominante[0], this.colorPredominante[1], this.colorPredominante[2]]);

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "ponerNegro",
        value: function ponerNegro() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.fadeToColor(this.led.data, [0, 0, 0]);

                  case 2:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "ponerBlanco",
        value: function ponerBlanco() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.fadeToColor(this.led.data, [255, 255, 255]);

                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "fadeToColor",
        value: function fadeToColor(device, _ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              r = _ref2[0],
              g = _ref2[1],
              b = _ref2[2];

          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            var reportId, data;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    reportId = 1; //console.log([r, g, b]);
                    //console.log(this.led.data);
                    //console.log(device);

                    data = Uint8Array.from([r, g, b]); //const negro = Uint8Array.from([0x63, 0, 0, 0, 0x00, 0x10, 0x00, 0x00]);

                    _context21.prev = 2;
                    _context21.next = 5;
                    return device.sendFeatureReport(1, data);

                  case 5:
                    _context21.next = 9;
                    break;

                  case 7:
                    _context21.prev = 7;
                    _context21.t0 = _context21["catch"](2);

                  case 9:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, null, [[2, 7]]);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.actividadActual != null) {
            this.socket.emit('meDesconectoActividad', this.actividadActual, this.estudiante);
          }

          clearInterval(this.intervaloGenerarDatos);
          clearInterval(this.intervaloPulsaciones);
          clearInterval(this.intervaloDeEnvio);

          if (pulseraMiband != null || pulseraMiband != undefined) {
            pulseraMiband.desconnect();
          }
        } //Implementacion de los sockets

      }, {
        key: "ini",
        value: function ini() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__["connect"]();
          this.lanzarSocketSrv();
          this.soyEstudiante();
        }
      }]);

      return EstudianteComponent;
    }();

    EstudianteComponent.ctorParameters = function () {
      return [{
        type: _socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EstudianteComponent.prototype, "estudianteIniciado", void 0);
    EstudianteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estudiante',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estudiante.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/estudiante/estudiante.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estudiante.component.css */
      "./src/app/estudiante/estudiante.component.css")).default]
    })], EstudianteComponent);
    /***/
  },

  /***/
  "./src/app/profesor/crear-actividad/crear-actividad.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/profesor/crear-actividad/crear-actividad.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorCrearActividadCrearActividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.example-box {\n  width: 70px;\n  height: 70px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 0px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvY3JlYXItYWN0aXZpZGFkL2NyZWFyLWFjdGl2aWRhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsK0dBQStHO0FBQ2pIOztBQUVBO0VBQ0UscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmVzb3IvY3JlYXItYWN0aXZpZGFkL2NyZWFyLWFjdGl2aWRhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3VuZGFyeSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IGRvdHRlZCAjY2NjIDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/crear-actividad/crear-actividad.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/profesor/crear-actividad/crear-actividad.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CrearActividadComponent */

  /***/
  function srcAppProfesorCrearActividadCrearActividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearActividadComponent", function () {
      return CrearActividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var moment_locale_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment/locale/es */
    "./node_modules/moment/locale/es.js");
    /* harmony import */


    var moment_locale_es__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_8__);

    var CrearActividadComponent =
    /*#__PURE__*/
    function () {
      function CrearActividadComponent(_formBuilder, profesor) {
        _classCallCheck(this, CrearActividadComponent);

        this._formBuilder = _formBuilder;
        this.profesor = profesor;
        this.actividadCreada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.anadirProfesor = false;
        this.listaProfesores = [];
        this.profesorSeleccionado = {
          nombre: 'Ninguno',
          apellidos: '',
          departamento: ''
        };
        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.actividadCreate = {
          nombre: '',
          profesor: {},
          fecha: '',
          alumnos: {},
          estado: 'Creada',
          resumen: {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            tiempo: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          },
          clase: {
            _id: '',
            nombre: 'Sin clase'
          }
        };
        this.alumnosSeleccionados = [];
        this.estudiante = {
          nombre: '',
          apellidos: '',
          clase: '',
          posicionX: 0,
          posicionY: 0
        };
        this.submitted = false;
      }

      _createClass(CrearActividadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var ju;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    ju = this;
                    this.datosPrimarios = this._formBuilder.group({
                      fromControlNombreActividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    this.selection.selected.length;
                    $.getJSON("/verProfesores", function (data) {
                      for (var i = 0; i < data.length; i++) {
                        ju.listaProfesores.push(data[i]);
                      }

                      ju.filteredList1 = ju.listaProfesores.slice();
                    });

                  case 4:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.estudiantes);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this8 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this8.selection.select(row);
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var fila = 0;
          var columna = 0;
          var arryaAlumnos = []; // = this.selection.selected;

          for (var i = 0; i < this.selection.selected.length; i++) {
            //MODIFICADO

            /*if(columna<=5){
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                'clase':this.selection.selected[i].clase,
                       posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
              
              
              //arryaAlumnos[this.selection.selected[i].email]=this.selection.selected[i];
                columna++;
            }else{
              fila++;
              columna=0;
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
                columna++;
            }*/
            //MODIFICADO
            arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__["Alumnos"](this.selection.selected[i], {
              x: 0,
              y: 0
            }, this.actividadCreate, null));
          }

          this.alumnosSeleccionados = arryaAlumnos;
          /*this.actividadCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition();
          console.log(item); //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "guardarActividad",
        value: function guardarActividad() {
          console.log("Vamos a guardar la actividad"); //console.log(this.comprobarSeleccionados())
          //this.crearActividad();
          //MODIFICADO

          /*var alumnos=[];
          for(let i = 0;i<this.alumnosSeleccionados.length;i++){
            //alumnos.push({nombre:this.alumnosSeleccionados[i].nombre,apellidos:this.alumnosSeleccionados[i].apellidos,posicion:this.alumnosSeleccionados[i].posicion,posicionInicial:this.alumnosSeleccionados[i].posicionInicial});
            alumnos.push(this.alumnosSeleccionados[i]);
          }
          this.actividadCreate.alumnos=alumnos;
          */
          //MODIFICADO

          this.actividadCreate.profesor = this.profesorSeleccionado;
          this.actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_7__().format('LLLL');
          this.actividadCreate.alumnos = this.alumnosSeleccionados;
          console.log(this.actividadCreate);
          this.actividadCreada.emit(this.actividadCreate);
          this.actividadCreate = {
            nombre: '',
            profesor: '',
            fecha: '',
            alumnos: {},
            estado: '',
            resumen: {
              alegria: [],
              asco: [],
              miedo: [],
              sorpresa: [],
              tristeza: [],
              ira: [],
              pulsaciones: [],
              tiempo: [],
              distraido: [],
              concentrado: [],
              frustrado: [],
              motivado: []
            },
            clase: {
              _id: '',
              nombre: 'Sin clase'
            }
          };
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          this.profesor.cerrarModal();
        }
      }, {
        key: "verAnadirProfesor",
        value: function verAnadirProfesor() {
          this.anadirProfesor = true;
        }
      }, {
        key: "cancelarAnadirProfesor",
        value: function cancelarAnadirProfesor() {
          this.anadirProfesor = false;
        }
      }, {
        key: "anadirProfesorLista",
        value: function anadirProfesorLista() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            var ju, profesor;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    ju = this;
                    profesor = {
                      nombre: this.nombreProfesor,
                      apellidos: this.apellidosProfesor,
                      departamento: this.departamentoProfesor
                    };
                    $.ajax({
                      type: 'POST',
                      url: '/registrarProfesor',
                      data: JSON.stringify(profesor),
                      success: function success(data2) {
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Profesor '" + data2.nombre + "' creado.",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        }); //ju.profesorSeleccionado = data;

                        $.getJSON("/verProfesores", function (data) {
                          ju.listaProfesores.length = 0;

                          for (var i = 0; i < data.length; i++) {
                            ju.listaProfesores.push(data[i]);
                          }

                          ju.filteredList1 = ju.listaProfesores.slice();
                        });
                        ju.anadirProfesor = false;
                        ju.nombreProfesor = '';
                        ju.apellidosProfesor = '';
                        ju.departamentoProfesor = '';
                        ju.selecionarProfesor(data2);
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "selecionarProfesor",
        value: function selecionarProfesor(profesor) {
          console.log(profesor);
          this.profesorSeleccionado = profesor;
          console.log(this.profesorSeleccionado);
        }
      }, {
        key: "search",
        value: function search(value) {
          var filter = this.listaProfesores.filter(function (item) {
            return item.toLowerCase().includes(value.toLowerCase());
          });
          return _toConsumableArray(filter);
        }
      }, {
        key: "seleccionarUnAlumno",
        value: function seleccionarUnAlumno() {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hay que seleccionar un alumno como minimo',
            timer: 3000,
            timerProgressBar: true
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }]);

      return CrearActividadComponent;
    }();

    CrearActividadComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CrearActividadComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CrearActividadComponent.prototype, "editarActividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CrearActividadComponent.prototype, "actividadCreada", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)], CrearActividadComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)], CrearActividadComponent.prototype, "sort", void 0);
    CrearActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-actividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-actividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-actividad/crear-actividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-actividad.component.css */
      "./src/app/profesor/crear-actividad/crear-actividad.component.css")).default]
    })], CrearActividadComponent);
    /***/
  },

  /***/
  "./src/app/profesor/crear-clase/crear-clase.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/profesor/crear-clase/crear-clase.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorCrearClaseCrearClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  .example-box {\n    width: 70px;\n    height: 70px;\n    border: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: move;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    background: #fff;\n    border-radius: 4px;\n    margin-right: 0px;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    padding: 10px;\n    -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-box:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-boundary {\n    width: 400px;\n    height: 400px;\n    max-width: 100%;\n    border: dotted #ccc 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvY3JlYXItY2xhc2UvY3JlYXItY2xhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwrREFBdUQ7SUFBdkQsdURBQXVEO0lBQ3ZELCtHQUErRztFQUNqSDs7RUFFQTtJQUNFLHFIQUFxSDtFQUN2SDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL2NyZWFyLWNsYXNlL2NyZWFyLWNsYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC10YWJsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94OmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3VuZGFyeSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogZG90dGVkICNjY2MgMnB4O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/profesor/crear-clase/crear-clase.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/profesor/crear-clase/crear-clase.component.ts ***!
    \***************************************************************/

  /*! exports provided: CrearClaseComponent */

  /***/
  function srcAppProfesorCrearClaseCrearClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearClaseComponent", function () {
      return CrearClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var CrearClaseComponent =
    /*#__PURE__*/
    function () {
      function CrearClaseComponent(_formBuilder, profesor) {
        _classCallCheck(this, CrearClaseComponent);

        this._formBuilder = _formBuilder;
        this.profesor = profesor;
        this.anadirProfesor = false;
        this.listaProfesores = [];
        this.profesorSeleccionado = {
          nombre: 'Ninguno',
          apellidos: '',
          departamento: ''
        }; //Prueba de una tabla con filtro y paginacion

        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.claseCreate = {
          nombre: '',
          profesor: {},
          alumnos: [],
          actividades: {},
          resumen: {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            tiempo: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          }
        };
        this.alumnosSeleccionados = [];
        this.estudiante = {
          nombre: '',
          apellidos: '',
          clase: '',
          posicionX: 0,
          posicionY: 0
        };
        this.submitted = false;
      }

      _createClass(CrearClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ju = this;
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreActividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          $.getJSON("/verProfesores", function (data) {
            for (var i = 0; i < data.length; i++) {
              ju.listaProfesores.push(data[i]);
            }

            ju.filteredList1 = ju.listaProfesores.slice();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.estudiantes);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
        }
      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this9 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this9.selection.select(row);
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var fila = 0;
          var columna = 0;
          var arryaAlumnos = []; // = this.selection.selected;

          for (var i = 0; i < this.selection.selected.length; i++) {
            //MODIFICADO

            /*if(columna<=5){
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                'clase':this.selection.selected[i].clase,
                       posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
              
              
              //arryaAlumnos[this.selection.selected[i].email]=this.selection.selected[i];
                columna++;
            }else{
              fila++;
              columna=0;
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
                columna++;
            }*/
            //MODIFICADO
            arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__["AlumnosClase"](this.selection.selected[i], {
              x: 0,
              y: 0
            }));
          }

          this.alumnosSeleccionados = arryaAlumnos;
          /*this.claseCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition();
          console.log(item); //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "guardarActividad",
        value: function guardarActividad() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var ju;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    ju = this;
                    this.claseCreate.alumnos = this.alumnosSeleccionados;
                    this.claseCreate.profesor = this.profesorSeleccionado;
                    console.log(this.claseCreate); //this.actividadCreada.emit(this.claseCreate);

                    $.ajax({
                      type: 'POST',
                      url: '/registrarClase',
                      data: JSON.stringify(ju.claseCreate),
                      success: function success(data) {
                        ju.profesor.actualizarClases(ju.claseCreate, false);
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });
                    this.claseCreate = {
                      nombre: '',
                      profesor: {},
                      alumnos: [],
                      actividades: {},
                      resumen: {
                        alegria: [],
                        asco: [],
                        miedo: [],
                        sorpresa: [],
                        tristeza: [],
                        ira: [],
                        pulsaciones: [],
                        tiempo: [],
                        distraido: [],
                        concentrado: [],
                        frustrado: [],
                        motivado: []
                      }
                    };

                  case 6:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          this.profesor.cerrarModal();
        }
      }, {
        key: "verAnadirProfesor",
        value: function verAnadirProfesor() {
          this.anadirProfesor = true;
        }
      }, {
        key: "cancelarAnadirProfesor",
        value: function cancelarAnadirProfesor() {
          this.anadirProfesor = false;
        }
      }, {
        key: "anadirProfesorLista",
        value: function anadirProfesorLista() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var ju, profesor;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    ju = this;
                    profesor = {
                      nombre: this.nombreProfesor,
                      apellidos: this.apellidosProfesor,
                      departamento: this.departamentoProfesor
                    };
                    $.ajax({
                      type: 'POST',
                      url: '/registrarProfesor',
                      data: JSON.stringify(profesor),
                      success: function success(data2) {
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Profesor '" + data2.nombre + "' creado.",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        }); //ju.profesorSeleccionado = data;

                        $.getJSON("/verProfesores", function (data) {
                          ju.listaProfesores.length = 0;

                          for (var i = 0; i < data.length; i++) {
                            ju.listaProfesores.push(data[i]);
                          }

                          ju.filteredList1 = ju.listaProfesores.slice();
                        });
                        ju.anadirProfesor = false;
                        ju.nombreProfesor = '';
                        ju.apellidosProfesor = '';
                        ju.departamentoProfesor = '';
                        ju.selecionarProfesor(data2);
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 3:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "selecionarProfesor",
        value: function selecionarProfesor(profesor) {
          console.log(profesor);
          this.profesorSeleccionado = profesor;
          console.log(this.profesorSeleccionado);
        }
      }, {
        key: "search",
        value: function search(value) {
          var filter = this.listaProfesores.filter(function (item) {
            return item.toLowerCase().includes(value.toLowerCase());
          });
          return _toConsumableArray(filter);
        }
      }, {
        key: "seleccionarUnAlumno",
        value: function seleccionarUnAlumno() {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hay que seleccionar un alumno como minimo',
            timer: 3000,
            timerProgressBar: true
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }]);

      return CrearClaseComponent;
    }();

    CrearClaseComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CrearClaseComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)], CrearClaseComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)], CrearClaseComponent.prototype, "sort", void 0);
    CrearClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-clase/crear-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-clase.component.css */
      "./src/app/profesor/crear-clase/crear-clase.component.css")).default]
    })], CrearClaseComponent);
    /***/
  },

  /***/
  "./src/app/profesor/crear-profesor/crear-profesor.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/profesor/crear-profesor/crear-profesor.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorCrearProfesorCrearProfesorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL2NyZWFyLXByb2Zlc29yL2NyZWFyLXByb2Zlc29yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/crear-profesor/crear-profesor.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/profesor/crear-profesor/crear-profesor.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CrearProfesorComponent */

  /***/
  function srcAppProfesorCrearProfesorCrearProfesorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearProfesorComponent", function () {
      return CrearProfesorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CrearProfesorComponent =
    /*#__PURE__*/
    function () {
      function CrearProfesorComponent(pComponente, _formBuilder) {
        _classCallCheck(this, CrearProfesorComponent);

        this.pComponente = pComponente;
        this._formBuilder = _formBuilder;
        this.submitted = false;
      }

      _createClass(CrearProfesorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreProfesor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.pComponente.cerrarModal();
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.nombre = '';
          this.apellidos = '';
          this.departamento = '';
        }
      }, {
        key: "guardar",
        value: function guardar() {
          var profesor = {
            nombre: this.nombre,
            apellidos: this.apellidos,
            departamento: this.departamento
          };
          this.pComponente.guardarP(profesor);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          } else {
            this.guardar();
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }]);

      return CrearProfesorComponent;
    }();

    CrearProfesorComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_2__["ProfesorComponent"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    CrearProfesorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-profesor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-profesor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-profesor/crear-profesor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-profesor.component.css */
      "./src/app/profesor/crear-profesor/crear-profesor.component.css")).default]
    })], CrearProfesorComponent);
    /***/
  },

  /***/
  "./src/app/profesor/editar-actividad/editar-actividad.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/profesor/editar-actividad/editar-actividad.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorEditarActividadEditarActividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  .example-box {\n    width: 70px;\n    height: 70px;\n    border: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: move;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    background: #fff;\n    border-radius: 4px;\n    margin-right: 0px;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    padding: 10px;\n    -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-box:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-boundary {\n    width: 400px;\n    height: 400px;\n    max-width: 100%;\n    border: dotted #ccc 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvZWRpdGFyLWFjdGl2aWRhZC9lZGl0YXItYWN0aXZpZGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsK0RBQXVEO0lBQXZELHVEQUF1RDtJQUN2RCwrR0FBK0c7RUFDakg7O0VBRUE7SUFDRSxxSEFBcUg7RUFDdkg7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci9lZGl0YXItYWN0aXZpZGFkL2VkaXRhci1hY3RpdmlkYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4IDA7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94IHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJvdW5kYXJ5IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBkb3R0ZWQgI2NjYyAycHg7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/editar-actividad/editar-actividad.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/profesor/editar-actividad/editar-actividad.component.ts ***!
    \*************************************************************************/

  /*! exports provided: EditarActividadComponent */

  /***/
  function srcAppProfesorEditarActividadEditarActividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarActividadComponent", function () {
      return EditarActividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var EditarActividadComponent =
    /*#__PURE__*/
    function () {
      function EditarActividadComponent(_formBuilder, profesor) {
        _classCallCheck(this, EditarActividadComponent);

        this._formBuilder = _formBuilder;
        this.profesor = profesor;
        this.actividadEditada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cerrarModalOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.anadirProfesor = false;
        this.listaProfesores = [];
        this.profesorSeleccionado = {}; //Prueba de una tabla con filtro y paginacion

        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.alumnosSeleccionados = [];
        this.arryaAlumnos = [];
        this.arrayAlumnosAntiguos = [];
        this.submitted = false;
      } //public verClaseComponente:VerClaseComponent


      _createClass(EditarActividadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ju = this;
          console.log(this.verClase);
          console.log(this.editarActividad);
          this.profesorSeleccionado = this.editarActividad.profesor;
          console.log(this.profesorSeleccionado);
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreActividad: true,
            fromControlNombreProfesor: true //['', Validators.required]

          });
          $.getJSON("/verProfesores", function (data) {
            for (var _i2 = 0; _i2 < data.length; _i2++) {
              ju.listaProfesores.push(data[_i2]);
            }

            ju.filteredList1 = ju.listaProfesores.slice();
          }); //ju.profesorSeleccionado=this.editarActividad.profesor;

          for (var i in this.editarActividad.alumnos) {
            console.log(this.editarActividad.alumnos[i]); //this.selection.selected.push(this.editarActividad.alumnos[i].estudiante);
            //this.arryaAlumnos.push(new Alumnos(this.editarActividad.alumnos[i].estudiante, { x: 0, y: 0 }, this.editarActividad));
          }
          /*
          console.log(this.selection);*/
          //this.selection.selected=this.editarActividad.alumnos.

        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this10 = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.estudiantes.reverse());
          console.log(this.editarActividad);
          this.dataSource.data.forEach(function (row) {
            for (var i in _this10.editarActividad.alumnos) {
              if (_this10.editarActividad.alumnos[i].estudiante._id == row._id) {
                _this10.selection.select(row);

                _this10.actualizarr(row);

                _this10.arrayAlumnosAntiguos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["Alumnos"](_this10.editarActividad.alumnos[i].estudiante, _this10.editarActividad.alumnos[i].posicion, _this10.editarActividad, _this10.editarActividad.alumnos[i].datos));
              }
            } //this.actualizarr(row);
            //console.log(this.arryaAlumnos);

          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        }
      }, {
        key: "actualizarr",
        value: function actualizarr(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    this.arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["Alumnos"](item, item.posicion, this.editarActividad, null));
                    this.alumnosSeleccionados = this.arryaAlumnos;
                    this.ponerAlumnos;

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this11 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            _this11.selection.select(row); //this.arryaAlumnos.push(new Alumnos(row, { x: 0, y: 0 }, this.editarActividad))
            //this.alumnosSeleccionados = this.arryaAlumnos;


            _this11.ponerAlumnos();
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition(); //console.log(item);
          //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var listaID = {};
          var arrayListaID = [];
          console.log("Antiguos");
          console.log(this.arrayAlumnosAntiguos);
          console.log("Seleccionados");
          console.log(this.selection.selected);
          this.arryaAlumnos = [];
          this.arryaAlumnos.length = 0;
          this.alumnosSeleccionados.length = 0;
          this.alumnosSeleccionados = [];
          console.log(this.alumnosSeleccionados);
          var fila = 0;
          var columna = 0; // = this.selection.selected;

          for (var i = 0; i < this.selection.selected.length; i++) {
            listaID[this.selection.selected[i]._id] = new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["Alumnos"](this.selection.selected[i], {
              x: 0,
              y: 0
            }, this.editarActividad, null);
          }

          for (var j = 0; j < this.arrayAlumnosAntiguos.length; j++) {
            //console.log(listaID[this.arrayAlumnosAntiguos[j].estudiante._id])
            if (listaID[this.arrayAlumnosAntiguos[j].estudiante._id] != null) {
              listaID[this.arrayAlumnosAntiguos[j].estudiante._id] = this.arrayAlumnosAntiguos[j];
            }
          }

          for (var id in listaID) {
            arrayListaID.push(listaID[id]);
          }
          /*for(let j = 0;j<this.arrayAlumnosAntiguos.length;j++){
            for (let i = 0; i < this.selection.selected.length; i++) {
              this.arryaAlumnos.push(new Alumnos(this.selection.selected[i], { x: 0, y: 0 }, this.editarActividad,null));
            }
          }*/


          this.alumnosSeleccionados = arrayListaID;
          console.log("Lista definitiva");
          console.log(this.alumnosSeleccionados);
          /*this.actividadCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.editarActividad.fecha = moment__WEBPACK_IMPORTED_MODULE_7__().format('LLLL');
          this.editarActividad.alumnos = this.alumnosSeleccionados;
          this.editarActividad.profesor = this.profesorSeleccionado;
          this.actividadEditada.emit(this.editarActividad);
          this.cerrarModal();
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          /*if(this.verClase){
            this.profesor.cerrarModal();
          }else{
            this.verClaseComponente.cancelar();
          }*/
          this.cerrarModalOut.emit();
        }
      }, {
        key: "verAnadirProfesor",
        value: function verAnadirProfesor() {
          this.anadirProfesor = true;
        }
      }, {
        key: "cancelarAnadirProfesor",
        value: function cancelarAnadirProfesor() {
          this.anadirProfesor = false;
        }
      }, {
        key: "anadirProfesorLista",
        value: function anadirProfesorLista() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var ju, profesor;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    ju = this;
                    profesor = {
                      nombre: this.nombreProfesor,
                      apellidos: this.apellidosProfesor,
                      departamento: this.departamentoProfesor
                    };
                    $.ajax({
                      type: 'POST',
                      url: '/registrarProfesor',
                      data: JSON.stringify(profesor),
                      success: function success(data2) {
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Profesor '" + data2.nombre + "' creado.",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        }); //ju.profesorSeleccionado = data;

                        $.getJSON("/verProfesores", function (data) {
                          ju.listaProfesores.length = 0;

                          for (var i = 0; i < data.length; i++) {
                            ju.listaProfesores.push(data[i]);
                          }

                          ju.filteredList1 = ju.listaProfesores.slice();
                        });
                        ju.anadirProfesor = false;
                        ju.nombreProfesor = '';
                        ju.apellidosProfesor = '';
                        ju.departamentoProfesor = '';
                        ju.selecionarProfesor(data2);
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "selecionarProfesor",
        value: function selecionarProfesor(profesor) {
          console.log(profesor);
          this.profesorSeleccionado = profesor;
          console.log(this.profesorSeleccionado);
        }
      }, {
        key: "search",
        value: function search(value) {
          var filter = this.listaProfesores.filter(function (item) {
            return item.toLowerCase().includes(value.toLowerCase());
          });
          return _toConsumableArray(filter);
        }
      }, {
        key: "seleccionarUnAlumno",
        value: function seleccionarUnAlumno() {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hay que seleccionar un alumno como minimo',
            timer: 3000,
            timerProgressBar: true
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }]);

      return EditarActividadComponent;
    }();

    EditarActividadComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarActividadComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarActividadComponent.prototype, "editarActividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarActividadComponent.prototype, "verClase", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditarActividadComponent.prototype, "actividadEditada", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditarActividadComponent.prototype, "cerrarModalOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], EditarActividadComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], EditarActividadComponent.prototype, "sort", void 0);
    EditarActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-actividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar-actividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-actividad/editar-actividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar-actividad.component.css */
      "./src/app/profesor/editar-actividad/editar-actividad.component.css")).default]
    })], EditarActividadComponent);
    /***/
  },

  /***/
  "./src/app/profesor/editar-clase/editar-clase.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/profesor/editar-clase/editar-clase.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorEditarClaseEditarClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  .example-box {\n    width: 70px;\n    height: 70px;\n    border: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: move;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    background: #fff;\n    border-radius: 4px;\n    margin-right: 0px;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    padding: 10px;\n    -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-box:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-boundary {\n    width: 400px;\n    height: 400px;\n    max-width: 100%;\n    border: dotted #ccc 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvZWRpdGFyLWNsYXNlL2VkaXRhci1jbGFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiwyQkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLCtEQUF1RDtJQUF2RCx1REFBdUQ7SUFDdkQsK0dBQStHO0VBQ2pIOztFQUVBO0lBQ0UscUhBQXFIO0VBQ3ZIOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmVzb3IvZWRpdGFyLWNsYXNlL2VkaXRhci1jbGFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3gge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm91bmRhcnkge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IGRvdHRlZCAjY2NjIDJweDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/editar-clase/editar-clase.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/profesor/editar-clase/editar-clase.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EditarClaseComponent */

  /***/
  function srcAppProfesorEditarClaseEditarClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarClaseComponent", function () {
      return EditarClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var EditarClaseComponent =
    /*#__PURE__*/
    function () {
      function EditarClaseComponent(_formBuilder, profesor) {
        _classCallCheck(this, EditarClaseComponent);

        this._formBuilder = _formBuilder;
        this.profesor = profesor;
        this.anadirProfesor = false;
        this.listaProfesores = [];
        this.profesorSeleccionado = {}; //Prueba de una tabla con filtro y paginacion

        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.alumnosSeleccionados = [];
        this.arryaAlumnos = [];
        this.arrayAlumnosAntiguos = [];
        this.submitted = false;
      }

      _createClass(EditarClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ju = this;
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreActividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          $.getJSON("/verProfesores", function (data) {
            for (var _i3 = 0; _i3 < data.length; _i3++) {
              ju.listaProfesores.push(data[_i3]);
            }

            ju.filteredList1 = ju.listaProfesores.slice();
          });
          this.profesorSeleccionado = ju.editarActividad.profesor;

          for (var i in this.editarActividad.alumnos) {
            console.log(this.editarActividad.alumnos[i]); //this.selection.selected.push(this.editarActividad.alumnos[i].estudiante);
            //this.arryaAlumnos.push(new Alumnos(this.editarActividad.alumnos[i].estudiante, { x: 0, y: 0 }, this.editarActividad));
          }
          /*
          console.log(this.selection);*/
          //this.selection.selected=this.editarActividad.alumnos.

        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this12 = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.estudiantes);
          /*console.log("Prueba");
          console.log(this.dataSource);*/

          this.dataSource.data.forEach(function (row) {
            for (var i in _this12.editarActividad.alumnos) {
              if (_this12.editarActividad.alumnos[i].estudiante._id == row._id) {
                _this12.selection.select(row);

                _this12.actualizarr(row);

                _this12.arrayAlumnosAntiguos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["AlumnosClase"](_this12.editarActividad.alumnos[i].estudiante, _this12.editarActividad.alumnos[i].posicion));
              }
            } //this.actualizarr(row);


            console.log(_this12.arryaAlumnos);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        }
      }, {
        key: "actualizarr",
        value: function actualizarr(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    this.arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["AlumnosClase"](item, {
                      x: 0,
                      y: 0
                    }));
                    this.alumnosSeleccionados = this.arryaAlumnos;
                    this.ponerAlumnos;

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this13 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            _this13.selection.select(row); //this.arryaAlumnos.push(new Alumnos(row, { x: 0, y: 0 }, this.editarActividad))
            //this.alumnosSeleccionados = this.arryaAlumnos;


            _this13.ponerAlumnos();
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition(); //console.log(item);
          //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var listaID = {};
          var arrayListaID = [];
          this.arryaAlumnos = [];
          console.log(this.selection.selected.length);
          var fila = 0;
          var columna = 0; // = this.selection.selected;

          /*for (let i = 0; i < this.selection.selected.length; i++) {
            this.arryaAlumnos.push(new AlumnosClase(this.selection.selected[i], { x: 0, y: 0 }, this.editarActividad));
          }*/

          for (var i = 0; i < this.selection.selected.length; i++) {
            listaID[this.selection.selected[i]._id] = new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["AlumnosClase"](this.selection.selected[i], {
              x: 0,
              y: 0
            });
          }

          for (var j = 0; j < this.arrayAlumnosAntiguos.length; j++) {
            //console.log(listaID[this.arrayAlumnosAntiguos[j].estudiante._id])
            if (listaID[this.arrayAlumnosAntiguos[j].estudiante._id] != null) {
              listaID[this.arrayAlumnosAntiguos[j].estudiante._id] = this.arrayAlumnosAntiguos[j];
            }
          }

          for (var id in listaID) {
            arrayListaID.push(listaID[id]);
          }

          this.alumnosSeleccionados = arrayListaID;
          /*this.actividadCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.editarActividad.alumnos = this.alumnosSeleccionados;
          this.editarActividad.profesor = this.profesorSeleccionado;
          var ju = this;
          console.log(this.editarActividad);
          $.ajax({
            type: 'POST',
            url: '/actualizarClase',
            data: JSON.stringify(ju.editarActividad),
            success: function success(data) {
              ju.profesor.actualizarClases(ju.editarActividad, true);
              ju.profesor.cerrarModal();
            },
            contentType: 'application/json',
            dataType: 'json'
          }); //this.actividadEditada.emit(this.editarActividad);
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          this.profesor.cerrarModal();
        }
      }, {
        key: "verAnadirProfesor",
        value: function verAnadirProfesor() {
          this.anadirProfesor = true;
        }
      }, {
        key: "cancelarAnadirProfesor",
        value: function cancelarAnadirProfesor() {
          this.anadirProfesor = false;
        }
      }, {
        key: "anadirProfesorLista",
        value: function anadirProfesorLista() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            var ju, profesor;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    ju = this;
                    profesor = {
                      nombre: this.nombreProfesor,
                      apellidos: this.apellidosProfesor,
                      departamento: this.departamentoProfesor
                    };
                    $.ajax({
                      type: 'POST',
                      url: '/registrarProfesor',
                      data: JSON.stringify(profesor),
                      success: function success(data2) {
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Profesor '" + data2.nombre + "' creado.",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        }); //ju.profesorSeleccionado = data;

                        $.getJSON("/verProfesores", function (data) {
                          ju.listaProfesores.length = 0;

                          for (var i = 0; i < data.length; i++) {
                            ju.listaProfesores.push(data[i]);
                          }

                          ju.filteredList1 = ju.listaProfesores.slice();
                        });
                        ju.anadirProfesor = false;
                        ju.nombreProfesor = '';
                        ju.apellidosProfesor = '';
                        ju.departamentoProfesor = '';
                        ju.selecionarProfesor(data2);
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 3:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "selecionarProfesor",
        value: function selecionarProfesor(profesor) {
          console.log(profesor);
          this.profesorSeleccionado = profesor;
          console.log(this.profesorSeleccionado);
        }
      }, {
        key: "search",
        value: function search(value) {
          var filter = this.listaProfesores.filter(function (item) {
            return item.toLowerCase().includes(value.toLowerCase());
          });
          return _toConsumableArray(filter);
        }
      }, {
        key: "seleccionarUnAlumno",
        value: function seleccionarUnAlumno() {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hay que seleccionar un alumno como minimo',
            timer: 3000,
            timerProgressBar: true
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }]);

      return EditarClaseComponent;
    }();

    EditarClaseComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarClaseComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarClaseComponent.prototype, "editarActividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], EditarClaseComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], EditarClaseComponent.prototype, "sort", void 0);
    EditarClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-clase/editar-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar-clase.component.css */
      "./src/app/profesor/editar-clase/editar-clase.component.css")).default]
    })], EditarClaseComponent);
    /***/
  },

  /***/
  "./src/app/profesor/editar-profesor/editar-profesor.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/profesor/editar-profesor/editar-profesor.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorEditarProfesorEditarProfesorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL2VkaXRhci1wcm9mZXNvci9lZGl0YXItcHJvZmVzb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profesor/editar-profesor/editar-profesor.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/profesor/editar-profesor/editar-profesor.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EditarProfesorComponent */

  /***/
  function srcAppProfesorEditarProfesorEditarProfesorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarProfesorComponent", function () {
      return EditarProfesorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var EditarProfesorComponent =
    /*#__PURE__*/
    function () {
      function EditarProfesorComponent(pComponente, _formBuilder) {
        _classCallCheck(this, EditarProfesorComponent);

        this.pComponente = pComponente;
        this._formBuilder = _formBuilder;
        this.submitted = false;
      }

      _createClass(EditarProfesorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreProfesor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.pComponente.cerrarModal();
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.editarProfesor.nombre = '';
          this.editarProfesor.apellidos = '';
          this.editarProfesor.departamento = '';
        }
      }, {
        key: "guardar",
        value: function guardar() {
          this.pComponente.actualizarP(this.editarProfesor);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          } else {
            this.guardar();
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }]);

      return EditarProfesorComponent;
    }();

    EditarProfesorComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_2__["ProfesorComponent"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarProfesorComponent.prototype, "editarProfesor", void 0);
    EditarProfesorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-profesor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar-profesor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-profesor/editar-profesor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar-profesor.component.css */
      "./src/app/profesor/editar-profesor/editar-profesor.component.css")).default]
    })], EditarProfesorComponent);
    /***/
  },

  /***/
  "./src/app/profesor/mensaje/mensaje.component.css":
  /*!********************************************************!*\
    !*** ./src/app/profesor/mensaje/mensaje.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorMensajeMensajeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL21lbnNhamUvbWVuc2FqZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profesor/mensaje/mensaje.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/profesor/mensaje/mensaje.component.ts ***!
    \*******************************************************/

  /*! exports provided: MensajeComponent */

  /***/
  function srcAppProfesorMensajeMensajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajeComponent", function () {
      return MensajeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var MensajeComponent =
    /*#__PURE__*/
    function () {
      function MensajeComponent(profesor) {
        _classCallCheck(this, MensajeComponent);

        this.profesor = profesor;
      }

      _createClass(MensajeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "abrirActividad",
        value: function abrirActividad() {//this.profesor.abrirUltimaActividad();
        }
      }]);

      return MensajeComponent;
    }();

    MensajeComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_2__["ProfesorComponent"]
      }];
    };

    MensajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mensaje',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mensaje.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/mensaje/mensaje.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mensaje.component.css */
      "./src/app/profesor/mensaje/mensaje.component.css")).default]
    })], MensajeComponent);
    /***/
  },

  /***/
  "./src/app/profesor/profesor.component.css":
  /*!*************************************************!*\
    !*** ./src/app/profesor/profesor.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorProfesorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The sidebar menu */\n\n.sidenav {\n  z-index: 1;\n  /* Stay on top */\n  top: auto;\n  bottom: 0px;\n  /* Stay at the top */\n  color: #4A7B9D;\n  /* Black */\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  height: 100%;\n  /* Esto lo mantendra en su sitio */\n  /*left: 0;*/\n}\n\n/* The navigation menu links */\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #ECFFB0;\n  display: block;\n}\n\n/* When you mouse over the navigation links, change their color */\n\n.sidenav a:hover {\n  color: #9AA899;\n}\n\n/* Style page content */\n\n.main {\n  margin-left: 160px;\n  /* Same as the width of the sidebar */\n  padding: 0px 10px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n    height: auto;\n  }\n  .sidenav a {\n    font-size: 18px;\n  }\n\n}\n\n.example-box {\n  width: 70px;\n  height: 70px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 0px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n.btn-circle {\n  width: 200px;\n  height: 200px;\n  padding: 6px 0px;\n  border-radius: 200px;\n  text-align: center;\n  font-size: 23px;\n  line-height: 1.42857;\n}\n\n.element-row {\n  cursor: pointer;\n}\n\n.element-row:hover {\n  background: #f5f5f5;\n}\n\n.boton-tabla{\n  width: 40px;\n}\n\n.seccion-edit:hover {\n  background-color: #fff;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvcHJvZmVzb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7O0FBRXJCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLGlFQUFpRTs7QUFFakU7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjs7QUFFQSxnSUFBZ0k7O0FBRWhJO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsK0dBQStHO0FBQ2pIOztBQUVBO0VBQ0UscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci9wcm9mZXNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIHNpZGViYXIgbWVudSAqL1xuXG4uc2lkZW5hdiB7XG4gIHotaW5kZXg6IDE7XG4gIC8qIFN0YXkgb24gdG9wICovXG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwcHg7XG4gIC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICBjb2xvcjogIzRBN0I5RDtcbiAgLyogQmxhY2sgKi9cbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRXN0byBsbyBtYW50ZW5kcmEgZW4gc3Ugc2l0aW8gKi9cbiAgLypsZWZ0OiAwOyovXG59XG5cbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI0VDRkZCMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICM5QUE4OTk7XG59XG5cbi8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xuXG4ubWFpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNjBweDtcbiAgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZWJhciAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuc2lkZW5hdiBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxufVxuXG4uZXhhbXBsZS1ib3gge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgY3Vyc29yOiBtb3ZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5leGFtcGxlLWJveDphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5leGFtcGxlLWJvdW5kYXJ5IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogZG90dGVkICNjY2MgMnB4O1xufVxuXG4jc25hY2tiYXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jc25hY2tiYXIuc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uYnRuLWNpcmNsZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1Nztcbn1cblxuLmVsZW1lbnQtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWxlbWVudC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4uYm90b24tdGFibGF7XG4gIHdpZHRoOiA0MHB4O1xufVxuLnNlY2Npb24tZWRpdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/profesor.component.ts":
  /*!************************************************!*\
    !*** ./src/app/profesor/profesor.component.ts ***!
    \************************************************/

  /*! exports provided: ProfesorComponent */

  /***/
  function srcAppProfesorProfesorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfesorComponent", function () {
      return ProfesorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _estudiante_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! .././estudiante.service */
    "./src/app/estudiante.service.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ver-actividad/ver-actividad.component */
    "./src/app/profesor/ver-actividad/ver-actividad.component.ts");
    /* harmony import */


    var _ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ver-clase/ver-clase.component */
    "./src/app/profesor/ver-clase/ver-clase.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProfesorComponent =
    /*#__PURE__*/
    function () {
      function ProfesorComponent(matDialog, estudiantes, _snackBar, component, _formBuilder, _formBuilder2) {
        _classCallCheck(this, ProfesorComponent);

        this.matDialog = matDialog;
        this.estudiantes = estudiantes;
        this._snackBar = _snackBar;
        this.component = component;
        this._formBuilder = _formBuilder;
        this._formBuilder2 = _formBuilder2;
        this.alumnoCreate = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
        this.iconUsuarios = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"];
        this.iconClases = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faChalkboardTeacher"];
        this.iconActividades = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faBookOpen"];
        this.iconHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHome"];
        this.actividadAbierta = false;
        this.editarAlumno = false;
        this.onSelectedAlumno = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
        this.listaAlumnos = [];
        this.crearActividad = false;
        this.editarActividad = false;
        this.ActividadparaEditar = null;
        this.vengoDeProfesor = true;
        this.listaActividades = [];
        this.alumnosConectados = [];
        this.posicionDelAlumnoConectado = null;
        this.verActividad = false;
        this.actividadSelected = null;
        this.gestionAlumnos = false;
        this.gestionActividades = false;
        this.gestionClases = false;
        this.gestionHome = true;
        this.gestionProfesores = false;
        this.crearProfesor = false;
        this.editarProfesor = false;
        this.listaClases = [];
        this.listaProfesores = [];
        this.crearClase = false;
        this.editarClase = false;
        this.verClase = false;
        this.ClaseparaEditar = null;
        this.ultimaActividadCreada = null;
        this.crearEstudiante = false;
        this.editarEstudiante = false;
        this.verEstadisticasA = false;
        this.verEstadisticasC = false;
        this.creandoActividadAsociada = false; //Tabla de estudiantes

        this.displayedColumnsEstudiantes = ['nombre', 'apellidos', 'clase', 'estadisticas', 'editarborrar']; //Tabla de actividades

        this.displayedColumnsActividades = ['nombre', 'profesor', 'clase', 'estado', 'acciones', 'editarborrar']; //Tabla de clases

        this.displayedColumnsClases = ['nombre', 'profesor', 'accion1', 'accion2', 'accion3', 'editarborrar']; //Tabla de clases

        this.displayedColumnsProfesores = ['nombre', 'apellidos', 'departamento', 'accion1', 'editarborrar'];
        this.submitted = false;
        this.submitted2 = false;

        this.soyProfesor = function () {
          this.socket.emit('soyProfesor');
        };

        this.abroActividad = function (actividad) {
          this.socket.emit('abrirActividad', actividad);
        };

        this.crearActividadLista = function (actividad) {
          this.socket.emit('crearActividadLista', actividad); //console.log("Actividad: " + actividad._id + " está lista.");
        };

        this.borrarActividadLista = function (actividad) {
          this.socket.emit('borrarActividadLista', actividad); //console.log("Actividad: " + actividad._id + " YA NO está lista.");
        };

        this.listoParaRecibirDatos = function (actividad) {
          this.socket.emit('listoParaRecibirDatos', actividad);
          this.socket.emit('modificacionDeActividad', actividad);
        };

        this.listoParaNoRecibirDatos = function (actividad) {
          this.socket.emit('listoParaNoRecibirDatos', actividad);
          this.socket.emit('modificacionDeActividad', actividad);
        };

        this.empezarActividad = function (actividad) {
          this.socket.emit('empezarActividad', actividad);
          this.socket.emit('crearActividadLista', actividad);
        };

        this.terminarActividad = function (actividad) {
          this.socket.emit('terminarActividad', actividad);
          this.socket.emit('borrarActividadLista', actividad);
        };

        this.conectarWebCam = function (estudiante) {
          this.socket.emit('conectarWebCam', estudiante);
        };

        this.conectarLed = function (estudiante) {
          this.socket.emit('conectarLed', estudiante);
        };

        this.conectarPulsera = function (estudiante) {
          this.socket.emit('conectarPulsera', estudiante);
        };

        this.desconectarWebCam = function (estudiante) {
          this.socket.emit('desconectarWebCam', estudiante);
        };

        this.desconectarLed = function (estudiante) {
          this.socket.emit('desconectarLed', estudiante);
        };

        this.desconectarPulsera = function (estudiante) {
          this.socket.emit('desconectarPulsera', estudiante);
        };

        this.enviarDatos = function (datos, actividad) {
          console.log("enviando datos");
          this.socket.emit('enviarDatosFicticios', datos, actividad);
        };

        this.lanzarSocketSrv = function () {
          var cli = this;
          this.socket.on('connect', function () {
            console.log("Conectado al servidor de WebSockets");
          });
          this.socket.on('actividadAnadida', function (res) {
            console.log("Se ha añadido una actividad a las listas: " + res._id);
          });
          this.socket.on('actividadBorrada', function (res) {
            console.log("Se ha borrado una actividad a las listas: " + res._id);
          });
          this.socket.on('seHaConectado', function (res) {
            if (!cli.esta(res)) {
              cli.alumnosConectados.push(res);
              cli.verActividadComp.usuarioConectado(res);
            }
          });
          this.socket.on('seHaDesconectado', function (res) {
            if (cli.esta(res)) {
              cli.alumnosConectados.splice(cli.posicionDelAlumnoConectado, 1);
              cli.verActividadComp.usuarioDesconectado(res);
            }
          });
          this.socket.on('recepcionDatos', function (datos) {
            console.log(datos);
            $('#' + datos.id_item + '').css("background-color", datos.color);
            cli.agregarDatosActividad(datos); //console.log(datos.pulsaciones);
          });
          this.socket.on('actividadEmpezada', function (res) {
            cli.actividadEmpezada(res);
          });
          this.socket.on('actividadTerminada', function (res) {
            cli.actividadTerminada(res);
          });
          this.socket.on('webCamConectada', function (estudiante) {
            cli.verActividadComp.webCamActivada(estudiante);
          });
          this.socket.on('pulseraConectada', function (estudiante) {
            cli.verActividadComp.pulseraActivada(estudiante);
          });
          this.socket.on('ledConectada', function (estudiante) {
            cli.verActividadComp.ledActivado(estudiante);
          });
          this.socket.on('webCamDesonectada', function (estudiante) {
            cli.verActividadComp.webCamDesconectada(estudiante);
          });
          this.socket.on('pulseraDesonectada', function (estudiante) {
            cli.verActividadComp.pulseraDesconectada(estudiante);
          });
          this.socket.on('ledDesonectada', function (estudiante) {
            cli.verActividadComp.ledDesconectada(estudiante);
          });
          /*
          this.socket.on('partidaCreada',function(partida){
              console.log("partida creada:",partida);
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('partidas',function(partidas){
              mostrarListaPartidas(partidas);
          });
          this.socket.on('unido',function(partida){
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('nuevoJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('saliste',function(){
              mostrarCrearPartida(cli.nick);
              borrarCanvas();
          });
          this.socket.on('saleJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('otropreparado',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('aJugar',function(data){
              cli.jugador=data.jugadores[cli.nick];
              cli.rival=cli.obtenerRival(data.jugadores);
              mostrarCanvas(data.numJugadores);
          });
          this.socket.on('anotado',function(){ //function(resultados)
              //mostrarListaResultados(resultados)
              console.log("Resultado anotado");
          });
          this.socket.on('finPartida',function(){
              console.log("Fin de la partida");
              alert("Fin de la partida");
              cli.salir();
          });
          this.socket.on("sigueVivo",function(){
              console.log("sigue vivo");
              cli.spriteLocal.volverAInicio();
          });
          this.socket.on("mover",function(operacion,posicion){
              if (cli.spriteRival){
                  cli.spriteRival.mover(operacion,posicion);
              }
          });*/
        };
      }

      _createClass(ProfesorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            var ju;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    this.datosPrimarios = this._formBuilder.group({
                      fromControlNombreEstudiante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
                      fromControlEmailEstudiante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
                      fromControlContrasenaEstudiante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
                    });
                    this.datosPrimarios2 = this._formBuilder2.group({
                      fromControlNombreEstudiante2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
                      fromControlEmailEstudiante2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
                      fromControlContrasenaEstudiante2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]
                    }); //this.socket = new ClienteWS('profesor');
                    //this.socket.ini();

                    this.ini(); ///

                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                      ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
                      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                      ju.dataSourceEstudiantes.sort = ju.sortE;
                    });
                    $.getJSON("/verActividades", function (data) {
                      //console.log(data);
                      ju.listaActividades = data;
                      ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades.reverse());
                      ju.dataSourceActividades.paginator = ju.paginatorA;
                      ju.dataSourceActividades.sort = ju.sortA;
                      console.log(ju.listaActividades);
                    });
                    $.getJSON("/verClases", function (data) {
                      //console.log(data);
                      ju.listaClases = data;
                      ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases.reverse());
                      ju.dataSourceClases.paginator = ju.paginatorC;
                      ju.dataSourceClases.sort = ju.sortC;
                    });
                    $.getJSON("/verProfesores", function (data) {
                      //console.log(data);
                      ju.listaProfesores = data; //console.log(ju.listaProfesores);

                      ju.dataSourceProfesores = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaProfesores.reverse());
                      ju.dataSourceProfesores.paginator = ju.paginatorP;
                      ju.dataSourceProfesores.sort = ju.sortP;
                    }); //console.log(this.listaAlumnos);

                  case 8:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
        /*ngOnChanges() {
          this.dataSourceEstudiantes = new MatTableDataSource(this.listaAlumnos);
        }*/

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            var ju;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context31.next = 3;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                      ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
                      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                      ju.dataSourceEstudiantes.sort = ju.sortE;
                    });

                  case 3:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "applyFilterE",
        value: function applyFilterE(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceEstudiantes.filter = filterValue;
        }
      }, {
        key: "applyFilterC",
        value: function applyFilterC(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceClases.filter = filterValue;
        }
      }, {
        key: "applyFilterA",
        value: function applyFilterA(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceActividades.filter = filterValue;
        }
      }, {
        key: "applyFilterP",
        value: function applyFilterP(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceProfesores.filter = filterValue;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios.invalid) {
            return;
          } else {
            this.anadirAlumno();
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.datosPrimarios.reset();
        } //anadirAlumno(nombre:string,apellidos:string,clase:string,email:string,contrasena:string) {

      }, {
        key: "anadirAlumno",
        value: function anadirAlumno() {
          //this.listaAlumnos.push(new Alumno(this.alumnoCreate.nombre, this.alumnoCreate.apellidos, this.alumnoCreate.clase, this.alumnoCreate.email, this.alumnoCreate.contrasena));
          var ju = this; //console.log(this.listaAlumnos);

          $.ajax({
            type: 'POST',
            url: '/registrarEstudiante',
            data: JSON.stringify(this.alumnoCreate),
            success: function success(data) {
              //console.log(data);
              //ju.alumnoCreate._id = data._id;
              //ju.listaAlumnos.push(this.alumnoCreate);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Alumno '" + ju.alumnoCreate.nombre + "' creado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
              });
              $.getJSON("/verEstudiantes", function (data) {
                //console.log(data);
                ju.listaAlumnos = data;
                ju.limpiar();
                ju.editarAlumno = false;
                console.log(ju.listaAlumnos);
                ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
              });
              ju.crearEstudiante = false;
            },
            contentType: 'application/json',
            dataType: 'json'
          });
          /*ju.listaAlumnos.push(this.alumnoCreate);
          ju.limpiar();
          ju.editarAlumno = false;*/
        }
      }, {
        key: "onSubmit2",
        value: function onSubmit2() {
          this.submitted = true; // stop here if form is invalid

          if (this.datosPrimarios2.invalid) {
            return;
          } else {
            this.actualizarAlumno();
          }
        }
      }, {
        key: "onReset2",
        value: function onReset2() {
          this.submitted = false;
          this.datosPrimarios2.reset();
        }
      }, {
        key: "actualizarAlumno",
        value: function actualizarAlumno() {
          var ju = this;
          $.ajax({
            type: 'PUT',
            url: '/actualizarEstudiante',
            data: JSON.stringify(ju.onSelectedAlumno),
            success: function success(data) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Alumno '" + ju.onSelectedAlumno.nombre + "' editado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
              });
              $.getJSON("/verEstudiantes", function (data) {
                ju.listaAlumnos = data;
                ju.limpiar();
                ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
                ju.editarAlumno = false;
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "verEstadisticasAlumno",
        value: function verEstadisticasAlumno(alumno) {
          this.verEstadisticasA = true;
          this.verAlumno = alumno;
          this.ponerArriba();
        }
      }, {
        key: "cerrarEstadisticasAlumno",
        value: function cerrarEstadisticasAlumno() {
          this.verEstadisticasA = false;
          this.verAlumno = null;
        }
      }, {
        key: "verEstadisticasClase",
        value: function verEstadisticasClase(clase) {
          this.verEstadisticasC = true;
          this.objClaseEstadisticas = clase;
          this.ponerArriba();
        }
      }, {
        key: "cerrarEstadisticasClase",
        value: function cerrarEstadisticasClase() {
          this.verEstadisticasC = false;
          this.objClaseEstadisticas = null;
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          if (this.editarAlumno) {
            this.onSelectedAlumno = {
              _id: '',
              nombre: '',
              apellidos: '',
              clase: '',
              email: '',
              contrasena: ''
            };
          } else {
            this.alumnoCreate = {
              _id: '',
              nombre: '',
              apellidos: '',
              clase: '',
              email: '',
              contrasena: ''
            };
          }
        }
      }, {
        key: "editar",
        value: function editar(item) {
          this.editarAlumno = true;
          this.onSelectedAlumno = item;
        }
      }, {
        key: "borrar",
        value: function borrar(item) {
          var ju = this;
          Swal.fire({
            title: '¿Estas seguro?',
            text: "El alumno '" + item.nombre + "' se eliminará",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, deseo borrarlo'
          }).then(function (result) {
            if (result.value) {
              Swal.fire('Borrado!', "El alumno '" + item.nombre + "' se ha borrado.", 'success', $.ajax({
                type: 'DELETE',
                url: '/eliminarEstudiante',
                data: JSON.stringify(item),
                success: function success(data) {
                  console.log("Estudiante eliminado");
                  $.getJSON("/verEstudiantes", function (data) {
                    ju.listaAlumnos = data;
                    ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
                    ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                    ju.dataSourceEstudiantes.sort = ju.sortE;
                  });
                },
                contentType: 'application/json',
                dataType: 'json'
              }));
            }
          });
          /*$.ajax({
            type: 'DELETE',
            url: '/eliminarEstudiante',
            data: JSON.stringify(item),
            success: function (data) {
              console.log("Estudiante eliminado");
              $.getJSON("/verEstudiantes", function (data) {
                ju.listaAlumnos = data;
                ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          });*/
        }
      }, {
        key: "abrirActividadActual",
        value: function abrirActividadActual() {
          //this.actividadAbierta = true;
          this.gestionHome = true;
          this.gestionActividades = false;
          this.gestionAlumnos = false;
          this.gestionClases = false;
          this.gestionProfesores = false;
        }
      }, {
        key: "abrirAlumnos",
        value: function abrirAlumnos() {
          var ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

          $.getJSON("/verEstudiantes", function (data) {
            //console.log(data);
            ju.listaAlumnos = data;
            ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
            ju.dataSourceEstudiantes.paginator = ju.paginatorE;
            ju.dataSourceEstudiantes.sort = ju.sortE;
          });
          this.gestionHome = false;
          this.gestionActividades = false;
          this.gestionAlumnos = true;
          this.verEstadisticasA = false;
          this.crearEstudiante = false;
          this.editarAlumno = false;
          this.gestionClases = false;
          this.crearProfesor = false;
          this.editarProfesor = false;
          this.gestionProfesores = false;
        }
      }, {
        key: "abrirActividades",
        value: function abrirActividades() {
          var ju = this;

          try {
            $.getJSON("/verActividades", function (data) {
              //console.log(data);
              ju.listaActividades = data;
              ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades.reverse());
              ju.dataSourceActividades.paginator = ju.paginatorA;
              ju.dataSourceActividades.sort = ju.sortA; //console.log("Actividades Cargadas");
            });
          } catch (e) {}

          this.gestionHome = false;
          this.gestionActividades = true;
          this.crearActividad = false;
          this.editarActividad = false;
          this.gestionAlumnos = false;
          this.gestionClases = false;
          this.crearProfesor = false;
          this.editarProfesor = false;
          this.gestionProfesores = false; //this.openDialog()
        }
      }, {
        key: "abrirCrearEstudiantes",
        value: function abrirCrearEstudiantes() {
          this.editarAlumno = false;
          this.crearEstudiante = true;
        }
      }, {
        key: "cerrarCrearEstudiantes",
        value: function cerrarCrearEstudiantes() {
          this.editarAlumno = false;
          this.crearEstudiante = false;
        }
      }, {
        key: "abrirClases",
        value: function abrirClases() {
          var ju = this;

          try {
            $.getJSON("/verClases", function (data) {
              //console.log(data);
              ju.listaClases = data;
              ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases.reverse());
              ju.dataSourceClases.paginator = ju.paginatorC;
              ju.dataSourceClases.sort = ju.sortC;
            });
          } catch (e) {}

          this.verClase = false;
          /*this.gestionClases = true;
          this.gestionAlumnos = false;
          this.verActividad = false;
          this.gestionActividades = false;*/

          this.gestionHome = false;
          this.gestionActividades = false;
          this.gestionAlumnos = false;
          this.gestionClases = true;
          this.crearClase = false;
          this.editarClase = false;
          this.verEstadisticasC = false;
          this.gestionProfesores = false;
          this.crearProfesor = false;
          this.editarProfesor = false;
        }
      }, {
        key: "abrirClase",
        value: function abrirClase(clase) {
          this.claseSelected = clase;
          this.verClase = true;
          this.ponerArriba();
        }
      }, {
        key: "abrirProfesores",
        value: function abrirProfesores() {
          var ju = this;

          try {
            $.getJSON("/verProfesores", function (data) {
              //console.log(data);
              ju.listaProfesores = data;
              ju.dataSourceProfesores = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaProfesores.reverse());
              ju.dataSourceProfesores.paginator = ju.paginatorP;
              ju.dataSourceProfesores.sort = ju.sortP;
            });
          } catch (e) {}

          this.verClase = false;
          /*this.gestionClases = true;
          this.gestionAlumnos = false;
          this.verActividad = false;
          this.gestionActividades = false;*/

          this.gestionHome = false;
          this.gestionActividades = false;
          this.gestionAlumnos = false;
          this.gestionClases = false;
          this.crearClase = false;
          this.editarClase = false;
          this.verEstadisticasC = false;
          this.crearProfesor = false;
          this.editarProfesor = false;
          this.gestionProfesores = true;
        }
      }, {
        key: "editarP",
        value: function editarP(profesor) {
          this.editarProfesor = true;
          this.ProfesorparaEditar = profesor;
        }
      }, {
        key: "guardarP",
        value: function guardarP(profesor) {
          var ju = this;
          $.ajax({
            type: 'POST',
            url: '/registrarProfesor',
            data: JSON.stringify(profesor),
            success: function success(data) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Profesor '" + profesor.nombre + "' creado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
              });
              ju.crearProfesor = false;
              $.getJSON("/verProfesores", function (data) {
                //console.log(data);
                ju.listaProfesores = data;
                ju.dataSourceProfesores = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaProfesores.reverse());
                ju.dataSourceProfesores.paginator = ju.paginatorP;
                ju.dataSourceProfesores.sort = ju.sortP;
              }); //ju.menActividadCreada();
              //ju.listaActividades.push(actividad);
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "actualizarP",
        value: function actualizarP(profesor) {
          var ju = this;
          $.ajax({
            type: 'POST',
            url: '/actualizarProfesor',
            data: JSON.stringify(profesor),
            success: function success(data) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Profesor '" + profesor.nombre + "' actualizado",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
              });
              ju.editarProfesor = false;
              $.getJSON("/verProfesores", function (data) {
                //console.log(data);
                ju.listaProfesores = data;
                ju.dataSourceProfesores = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaProfesores.reverse());
                ju.dataSourceProfesores.paginator = ju.paginatorP;
                ju.dataSourceProfesores.sort = ju.sortP;
              }); //ju.menActividadCreada();
              //ju.listaActividades.push(actividad);
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "borrarP",
        value: function borrarP(profesor) {
          var ju = this;
          Swal.fire({
            title: '¿Estas seguro?',
            text: "El profesor '" + profesor.nombre + "' se eliminará",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, deseo borrarlo'
          }).then(function (result) {
            if (result.value) {
              Swal.fire('Borrado!', "El profesor " + profesor.nombre + "' se ha borrado.", 'success', $.ajax({
                type: 'DELETE',
                url: '/eliminarProfesor',
                data: JSON.stringify(profesor),
                success: function success(data) {
                  console.log("Profesor eliminado");
                  $.getJSON("/verProfesores", function (data) {
                    //console.log(data);
                    ju.listaProfesores = data;
                    ju.dataSourceProfesores = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaProfesores.reverse());
                    ju.dataSourceProfesores.paginator = ju.paginatorP;
                    ju.dataSourceProfesores.sort = ju.sortP;
                  });
                },
                contentType: 'application/json',
                dataType: 'json'
              }));
            }
          });
        }
      }, {
        key: "abrirCrearActividad",
        value: function abrirCrearActividad() {
          this.crearActividad = true;
        }
      }, {
        key: "abrirCrearProfesor",
        value: function abrirCrearProfesor() {
          this.crearProfesor = true;
        }
      }, {
        key: "abrirCrearClase",
        value: function abrirCrearClase() {
          this.crearClase = true;
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            var ju;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    this.crearActividad = false;
                    this.crearClase = false;
                    this.editarActividad = false;
                    this.editarClase = false;
                    this.editarProfesor = false;
                    this.crearProfesor = false;
                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context32.next = 9;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                      ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos.reverse());
                      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                      ju.dataSourceEstudiantes.sort = ju.sortE;
                    });

                  case 9:
                    _context32.next = 11;
                    return $.getJSON("/verActividades", function (data) {
                      //console.log(data);
                      ju.listaActividades = data;
                      ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades.reverse());
                      ju.dataSourceActividades.paginator = ju.paginatorA;
                      ju.dataSourceActividades.sort = ju.sortA;
                    });

                  case 11:
                    _context32.next = 13;
                    return $.getJSON("/verClases", function (data) {
                      //console.log(data);
                      ju.listaClases = data;
                      ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases.reverse());
                      ju.dataSourceClases.paginator = ju.paginatorC;
                      ju.dataSourceClases.sort = ju.sortC;
                    });

                  case 13:
                    _context32.next = 15;
                    return $.getJSON("/verProfesores", function (data) {
                      //console.log(data);
                      ju.listaProfesores = data;
                      ju.dataSourceProfesores = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaProfesores.reverse());
                      ju.dataSourceProfesores.paginator = ju.paginatorP;
                      ju.dataSourceProfesores.sort = ju.sortP;
                    });

                  case 15:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }, {
        key: "guardarActividad",
        value: function guardarActividad(actividad) {
          //this.actividadCreada = actividad;
          var ju = this; //console.log(actividad);

          $.ajax({
            type: 'POST',
            url: '/registrarActividad',
            data: JSON.stringify(actividad),
            success: function success(data) {
              ju.ultimaActividadCreada = data;
              /*$.getJSON("/verEstudiantes", function (data) {
                //console.log(data);
                ju.listaAlumnos = data;
                ju.limpiar();
                ju.editarAlumno = false;
                console.log(ju.listaAlumnos);
              });*/

              $.getJSON("/verActividades", function (dataa) {
                //console.log(data);
                ju.listaActividades = dataa;
                ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades.reverse());
                ju.dataSourceActividades.paginator = ju.paginatorA;
                ju.dataSourceActividades.sort = ju.sortA;
                ju.crearActividad = false;
                console.log(ju.listaActividades);
              });
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Actividad '" + data.nombre + "' creada",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No entrar.',
                confirmButtonText: 'Entrar en la actividad',
                timer: 4000,
                timerProgressBar: true
              }).then(function (result) {
                if (result.value) {
                  ju.gestionClases = false;
                  ju.gestionActividades = true;
                  ju.crearClase = false;
                  ju.editarClase = false;
                  ju.verClase = false;
                  ju.abrirActividad(data);
                }
              }); //ju.menActividadCreada();
              //ju.listaActividades.push(actividad);
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "actualizarActividad",
        value: function actualizarActividad(actividad) {
          var ju = this;
          console.log(actividad);
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(actividad),
            success: function success(data) {
              //this.actividad=data;
              //ju.ultimaActividadCreada = data;
              $.getJSON("/verActividades", function (dataa) {
                //console.log(data);
                ju.listaActividades = dataa;
                ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades.reverse());
                ju.dataSourceActividades.paginator = ju.paginatorA;
                ju.dataSourceActividades.sort = ju.sortA;
                ju.editarActividad = false;
                console.log(ju.listaActividades);
              });
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Actividad '" + data.nombre + "' editada",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No entrar.',
                confirmButtonText: 'Entrar en la actividad',
                timer: 4000,
                timerProgressBar: true
              }).then(function (result) {
                if (result.value) {
                  ju.gestionClases = false;
                  ju.gestionActividades = true;
                  ju.crearClase = false;
                  ju.editarClase = false;
                  ju.verClase = false;
                  ju.abrirActividad(data);
                }
              }); //ju.menActividadEditada();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "actualizarClases",
        value: function actualizarClases(clase, editada) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            var ju;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    this.crearClase = false;
                    this.editarClase = false;
                    ju = this;

                    if (clase != null) {
                      if (editada) {
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Clase '" + clase.nombre + "' editada",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        });
                      } else {
                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Clase '" + clase.nombre + "' creada",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        });
                      }
                    }

                    $.getJSON("/verClases", function (data) {
                      //console.log(data);
                      ju.listaClases = data;
                      ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases.reverse());
                      ju.dataSourceClases.paginator = ju.paginatorC;
                      ju.dataSourceClases.sort = ju.sortC;
                    });

                  case 5:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "editarA",
        value: function editarA(act) {
          this.editarActividad = true;
          this.ActividadparaEditar = act;
          this.vengoDeProfesor = true;
        }
      }, {
        key: "editarC",
        value: function editarC(clase) {
          this.editarClase = true;
          this.ClaseparaEditar = clase;
        }
      }, {
        key: "agregarDatosActividad",
        value: function agregarDatosActividad(datos) {
          this.verActividadComp.insertarDatos(datos); //this.actividadSelected.alumnos
        }
      }, {
        key: "borrarA",
        value: function borrarA(act) {
          var ju = this;
          Swal.fire({
            title: '¿Estas seguro?',
            text: "La actividad '" + act.nombre + "' se eliminará",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, deseo borrarlo'
          }).then(function (result) {
            if (result.value) {
              Swal.fire('Borrado!', "La actividad " + act.nombre + "' se ha borrado.", 'success', $.ajax({
                type: 'DELETE',
                url: '/eliminarActividad',
                data: JSON.stringify(act),
                success: function success(data) {
                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee34() {
                    return regeneratorRuntime.wrap(function _callee34$(_context34) {
                      while (1) {
                        switch (_context34.prev = _context34.next) {
                          case 0:
                            console.log("Actividad eliminado");
                            _context34.next = 3;
                            return $.getJSON("/verActividades", function (data) {
                              ju.listaActividades = data;
                              ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades.reverse());
                              ju.dataSourceActividades.paginator = ju.paginatorA;
                              ju.dataSourceActividades.sort = ju.sortA; //ju.menActividadBorrada();
                            });

                          case 3:
                          case "end":
                            return _context34.stop();
                        }
                      }
                    }, _callee34);
                  }));
                },
                contentType: 'application/json',
                dataType: 'json'
              }));
            }
          });
        }
      }, {
        key: "borrarC",
        value: function borrarC(clase) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee35() {
            var ju;
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    ju = this;
                    Swal.fire({
                      title: '¿Estas seguro?',
                      text: "La clase '" + clase.nombre + "' se eliminará",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      cancelButtonText: 'Cancelar',
                      confirmButtonText: 'Si, deseo borrarlo'
                    }).then(function (result) {
                      if (result.value) {
                        Swal.fire('Borrado!', "La clase '" + clase.nombre + "' se ha borrado.", 'success', $.ajax({
                          type: 'DELETE',
                          url: '/eliminarClase',
                          data: JSON.stringify(clase),
                          success: function success(data) {
                            console.log(data);
                            console.log("Clase eliminada");
                            /*$.getJSON("/verClases", function (data) {
                              //console.log(data);
                              ju.listaClases = data;
                            });*/

                            ju.actualizarClases(null, null);
                          },
                          contentType: 'application/json',
                          dataType: 'json'
                        }));
                      }
                    });

                  case 2:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "abrirActividad",
        value: function abrirActividad(actividad) {
          this.actividadAbierta = true;
          this.component.activarActividadActual();
          this.verActividad = true;
          this.actividadSelected = actividad;
          this.crearActividadLista(actividad);
          this.abroActividad(actividad);
          this.abrirActividadActual();
          this.ponerArriba();
        }
      }, {
        key: "ponerArriba",
        value: function ponerArriba() {
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }, {
        key: "cerrarActividad",
        value: function cerrarActividad(cerrar) {
          //console.log(this.actividadSelected);
          this.actividadAbierta = false;
          this.component.desactivarActividadActual(); //this.socket.emit('listoParaNoRecibirDatos', this.actividadSelected);
          //

          if (this.actividadSelected.estado == "Creada") {
            this.borrarActividadLista(this.actividadSelected);
          }

          this.verActividad = false;
          this.actividadSelected = null;
          this.claseSelected = null;
          this.ponerArriba(); //this.alumnosConectados.length=0
          //this.alumnosConectados = [];
        }
      }, {
        key: "cerrarClase",
        value: function cerrarClase() {
          this.verClase = false;
          this.actualizarClases(null, null);
        }
      }, {
        key: "esta",
        value: function esta(estudiante) {
          for (var i = 0; i < this.alumnosConectados.length; i++) {
            if (this.alumnosConectados[i]._id == estudiante._id) {
              this.posicionDelAlumnoConectado = i;
              return true;
            }
          }

          return false;
        }
      }, {
        key: "crearActividadAsociada",
        value: function crearActividadAsociada(clase) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee36() {
            var ju, actividadCreate, num, i, arrayAlumnos, _i4;

            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    this.creandoActividadAsociada = true;
                    ju = this;
                    actividadCreate = {
                      nombre: '',
                      profesor: '',
                      fecha: '',
                      alumnos: [],
                      estado: 'Creada',
                      resumen: {
                        alegria: [],
                        asco: [],
                        miedo: [],
                        sorpresa: [],
                        tristeza: [],
                        ira: [],
                        pulsaciones: [],
                        tiempo: [],
                        distraido: [],
                        concentrado: [],
                        frustrado: [],
                        motivado: []
                      },
                      clase: {
                        _id: clase._id,
                        nombre: clase.nombre
                      }
                    };
                    num = 0;

                    for (i in clase.actividades) {
                      num++;
                    }

                    num++;
                    actividadCreate.nombre = clase.nombre + ' ' + num;
                    actividadCreate.profesor = clase.profesor;
                    actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_7__().format('LLLL');
                    arrayAlumnos = [];

                    for (_i4 = 0; _i4 < clase.alumnos.length; _i4++) {
                      arrayAlumnos.push({
                        estudiante: clase.alumnos[_i4].estudiante,
                        id_item: '',
                        posicion: clase.alumnos[_i4].posicion,
                        sensorWebCam: clase.alumnos[_i4].sensorWebCam,
                        sensorPulsera: clase.alumnos[_i4].sensorPulsera,
                        sensorLed: clase.alumnos[_i4].sensorLed,
                        datos: {
                          alegria: [],
                          asco: [],
                          miedo: [],
                          sorpresa: [],
                          tristeza: [],
                          ira: [],
                          pulsaciones: [],
                          tiempo: [],
                          distraido: [],
                          concentrado: [],
                          frustrado: [],
                          motivado: []
                        }
                      });
                    }

                    actividadCreate.alumnos = arrayAlumnos;
                    _context36.next = 14;
                    return $.ajax({
                      type: 'POST',
                      url: '/agregarActividadEnClase',
                      data: JSON.stringify({
                        clase: clase,
                        act: actividadCreate
                      }),
                      success: function success(data) {
                        //ju.clase=data;
                        ju.ultimaActividadCreada = data;
                        console.log("Clase Creada");
                        console.log(data); //
                        //ju.actualizar();
                        //ju.menActividadCreada();

                        Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: "Actividad '" + data.nombre + "' editada",
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          cancelButtonText: 'No entrar.',
                          confirmButtonText: 'Entrar en la actividad',
                          timer: 4000,
                          timerProgressBar: true
                        }).then(function (result) {
                          if (result.value) {
                            ju.gestionClases = false;
                            ju.gestionActividades = true;
                            ju.crearClase = false;
                            ju.editarClase = false;
                            ju.verClase = false;
                            ju.abrirActividad(data);
                          }
                        });
                        /*$.getJSON("/verClases", function (data) {
                          //console.log(data);
                          ju.listaClases = data;
                          ju.dataSourceClases = new MatTableDataSource(ju.listaClases);
                          ju.dataSourceClases.paginator = ju.paginatorC;
                          ju.dataSourceClases.sort = ju.sortC;
                        });*/
                        //abrirActividad

                        ju.creandoActividadAsociada = false;
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 14:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }, {
        key: "menActividadCreada",
        value: function menActividadCreada() {
          var _this14 = this;

          var men = this._snackBar.open('Actividad Creada', 'Abrir', {
            duration: 5000
          });

          men.onAction().subscribe(function () {
            _this14.gestionClases = false;
            _this14.gestionActividades = true;
            _this14.crearClase = false;
            _this14.editarClase = false;
            _this14.verClase = false;

            _this14.abrirActividad(_this14.ultimaActividadCreada);
          });
        }
      }, {
        key: "menActividadEditada",
        value: function menActividadEditada() {
          var _this15 = this;

          var men = this._snackBar.open('Actividad Editada', 'Abrir', {
            duration: 5000
          });

          men.onAction().subscribe(function () {
            _this15.gestionClases = false;
            _this15.gestionActividades = true;
            _this15.crearClase = false;
            _this15.editarClase = false;
            _this15.verClase = false;

            _this15.abrirActividad(_this15.ultimaActividadCreada);
          });
        }
      }, {
        key: "menActividadBorrada",
        value: function menActividadBorrada() {
          var men = this._snackBar.open('Actividad Borrada', 'Cerrar', {
            duration: 1000
          });
        }
      }, {
        key: "actividadEmpezada",
        value: function actividadEmpezada(actividad) {
          this.verActividadComp.actividadEmpezada(actividad);
        }
      }, {
        key: "actividadTerminada",
        value: function actividadTerminada(actividad) {
          this.verActividadComp.actividadTerminada(actividad);
        }
      }, {
        key: "salir",
        value: function salir() {
          this.component.salir();
        } //Gestion de los WebSockets

      }, {
        key: "ini",
        value: function ini() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["connect"]();
          this.lanzarSocketSrv();
          this.soyProfesor();
        }
      }, {
        key: "f",
        get: function get() {
          return this.datosPrimarios.controls;
        }
      }, {
        key: "f2",
        get: function get() {
          return this.datosPrimarios2.controls;
        }
      }]);

      return ProfesorComponent;
    }();

    ProfesorComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _estudiante_service__WEBPACK_IMPORTED_MODULE_3__["EstudianteService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_5__["VerActividadComponent"], {
      static: false
    })], ProfesorComponent.prototype, "verActividadComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_6__["VerClaseComponent"], {
      static: false
    })], ProfesorComponent.prototype, "verClaseComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorE", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortE", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorP", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortP", void 0);
    ProfesorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profesor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profesor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/profesor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profesor.component.css */
      "./src/app/profesor/profesor.component.css")).default]
    })], ProfesorComponent);
    /***/
  },

  /***/
  "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/profesor/sidenav-profesor/sidenav-profesor.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorSidenavProfesorSidenavProfesorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The sidebar menu */\n.sidenav {\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: 1; /* Stay on top */\n    top: auto; /* Stay at the top */\n    left: 0;\n    background-color: #4A7B9D; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n  }\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #ECFFB0;\n    display: block;\n  }\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #9AA899;\n  }\n/* Style page content */\n.main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3Ivc2lkZW5hdi1wcm9mZXNvci9zaWRlbmF2LXByb2Zlc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksWUFBWSxFQUFFLHVEQUF1RDtJQUNyRSxlQUFlLEVBQUUsNENBQTRDO0lBQzdELFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixPQUFPO0lBQ1AseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsaUJBQWlCO0VBQ25CO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7RUFDaEI7QUFFQSxpRUFBaUU7QUFDakU7SUFDRSxjQUFjO0VBQ2hCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0lBQ3pELGlCQUFpQjtFQUNuQjtBQUVBLGdJQUFnSTtBQUNoSTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci9zaWRlbmF2LXByb2Zlc29yL3NpZGVuYXYtcHJvZmVzb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcImF1dG9cIiBoZWlnaHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgdG9wOiBhdXRvOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTdCOUQ7IC8qIEJsYWNrICovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cbiAgLnNpZGVuYXYgYSB7XG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjRUNGRkIwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbiAgLnNpZGVuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICM5QUE4OTk7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xuICAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIFxuICAvKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGViYXIgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/profesor/sidenav-profesor/sidenav-profesor.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SidenavProfesorComponent */

  /***/
  function srcAppProfesorSidenavProfesorSidenavProfesorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavProfesorComponent", function () {
      return SidenavProfesorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidenavProfesorComponent =
    /*#__PURE__*/
    function () {
      function SidenavProfesorComponent() {
        _classCallCheck(this, SidenavProfesorComponent);

        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) {
          return h.test(window.location.host);
        });
      }

      _createClass(SidenavProfesorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidenavProfesorComponent;
    }();

    SidenavProfesorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidenav-profesor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav-profesor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/sidenav-profesor/sidenav-profesor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav-profesor.component.css */
      "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.css")).default]
    })], SidenavProfesorComponent);
    /***/
  },

  /***/
  "./src/app/profesor/ver-actividad/ver-actividad.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/profesor/ver-actividad/ver-actividad.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorVerActividadVerActividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-box {\n  width: 70px;\n  height: 70px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 0px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n\n.btn-circle2 {\n  width: 50px;\n  height: 50px;\n  padding: 6px 0px;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 15px;\n  line-height: 1.42857;\n}\n\n.item {\n  width: 80px;\n  height: 80px;\n  background-color:rgba(255, 255, 255, 0.267);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  z-index: 1;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvdmVyLWFjdGl2aWRhZC92ZXItYWN0aXZpZGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUN2RCwrR0FBK0c7QUFDakg7O0FBRUE7RUFDRSxxSEFBcUg7QUFDdkg7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci92ZXItYWN0aXZpZGFkL3Zlci1hY3RpdmlkYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmV4YW1wbGUtYm94OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmV4YW1wbGUtYm91bmRhcnkge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBkb3R0ZWQgI2NjYyAycHg7XG59XG5cbi5idG4tY2lyY2xlMiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1Nztcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNjcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/ver-actividad/ver-actividad.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/profesor/ver-actividad/ver-actividad.component.ts ***!
    \*******************************************************************/

  /*! exports provided: VerActividadComponent */

  /***/
  function srcAppProfesorVerActividadVerActividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerActividadComponent", function () {
      return VerActividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var heatmap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! heatmap.js */
    "./node_modules/heatmap.js/build/heatmap.js");
    /* harmony import */


    var heatmap_js__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(heatmap_js__WEBPACK_IMPORTED_MODULE_6__);

    var VerActividadComponent =
    /*#__PURE__*/
    function () {
      //@Input() usuariosConectadoss;
      //@Input() aluConectados: Estudiante[];
      //@ViewChild(ProfesorComponent,{static: false}) profesor:ProfesorComponent;
      function VerActividadComponent(profesor) {
        _classCallCheck(this, VerActividadComponent);

        this.profesor = profesor;
        this.aluConectados = [];
        this.estoyComputando = false;
        this.ColorSad = 'rgba(81,81,255,0.4)'; //Color de la tristeza Correcto

        this.alumnos = [];
        this.alumnosSelect = [];
        this.usuariosConectados = [];
        this.usuariosTotales = 0;
        this.porUsuariosConectados = 0;
        this.dataGrafConectados = [0, 0];
        this.numeroAlumnos = 0;
        this.numAlumnosConectados = 0;
        this.numAlumnosDesconectados = 0;
        this.numAlumnosTotales = 0;
        this.vistaGeneral = true;
        this.vistaMapaDeLaClase = false;
        this.evolucion = false;
        this.conectados = false;
        this.media = false;
        this.tablaAlumnos = false;
        this.actualizandoResumen = false;
        this.numSimulaciones = 0;
        this.estadoConjuntoSeleccionado = "Estado emocional";
        this.estadosConjunto = [{
          nombre: 'Estado emocional',
          estados: [{
            nombre: 'alegria',
            color: 'rgba(255,255,84,1)'
          }, {
            nombre: 'asco',
            color: 'rgba(0,0,0,0.5)'
          }, {
            nombre: 'miedo',
            color: 'rgba(0,150,0,1)'
          }, {
            nombre: 'sorpresa',
            color: 'rgba(89,189,255,1)'
          }, {
            nombre: 'tristeza',
            color: 'rgba(81,81,255,1)'
          }, {
            nombre: 'ira',
            color: 'rgba(255,0,0,1)'
          }]
        }, {
          nombre: 'Concentrado / Distraido',
          estados: [{
            nombre: 'distraido',
            color: 'rgba(70,70,70,1)'
          }, {
            nombre: 'concentrado',
            color: 'rgba(84,255,84,1)'
          }]
        }, {
          nombre: 'Motivado / Frustrado',
          estados: [{
            nombre: 'frustrado',
            color: 'rgba(123,123,123,1)'
          }, {
            nombre: 'motivado',
            color: 'rgba(84,25,80,1)'
          }]
        }];
        this.estadosConjunto2 = [{
          nombre: 'Estado emocional'
        }, {
          nombre: 'Concentrado / Distraido'
        }, {
          nombre: 'Motivado / Frustrado'
        }];
        this.estadosConjuntoSeleccionado = {
          nombre: "Estado emocional"
        };
        this.datofrustrado = false;
        this.datomotivado = false;
        this.datodistraido = false;
        this.datoconcentrado = false;
        this.datoAlegria = true;
        this.datoAsco = true;
        this.datoMiedo = true;
        this.datoSorpresa = true;
        this.datoTristeza = true;
        this.datoIra = true;
        this.estados = [{
          nombre: 'alegria',
          checked: true,
          color: [255, 255, 84]
        }, {
          nombre: 'asco',
          checked: false,
          color: [0, 0, 0]
        }, {
          nombre: 'miedo',
          checked: false,
          color: [0, 150, 0]
        }, {
          nombre: 'sorpresa',
          checked: false,
          color: [89, 189, 255]
        }, {
          nombre: 'tristeza',
          checked: false,
          color: [81, 81, 255]
        }, {
          nombre: 'ira',
          checked: false,
          color: [255, 0, 0]
        }, {
          nombre: 'pulsaciones',
          checked: false,
          color: [255, 0, 0]
        }, {
          nombre: 'distraido',
          checked: false,
          color: [70, 70, 70]
        }, {
          nombre: 'concentrado',
          checked: false,
          color: [84, 255, 84]
        }, {
          nombre: 'frustrado',
          checked: false,
          color: [123, 123, 123]
        }, {
          nombre: 'motivado',
          checked: false,
          color: [84, 25, 80]
        }];
        this.estadosGlobales = [{
          nombre: 'alegria',
          checked: true,
          color: 'rgba(255,255,84,1)'
        }, {
          nombre: 'asco',
          checked: true,
          color: 'rgba(0,0,0,0.5)'
        }, {
          nombre: 'miedo',
          checked: true,
          color: 'rgba(0,150,0,1)'
        }, {
          nombre: 'sorpresa',
          checked: true,
          color: 'rgba(89,189,255,1)'
        }, {
          nombre: 'tristeza',
          checked: true,
          color: 'rgba(81,81,255,1)'
        }, {
          nombre: 'ira',
          checked: true,
          color: 'rgba(255,0,0,1)'
        }, {
          nombre: 'distraido',
          checked: false,
          color: 'rgba(70,70,70,1)'
        }, {
          nombre: 'concentrado',
          checked: false,
          color: 'rgba(84,255,84,1)'
        }, {
          nombre: 'frustrado',
          checked: false,
          color: 'rgba(123,123,123,1)'
        }, {
          nombre: 'motivado',
          checked: false,
          color: 'rgba(84,25,80,1)'
        }];
        this.visualizaciones = [{
          nombre: 'Normal'
        }, {
          nombre: 'Mapa de Calor'
        }];
        this.visualizacionSelected = 'Normal';
        this.resumen = {
          alegria: 0,
          asco: 0,
          miedo: 0,
          sorpresa: 0,
          tristeza: 0,
          ira: 0,
          distraido: 0,
          concentrado: 0,
          frustrado: 0,
          motivado: 0,
          pulsaciones: 0
        };
        this.numPulsaciones = 0;
        this.estadoSeleccionado = 'Estado';
        this.alumnoSeleccionado = 'Media de la clase';
        this.alumnoSeleccionadoAlumno = false;
        this.objAlumnoSeleccionado = null;
        this.intervaloResumen = null;
        this.simulandoDatos = false; //alumnosConectados=0;

        this.alumnosDesconectados = 0; //Datos de las Graficas 

        this.graficaLineal = null;
        this.dataLinealesSeleccionados = null;
        this.configuracionGraficaLineal = {
          type: 'line',
          data: {
            datasets: [{
              label: this.estadoSeleccionado,
              backgroundColor: this.ColorSad,
              borderColor: this.ColorSad,
              fill: false,
              data: this.dataLinealesSeleccionados
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: this.estadoSeleccionado
            },
            legend: {
              position: 'bottom'
            },
            scales: {
              xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Tiempo'
                },
                ticks: {
                  major: {
                    fontStyle: 'bold',
                    fontColor: '#FF0000'
                  }
                }
              }],
              yAxes: [{
                label: 'Porcentaje',
                type: "linear",
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Porcentaje'
                },
                position: "left",
                id: "y-axis-1",
                gridLines: {
                  display: false
                },
                labels: {
                  show: true
                },
                ticks: {
                  beginAtZero: true
                }
              }, {
                label: 'Pulsaciones',
                type: "linear",
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Pulsaciones'
                },
                position: "right",
                id: "y-axis-2",
                gridLines: {
                  display: false
                },
                labels: {
                  show: true
                }
              }]
            }
          }
        };
        this.graficaResumen = null;
        this.datosResumenSeleccionados = {
          alegria: 100,
          asco: 100,
          miedo: 100,
          sorpresa: 100,
          tristeza: 100,
          ira: 100,
          distraido: 100,
          concentrado: 100,
          frustrado: 100,
          motivado: 100
        };
        this.configuracionGraficaResumen = {};
        this.botonCreadaCargando = false;
        this.botonFinalizadaCargando = false;
        this.botonReanudarCargando = false; //Tabla de estudiantes

        this.displayedColumnsAlumnos = ['nombre', 'estado', 'pulsaciones', 'webcam', 'pulsera', 'led']; //Tabla de alumnos

        this.alumnosTabla = []; //console.log(this.usuariosConectados);

        this.comprobarDatos();
      }

      _createClass(VerActividadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee37() {
            var _this16 = this;

            var ju, i, pul, j, alegria, _j, asco, _j2, miedo, _j3, sorpresa, _j4, tristeza, _j5, ira, _j6, distraido, _j7, concentrado, _j8, frustrado, _j9, motivado, _j10, _i5;

            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    ju = this;
                    this.id_actividad = this.actividad._id; //console.log(this.actividad);

                    this.alumnosTabla.length = 0; //console.log(angular.element( document.querySelector( '#some-id' ) ))

                    document.getElementById("datoAlegria").style.display = "block";
                    document.getElementById("datoAsco").style.display = "block";
                    document.getElementById("datoMiedo").style.display = "block";
                    document.getElementById("datoSorpresa").style.display = "block";
                    document.getElementById("datoTristeza").style.display = "block";
                    document.getElementById("datoIra").style.display = "block";
                    document.getElementById("datodistraido").style.display = "none";
                    document.getElementById("datoconcentrado").style.display = "none";
                    document.getElementById("datofrustrado").style.display = "none";
                    document.getElementById("datomotivado").style.display = "none";
                    this.datoAlegria = true;

                    if (this.actividad.estado == 'Comenzada') {
                      try {
                        $.ajax({
                          type: 'POST',
                          url: '/obtenerActividadComenzada',
                          data: JSON.stringify(ju.actividad),
                          success: function success(data) {
                            if (data != null) {
                              ju.actividad = data;
                              Swal.fire('Actividad recuperada', 'La actividad se ha recuperado exitosamente.', 'success');
                            }
                          },
                          contentType: 'application/json',
                          dataType: 'json'
                        });
                      } catch (e) {
                        console.log(e);
                      }

                      this.intervaloResumen = setInterval(function (async) {
                        _this16.insertarResumen();
                      }, 20000);
                    }

                    if (this.actividad.estado == 'Creada') {
                      document.getElementById("conectadosPequeños").style.display = "none";
                    }

                    if (this.actividad.estado == "Finalizada") {
                      document.getElementById("conectadosPequeños").style.display = "none";

                      for (i = 0; i < this.actividad.alumnos.length; i++) {
                        pul = 0;

                        for (j = 0; j < this.actividad.alumnos[i].datos.pulsaciones.length; j++) {
                          pul += this.actividad.alumnos[i].datos.pulsaciones[j].y;
                        }

                        this.alumnosTabla.push({
                          id_item: this.actividad.alumnos[i].id_item,
                          nombre: this.actividad.alumnos[i].estudiante.nombre,
                          apellidos: this.actividad.alumnos[i].estudiante.apellidos,
                          estado: 'Desconectado',
                          //pulsaciones: pul / this.actividad.alumnos[i].datos.pulsaciones.length,
                          pulsaciones: Math.round(pul / this.actividad.alumnos[i].datos.pulsaciones.length),
                          webcam: this.actividad.alumnos[i].sensorWebCam,
                          pulsera: this.actividad.alumnos[i].sensorPulsera,
                          led: this.actividad.alumnos[i].sensorLed,
                          estudiante: this.actividad.alumnos[i].estudiante,
                          intervalo: '',
                          cargandoC: false,
                          cargandoP: false,
                          cargandoL: false
                        });
                      }

                      alegria = 0;

                      for (_j = 0; _j < this.actividad.resumen.alegria.length; _j++) {
                        alegria += this.actividad.resumen.alegria[_j].y;
                      }

                      this.datosResumenSeleccionados.alegria = Math.round(alegria / this.actividad.resumen.alegria.length);
                      asco = 0;

                      for (_j2 = 0; _j2 < this.actividad.resumen.asco.length; _j2++) {
                        asco += this.actividad.resumen.asco[_j2].y;
                      }

                      this.datosResumenSeleccionados.asco = Math.round(asco / this.actividad.resumen.asco.length);
                      miedo = 0;

                      for (_j3 = 0; _j3 < this.actividad.resumen.miedo.length; _j3++) {
                        miedo += this.actividad.resumen.miedo[_j3].y;
                      }

                      this.datosResumenSeleccionados.miedo = Math.round(miedo / this.actividad.resumen.miedo.length);
                      sorpresa = 0;

                      for (_j4 = 0; _j4 < this.actividad.resumen.sorpresa.length; _j4++) {
                        sorpresa += this.actividad.resumen.sorpresa[_j4].y;
                      }

                      this.datosResumenSeleccionados.sorpresa = Math.round(sorpresa / this.actividad.resumen.sorpresa.length);
                      tristeza = 0;

                      for (_j5 = 0; _j5 < this.actividad.resumen.tristeza.length; _j5++) {
                        tristeza += this.actividad.resumen.tristeza[_j5].y;
                      }

                      this.datosResumenSeleccionados.tristeza = Math.round(tristeza / this.actividad.resumen.tristeza.length);
                      ira = 0;

                      for (_j6 = 0; _j6 < this.actividad.resumen.ira.length; _j6++) {
                        ira += this.actividad.resumen.ira[_j6].y;
                      }

                      this.datosResumenSeleccionados.ira = Math.round(ira / this.actividad.resumen.ira.length);
                      distraido = 0;

                      for (_j7 = 0; _j7 < this.actividad.resumen.distraido.length; _j7++) {
                        distraido += this.actividad.resumen.distraido[_j7].y;
                      }

                      this.datosResumenSeleccionados.distraido = Math.round(distraido / this.actividad.resumen.distraido.length);
                      concentrado = 0;

                      for (_j8 = 0; _j8 < this.actividad.resumen.concentrado.length; _j8++) {
                        concentrado += this.actividad.resumen.concentrado[_j8].y;
                      }

                      this.datosResumenSeleccionados.concentrado = Math.round(concentrado / this.actividad.resumen.concentrado.length);
                      frustrado = 0;

                      for (_j9 = 0; _j9 < this.actividad.resumen.frustrado.length; _j9++) {
                        frustrado += this.actividad.resumen.frustrado[_j9].y;
                      }

                      this.datosResumenSeleccionados.frustrado = Math.round(frustrado / this.actividad.resumen.frustrado.length);
                      motivado = 0;

                      for (_j10 = 0; _j10 < this.actividad.resumen.motivado.length; _j10++) {
                        motivado += this.actividad.resumen.motivado[_j10].y;
                      }

                      this.datosResumenSeleccionados.motivado = Math.round(motivado / this.actividad.resumen.motivado.length);
                      document.getElementById("progress-alegria").style.width = this.datosResumenSeleccionados.alegria + "%";
                      document.getElementById("progress-asco").style.width = this.datosResumenSeleccionados.asco + "%";
                      document.getElementById("progress-ira").style.width = this.datosResumenSeleccionados.ira + "%";
                      document.getElementById("progress-miedo").style.width = this.datosResumenSeleccionados.miedo + "%";
                      document.getElementById("progress-sorpresa").style.width = this.datosResumenSeleccionados.sorpresa + "%";
                      document.getElementById("progress-tristeza").style.width = this.datosResumenSeleccionados.tristeza + "%";
                      document.getElementById("progress-distraido").style.width = this.datosResumenSeleccionados.distraido + "%";
                      document.getElementById("progress-concentrado").style.width = this.datosResumenSeleccionados.concentrado + "%";
                      document.getElementById("progress-frustrado").style.width = this.datosResumenSeleccionados.frustrado + "%";
                      document.getElementById("progress-motivado").style.width = this.datosResumenSeleccionados.motivado + "%"; //console.log(this.datosResumenSeleccionados);
                    } else {
                      for (_i5 = 0; _i5 < this.actividad.alumnos.length; _i5++) {
                        this.alumnosTabla.push({
                          id_item: this.actividad.alumnos[_i5].id_item,
                          nombre: this.actividad.alumnos[_i5].estudiante.nombre,
                          estado: 'Desconectado',
                          pulsaciones: '--',
                          estudiante: this.actividad.alumnos[_i5].estudiante,
                          webcam: this.actividad.alumnos[_i5].sensorWebCam,
                          pulsera: this.actividad.alumnos[_i5].sensorPulsera,
                          led: this.actividad.alumnos[_i5].sensorLed,
                          intervalo: '',
                          cargandoC: false,
                          cargandoP: false,
                          cargandoL: false
                        });
                      }
                    }

                    if (this.actividad.estado == 'Comenzada') {
                      this.activarTodasPulseras();
                      this.activarTodasWebCam();
                      this.activarTodosLeds();
                    } //console.log(this.alumnosTabla);


                    this.dataSourceAlumnos = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.alumnosTabla);
                    this.dataSourceAlumnos.paginator = this.paginatorA;
                    this.dataSourceAlumnos.sort = this.sortA;

                  case 21:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "applyFilterA",
        value: function applyFilterA(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceAlumnos.filter = filterValue;
        }
      }, {
        key: "cargarGraficas",
        value: function cargarGraficas() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee38() {
            var _i6, i;

            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    this.ocultarTodos();
                    this.vistaGeneral = true;
                    document.getElementById("vistaGeneral").style.display = "block";
                    this.alumnos = this.actividad.alumnos;
                    this.alumnosSelect.length = 0;
                    this.alumnosSelect.push({
                      nombre: 'media',
                      id: '',
                      checked: true
                    });

                    for (_i6 = 0; _i6 < this.actividad.alumnos.length; _i6++) {
                      this.alumnosSelect.push({
                        nombre: this.actividad.alumnos[_i6].estudiante.nombre,
                        id: this.actividad.alumnos[_i6].estudiante._id,
                        checked: false
                      });
                    } //this.actividad.estado="Comenzada";


                    this.numAlumnosTotales = 0;

                    for (i in this.actividad.alumnos) {
                      //this.usuariosTotales++;
                      this.numAlumnosTotales++;
                    } //console.log("Alumnos Totales: " + this.numAlumnosTotales);


                    this.numAlumnosDesconectados = this.numAlumnosTotales - this.numAlumnosConectados;
                    this.dataGrafConectados = [this.aluConectados.length, this.numAlumnosDesconectados]; //console.log(this.usuariosTotales);

                    this.configUsersConectados = {
                      type: 'doughnut',
                      data: {
                        datasets: [{
                          data: this.dataGrafConectados,
                          backgroundColor: ['rgba(133, 193, 233,1)', 'rgba(0,0,0,0.1)']
                        }],
                        labels: ['Conectado', 'Desconectado']
                      },
                      options: {
                        responsive: true,
                        cutoutPercentage: 50,
                        rotation: 1 * Math.PI,
                        circumference: 1 * Math.PI,
                        legend: {
                          position: 'bottom'
                        }
                      }
                    };
                    this.porUsuariosConectados = this.numAlumnosConectados / this.numAlumnosTotales * 100;
                    this.porUsuariosConectados = Math.round(this.porUsuariosConectados); //console.log("Porcentaje:")
                    //console.log(this.numAlumnosConectados);
                    //console.log(this.usuariosTotales);

                    if (this.usersConectadosGraf != null) {
                      this.usersConectadosGraf.destroy();
                      this.usersConectadosGrafEntera.destroy();
                    }

                    _context38.next = 17;
                    return new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('usersConectados', this.configUsersConectados);

                  case 17:
                    this.usersConectadosGraf = _context38.sent;
                    _context38.next = 20;
                    return new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('usersConectadosEntera', this.configUsersConectados);

                  case 20:
                    this.usersConectadosGrafEntera = _context38.sent;
                    //Grafica Lineal 

                    /*this.configuracionGraficaLineal = {
                      type: 'line',
                      data: {
                        datasets: [
                          {
                            label: this.estadoSeleccionado,
                            backgroundColor: this.ColorSad,
                            borderColor: this.ColorSad,
                            fill: false,
                            data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
                          }
                        ]
                                 },
                      options: {
                        responsive: true,
                        title: {
                          display: true,
                          text: this.estadoSeleccionado,
                        },
                        scales: {
                          xAxes: [{
                            type: 'time',
                            display: true,
                            scaleLabel: {
                              display: true,
                              labelString: 'Tiempo'
                            },
                            ticks: {
                              major: {
                                fontStyle: 'bold',
                                fontColor: '#FF0000'
                              }
                            }
                          }],
                          yAxes: [{
                            display: true,
                            scaleLabel: {
                              display: true,
                              labelString: 'Porcentaje'
                            }
                          }]
                        }
                      }
                    };
                    this.graficaLineal = await new Chart('graficaLineal', this.configuracionGraficaLineal);
                    console.log("cargar graficas");*/
                    this.actualizarGraficaLineal();

                  case 22:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "seleccionarEstadoGlobal",
        value: function seleccionarEstadoGlobal(estado) {
          this.estadosConjuntoSeleccionado = estado;

          if (estado.nombre == "Estado emocional") {
            this.estadosGlobales = [{
              nombre: 'alegria',
              checked: true,
              color: 'rgba(255,255,84,1)'
            }, {
              nombre: 'asco',
              checked: true,
              color: 'rgba(0,0,0,0.5)'
            }, {
              nombre: 'miedo',
              checked: true,
              color: 'rgba(0,150,0,1)'
            }, {
              nombre: 'sorpresa',
              checked: true,
              color: 'rgba(89,189,255,1)'
            }, {
              nombre: 'tristeza',
              checked: true,
              color: 'rgba(81,81,255,1)'
            }, {
              nombre: 'ira',
              checked: true,
              color: 'rgba(255,0,0,1)'
            }, {
              nombre: 'distraido',
              checked: false,
              color: 'rgba(70,70,70,1)'
            }, {
              nombre: 'concentrado',
              checked: false,
              color: 'rgba(84,255,84,1)'
            }, {
              nombre: 'frustrado',
              checked: false,
              color: 'rgba(123,123,123,1)'
            }, {
              nombre: 'motivado',
              checked: false,
              color: 'rgba(84,25,80,1)'
            }];
          } else if (estado.nombre == "Concentrado / Distraido") {
            this.estadosGlobales = [{
              nombre: 'alegria',
              checked: false,
              color: 'rgba(255,255,84,1)'
            }, {
              nombre: 'asco',
              checked: false,
              color: 'rgba(0,0,0,0.5)'
            }, {
              nombre: 'miedo',
              checked: false,
              color: 'rgba(0,150,0,1)'
            }, {
              nombre: 'sorpresa',
              checked: false,
              color: 'rgba(89,189,255,1)'
            }, {
              nombre: 'tristeza',
              checked: false,
              color: 'rgba(81,81,255,1)'
            }, {
              nombre: 'ira',
              checked: false,
              color: 'rgba(255,0,0,1)'
            }, {
              nombre: 'distraido',
              checked: true,
              color: 'rgba(70,70,70,1)'
            }, {
              nombre: 'concentrado',
              checked: true,
              color: 'rgba(84,255,84,1)'
            }, {
              nombre: 'frustrado',
              checked: false,
              color: 'rgba(123,123,123,1)'
            }, {
              nombre: 'motivado',
              checked: false,
              color: 'rgba(84,25,80,1)'
            }];
          } else if (estado.nombre = "Motivado / Frustrado") {
            this.estadosGlobales = [{
              nombre: 'alegria',
              checked: false,
              color: 'rgba(255,255,84,1)'
            }, {
              nombre: 'asco',
              checked: false,
              color: 'rgba(0,0,0,0.5)'
            }, {
              nombre: 'miedo',
              checked: false,
              color: 'rgba(0,150,0,1)'
            }, {
              nombre: 'sorpresa',
              checked: false,
              color: 'rgba(89,189,255,1)'
            }, {
              nombre: 'tristeza',
              checked: false,
              color: 'rgba(81,81,255,1)'
            }, {
              nombre: 'ira',
              checked: false,
              color: 'rgba(255,0,0,1)'
            }, {
              nombre: 'distraido',
              checked: false,
              color: 'rgba(70,70,70,1)'
            }, {
              nombre: 'concentrado',
              checked: false,
              color: 'rgba(84,255,84,1)'
            }, {
              nombre: 'frustrado',
              checked: true,
              color: 'rgba(123,123,123,1)'
            }, {
              nombre: 'motivado',
              checked: true,
              color: 'rgba(84,25,80,1)'
            }];
          }

          this.actualizarGraficaGlobal();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cargarGraficas();
          this.actualizarGraficaGlobal();
        }
      }, {
        key: "comprobarDatos",
        value: function comprobarDatos() {
          var _this17 = this;

          setInterval(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee39() {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      //console.log(this.aluConectados);
                      if (this.numAlumnosConectados != this.aluConectados.length) {
                        this.numAlumnosConectados = this.aluConectados.length; //console.log(this.numAlumnosConectados);

                        this.numAlumnosDesconectados = this.numAlumnosTotales - this.numAlumnosConectados;
                        this.dataGrafConectados = [this.numAlumnosConectados, this.numAlumnosDesconectados]; //console.log(this.dataGrafConectados);

                        this.porUsuariosConectados = this.numAlumnosConectados / this.numAlumnosTotales * 100;
                        this.porUsuariosConectados = Math.round(this.porUsuariosConectados); //console.log("Porcentaje:")
                        //console.log(this.numAlumnosConectados);
                        //console.log(this.usuariosTotales);
                        //console.log(this.usuariosTotales);

                        this.configUsersConectados = {
                          type: 'doughnut',
                          data: {
                            datasets: [{
                              data: this.dataGrafConectados,
                              backgroundColor: ['rgba(133, 193, 233,1)', 'rgba(0,0,0,0.1)']
                            }],
                            labels: ['Conectado', 'Desconectado']
                          },
                          options: {
                            responsive: true,
                            cutoutPercentage: 50,
                            rotation: 1 * Math.PI,
                            circumference: 1 * Math.PI,
                            legend: {
                              position: 'bottom'
                            }
                          }
                        };

                        if (this.usersConectadosGraf != null) {
                          this.usersConectadosGraf.destroy();
                          this.usersConectadosGrafEntera.destroy();
                        }

                        this.usersConectadosGraf = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('usersConectados', this.configUsersConectados);
                        this.usersConectadosGrafEntera = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('usersConectadosEntera', this.configUsersConectados);
                      }

                    case 1:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }, 1000);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          //let posicion=$event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition(); //console.log(item);
          //this.alumno.posicion=this.dragPosition;
        }
        /*comenzar() {
          this.botonCreadaCargando = true;
          this.botonReanudarCargando = true;
          let ju = this;
          let act = this.actividad;
          act.estado = "Comenzada";
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(act),
            success: function (data) {
              console.log(data);
              ju.actividad = data;
              console.log(ju.actividad);
              ju.profesor.listoParaRecibirDatos(ju.actividad);
        
              ju.intervaloResumen = setInterval(async => {
                ju.insertarResumen();
              }, 20000);
              ju.botonCreadaCargando = false;
              ju.botonReanudarCargando = false;
              ju.actividad.estado = "Comenzada";
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }*/

      }, {
        key: "comenzar",
        value: function comenzar() {
          var _this18 = this;

          this.botonCreadaCargando = true;
          this.botonReanudarCargando = true;
          var ju = this;
          var act = this.actividad;
          act.estado = "Comenzada"; //this.profesor.empezarActividad(this.actividad);

          setTimeout(function (async) {
            if (_this18.botonCreadaCargando) {
              _this18.mensajeProcesoEnMarcha();
            }
          }, 5000);
          setTimeout(function (async) {
            if (_this18.botonCreadaCargando) {
              _this18.mensajeProcesoEnMarcha();
            }
          }, 15000);
          setTimeout(function (async) {
            if (_this18.botonCreadaCargando) {
              _this18.mensajeAlgoHaIdoMal();
            }
          }, 25000);
          $.ajax({
            type: 'POST',
            url: '/empezarActividad',
            data: JSON.stringify(act),
            success: function success(data) {
              // console.log(data);
              ju.actividad = data; // console.log(ju.actividad);

              ju.profesor.listoParaRecibirDatos(ju.actividad);
              ju.intervaloResumen = setInterval(function (async) {
                ju.insertarResumen();
              }, 20000);
              ju.botonCreadaCargando = false;
              ju.botonReanudarCargando = false;
              ju.actividad.estado = "Comenzada";
              document.getElementById("conectadosPequeños").style.display = "block";
              document.getElementById("datoAlegria").style.display = "block";
              document.getElementById("datoAsco").style.display = "block";
              document.getElementById("datoMiedo").style.display = "block";
              document.getElementById("datoSorpresa").style.display = "block";
              document.getElementById("datoTristeza").style.display = "block";
              document.getElementById("datoIra").style.display = "block";
              document.getElementById("datodistraido").style.display = "none";
              document.getElementById("datoconcentrado").style.display = "none";
              document.getElementById("datofrustrado").style.display = "none";
              document.getElementById("datomotivado").style.display = "none";
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "actividadEmpezada",
        value: function actividadEmpezada(actividad) {
          var _this19 = this;

          //console.log(actividad);
          this.actividad = actividad;
          this.profesor.listoParaRecibirDatos(this.actividad);
          this.intervaloResumen = setInterval(function (async) {
            if (_this19.resumen.alegria > 0) {
              _this19.insertarResumen();
            }
          }, 20000);
          this.botonCreadaCargando = false;
          this.botonReanudarCargando = false;
          this.actividad.estado = "Comenzada";
        }
        /*terminar() {
          //console.log(this.usuariosConectadoss);
          let ju = this;
          let act = this.actividad;
          act.fecha = moment().format('LLLL');
          act.estado = "Finalizada";
          this.botonFinalizadaCargando = true;
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(act),
            success: function (data) {
              console.log(data);
              ju.actividad = data;
              ju.profesor.listoParaNoRecibirDatos(ju.actividad);
              clearInterval(ju.intervaloResumen);
              ju.botonFinalizadaCargando = false;
              ju.actividad.estado = "Finalizada";
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }*/

      }, {
        key: "terminar",
        value: function terminar() {
          var _this20 = this;

          this.limpiarMapaClase(); //console.log(this.usuariosConectadoss);

          clearInterval(this.intervaloSimularDatos);
          this.simulandoDatos = false;
          var ju = this;
          var act = this.actividad;
          act.fecha = moment__WEBPACK_IMPORTED_MODULE_3__().format('LLLL');
          act.estado = "Finalizada";
          this.botonFinalizadaCargando = true;
          setTimeout(function (async) {
            if (_this20.botonFinalizadaCargando) {
              _this20.mensajeProcesoEnMarcha();
            }
          }, 5000);
          setTimeout(function (async) {
            if (_this20.botonFinalizadaCargando) {
              _this20.mensajeProcesoEnMarcha();
            }
          }, 15000);
          setTimeout(function (async) {
            if (_this20.botonFinalizadaCargando) {
              ju.profesor.listoParaNoRecibirDatos(ju.actividad);
              clearInterval(ju.intervaloResumen);

              _this20.mensajeAlgoHaIdoMal();
            }
          }, 27000); //this.profesor.terminarActividad(this.actividad);

          $.ajax({
            type: 'POST',
            url: '/terminarActividad',
            data: JSON.stringify(act),
            success: function success(data) {
              //console.log(data);
              ju.actividad = data;
              ju.profesor.listoParaNoRecibirDatos(ju.actividad);
              clearInterval(ju.intervaloResumen);
              ju.botonFinalizadaCargando = false;
              ju.actividad.estado = "Finalizada";
              ju.cambiarAGeneral();
              ju.limpiarMapaClase(); //document.getElementById("gUsuariosConectados").style.display = "none";

              document.getElementById("conectadosPequeños").style.display = "none";
              ju.ngOnInit();
              ju.cargarGraficas();
              ju.actualizarGraficaGlobal();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "limpiarMapaClase",
        value: function limpiarMapaClase() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee40() {
            var _this21 = this;

            var _loop, i;

            return regeneratorRuntime.wrap(function _callee40$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    _loop =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop(i) {
                      return regeneratorRuntime.wrap(function _loop$(_context40) {
                        while (1) {
                          switch (_context40.prev = _context40.next) {
                            case 0:
                              _context40.next = 2;
                              return console.log(_this21.alumnosTabla[i].intervalo);

                            case 2:
                              _context40.next = 4;
                              return clearInterval(_this21.alumnosTabla[i].intervalo);

                            case 4:
                              _context40.next = 6;
                              return console.log(_this21.alumnosTabla[i].intervalo);

                            case 6:
                              _this21.alumnosTabla[i].intervalo = setInterval(function () {
                                $('#' + _this21.alumnosTabla[i].id_item + '').css("background-color", 'rgba(255,255,255,1)');
                              }, 1);
                              _context40.next = 9;
                              return clearInterval(_this21.alumnosTabla[i].intervalo);

                            case 9:
                              setTimeout(function (async) {
                                $('#' + _this21.alumnosTabla[i].id_item + '').css("background-color", 'rgba(255,255,255,1)');
                              }, 1500);

                            case 10:
                            case "end":
                              return _context40.stop();
                          }
                        }
                      }, _loop);
                    });
                    i = 0;

                  case 2:
                    if (!(i < this.alumnosTabla.length)) {
                      _context41.next = 7;
                      break;
                    }

                    return _context41.delegateYield(_loop(i), "t0", 4);

                  case 4:
                    i++;
                    _context41.next = 2;
                    break;

                  case 7:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee40, this);
          }));
        }
      }, {
        key: "actividadTerminada",
        value: function actividadTerminada(actividad) {
          // console.log(actividad);
          this.actividad = actividad;
          this.profesor.listoParaNoRecibirDatos(this.actividad);
          clearInterval(this.intervaloResumen);
          this.botonFinalizadaCargando = false;
          this.actividad.estado = "Finalizada";
        }
      }, {
        key: "cerrarActividad",
        value: function cerrarActividad() {
          //this.actividadCreada.emit("cerrar");
          if (this.actividad.estado == "Creada") {
            this.profesor.listoParaNoRecibirDatos(this.actividad);
          }

          if (this.actividad.estado == "Comenzada") {
            Swal.fire('Se cerrará la aplicación.', 'El proceso de recolección de datos, seguira ejecutándose en segundo plano.', 'question');
          }

          clearInterval(this.intervaloResumen);
          this.profesor.cerrarActividad('ok');
        }
      }, {
        key: "cambiarAGeneral",
        value: function cambiarAGeneral() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee41() {
            return regeneratorRuntime.wrap(function _callee41$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    this.ocultarTodos();
                    document.getElementById("vistaGeneral").style.display = "block";
                    this.vistaGeneral = true;
                    this.vistaMapaDeLaClase = false; //await this.cargarGraficas();
                    // console.log("terminado de cargar");
                    //await this.cargarGraficas();
                    //await this.cambiarAGeneral();

                  case 4:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }, {
        key: "cambiarAMapa",
        value: function cambiarAMapa() {
          this.ocultarTodos();
          document.getElementById("vistaMapaDeLaClase").style.display = "block";
          this.vistaMapaDeLaClase = true; // console.log(this.vistaGeneral);
        }
      }, {
        key: "cambiarAConectados",
        value: function cambiarAConectados() {
          this.ocultarTodos();
          this.conectados = true; //document.getElementById("gUsuariosConectados").style.display = "block";
        }
      }, {
        key: "cambiarAEvolucion",
        value: function cambiarAEvolucion() {
          this.ocultarTodos();
          this.evolucion = true;
          document.getElementById("GraficoEvolucion").style.display = "block";
        }
      }, {
        key: "cambiarAMedia",
        value: function cambiarAMedia() {
          this.ocultarTodos();
          this.media = true;
          document.getElementById("gEstadoUsuarios").style.display = "block";
        }
      }, {
        key: "cambiarAAlumnos",
        value: function cambiarAAlumnos() {
          this.ocultarTodos();
          this.tablaAlumnos = true;
          document.getElementById("tablaUsuarios").style.display = "block";
        }
      }, {
        key: "ocultarTodos",
        value: function ocultarTodos() {
          document.getElementById("vistaGeneral").style.display = "none";
          document.getElementById("vistaMapaDeLaClase").style.display = "none";
          document.getElementById("GraficoEvolucion").style.display = "none"; //document.getElementById("gUsuariosConectados").style.display = "none";

          document.getElementById("gEstadoUsuarios").style.display = "none";
          document.getElementById("tablaUsuarios").style.display = "none";
          this.vistaGeneral = false;
          this.vistaMapaDeLaClase = false;
          this.evolucion = false;
          this.conectados = false;
          this.media = false;
          this.tablaAlumnos = false;
        }
      }, {
        key: "insertarDatos",
        value: function insertarDatos(datos) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee42() {
            var _this22 = this;

            var i, _loop2, j;

            return regeneratorRuntime.wrap(function _callee42$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    //console.log(datos);
                    //console.log(datos);
                    //console.log(this.actividad.alumnos);
                    for (i = 0; i < this.actividad.alumnos.length; i++) {
                      _loop2 = function _loop2(j) {
                        if (datos.id_item == _this22.actividad.alumnos[i].id_item && datos.id_item == _this22.alumnosTabla[j].id_item) {
                          if (!_this22.estoyComputando) {
                            if (_this22.alumnosTabla[j].webcam) {
                              _this22.resumen.alegria += datos.alegria.y;
                              _this22.resumen.asco += datos.asco.y;
                              _this22.resumen.concentrado += datos.concentrado.y;
                              _this22.resumen.distraido += datos.distraido.y;
                              _this22.resumen.frustrado += datos.frustrado.y;
                              _this22.resumen.ira += datos.ira.y;
                              _this22.resumen.miedo += datos.miedo.y;
                              _this22.resumen.motivado += datos.motivado.y;
                              _this22.resumen.sorpresa += datos.sorpresa.y;
                              _this22.resumen.tristeza += datos.tristeza.y;

                              _this22.actividad.alumnos[i].datos.alegria.push({
                                x: datos.alegria.x,
                                y: datos.alegria.y
                              });

                              _this22.actividad.alumnos[i].datos.asco.push({
                                x: datos.asco.x,
                                y: datos.asco.y
                              });

                              _this22.actividad.alumnos[i].datos.ira.push({
                                x: datos.ira.x,
                                y: datos.ira.y
                              });

                              _this22.actividad.alumnos[i].datos.miedo.push({
                                x: datos.miedo.x,
                                y: datos.miedo.y
                              });

                              _this22.actividad.alumnos[i].datos.sorpresa.push({
                                x: datos.sorpresa.x,
                                y: datos.sorpresa.y
                              });

                              _this22.actividad.alumnos[i].datos.tristeza.push({
                                x: datos.tristeza.x,
                                y: datos.tristeza.y
                              });

                              _this22.actividad.alumnos[i].datos.tiempo.push({
                                x: datos.tiempo.x,
                                y: datos.tiempo.y
                              });

                              _this22.actividad.alumnos[i].datos.distraido.push({
                                x: datos.distraido.x,
                                y: datos.distraido.y
                              });

                              _this22.actividad.alumnos[i].datos.concentrado.push({
                                x: datos.concentrado.x,
                                y: datos.concentrado.y
                              });

                              _this22.actividad.alumnos[i].datos.frustrado.push({
                                x: datos.frustrado.x,
                                y: datos.frustrado.y
                              });

                              _this22.actividad.alumnos[i].datos.motivado.push({
                                x: datos.motivado.x,
                                y: datos.motivado.y
                              });

                              $('#' + datos.id_item + '').css("background-color", datos.color);
                              _this22.alumnosTabla[i].estado = datos.estadoEmocional;
                            } else {
                              _this22.alumnosTabla[i].estado = '--';
                            }

                            if (_this22.alumnosTabla[j].pulsera) {
                              _this22.resumen.pulsaciones += datos.pulsaciones.y;
                              _this22.numPulsaciones++;

                              _this22.actividad.alumnos[i].datos.pulsaciones.push({
                                x: datos.pulsaciones.x,
                                y: datos.pulsaciones.y
                              });

                              _this22.alumnosTabla[j].pulsaciones = datos.pulsaciones.y;

                              if (datos.pulsaciones.y > 100) {
                                _this22.alumnosTabla[j].intervalo = setInterval(function () {
                                  setTimeout(function () {
                                    $('#' + datos.id_item + '').css("background-color", datos.color);
                                  }, 900);
                                  setTimeout(function () {
                                    $('#' + datos.id_item + '').css("background-color", 'rgba(255,255,255,1)');
                                    console.log("intervalo");
                                  }, 100);
                                  console.log(_this22.alumnosTabla[j].intervalo);
                                }, 1000);
                              } else {
                                clearInterval(_this22.alumnosTabla[j].intervalo); //$('#' + datos.id_item + '').fadeTo(5000, 1);

                                $('#' + datos.id_item + '').css("background-color", datos.color);
                              }
                            } else {
                              _this22.alumnosTabla[j].pulsaciones = '--';
                              clearInterval(_this22.alumnosTabla[j].intervalo);
                              $('#' + datos.id_item + '').css("background-color", datos.color);
                            }

                            _this22.graficaLineal.update();

                            _this22.graficaLinealEntera.update();
                          }
                        }
                      };

                      for (j = 0; j < this.alumnosTabla.length; j++) {
                        _loop2(j);
                      }
                    }

                  case 1:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee42, this);
          }));
        }
      }, {
        key: "parpadeo",
        value: function parpadeo() {}
      }, {
        key: "animacion",
        value: function animacion(id) {
          //document.getElementById('formulario').classList.toggle('fade');
          $('#' + id + '').blink({
            delay: 1000
          });
        }
      }, {
        key: "insertarResumen",
        value: function insertarResumen() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee43() {
            var sumaTotalEmociones, x, sumaTotalEstadoDisConc, sumaTotalEstadoFrusMotiv;
            return regeneratorRuntime.wrap(function _callee43$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    //Datos Emocionales
                    sumaTotalEmociones = 0; //console.log(this.resumen);

                    x = moment__WEBPACK_IMPORTED_MODULE_3__().format();
                    this.estoyComputando = true;
                    sumaTotalEmociones = this.resumen.alegria + this.resumen.asco + this.resumen.ira + this.resumen.miedo + this.resumen.sorpresa + this.resumen.tristeza;

                    if (sumaTotalEmociones > 0) {
                      this.datosResumenSeleccionados.alegria = Math.round(this.resumen.alegria / sumaTotalEmociones * 100);
                      this.datosResumenSeleccionados.asco = Math.round(this.resumen.asco / sumaTotalEmociones * 100);
                      this.datosResumenSeleccionados.ira = Math.round(this.resumen.ira / sumaTotalEmociones * 100);
                      this.datosResumenSeleccionados.miedo = Math.round(this.resumen.miedo / sumaTotalEmociones * 100);
                      this.datosResumenSeleccionados.sorpresa = Math.round(this.resumen.sorpresa / sumaTotalEmociones * 100);
                      this.datosResumenSeleccionados.tristeza = Math.round(this.resumen.tristeza / sumaTotalEmociones * 100);
                      this.actividad.resumen.alegria.push({
                        x: x,
                        y: this.datosResumenSeleccionados.alegria
                      });
                      this.actividad.resumen.asco.push({
                        x: x,
                        y: this.datosResumenSeleccionados.asco
                      });
                      this.actividad.resumen.ira.push({
                        x: x,
                        y: this.datosResumenSeleccionados.ira
                      });
                      this.actividad.resumen.miedo.push({
                        x: x,
                        y: this.datosResumenSeleccionados.miedo
                      });
                      this.actividad.resumen.sorpresa.push({
                        x: x,
                        y: this.datosResumenSeleccionados.sorpresa
                      });
                      this.actividad.resumen.tristeza.push({
                        x: x,
                        y: this.datosResumenSeleccionados.tristeza
                      });

                      try {
                        document.getElementById("progress-alegria").style.width = this.datosResumenSeleccionados.alegria + "%";
                        document.getElementById("progress-asco").style.width = this.datosResumenSeleccionados.asco + "%";
                        document.getElementById("progress-ira").style.width = this.datosResumenSeleccionados.ira + "%";
                        document.getElementById("progress-miedo").style.width = this.datosResumenSeleccionados.miedo + "%";
                        document.getElementById("progress-sorpresa").style.width = this.datosResumenSeleccionados.sorpresa + "%";
                        document.getElementById("progress-tristeza").style.width = this.datosResumenSeleccionados.tristeza + "%";
                      } catch (e) {} //Datos de las pulsaciones


                      this.actividad.resumen.pulsaciones.push({
                        x: x,
                        y: this.resumen.pulsaciones / this.numPulsaciones
                      }); //Datos cognitivos

                      sumaTotalEstadoDisConc = this.resumen.distraido + this.resumen.concentrado;
                      this.datosResumenSeleccionados.concentrado = Math.round(this.resumen.concentrado / sumaTotalEstadoDisConc * 100);
                      this.datosResumenSeleccionados.distraido = Math.round(this.resumen.distraido / sumaTotalEstadoDisConc * 100);
                      this.actividad.resumen.distraido.push({
                        x: x,
                        y: this.datosResumenSeleccionados.concentrado
                      });
                      this.actividad.resumen.concentrado.push({
                        x: x,
                        y: this.datosResumenSeleccionados.concentrado
                      });

                      try {
                        document.getElementById("progress-distraido").style.width = this.datosResumenSeleccionados.distraido + "%";
                        document.getElementById("progress-concentrado").style.width = this.datosResumenSeleccionados.concentrado + "%";
                      } catch (e) {}

                      sumaTotalEstadoFrusMotiv = this.resumen.frustrado + this.resumen.motivado;
                      this.datosResumenSeleccionados.motivado = Math.round(this.resumen.motivado / sumaTotalEstadoFrusMotiv * 100);
                      this.datosResumenSeleccionados.frustrado = Math.round(this.resumen.frustrado / sumaTotalEstadoFrusMotiv * 100);
                      this.actividad.resumen.frustrado.push({
                        x: x,
                        y: this.datosResumenSeleccionados.frustrado
                      });
                      this.actividad.resumen.motivado.push({
                        x: x,
                        y: this.datosResumenSeleccionados.motivado
                      });

                      try {
                        document.getElementById("progress-frustrado").style.width = this.datosResumenSeleccionados.frustrado + "%";
                        document.getElementById("progress-motivado").style.width = this.datosResumenSeleccionados.motivado + "%";
                      } catch (e) {}

                      this.estoyComputando = false; //Datos del tiempo

                      this.actividad.resumen.tiempo.push(x);
                      console.log("Resumen");
                      console.log(this.resumen);
                      this.actualizarGraficaGlobal(); //Reseteo de datos

                      this.resumen = {
                        alegria: 0,
                        asco: 0,
                        miedo: 0,
                        sorpresa: 0,
                        tristeza: 0,
                        ira: 0,
                        distraido: 0,
                        concentrado: 0,
                        frustrado: 0,
                        motivado: 0,
                        pulsaciones: 0
                      };
                      this.numPulsaciones = 0;
                    } // console.log(this.actividad);


                  case 5:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "seleccionarEstado",
        value: function seleccionarEstado(estado) {
          /*console.log(this.estados);
          this.estadoSeleccionado = estado;
          if (this.objAlumnoSeleccionado == null) {
            this.configuracionGraficaLineal = {
              type: 'line',
              data: {
                datasets: [
                  {
                    label: this.estadoSeleccionado,
                    backgroundColor: this.ColorSad,
                    borderColor: this.ColorSad,
                    fill: false,
                    data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
                  }
                ]
                     },
              legend:{
                labels:{
                  position: 'bottom',
                }
              },
              options: {
                responsive: true,
                title: {
                  display: true,
                  text: this.estadoSeleccionado,
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Tiempo'
                    },
                    ticks: {
                      major: {
                        fontStyle: 'bold',
                        fontColor: '#FF0000'
                      }
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Porcentaje'
                    }
                  }]
                }
              }
            };
            this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
          }
          else {
            for (let i = 0; i < this.actividad.alumnos.length; i++) {
              if (this.actividad.alumnos[i].id_item == this.objAlumnoSeleccionado.id_item) {
                this.configuracionGraficaLineal = {
                  type: 'line',
                  data: {
                    datasets: [
                      {
                        label: this.estadoSeleccionado,
                        backgroundColor: this.ColorSad,
                        borderColor: this.ColorSad,
                        fill: false,
                        data: this.actividad.alumnos[i].datos['' + this.estadoSeleccionado + ''],
                      }
                    ]
                         },
                  options: {
                    responsive: true,
                    title: {
                      display: true,
                      text: this.estadoSeleccionado,
                    },
                    scales: {
                      xAxes: [{
                        type: 'time',
                        display: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Tiempo'
                        },
                        ticks: {
                          major: {
                            fontStyle: 'bold',
                            fontColor: '#FF0000'
                          }
                        }
                      }],
                      yAxes: [{
                        display: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Porcentaje'
                        }
                      }]
                    }
                  }
                };
                this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
              }
            }
          }*/
        }
      }, {
        key: "seleccionarAlumno",
        value: function seleccionarAlumno(alumno) {
          /*console.log(this.alumnosSelect);
          this.alumnoSeleccionado = alumno.estudiante.nombre;
          this.objAlumnoSeleccionado = alumno;
          this.alumnoSeleccionadoAlumno = true;
          for (let i = 0; i < this.actividad.alumnos.length; i++) {
            if (this.actividad.alumnos[i].id_item == this.objAlumnoSeleccionado.id_item) {
              this.configuracionGraficaLineal = {
                type: 'line',
                data: {
                  datasets: [
                    {
                      label: this.estadoSeleccionado,
                      backgroundColor: this.ColorSad,
                      borderColor: this.ColorSad,
                      fill: false,
                      data: this.actividad.alumnos[i].datos['' + this.estadoSeleccionado + ''],
                    }
                  ]
                       },
                options: {
                  responsive: true,
                  title: {
                    display: true,
                    text: this.estadoSeleccionado,
                  },
                  scales: {
                    xAxes: [{
                      type: 'time',
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Tiempo'
                      },
                      ticks: {
                        major: {
                          fontStyle: 'bold',
                          fontColor: '#FF0000'
                        }
                      }
                    }],
                    yAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Porcentaje'
                      }
                    }]
                  }
                }
              };
              this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
            }
          }*/
        }
      }, {
        key: "seleccionarMediaAlumnos",
        value: function seleccionarMediaAlumnos() {//this.actualizarGraficaLineal();

          /*this.alumnoSeleccionado = 'Media de la clase';
          this.objAlumnoSeleccionado = null;
          this.alumnoSeleccionadoAlumno = false;
          //this.actividad.resumen.alegria
          this.configuracionGraficaLineal = {
            type: 'line',
            data: {
              datasets: [
                {
                  label: this.estadoSeleccionado,
                  backgroundColor: this.ColorSad,
                  borderColor: this.ColorSad,
                  fill: false,
                  data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
                }
              ]
                   },
            options: {
              responsive: true,
              title: {
                display: true,
                text: this.estadoSeleccionado,
              },
              scales: {
                xAxes: [{
                  type: 'time',
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Tiempo'
                  },
                  ticks: {
                    major: {
                      fontStyle: 'bold',
                      fontColor: '#FF0000'
                    }
                  }
                }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Porcentaje'
                  }
                }]
              }
            }
          };
          this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);*/
        }
      }, {
        key: "actualizarGraficaLineal",
        value: function actualizarGraficaLineal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee44() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee44$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    _context45.next = 2;
                    return setTimeout(function (async) {
                      // console.log("asdasd");
                      var datos = [];

                      for (var _i7 = 0; _i7 < _this23.alumnosSelect.length; _i7++) {
                        if (_this23.alumnosSelect[_i7].checked) {
                          if (_this23.alumnosSelect[_i7].nombre == "media") {
                            for (var j = 0; j < _this23.estados.length; j++) {
                              if (_this23.estados[j].checked) {
                                if (_this23.estados[j].nombre == "pulsaciones") {
                                  var color = _this23.colorRGB(_this23.estados[j].color, _i7 + j);

                                  datos.push({
                                    label: _this23.estados[j].nombre + ' de ' + _this23.alumnosSelect[_i7].nombre,
                                    backgroundColor: color,
                                    borderColor: color,
                                    fill: false,
                                    data: _this23.actividad.resumen['' + _this23.estados[j].nombre + ''],
                                    yAxisID: 'y-axis-2'
                                  });
                                } else {
                                  var color = _this23.colorRGB(_this23.estados[j].color, _i7 + j);

                                  datos.push({
                                    label: _this23.estados[j].nombre + ' de ' + _this23.alumnosSelect[_i7].nombre,
                                    backgroundColor: color,
                                    borderColor: color,
                                    fill: false,
                                    data: _this23.actividad.resumen['' + _this23.estados[j].nombre + ''],
                                    yAxisID: 'y-axis-1'
                                  });
                                } // console.log(this.alumnosSelect);
                                // console.log(this.estados);

                              }
                            }
                          } else {
                            for (var h = 0; h < _this23.actividad.alumnos.length; h++) {
                              if (_this23.alumnosSelect[_i7].id == _this23.actividad.alumnos[h].estudiante._id) {
                                for (var _j11 = 0; _j11 < _this23.estados.length; _j11++) {
                                  if (_this23.estados[_j11].checked) {
                                    if (_this23.estados[_j11].nombre == "pulsaciones") {
                                      var color = _this23.colorRGB(_this23.estados[_j11].color, _i7 + h);

                                      datos.push({
                                        label: _this23.estados[_j11].nombre + ' de ' + _this23.alumnosSelect[_i7].nombre,
                                        backgroundColor: color,
                                        borderColor: color,
                                        fill: false,
                                        data: _this23.actividad.alumnos[h].datos['' + _this23.estados[_j11].nombre + ''],
                                        yAxisID: 'y-axis-2'
                                      });
                                    } else {
                                      var color = _this23.colorRGB(_this23.estados[_j11].color, _i7 + h);

                                      datos.push({
                                        label: _this23.estados[_j11].nombre + ' de ' + _this23.alumnosSelect[_i7].nombre,
                                        backgroundColor: color,
                                        borderColor: color,
                                        fill: false,
                                        data: _this23.actividad.alumnos[h].datos['' + _this23.estados[_j11].nombre + ''],
                                        yAxisID: 'y-axis-1'
                                      });
                                    } // console.log(this.alumnosSelect);
                                    //console.log(this.estados);

                                  }
                                }
                              }
                            }
                          }
                        }
                      }

                      _this23.configuracionGraficaLineal = {
                        type: 'line',
                        data: {
                          datasets: datos
                        },
                        options: {
                          responsive: true,
                          title: {
                            display: true,
                            text: _this23.estadoSeleccionado
                          },
                          legend: {
                            position: 'bottom'
                          },
                          scales: {
                            xAxes: [{
                              type: 'time',
                              display: true,
                              scaleLabel: {
                                display: true,
                                labelString: 'Tiempo'
                              },
                              ticks: {
                                major: {
                                  fontStyle: 'bold',
                                  fontColor: '#FF0000'
                                }
                              }
                            }],
                            yAxes: [{
                              label: 'Porcentaje',
                              type: "linear",
                              display: true,
                              scaleLabel: {
                                display: true,
                                labelString: 'Porcentaje'
                              },
                              position: "left",
                              id: "y-axis-1",
                              gridLines: {
                                display: false
                              },
                              labels: {
                                show: true
                              },
                              ticks: {
                                beginAtZero: true
                              }
                            }, {
                              label: 'Pulsaciones',
                              type: "linear",
                              display: true,
                              scaleLabel: {
                                display: true,
                                labelString: 'Pulsaciones'
                              },
                              position: "right",
                              id: "y-axis-2",
                              gridLines: {
                                display: false
                              },
                              labels: {
                                show: true
                              }
                            }]
                          }
                        }
                      };

                      if (_this23.graficaLineal != null) {
                        _this23.graficaLineal.destroy();

                        _this23.graficaLinealEntera.destroy();
                      }

                      _this23.graficaLineal = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('graficaLineal', _this23.configuracionGraficaLineal);
                      _this23.graficaLinealEntera = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('graficaLinealEntera', _this23.configuracionGraficaLineal);
                    }, 500);

                  case 2:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee44);
          }));
        }
      }, {
        key: "graficaGlobal",
        value: function graficaGlobal() {}
      }, {
        key: "actualizarGraficaGlobal",
        value: function actualizarGraficaGlobal() {
          // console.log(this.estadosGlobales);
          //setTimeout(async => {
          var labels = [];
          var colores = [];
          var datos = [];

          for (var _i8 = 0; _i8 < this.estadosGlobales.length; _i8++) {
            if (this.estadosGlobales[_i8].checked) {
              labels.push(this.estadosGlobales[_i8].nombre);
              colores.push(this.estadosGlobales[_i8].color);
              datos.push(this.datosResumenSeleccionados[this.estadosGlobales[_i8].nombre]);
            }
          }

          this.configUsersConectados = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                backgroundColor: colores,
                data: datos
              }]
            },
            options: {
              responsive: true,
              cutoutPercentage: 50,
              borderColor: 'rgba(12,12,12,1)',
              legend: {
                position: 'right'
              }
            }
          };

          if (this.graficaResumen != null) {
            this.graficaResumen.destroy();
            this.graficaResumenEntera.destroy();
          }

          this.graficaResumen = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('estadoGlobal', this.configUsersConectados);
          this.graficaResumenEntera = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('estadoGlobalEntero', this.configUsersConectados); //}, 500);
        }
      }, {
        key: "colorRGB",
        value: function colorRGB(estado, num) {
          //'rgba(81,81,255,0.)'
          // console.log(estado);
          var r = estado[0] - 40 + num * 10;
          var g = estado[1] - 40 + num * 10;
          var a = estado[2] - 40 + num * 10; // console.log('rgba(' + r + ',' + g + ',' + a + ')');

          var color = "(" + r + "," + g + "," + a + ",0.8)";
          return "rgba" + color;
        }
      }, {
        key: "generarNumero",
        value: function generarNumero() {
          return Math.round(Math.random() * 40);
        }
      }, {
        key: "simularDatos",
        value: function simularDatos() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee45() {
            var _this24 = this;

            var ju, _i10, _loop3, _i11;

            return regeneratorRuntime.wrap(function _callee45$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    ju = this; // console.log("NumSimulaciones: "+this.numSimulaciones);

                    if (this.simulandoDatos) {
                      _context47.next = 9;
                      break;
                    }

                    this.numSimulaciones = 0;
                    this.simulandoDatos = true;
                    this.actualizarGraficaLineal();

                    if (this.numSimulaciones == 0) {
                      this.activarTodasPulseras();
                      this.activarTodasWebCam();
                      this.activarTodosLeds();
                    }

                    this.intervaloSimularDatos = setInterval(function (async) {
                      for (var _i9 = 0; _i9 < _this24.actividad.alumnos.length; _i9++) {
                        if (_this24.numSimulaciones == 0) {
                          _this24.usuarioConectado(_this24.actividad.alumnos[_i9].estudiante);

                          _this24.activarTodasPulseras();

                          _this24.activarTodasWebCam();

                          _this24.activarTodosLeds();
                        }

                        var datos = {};
                        var max = 100;
                        var alegria = Math.round(Math.random() * (max - 0) + 0);
                        max = max - alegria;
                        var asco = Math.round(Math.random() * (max - 0) + 0);
                        max = max - asco;
                        var ira = Math.round(Math.random() * (max - 0) + 0);
                        max = max - ira;
                        var miedo = Math.round(Math.random() * (max - 0) + 0);
                        max = max - miedo;
                        var sorpresa = Math.round(Math.random() * (max - 0) + 0);
                        max = max - sorpresa;
                        var tristeza = Math.round(Math.random() * (max - 0) + 0);
                        max = max - tristeza;
                        console.log(_this24.actividad);
                        datos['id_actividad'] = _this24.id_actividad;
                        console.log("ID Actividad: " + _this24.actividad._id);
                        datos['id_item'] = _this24.actividad.alumnos[_i9].id_item; //console.log("Datos generados1");

                        var x = moment__WEBPACK_IMPORTED_MODULE_3__().format(); //Estado Emocional

                        datos['id_item'] = _this24.actividad.alumnos[_i9].id_item; //Alegria

                        datos['alegria'] = {
                          x: x,
                          y: alegria
                        }; //Asco

                        datos['asco'] = {
                          x: x,
                          y: asco
                        }; //Ira

                        datos['ira'] = {
                          x: x,
                          y: ira
                        }; //Miedo

                        datos['miedo'] = {
                          x: x,
                          y: miedo
                        }; //Sorpresa

                        datos['sorpresa'] = {
                          x: x,
                          y: sorpresa
                        }; //Triteza

                        datos['tristeza'] = {
                          x: x,
                          y: tristeza
                        }; //console.log("Datos generados2");

                        var num = Math.round(Math.random() * (_this24.estadosConjunto[0].estados.length - 1 - 0) + 0); //console.log(num);

                        datos['color'] = _this24.estadosConjunto[0].estados[num].color;
                        datos['estadoEmocional'] = _this24.estadosConjunto[0].estados[num].nombre;
                        datos; //Estado de las Pulsaciones

                        datos['pulsaciones'] = {
                          x: x,
                          y: Math.round(Math.random() * (130 - 50) + 50)
                        }; //Estado temporal

                        datos['tiempo'] = x;
                        max = 100;
                        var distraido = Math.round(Math.random() * (max - 0) + 0);
                        var concentrado = 100 - distraido; //var concentrado = Math.round(Math.random() * (max - 0) + 0);
                        //Estado Cognitivo

                        datos['distraido'] = {
                          x: x,
                          y: distraido
                        };
                        datos['concentrado'] = {
                          x: x,
                          y: concentrado
                        }; //console.log("Datos generados4");

                        max = 100;
                        var frustrado = Math.round(Math.random() * (max - 0) + 0);
                        var motivado = 100 - frustrado; //var motivado = Math.round(Math.random() * (max - 0) + 0);

                        datos['frustrado'] = {
                          x: x,
                          y: frustrado
                        };
                        datos['motivado'] = {
                          x: x,
                          y: motivado
                        }; //console.log("Datos generados5");

                        console.log(datos);

                        _this24.insertarDatos(datos);

                        _this24.profesor.enviarDatos(datos, ju.actividad);
                      }

                      _this24.numSimulaciones++;
                    }, 7000);
                    _context47.next = 20;
                    break;

                  case 9:
                    this.simulandoDatos = false;
                    clearInterval(this.intervaloSimularDatos);
                    this.numSimulaciones == 0;

                    for (_i10 = 0; _i10 < this.actividad.alumnos.length; _i10++) {
                      this.usuarioDesconectado(this.actividad.alumnos[_i10].estudiante);
                    } //console.log(this.alumnosTabla);


                    _loop3 =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop3(_i11) {
                      return regeneratorRuntime.wrap(function _loop3$(_context46) {
                        while (1) {
                          switch (_context46.prev = _context46.next) {
                            case 0:
                              _context46.next = 2;
                              return console.log(_this24.alumnosTabla[_i11].intervalo);

                            case 2:
                              _context46.next = 4;
                              return clearInterval(_this24.alumnosTabla[_i11].intervalo);

                            case 4:
                              _context46.next = 6;
                              return console.log(_this24.alumnosTabla[_i11].intervalo);

                            case 6:
                              _this24.alumnosTabla[_i11].intervalo = setInterval(function () {
                                $('#' + _this24.alumnosTabla[_i11].id_item + '').css("background-color", 'rgba(255,255,255,1)');
                              }, 1);
                              _context46.next = 9;
                              return clearInterval(_this24.alumnosTabla[_i11].intervalo);

                            case 9:
                              setTimeout(function (async) {
                                $('#' + _this24.alumnosTabla[_i11].id_item + '').css("background-color", 'rgba(255,255,255,1)');
                              }, 1500);

                            case 10:
                            case "end":
                              return _context46.stop();
                          }
                        }
                      }, _loop3);
                    });
                    _i11 = 0;

                  case 15:
                    if (!(_i11 < this.alumnosTabla.length)) {
                      _context47.next = 20;
                      break;
                    }

                    return _context47.delegateYield(_loop3(_i11), "t0", 17);

                  case 17:
                    _i11++;
                    _context47.next = 15;
                    break;

                  case 20:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee45, this);
          }));
        }
      }, {
        key: "actualizarResumen",
        value: function actualizarResumen() {
          this.actualizandoResumen = true;

          if (this.resumen.alegria >= 20) {
            this.insertarResumen();
          }

          this.actualizandoResumen = false;
        }
      }, {
        key: "resumenActualizar",
        value: function resumenActualizar() {}
      }, {
        key: "mensajeProcesoEnMarcha",
        value: function mensajeProcesoEnMarcha() {
          var timerInterval;
          Swal.fire({
            title: 'Este proceso puede tardar!',
            timer: 6000,
            timerProgressBar: true,
            onBeforeOpen: function onBeforeOpen() {
              Swal.showLoading();
              timerInterval = setInterval(function () {
                var content = Swal.getContent();

                if (content) {
                  var b = content.querySelector('b');

                  if (b) {
                    b.textContent = Swal.getTimerLeft();
                  }
                }
              }, 100);
            },
            onClose: function onClose() {
              clearInterval(timerInterval);
            }
          }).then(function (result) {});
        }
      }, {
        key: "mensajeAlgoHaIdoMal",
        value: function mensajeAlgoHaIdoMal() {
          var _this25 = this;

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo ha ido mal, se redirigirá a la pagina de inicio.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          }).then(function (result) {
            _this25.profesor.salir();
          });
        }
      }, {
        key: "pintarMapaCalor",
        value: function pintarMapaCalor() {
          var heatmapInstance = heatmap_js__WEBPACK_IMPORTED_MODULE_6__["create"]({
            // only container is required, the rest will be defaults
            container: document.querySelector('.heatmap')
          }); // now generate some random data

          var points = [];
          var max = 0;
          var width = 840;
          var height = 400;
          var len = 200;

          while (len--) {
            var val = Math.floor(Math.random() * 100);
            max = Math.max(max, val);
            var point = {
              x: Math.floor(Math.random() * width),
              y: Math.floor(Math.random() * height),
              value: val
            };
            points.push(point);
          } // heatmap data format


          var data = {
            max: max,
            data: points
          }; // if you have a set of datapoints always use setData instead of addData
          // for data initialization

          heatmapInstance.setData(data);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.intervaloResumen);
        }
      }, {
        key: "seleccionVisualizacion",
        value: function seleccionVisualizacion(visualizacion) {
          this.visualizacionSelected = visualizacion.nombre;

          if (visualizacion.nombre == "Mapa de Calor") {
            //$('.example-box').addClass('item');
            //$('.item').removeClass("example-box");
            this.pintarMapaCalor();
          } else if (visualizacion.nombre == "Normal") {//$('.item').addClass('example-box');
            //$('.example-box').removeClass("item");
          }
        }
      }, {
        key: "seleccionarEstadoConjunto",
        value: function seleccionarEstadoConjunto(estado) {
          this.estadoConjuntoSeleccionado = estado.nombre;

          if (this.estadoConjuntoSeleccionado == "Estado emocional") {
            document.getElementById("datoAlegria").style.display = "block";
            document.getElementById("datoAsco").style.display = "block";
            document.getElementById("datoMiedo").style.display = "block";
            document.getElementById("datoSorpresa").style.display = "block";
            document.getElementById("datoTristeza").style.display = "block";
            document.getElementById("datoIra").style.display = "block";
            document.getElementById("datodistraido").style.display = "none";
            document.getElementById("datoconcentrado").style.display = "none";
            document.getElementById("datofrustrado").style.display = "none";
            document.getElementById("datomotivado").style.display = "none";
            this.datoAlegria = true;
            this.datoAsco = true;
            this.datoMiedo = true;
            this.datoSorpresa = true;
            this.datoTristeza = true;
            this.datoIra = true;
            this.datodistraido = false;
            this.datoconcentrado = false;
            this.datofrustrado = false;
            this.datomotivado = false;
          } else if (this.estadoConjuntoSeleccionado == "Concentrado / Distraido") {
            document.getElementById("datoAlegria").style.display = "none";
            document.getElementById("datoAsco").style.display = "none";
            document.getElementById("datoMiedo").style.display = "none";
            document.getElementById("datoSorpresa").style.display = "none";
            document.getElementById("datoTristeza").style.display = "none";
            document.getElementById("datoIra").style.display = "none";
            document.getElementById("datodistraido").style.display = "block";
            document.getElementById("datoconcentrado").style.display = "block";
            document.getElementById("datofrustrado").style.display = "none";
            document.getElementById("datomotivado").style.display = "none";
            this.datodistraido = true;
            this.datoconcentrado = true;
            this.datofrustrado = false;
            this.datomotivado = false;
            this.datoAlegria = false;
            this.datoAsco = false;
            this.datoMiedo = false;
            this.datoSorpresa = false;
            this.datoTristeza = false;
            this.datoIra = false;
          } else if (this.estadoConjuntoSeleccionado == "Motivado / Frustrado") {
            document.getElementById("datoAlegria").style.display = "none";
            document.getElementById("datoAsco").style.display = "none";
            document.getElementById("datoMiedo").style.display = "none";
            document.getElementById("datoSorpresa").style.display = "none";
            document.getElementById("datoTristeza").style.display = "none";
            document.getElementById("datoIra").style.display = "none";
            document.getElementById("datodistraido").style.display = "none";
            document.getElementById("datoconcentrado").style.display = "none";
            document.getElementById("datofrustrado").style.display = "block";
            document.getElementById("datomotivado").style.display = "block";
            this.datofrustrado = true;
            this.datomotivado = true;
            this.datodistraido = false;
            this.datoconcentrado = false;
            this.datoAlegria = false;
            this.datoAsco = false;
            this.datoMiedo = false;
            this.datoSorpresa = false;
            this.datoTristeza = false;
            this.datoIra = false;
          }
        }
      }, {
        key: "activarTodasWebCam",
        value: function activarTodasWebCam() {
          for (var _i12 = 0; _i12 < this.alumnosTabla.length; _i12++) {
            if (this.simulandoDatos) {
              this.alumnosTabla[_i12].webcam = true;
            } else {
              this.activarWebCam(this.alumnosTabla[_i12].estudiante);
            }
          } //console.log(this.alumnosTabla);

        }
      }, {
        key: "activarWebCam",
        value: function activarWebCam(usuario) {
          var _this26 = this;

          var _loop4 = function _loop4(_i13) {
            if (usuario._id == _this26.alumnosTabla[_i13].estudiante._id) {
              if (_this26.simulandoDatos) {
                _this26.alumnosTabla[_i13].webcam = true;
              } else {
                _this26.profesor.conectarWebCam(usuario);

                _this26.alumnosTabla[_i13].cargandoC = true;
                setTimeout(function (async) {
                  _this26.alumnosTabla[_i13].cargandoC = false;
                }, 7000);
              }
            }
          };

          for (var _i13 = 0; _i13 < this.alumnosTabla.length; _i13++) {
            _loop4(_i13);
          }
        }
      }, {
        key: "desactivarWebCam",
        value: function desactivarWebCam(usuario) {
          if (this.simulandoDatos) {
            for (var _i14 = 0; _i14 < this.alumnosTabla.length; _i14++) {
              if (usuario._id == this.alumnosTabla[_i14].estudiante._id) {
                this.alumnosTabla[_i14].webcam = false;
              }
            }
          } else {
            this.profesor.desconectarWebCam(usuario);
          }
        }
      }, {
        key: "webCamActivada",
        value: function webCamActivada(usuario) {
          for (var _i15 = 0; _i15 < this.alumnosTabla.length; _i15++) {
            if (usuario._id == this.alumnosTabla[_i15].estudiante._id) {
              this.alumnosTabla[_i15].webcam = true;
              this.alumnosTabla[_i15].cargandoC = false;
            }
          }
        }
      }, {
        key: "webCamDesconectada",
        value: function webCamDesconectada(usuario) {
          for (var _i16 = 0; _i16 < this.alumnosTabla.length; _i16++) {
            if (usuario._id == this.alumnosTabla[_i16].estudiante._id) {
              this.alumnosTabla[_i16].webcam = false;
            }
          }
        }
      }, {
        key: "activarTodasPulseras",
        value: function activarTodasPulseras() {
          for (var _i17 = 0; _i17 < this.alumnosTabla.length; _i17++) {
            if (this.simulandoDatos) {
              this.alumnosTabla[_i17].pulsera = true;
            } else {
              this.activarPulsera(this.alumnosTabla[_i17].estudiante);
            }
          }
          /*for (let i = 0; i < this.actividad.alumnos.length; i++) {
            this.activarPulsera(this.actividad.alumnos[i].estudiante);
          }*/

        }
      }, {
        key: "activarPulsera",
        value: function activarPulsera(usuario) {
          var _this27 = this;

          var _loop5 = function _loop5(_i18) {
            if (usuario._id == _this27.alumnosTabla[_i18].estudiante._id) {
              if (_this27.simulandoDatos) {
                _this27.alumnosTabla[_i18].pulsera = true;
              } else {
                _this27.profesor.conectarPulsera(usuario);

                _this27.alumnosTabla[_i18].cargandoP = true;
                setTimeout(function (async) {
                  _this27.alumnosTabla[_i18].cargandoP = false;
                }, 7000);
              }
            }
          };

          for (var _i18 = 0; _i18 < this.alumnosTabla.length; _i18++) {
            _loop5(_i18);
          }
        }
      }, {
        key: "desactivarPulsera",
        value: function desactivarPulsera(usuario) {
          for (var _i19 = 0; _i19 < this.alumnosTabla.length; _i19++) {
            if (usuario._id == this.alumnosTabla[_i19].estudiante._id) {
              if (this.simulandoDatos) {
                this.alumnosTabla[_i19].pulsera = false;
              } else {
                this.profesor.desconectarPulsera(usuario);
              }
            }
          }
        }
      }, {
        key: "pulseraActivada",
        value: function pulseraActivada(usuario) {
          for (var _i20 = 0; _i20 < this.alumnosTabla.length; _i20++) {
            if (usuario._id == this.alumnosTabla[_i20].estudiante._id) {
              this.alumnosTabla[_i20].pulsera = true;
              this.alumnosTabla[_i20].cargandoP = false;
            }
          }
        }
      }, {
        key: "pulseraDesconectada",
        value: function pulseraDesconectada(usuario) {
          for (var _i21 = 0; _i21 < this.alumnosTabla.length; _i21++) {
            if (usuario._id == this.alumnosTabla[_i21].estudiante._id) {
              this.alumnosTabla[_i21].pulsera = false;
            }
          }
        }
      }, {
        key: "activarTodosLeds",
        value: function activarTodosLeds() {
          for (var _i22 = 0; _i22 < this.alumnosTabla.length; _i22++) {
            if (this.simulandoDatos) {
              this.alumnosTabla[_i22].led = true;
            } else {
              this.activarLed(this.alumnosTabla[_i22].estudiante);
            }
          }
          /*for (let i = 0; i < this.actividad.alumnos.length; i++) {
            this.activarLed(this.actividad.alumnos[i].estudiante);
          }*/

        }
      }, {
        key: "activarLed",
        value: function activarLed(usuario) {
          var _this28 = this;

          var _loop6 = function _loop6(_i23) {
            if (usuario._id == _this28.alumnosTabla[_i23].estudiante._id) {
              if (_this28.simulandoDatos) {
                _this28.alumnosTabla[_i23].led = true;
              } else {
                _this28.profesor.conectarLed(usuario);

                _this28.alumnosTabla[_i23].cargandoL = true;
                setTimeout(function (async) {
                  _this28.alumnosTabla[_i23].cargandoL = false;
                }, 7000);
              }
            }
          };

          for (var _i23 = 0; _i23 < this.alumnosTabla.length; _i23++) {
            _loop6(_i23);
          }
        }
      }, {
        key: "desactivarLed",
        value: function desactivarLed(usuario) {
          if (this.simulandoDatos) {
            for (var _i24 = 0; _i24 < this.alumnosTabla.length; _i24++) {
              if (usuario._id == this.alumnosTabla[_i24].estudiante._id) {
                this.alumnosTabla[_i24].led = false;
              }
            }
          } else {
            this.profesor.desconectarLed(usuario);
          }
        }
      }, {
        key: "ledActivado",
        value: function ledActivado(usuario) {
          for (var _i25 = 0; _i25 < this.alumnosTabla.length; _i25++) {
            if (usuario._id == this.alumnosTabla[_i25].estudiante._id) {
              this.alumnosTabla[_i25].led = true;
              this.alumnosTabla[_i25].cargandoL = false; //console.log("led activado");
            }
          }
        }
      }, {
        key: "ledDesconectada",
        value: function ledDesconectada(usuario) {
          for (var _i26 = 0; _i26 < this.alumnosTabla.length; _i26++) {
            if (usuario._id == this.alumnosTabla[_i26].estudiante._id) {
              this.alumnosTabla[_i26].led = false;
            }
          }
        }
      }, {
        key: "usuarioConectado",
        value: function usuarioConectado(usuario) {
          for (var _i27 = 0; _i27 < this.alumnosTabla.length; _i27++) {
            if (usuario._id == this.alumnosTabla[_i27].estudiante._id) {
              this.alumnosTabla[_i27].estado = 'Conectado';

              if (!this.usuarioYaConectado(usuario)) {
                this.aluConectados.push(usuario);
              }

              this.comprobarDatos();
            }
          }
        }
      }, {
        key: "usuarioYaConectado",
        value: function usuarioYaConectado(usuario) {
          var num = 0;

          for (var _i28 = 0; _i28 < this.aluConectados.length; _i28++) {
            if (this.aluConectados[_i28]._id == usuario._id) {
              num++;
            }
          }

          if (num == 0) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "usuarioDesconectado",
        value: function usuarioDesconectado(usuario) {
          for (var _i29 = 0; _i29 < this.alumnosTabla.length; _i29++) {
            if (usuario._id == this.alumnosTabla[_i29].estudiante._id) {
              this.alumnosTabla[_i29].estado = 'Desconectado';

              for (var j = 0; j < this.aluConectados.length; j++) {
                if (this.aluConectados[j]._id == usuario._id) {
                  this.aluConectados.splice(j, 1);
                }
              }
            }
          }

          this.comprobarDatos();
        }
      }]);

      return VerActividadComponent;
    }();

    VerActividadComponent.ctorParameters = function () {
      return [{
        type: _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_4__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerActividadComponent.prototype, "actividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], VerActividadComponent.prototype, "paginatorA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], VerActividadComponent.prototype, "sortA", void 0);
    VerActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-actividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver-actividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-actividad/ver-actividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver-actividad.component.css */
      "./src/app/profesor/ver-actividad/ver-actividad.component.css")).default]
    })], VerActividadComponent);
    /***/
  },

  /***/
  "./src/app/profesor/ver-alumno/ver-alumno.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/profesor/ver-alumno/ver-alumno.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorVerAlumnoVerAlumnoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grafica{\n    max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvdmVyLWFsdW1uby92ZXItYWx1bW5vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci92ZXItYWx1bW5vL3Zlci1hbHVtbm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFmaWNhe1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/ver-alumno/ver-alumno.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/profesor/ver-alumno/ver-alumno.component.ts ***!
    \*************************************************************/

  /*! exports provided: VerAlumnoComponent */

  /***/
  function srcAppProfesorVerAlumnoVerAlumnoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerAlumnoComponent", function () {
      return VerAlumnoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var VerAlumnoComponent =
    /*#__PURE__*/
    function () {
      function VerAlumnoComponent(profesor) {
        _classCallCheck(this, VerAlumnoComponent);

        this.profesor = profesor;
        this.estados = [{
          nombre: 'alegria'
        }, {
          nombre: 'asco'
        }, {
          nombre: 'miedo'
        }, {
          nombre: 'sorpresa'
        }, {
          nombre: 'tristeza'
        }, {
          nombre: 'ira'
        }, {
          nombre: 'distraido'
        }, {
          nombre: 'concentrado'
        }, {
          nombre: 'frustrado'
        }, {
          nombre: 'motivado'
        }];
        this.estadosConjunto = [{
          nombre: 'Estado emocional',
          estados: [{
            nombre: 'alegria',
            color: 'rgba(255,255,84,1)'
          }, {
            nombre: 'asco',
            color: 'rgba(0,0,0,0.5)'
          }, {
            nombre: 'miedo',
            color: 'rgba(0,150,0,1)'
          }, {
            nombre: 'sorpresa',
            color: 'rgba(89,189,255,1)'
          }, {
            nombre: 'tristeza',
            color: 'rgba(81,81,255,1)'
          }, {
            nombre: 'ira',
            color: 'rgba(255,0,0,1)'
          }]
        }, {
          nombre: 'Concentrado / Distraido',
          estados: [{
            nombre: 'distraido',
            color: 'rgba(70,70,70,1)'
          }, {
            nombre: 'concentrado',
            color: 'rgba(84,255,84,1)'
          }]
        }, {
          nombre: 'Motivado / Frustrado',
          estados: [{
            nombre: 'frustrado',
            color: 'rgba(123,123,123,1)'
          }, {
            nombre: 'motivado',
            color: 'rgba(84,25,80,1)'
          }]
        }];
        this.estadoSeleccionado = 'alegria';
        this.actividades = [];
        this.editarActividadesView = false;
        this.estadoIndividual = [];
        this.estadoGeneral = [];
        this.estadoGlobalAlumno = [{
          nombre: 'alegria',
          datos: 0
        }, {
          nombre: 'asco',
          datos: 0
        }, {
          nombre: 'miedo',
          datos: 0
        }, {
          nombre: 'sorpresa',
          datos: 0
        }, {
          nombre: 'tristeza',
          datos: 0
        }, {
          nombre: 'ira',
          datos: 0
        }, {
          nombre: 'distraido',
          datos: 0
        }, {
          nombre: 'concentrado',
          datos: 0
        }, {
          nombre: 'frustrado',
          datos: 0
        }, {
          nombre: 'motivado',
          datos: 0
        }];
        this.pulsacionesIndividuales = [];
        this.labels = [];
        this.datosIndividuales = {
          alegria: [],
          asco: [],
          miedo: [],
          sorpresa: [],
          tristeza: [],
          ira: [],
          pulsaciones: [],
          distraido: [],
          concentrado: [],
          frustrado: [],
          motivado: []
        };
        this.datosGenerales = {
          alegria: [],
          asco: [],
          miedo: [],
          sorpresa: [],
          tristeza: [],
          ira: [],
          pulsaciones: [],
          distraido: [],
          concentrado: [],
          frustrado: [],
          motivado: []
        };
        this.displayedColumns = ['select', 'nombre', 'profesor', 'estado'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
      }

      _createClass(VerAlumnoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ju = this;
          this.estadoConjuntoSeleccionado = this.estadosConjunto[0];
          this.estadoGeneralSeleccionado = this.estadosConjunto[0];
          $.ajax({
            type: 'POST',
            url: '/verActividadesDeAlumno',
            data: JSON.stringify(ju.alumno),
            success: function success(data) {
              ju.actividades = data;
              ju.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ju.actividades);
              ju.dataSource.paginator = ju.paginator;
              ju.dataSource.sort = ju.sort;
              ju.dataSource.data.forEach(function (row) {
                ju.selection.select(row);
              }); //console.log(ju.actividades);

              ju.computarDatos();
              ju.actualizarGraficas();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
        }
      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this29 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this29.selection.select(row);
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "seleccionarEstado",
        value: function seleccionarEstado(estado) {
          this.estadoSeleccionado = estado.nombre;
          this.actualizarEstados();
        }
      }, {
        key: "seleccionarEstadoConjunto",
        value: function seleccionarEstadoConjunto(estado) {
          this.estadoConjuntoSeleccionado = estado;
          this.actualizarEC();
        }
      }, {
        key: "seleccionarEstadoGeneral",
        value: function seleccionarEstadoGeneral(estado) {
          this.estadoGeneralSeleccionado = estado;
          this.actualizarGeneral();
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          //console.log(this.selection.selected);
          this.actividades.length = 0;
          console.log(this.actividades);
          console.log(this.selection.selected);
          this.actividades = this.selection.selected;
          this.editarActividadesView = false;
          this.estadoGlobalAlumno = [{
            nombre: 'alegria',
            datos: 0
          }, {
            nombre: 'asco',
            datos: 0
          }, {
            nombre: 'miedo',
            datos: 0
          }, {
            nombre: 'sorpresa',
            datos: 0
          }, {
            nombre: 'tristeza',
            datos: 0
          }, {
            nombre: 'ira',
            datos: 0
          }, {
            nombre: 'distraido',
            datos: 0
          }, {
            nombre: 'concentrado',
            datos: 0
          }, {
            nombre: 'frustrado',
            datos: 0
          }, {
            nombre: 'motivado',
            datos: 0
          }];
          this.datosIndividuales = {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          };
          this.datosGenerales = {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          };
          this.labels.length = 0;
          this.computarDatos();
          this.actualizarGraficas();
          document.getElementById("graficas").style.display = "block";
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.profesor.cerrarEstadisticasAlumno();
        }
      }, {
        key: "cancelarEdicion",
        value: function cancelarEdicion() {
          this.editarActividadesView = false;
          document.getElementById("graficas").style.display = "block";
        }
      }, {
        key: "editarActividades",
        value: function editarActividades() {
          var ju = this;
          this.editarActividadesView = true;
          document.getElementById("graficas").style.display = "none";
        }
      }, {
        key: "computarDatos",
        value: function computarDatos() {
          for (var _i30 = 0; _i30 < this.actividades.length; _i30++) {
            this.labels.push(this.actividades[_i30].nombre);
            var alegria = 0;
            var asco = 0;
            var miedo = 0;
            var sorpresa = 0;
            var tristeza = 0;
            var ira = 0;
            var pulsaciones = 0;
            var distraido = 0;
            var concentrado = 0;
            var frustrado = 0;
            var motivado = 0;

            for (var j = 0; j < this.actividades[_i30].resumen.alegria.length; j++) {
              alegria += this.actividades[_i30].resumen.alegria[j].y;
            }

            this.datosGenerales.alegria.push(alegria / this.actividades[_i30].resumen.alegria.length);

            for (var _j12 = 0; _j12 < this.actividades[_i30].resumen.asco.length; _j12++) {
              asco += this.actividades[_i30].resumen.asco[_j12].y;
            }

            this.datosGenerales.asco.push(asco / this.actividades[_i30].resumen.asco.length);

            for (var _j13 = 0; _j13 < this.actividades[_i30].resumen.miedo.length; _j13++) {
              miedo += this.actividades[_i30].resumen.miedo[_j13].y;
            }

            this.datosGenerales.miedo.push(miedo / this.actividades[_i30].resumen.miedo.length);

            for (var _j14 = 0; _j14 < this.actividades[_i30].resumen.sorpresa.length; _j14++) {
              sorpresa += this.actividades[_i30].resumen.sorpresa[_j14].y;
            }

            this.datosGenerales.sorpresa.push(sorpresa / this.actividades[_i30].resumen.sorpresa.length);

            for (var _j15 = 0; _j15 < this.actividades[_i30].resumen.tristeza.length; _j15++) {
              tristeza += this.actividades[_i30].resumen.tristeza[_j15].y;
            }

            this.datosGenerales.tristeza.push(tristeza / this.actividades[_i30].resumen.tristeza.length);

            for (var _j16 = 0; _j16 < this.actividades[_i30].resumen.ira.length; _j16++) {
              ira += this.actividades[_i30].resumen.ira[_j16].y;
            }

            this.datosGenerales.ira.push(ira / this.actividades[_i30].resumen.ira.length);

            for (var _j17 = 0; _j17 < this.actividades[_i30].resumen.pulsaciones.length; _j17++) {
              pulsaciones += this.actividades[_i30].resumen.pulsaciones[_j17].y;
            }

            this.datosGenerales.pulsaciones.push(pulsaciones / this.actividades[_i30].resumen.pulsaciones.length);

            for (var _j18 = 0; _j18 < this.actividades[_i30].resumen.distraido.length; _j18++) {
              distraido += this.actividades[_i30].resumen.distraido[_j18].y;
            }

            for (var _j19 = 0; _j19 < this.actividades[_i30].resumen.concentrado.length; _j19++) {
              concentrado += this.actividades[_i30].resumen.concentrado[_j19].y;
            }

            this.datosGenerales.distraido.push(distraido * 100 / (distraido + concentrado));
            this.datosGenerales.concentrado.push(concentrado * 100 / (distraido + concentrado));

            for (var _j20 = 0; _j20 < this.actividades[_i30].resumen.frustrado.length; _j20++) {
              frustrado += this.actividades[_i30].resumen.frustrado[_j20].y;
            }

            for (var _j21 = 0; _j21 < this.actividades[_i30].resumen.motivado.length; _j21++) {
              motivado += this.actividades[_i30].resumen.motivado[_j21].y;
            }

            this.datosGenerales.frustrado.push(frustrado * 100 / (frustrado + motivado));
            this.datosGenerales.motivado.push(motivado * 100 / (frustrado + motivado));

            for (var _j22 = 0; _j22 < this.actividades[_i30].alumnos.length; _j22++) {
              if (this.actividades[_i30].alumnos[_j22].estudiante._id == this.alumno._id) {
                for (var q = 0; q < this.estados.length; q++) {
                  var a = 0;
                  var num = 0;

                  for (var k = 0; k < this.actividades[_i30].alumnos[_j22].datos[this.estados[q].nombre].length; k++) {
                    if (this.actividades[_i30].alumnos[_j22].datos[this.estados[q].nombre][k].y != null || this.actividades[_i30].alumnos[_j22].datos[this.estados[q].nombre][k].y != undefined) {
                      a += this.actividades[_i30].alumnos[_j22].datos[this.estados[q].nombre][k].y;
                      num++;
                    }
                  }

                  this.datosIndividuales[this.estados[q].nombre].push(a / num);
                  num = 0;
                }

                var a = 0;

                for (var x = 0; x < this.actividades[_i30].alumnos[_j22].datos.pulsaciones.length; x++) {
                  a += this.actividades[_i30].alumnos[_j22].datos.pulsaciones[x].y;
                }

                this.datosIndividuales.pulsaciones.push(a / this.actividades[_i30].alumnos[_j22].datos.pulsaciones.length);
              }
            }
          }

          for (var _i31 = 0; _i31 < this.estadoGlobalAlumno.length; _i31++) {
            var a = 0; //console.log(this.datosIndividuales)

            for (var _j23 = 0; _j23 < this.datosIndividuales[this.estadoGlobalAlumno[_i31].nombre].length; _j23++) {
              //console.log(this.datosIndividuales[this.estadoGlobalAlumno[i].nombre][j]);
              a += this.datosIndividuales[this.estadoGlobalAlumno[_i31].nombre][_j23];
            } //console.log(a);


            this.estadoGlobalAlumno[_i31].datos = a / this.datosIndividuales[this.estadoGlobalAlumno[_i31].nombre].length;
          }
        }
      }, {
        key: "actualizarGraficas",
        value: function actualizarGraficas() {
          this.actualizarEstados();
          this.actualizarEC();
          this.actualizarGeneral();
        }
      }, {
        key: "actualizarEstados",
        value: function actualizarEstados() {
          this.configGrafEstados = {
            type: 'line',
            data: {
              datasets: [{
                type: 'line',
                label: 'Pulsaciones ' + this.alumno.nombre,
                data: this.datosIndividuales.pulsaciones,
                borderColor: '#E45F4D',
                backgroundColor: '#E45F4D',
                fill: false,
                yAxisID: 'y-axis-2'
              }, {
                type: 'line',
                label: 'Media ' + this.estadoSeleccionado,
                data: this.datosGenerales[this.estadoSeleccionado],
                backgroundColor: 'rgba(74,154,216,0.55)',
                borderColor: 'rgba(74,154,216,0.55)',
                fill: false,
                yAxisID: 'y-axis-1'
              }, {
                type: 'bar',
                label: '' + this.estadoSeleccionado + ' de ' + this.alumno.nombre,
                data: this.datosIndividuales[this.estadoSeleccionado],
                backgroundColor: 'rgba(50,166,255,0.9)',
                borderColor: 'rgba(50,166,255,0.9)',
                barPercentage: 0.9,
                yAxisID: 'y-axis-1'
              }],
              labels: this.labels
            },
            options: {
              responsive: true,
              scales: {
                xAxes: [{
                  gridLines: {
                    offsetGridLines: false
                  }
                }],
                yAxes: [{
                  label: 'Porcentaje',
                  type: "linear",
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Porcentaje'
                  },
                  position: "left",
                  id: "y-axis-1",
                  gridLines: {
                    display: false
                  },
                  labels: {
                    show: true
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }, {
                  label: 'Pulsaciones',
                  type: "linear",
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Pulsaciones'
                  },
                  position: "right",
                  id: "y-axis-2",
                  gridLines: {
                    display: false
                  },
                  labels: {
                    show: true
                  }
                }]
              }
            }
          };

          if (this.graficaEstados != null) {
            this.graficaEstados.destroy();
          }

          this.graficaEstados = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"]('progresoTotal', this.configGrafEstados);
        }
      }, {
        key: "actualizarEC",
        value: function actualizarEC() {
          var datos = [];

          for (var _i32 = 0; _i32 < this.estadoConjuntoSeleccionado.estados.length; _i32++) {
            datos.push({
              type: 'bar',
              label: '' + this.estadoConjuntoSeleccionado.estados[_i32].nombre,
              data: this.datosIndividuales[this.estadoConjuntoSeleccionado.estados[_i32].nombre],
              backgroundColor: this.estadoConjuntoSeleccionado.estados[_i32].color,
              borderColor: this.estadoConjuntoSeleccionado.estados[_i32].color,
              barPercentage: 0.9
            });
          }

          this.configGrafEstados = {
            type: 'bar',
            data: {
              datasets: datos,
              labels: this.labels
            },
            options: {
              responsive: true,
              scales: {
                xAxes: [{
                  gridLines: {
                    offsetGridLines: false
                  },
                  stacked: true
                }],
                yAxes: [{
                  label: 'Porcentaje',
                  type: "linear",
                  stacked: true,
                  display: true,
                  position: "left",
                  id: "y-axis-1",
                  gridLines: {
                    display: false
                  },
                  labels: {
                    show: true
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          };

          if (this.graficaEstadosConjuntos != null) {
            this.graficaEstadosConjuntos.destroy();
          }

          this.graficaEstadosConjuntos = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"]('progresoConjuntoTotal', this.configGrafEstados);
        }
      }, {
        key: "actualizarGeneral",
        value: function actualizarGeneral() {
          var labels = [];
          var colores = [];
          var datos = []; //console.log(this.estadoGlobalAlumno);

          for (var _i33 = 0; _i33 < this.estadoGeneralSeleccionado.estados.length; _i33++) {
            /*datos.push(
              {
                type: 'bar',
                label: 'Datos ' + this.estadoConjuntoSeleccionado.estados[i].nombre + ' de ' + this.alumno.nombre,
                data: this.datosIndividuales[this.estadoConjuntoSeleccionado.estados[i].nombre],
                backgroundColor: this.estadoConjuntoSeleccionado.estados[i].color,
                borderColor: this.estadoConjuntoSeleccionado.estados[i].color,
                barPercentage: 0.9,
              }
            );*/
            for (var j = 0; j < this.estadoGlobalAlumno.length; j++) {
              if (this.estadoGlobalAlumno[j].nombre == this.estadoGeneralSeleccionado.estados[_i33].nombre) {
                labels.push(this.estadoGeneralSeleccionado.estados[_i33].nombre);
                colores.push(this.estadoGeneralSeleccionado.estados[_i33].color);
                datos.push(this.estadoGlobalAlumno[j].datos);
              }
            }
          } //console.log(datos);
          //console.log(labels);


          this.configEstadoGlobal = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                backgroundColor: colores,
                data: datos
              }]
            },
            options: {
              responsive: true,
              cutoutPercentage: 50,
              borderColor: 'rgba(12,12,12,1)',
              legend: {
                position: 'right'
              }
            }
          };

          if (this.graficaEstadoGlobal != null) {
            this.graficaEstadoGlobal.destroy();
          }

          this.graficaEstadoGlobal = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"]('resumenGeneral', this.configEstadoGlobal);
        }
      }, {
        key: "irHome",
        value: function irHome() {
          this.profesor.abrirActividadActual();
        }
      }]);

      return VerAlumnoComponent;
    }();

    VerAlumnoComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_2__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerAlumnoComponent.prototype, "alumno", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], VerAlumnoComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], VerAlumnoComponent.prototype, "sort", void 0);
    VerAlumnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-alumno',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver-alumno.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-alumno/ver-alumno.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver-alumno.component.css */
      "./src/app/profesor/ver-alumno/ver-alumno.component.css")).default]
    })], VerAlumnoComponent);
    /***/
  },

  /***/
  "./src/app/profesor/ver-clase/ver-clase.component.css":
  /*!************************************************************!*\
    !*** ./src/app/profesor/ver-clase/ver-clase.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorVerClaseVerClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".boton-tabla {\n  width: 40px;\n}\n\n.seccion-edit:hover {\n  background-color: #fff;\n  cursor: default;\n}\n\n.element-row {\n  cursor: pointer;\n}\n\n.element-row:hover {\n  background: #f5f5f5;\n}\n\n.animacion {\n  /*position: absolute;*/\n\nanimation-name: parpadeo;\nanimation-duration: 1s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n\n-webkit-animation-name:parpadeo;\n-webkit-animation-duration: 1s;\n-webkit-animation-timing-function: linear;\n-webkit-animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes parpadeo {  \n0% { opacity: 1.0; }\n50% { opacity: 0.0; }\n100% { opacity: 1.0; }\n}\n\n@keyframes parpadeo {  \n0% { opacity: 1.0; }\n50% { opacity: 0.0; }\n100% { opacity: 1.0; }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvdmVyLWNsYXNlL3Zlci1jbGFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCOztBQUV4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLGlDQUFpQztBQUNqQyxtQ0FBbUM7O0FBRW5DLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQzs7QUFRQTtBQUNBLEtBQUssWUFBWSxFQUFFO0FBQ25CLE1BQU0sWUFBWSxFQUFFO0FBQ3BCLE9BQU8sWUFBWSxFQUFFO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSyxZQUFZLEVBQUU7QUFDbkIsTUFBTSxZQUFZLEVBQUU7QUFDcEIsT0FBTyxZQUFZLEVBQUU7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci92ZXItY2xhc2UvdmVyLWNsYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b24tdGFibGEge1xuICB3aWR0aDogNDBweDtcbn1cblxuLnNlY2Npb24tZWRpdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmVsZW1lbnQtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWxlbWVudC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4uYW5pbWFjaW9uIHtcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cblxuYW5pbWF0aW9uLW5hbWU6IHBhcnBhZGVvO1xuYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbmFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXG4td2Via2l0LWFuaW1hdGlvbi1uYW1lOnBhcnBhZGVvO1xuLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4td2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgcGFycGFkZW97ICBcbjAlIHsgb3BhY2l0eTogMS4wOyB9XG41MCUgeyBvcGFjaXR5OiAwLjA7IH1cbjEwMCUgeyBvcGFjaXR5OiAxLjA7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHBhcnBhZGVvIHsgIFxuMCUgeyBvcGFjaXR5OiAxLjA7IH1cbjUwJSB7IG9wYWNpdHk6IDAuMDsgfVxuMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIHBhcnBhZGVvIHsgIFxuMCUgeyBvcGFjaXR5OiAxLjA7IH1cbjUwJSB7IG9wYWNpdHk6IDAuMDsgfVxuMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/ver-clase/ver-clase.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/profesor/ver-clase/ver-clase.component.ts ***!
    \***********************************************************/

  /*! exports provided: VerClaseComponent */

  /***/
  function srcAppProfesorVerClaseVerClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerClaseComponent", function () {
      return VerClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var VerClaseComponent =
    /*#__PURE__*/
    function () {
      function VerClaseComponent(profesor, _snackBar) {
        _classCallCheck(this, VerClaseComponent);

        this.profesor = profesor;
        this._snackBar = _snackBar;
        this.actividades = [];
        this.actividad = null;
        this.vengoDeProfesor = false;
        this.creandoActividad = false;
        this.numeroActFinalizadas = 0;
        this.numeroActComenzadas = 0;
        this.numeroActSinComenzar = 0;
        this.editarActividad = false;
        this.verEstadisticasClase = false;
        this.listaAlumnos = []; //Tabla de actividades

        this.displayedColumnsActividades = ['nombre', 'profesor', 'estado', 'acciones', 'editarborrar'];
      }

      _createClass(VerClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee46() {
            var ju;
            return regeneratorRuntime.wrap(function _callee46$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    /*var ju = this;
                    console.log(this.clase);
                    for (var id in this.clase.actividades) {
                      ju.actividades.push(this.clase.actividades[id]);
                    }*/
                    console.log(this.clase);
                    this.actualizarClase();
                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context48.next = 5;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                    });

                  case 5:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.actividades = [];
          this.actividades.length = 0;

          for (var id in this.clase.actividades) {
            this.actividades.push(this.clase.actividades[id]);
          } //console.log(this.actividades.reverse());


          this.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.actividades.reverse());
          this.dataSourceActividades.paginator = this.paginatorA;
          this.dataSourceActividades.sort = this.sortA;
        }
      }, {
        key: "actualizarClase",
        value: function actualizarClase() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee47() {
            var ju;
            return regeneratorRuntime.wrap(function _callee47$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    ju = this;
                    /*$.getJSON("/verClase", this.clase, function (data) {
                      console.log(data);
                      ju.clase = data;
                      ju.actividades.length = 0;
                      for (var id in ju.clase.actividades) {
                        ju.actividades.push(this.clase.actividades[id]);
                      }
                      ju.dataSourceActividades = new MatTableDataSource(ju.actividades);
                      ju.dataSourceActividades.paginator = ju.paginatorA;
                      ju.dataSourceActividades.sort = ju.sortA;
                    });*/

                    $.ajax({
                      type: 'POST',
                      url: '/verClase',
                      data: JSON.stringify(this.clase),
                      success: function success(data) {
                        console.log(data);
                        ju.clase = data;
                        console.log(ju.clase);
                        ju.actividades.length = 0;

                        for (var id in ju.clase.actividades) {
                          ju.actividades.push(ju.clase.actividades[id]);
                        } //console.log(ju.actividades.reverse());


                        ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ju.actividades.reverse());
                        ju.dataSourceActividades.paginator = ju.paginatorA;
                        ju.dataSourceActividades.sort = ju.sortA;
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 2:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }, {
        key: "applyFilterA",
        value: function applyFilterA(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceActividades.filter = filterValue;
        }
      }, {
        key: "cerrarClase",
        value: function cerrarClase() {
          this.profesor.cerrarClase();
        }
      }, {
        key: "abrirEstadisticasClase",
        value: function abrirEstadisticasClase() {
          this.verEstadisticasClase = true;
        }
      }, {
        key: "cerrarEstadisticasClase",
        value: function cerrarEstadisticasClase() {
          this.verEstadisticasClase = false;
        }
      }, {
        key: "actualizarActividad",
        value: function actualizarActividad(actividad) {
          var ju = this;
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(actividad),
            success: function success(data) {
              $.ajax({
                type: 'POST',
                url: '/verClase',
                data: JSON.stringify(this.clase),
                success: function success(data) {
                  console.log(data);
                  ju.clase = data;
                  console.log(ju.clase);
                  ju.actividades.length = 0;

                  for (var id in ju.clase.actividades) {
                    ju.actividades.push(ju.clase.actividades[id]);
                  } //console.log(ju.actividades.reverse());


                  ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ju.actividades.reverse());
                  ju.dataSourceActividades.paginator = ju.paginatorA;
                  ju.dataSourceActividades.sort = ju.sortA;
                  ju.editarActividad = false;
                },
                contentType: 'application/json',
                dataType: 'json'
              });
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Actividad '" + actividad.nombre + "' editada",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No entrar.',
                confirmButtonText: 'Entrar en la actividad',
                timer: 4000,
                timerProgressBar: true
              }).then(function (result) {
                if (result.value) {
                  ju.abrirActividad(actividad);
                }
              }); //ju.menActividadEditada();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "crearActividad",
        value: function crearActividad() {
          //console.log("creamos una actividad");
          this.creandoActividad = true;
          var ju = this;
          var actividadCreate = {
            nombre: '',
            profesor: '',
            fecha: '',
            alumnos: [],
            estado: 'Creada',
            resumen: {
              alegria: [],
              asco: [],
              miedo: [],
              sorpresa: [],
              tristeza: [],
              ira: [],
              pulsaciones: [],
              tiempo: [],
              distraido: [],
              concentrado: [],
              frustrado: [],
              motivado: []
            },
            clase: {
              _id: this.clase._id,
              nombre: this.clase.nombre
            }
          };
          var num = 0;

          for (var i in this.clase.actividades) {
            num++;
          }

          num++;
          actividadCreate.nombre = this.clase.nombre + ' ' + num;
          actividadCreate.profesor = this.clase.profesor;
          actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          var arrayAlumnos = [];

          for (var _i34 = 0; _i34 < this.clase.alumnos.length; _i34++) {
            arrayAlumnos.push({
              estudiante: this.clase.alumnos[_i34].estudiante,
              id_item: '',
              posicion: this.clase.alumnos[_i34].posicion,
              sensorWebCam: this.clase.alumnos[_i34].sensorWebCam,
              sensorPulsera: this.clase.alumnos[_i34].sensorPulsera,
              sensorLed: this.clase.alumnos[_i34].sensorLed,
              datos: {
                alegria: [],
                asco: [],
                miedo: [],
                sorpresa: [],
                tristeza: [],
                ira: [],
                pulsaciones: [],
                tiempo: [],
                distraido: [],
                concentrado: [],
                frustrado: [],
                motivado: []
              }
            });
          }

          actividadCreate.alumnos = arrayAlumnos;
          console.log("estamos a punto de crearla");
          $.ajax({
            type: 'POST',
            url: '/agregarActividadEnClase',
            data: JSON.stringify({
              clase: this.clase,
              act: actividadCreate
            }),
            success: function success(data) {
              //ju.clase = data;
              ju.creandoActividad = false;
              console.log("Actividad creada");
              console.log(data); //ju.ultimaActividadCreada = data;

              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Actividad '" + data.nombre + "' creada",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No entrar.',
                confirmButtonText: 'Entrar en la actividad',
                timer: 4000,
                timerProgressBar: true
              }).then(function (result) {
                if (result.value) {
                  ju.abrirActividad(data);
                }
              }); //console.log(data);

              ju.actualizarClase(); //ju.menActividadCreada();
              //abrirActividad
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "crearActividadFuera",
        value: function crearActividadFuera(clase) {
          var ju = this;
          var actividadCreate = {
            nombre: '',
            profesor: '',
            fecha: '',
            alumnos: [],
            estado: 'Creada',
            resumen: {
              alegria: [],
              asco: [],
              miedo: [],
              sorpresa: [],
              tristeza: [],
              ira: [],
              pulsaciones: [],
              tiempo: [],
              distraido: [],
              concentrado: [],
              frustrado: [],
              motivado: []
            },
            clase: clase
          };
          actividadCreate.nombre = clase.nombre + ' ' + moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          actividadCreate.profesor = clase.profesor;
          actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          var arrayAlumnos = [];

          for (var _i35 = 0; _i35 < clase.alumnos.length; _i35++) {
            arrayAlumnos.push({
              estudiante: clase.alumnos[_i35].estudiante,
              id_item: '',
              posicion: clase.alumnos[_i35].posicion,
              sensorWebCam: clase.alumnos[_i35].sensorWebCam,
              sensorPulsera: clase.alumnos[_i35].sensorPulsera,
              sensorLed: clase.alumnos[_i35].sensorLed,
              datos: {
                alegria: [],
                asco: [],
                miedo: [],
                sorpresa: [],
                tristeza: [],
                ira: [],
                pulsaciones: [],
                tiempo: [],
                distraido: [],
                concentrado: [],
                frustrado: [],
                motivado: []
              }
            });
          }

          actividadCreate.alumnos = arrayAlumnos;
          $.ajax({
            type: 'POST',
            url: '/agregarActividadEnClase',
            data: JSON.stringify({
              clase: clase,
              act: actividadCreate
            }),
            success: function success(data) {
              ju.clase = data; //ju.ultimaActividadCreada = data;

              console.log("Clase Actualizada");
              console.log(data);
              ju.actualizarClase(); //ju.menActividadCreada();
              //abrirActividad
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "abrirActividad",
        value: function abrirActividad(clase) {
          this.profesor.abrirActividad(clase);
        }
      }, {
        key: "editarA",
        value: function editarA(actividad) {
          this.editarActividad = true;
          this.actividad = actividad;
          this.vengoDeProfesor = false;
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.editarActividad = false;
          this.actividad = null;
        }
      }, {
        key: "borrarA",
        value: function borrarA(act) {
          var ju = this;
          Swal.fire({
            title: '¿Estas seguro?',
            text: "La actividad '" + act.nombre + "' se eliminará",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, deseo borrarlo'
          }).then(function (result) {
            if (result.value) {
              Swal.fire('Borrado!', 'La actividad ' + act.nombre + ' se ha borrado.', 'success', $.ajax({
                type: 'DELETE',
                url: '/eliminarActividad',
                data: JSON.stringify(act),
                success: function success(data) {
                  console.log('actividad borrada');
                  console.log(data);
                  ju.clase = data; //console.log("Actividad eliminado");

                  ju.actualizarClase(); //ju.menActividadBorrada();
                },
                contentType: 'application/json',
                dataType: 'json'
              }));
            }
          });
        }
      }, {
        key: "menActividadBorrada",
        value: function menActividadBorrada() {
          var men = this._snackBar.open('Actividad Borrada', 'Cerrar', {
            duration: 1000
          });
        }
        /*menActividadCreada() {
          let men = this._snackBar.open('Actividad Creada', 'Abrir', {
            duration: 5000,
          });
             men.onAction().subscribe(() => {
            this.gestionClases = false;
            this.gestionActividades = true;
            this.crearClase = false;
            this.editarClase = false;
            this.verClase = false;
            this.abrirActividad(this.ultimaActividadCreada);
          })
        }*/

      }, {
        key: "irHome",
        value: function irHome() {
          this.profesor.abrirActividadActual();
        }
      }]);

      return VerClaseComponent;
    }();

    VerClaseComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_3__["ProfesorComponent"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerClaseComponent.prototype, "clase", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], VerClaseComponent.prototype, "paginatorA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], VerClaseComponent.prototype, "sortA", void 0);
    VerClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-clase/ver-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver-clase.component.css */
      "./src/app/profesor/ver-clase/ver-clase.component.css")).default]
    })], VerClaseComponent);
    /***/
  },

  /***/
  "./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorVerEstadisticasClaseVerEstadisticasClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grafica{\n    max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvdmVyLWVzdGFkaXN0aWNhcy1jbGFzZS92ZXItZXN0YWRpc3RpY2FzLWNsYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci92ZXItZXN0YWRpc3RpY2FzLWNsYXNlL3Zlci1lc3RhZGlzdGljYXMtY2xhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFmaWNhe1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: VerEstadisticasClaseComponent */

  /***/
  function srcAppProfesorVerEstadisticasClaseVerEstadisticasClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerEstadisticasClaseComponent", function () {
      return VerEstadisticasClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var VerEstadisticasClaseComponent =
    /*#__PURE__*/
    function () {
      function VerEstadisticasClaseComponent(profesor) {
        _classCallCheck(this, VerEstadisticasClaseComponent);

        this.profesor = profesor;
        this.estados = [{
          nombre: 'alegria'
        }, {
          nombre: 'asco'
        }, {
          nombre: 'miedo'
        }, {
          nombre: 'sorpresa'
        }, {
          nombre: 'tristeza'
        }, {
          nombre: 'ira'
        }, {
          nombre: 'distraido'
        }, {
          nombre: 'concentrado'
        }, {
          nombre: 'frustrado'
        }, {
          nombre: 'motivado'
        }];
        this.estadosConjunto = [{
          nombre: 'Estado emocional',
          estados: [{
            nombre: 'alegria',
            color: 'rgba(255,255,84,1)'
          }, {
            nombre: 'asco',
            color: 'rgba(0,0,0,0.5)'
          }, {
            nombre: 'miedo',
            color: 'rgba(0,150,0,1)'
          }, {
            nombre: 'sorpresa',
            color: 'rgba(89,189,255,1)'
          }, {
            nombre: 'tristeza',
            color: 'rgba(81,81,255,1)'
          }, {
            nombre: 'ira',
            color: 'rgba(255,0,0,1)'
          }]
        }, {
          nombre: 'Concentrado / Distraido',
          estados: [{
            nombre: 'distraido',
            color: 'rgba(70,70,70,1)'
          }, {
            nombre: 'concentrado',
            color: 'rgba(84,255,84,1)'
          }]
        }, {
          nombre: 'Motivado / Frustrado',
          estados: [{
            nombre: 'frustrado',
            color: 'rgba(123,123,123,1)'
          }, {
            nombre: 'motivado',
            color: 'rgba(84,25,80,1)'
          }]
        }];
        this.estadoSeleccionado = 'alegria';
        this.actividades = [];
        this.editarActividadesView = false;
        this.estadoIndividual = [];
        this.estadoGeneral = [];
        this.estadoGlobalAlumno = [{
          nombre: 'alegria',
          datos: 0
        }, {
          nombre: 'asco',
          datos: 0
        }, {
          nombre: 'miedo',
          datos: 0
        }, {
          nombre: 'sorpresa',
          datos: 0
        }, {
          nombre: 'tristeza',
          datos: 0
        }, {
          nombre: 'ira',
          datos: 0
        }, {
          nombre: 'distraido',
          datos: 0
        }, {
          nombre: 'concentrado',
          datos: 0
        }, {
          nombre: 'frustrado',
          datos: 0
        }, {
          nombre: 'motivado',
          datos: 0
        }];
        this.pulsacionesIndividuales = [];
        this.labels = [];
        this.datosIndividuales = {
          alegria: [],
          asco: [],
          miedo: [],
          sorpresa: [],
          tristeza: [],
          ira: [],
          pulsaciones: [],
          distraido: [],
          concentrado: [],
          frustrado: [],
          motivado: []
        };
        this.datosGenerales = {
          alegria: [],
          asco: [],
          miedo: [],
          sorpresa: [],
          tristeza: [],
          ira: [],
          pulsaciones: [],
          distraido: [],
          concentrado: [],
          frustrado: [],
          motivado: []
        };
        this.displayedColumns = ['select', 'nombre', 'profesor', 'estado'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
      }

      _createClass(VerEstadisticasClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          console.log(this.clase);
          this.estadoConjuntoSeleccionado = this.estadosConjunto[0];
          this.estadoGeneralSeleccionado = this.estadosConjunto[0];
          var actividades = this.clase.actividades;

          for (var item in actividades) {
            this.actividades.push(actividades[item]);
          }

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.actividades);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource.data.forEach(function (row) {
            _this30.selection.select(row);
          });
          this.computarDatos();
          this.actualizarGraficas();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
        }
      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this31 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this31.selection.select(row);
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.actividades.length = 0;
          console.log(this.actividades);
          console.log(this.selection.selected);
          this.actividades = this.selection.selected;
          this.editarActividadesView = false;
          this.estadoGlobalAlumno = [{
            nombre: 'alegria',
            datos: 0
          }, {
            nombre: 'asco',
            datos: 0
          }, {
            nombre: 'miedo',
            datos: 0
          }, {
            nombre: 'sorpresa',
            datos: 0
          }, {
            nombre: 'tristeza',
            datos: 0
          }, {
            nombre: 'ira',
            datos: 0
          }, {
            nombre: 'distraido',
            datos: 0
          }, {
            nombre: 'concentrado',
            datos: 0
          }, {
            nombre: 'frustrado',
            datos: 0
          }, {
            nombre: 'motivado',
            datos: 0
          }];
          this.datosIndividuales = {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          };
          this.datosGenerales = {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          };
          this.labels.length = 0;
          this.computarDatos();
          this.actualizarGraficas();
          document.getElementById("graficas").style.display = "block";
        }
      }, {
        key: "seleccionarEstado",
        value: function seleccionarEstado(estado) {
          this.estadoSeleccionado = estado.nombre;
          this.actualizarEstados();
        }
      }, {
        key: "seleccionarEstadoConjunto",
        value: function seleccionarEstadoConjunto(estado) {
          this.estadoConjuntoSeleccionado = estado;
          this.actualizarEC();
        }
      }, {
        key: "seleccionarEstadoGeneral",
        value: function seleccionarEstadoGeneral(estado) {
          this.estadoGeneralSeleccionado = estado;
          this.actualizarGeneral();
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          //this.verClase.cerrarEstadisticasClase();
          this.profesor.cerrarEstadisticasClase();
        }
      }, {
        key: "cancelarEdicion",
        value: function cancelarEdicion() {
          this.editarActividadesView = false;
          document.getElementById("graficas").style.display = "block";
        }
      }, {
        key: "editarActividades",
        value: function editarActividades() {
          document.getElementById("graficas").style.display = "none";
          this.editarActividadesView = true;
          var actividades = this.clase.actividades;
          this.actividades.length = 0;

          for (var item in actividades) {
            this.actividades.push(actividades[item]);
          }

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.actividades);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "computarDatos",
        value: function computarDatos() {
          for (var _i36 = 0; _i36 < this.actividades.length; _i36++) {
            this.labels.push(this.actividades[_i36].nombre);
            var alegria = 0;
            var asco = 0;
            var miedo = 0;
            var sorpresa = 0;
            var tristeza = 0;
            var ira = 0;
            var pulsaciones = 0;
            var distraido = 0;
            var concentrado = 0;
            var frustrado = 0;
            var motivado = 0;

            for (var j = 0; j < this.actividades[_i36].resumen.alegria.length; j++) {
              alegria += this.actividades[_i36].resumen.alegria[j].y;
            }

            this.datosGenerales.alegria.push(alegria / this.actividades[_i36].resumen.alegria.length);

            for (var _j24 = 0; _j24 < this.actividades[_i36].resumen.asco.length; _j24++) {
              asco += this.actividades[_i36].resumen.asco[_j24].y;
            }

            this.datosGenerales.asco.push(asco / this.actividades[_i36].resumen.asco.length);

            for (var _j25 = 0; _j25 < this.actividades[_i36].resumen.miedo.length; _j25++) {
              miedo += this.actividades[_i36].resumen.miedo[_j25].y;
            }

            this.datosGenerales.miedo.push(miedo / this.actividades[_i36].resumen.miedo.length);

            for (var _j26 = 0; _j26 < this.actividades[_i36].resumen.sorpresa.length; _j26++) {
              sorpresa += this.actividades[_i36].resumen.sorpresa[_j26].y;
            }

            this.datosGenerales.sorpresa.push(sorpresa / this.actividades[_i36].resumen.sorpresa.length);

            for (var _j27 = 0; _j27 < this.actividades[_i36].resumen.tristeza.length; _j27++) {
              tristeza += this.actividades[_i36].resumen.tristeza[_j27].y;
            }

            this.datosGenerales.tristeza.push(tristeza / this.actividades[_i36].resumen.tristeza.length);

            for (var _j28 = 0; _j28 < this.actividades[_i36].resumen.ira.length; _j28++) {
              ira += this.actividades[_i36].resumen.ira[_j28].y;
            }

            this.datosGenerales.ira.push(ira / this.actividades[_i36].resumen.ira.length);

            for (var _j29 = 0; _j29 < this.actividades[_i36].resumen.pulsaciones.length; _j29++) {
              pulsaciones += this.actividades[_i36].resumen.pulsaciones[_j29].y;
            }

            this.datosGenerales.pulsaciones.push(pulsaciones / this.actividades[_i36].resumen.pulsaciones.length);

            for (var _j30 = 0; _j30 < this.actividades[_i36].resumen.distraido.length; _j30++) {
              distraido += this.actividades[_i36].resumen.distraido[_j30].y;
            }

            for (var _j31 = 0; _j31 < this.actividades[_i36].resumen.concentrado.length; _j31++) {
              concentrado += this.actividades[_i36].resumen.asco[_j31].y;
            }

            this.datosGenerales.distraido.push(distraido * 100 / (distraido + concentrado));
            this.datosGenerales.concentrado.push(concentrado * 100 / (distraido + concentrado));

            for (var _j32 = 0; _j32 < this.actividades[_i36].resumen.frustrado.length; _j32++) {
              frustrado += this.actividades[_i36].resumen.frustrado[_j32].y;
            }

            for (var _j33 = 0; _j33 < this.actividades[_i36].resumen.motivado.length; _j33++) {
              motivado += this.actividades[_i36].resumen.motivado[_j33].y;
            }

            this.datosGenerales.frustrado.push(frustrado * 100 / (frustrado + motivado));
            this.datosGenerales.motivado.push(motivado * 100 / (frustrado + motivado));
            /*for (let j = 0; j < this.actividades[i].alumnos.length; j++) {
              if (this.actividades[i].alumnos[j].estudiante._id == this.alumno._id) {
                for (let q = 0; q < this.estados.length; q++) {
                  var a = 0;
                  for (let k = 0; k < this.actividades[i].alumnos[j].datos[this.estados[q].nombre].length; k++) {
                    a += this.actividades[i].alumnos[j].datos[this.estados[q].nombre][k].y;
                  }
                  this.datosIndividuales[this.estados[q].nombre].push(a / this.actividades[i].alumnos[j].datos[this.estados[q].nombre].length)
                }
                var a = 0;
                for (let x = 0; x < this.actividades[i].alumnos[j].datos.pulsaciones.length; x++) {
                  a += this.actividades[i].alumnos[j].datos.pulsaciones[x].y;
                }
                this.datosIndividuales.pulsaciones.push(a / this.actividades[i].alumnos[j].datos.pulsaciones.length);
              }
            }*/
          }
          /*for (let i = 0; i < this.estadoGlobalAlumno.length; i++) {
            var a = 0;
            console.log(this.datosIndividuales)
            for (let j = 0; j < this.datosIndividuales[this.estadoGlobalAlumno[i].nombre].length; j++) {
              console.log(this.datosIndividuales[this.estadoGlobalAlumno[i].nombre][j]);
              a += this.datosIndividuales[this.estadoGlobalAlumno[i].nombre][j];
            }
            console.log(a);
            this.estadoGlobalAlumno[i].datos = (a / this.datosIndividuales[this.estadoGlobalAlumno[i].nombre].length);
          }*/

        }
      }, {
        key: "actualizarGraficas",
        value: function actualizarGraficas() {
          this.actualizarEstados();
          this.actualizarEC(); //this.actualizarGeneral();
        }
      }, {
        key: "actualizarEstados",
        value: function actualizarEstados() {
          this.configGrafEstados = {
            type: 'line',
            data: {
              datasets: [{
                type: 'line',
                label: 'Pulsaciones de media',
                data: this.datosGenerales.pulsaciones,
                borderColor: '#E45F4D',
                backgroundColor: '#E45F4D',
                fill: false,
                yAxisID: 'y-axis-2'
              }, {
                type: 'bar',
                label: 'Media de alumnos de ' + this.estadoSeleccionado,
                data: this.datosGenerales[this.estadoSeleccionado],
                backgroundColor: 'rgba(74,154,216,0.55)',
                borderColor: 'rgba(74,154,216,0.55)',
                fill: false,
                yAxisID: 'y-axis-1'
              }],
              labels: this.labels
            },
            options: {
              responsive: true,
              scales: {
                xAxes: [{
                  gridLines: {
                    offsetGridLines: false
                  },
                  stacked: true
                }],
                yAxes: [{
                  label: 'Porcentaje',
                  type: "linear",
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Porcentaje'
                  },
                  position: "left",
                  id: "y-axis-1",
                  gridLines: {
                    display: false
                  },
                  labels: {
                    show: true
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }, {
                  label: 'Pulsaciones',
                  type: "linear",
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Pulsaciones'
                  },
                  position: "right",
                  id: "y-axis-2",
                  gridLines: {
                    display: false
                  },
                  labels: {
                    show: true
                  }
                }]
              }
            }
          };

          if (this.graficaEstados != null) {
            this.graficaEstados.destroy();
          }

          this.graficaEstados = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('progresoTotal', this.configGrafEstados);
        }
      }, {
        key: "actualizarEC",
        value: function actualizarEC() {
          var datos = [];

          for (var _i37 = 0; _i37 < this.estadoConjuntoSeleccionado.estados.length; _i37++) {
            datos.push({
              type: 'bar',
              label: 'Datos de media de ' + this.estadoConjuntoSeleccionado.estados[_i37].nombre,
              data: this.datosGenerales[this.estadoConjuntoSeleccionado.estados[_i37].nombre],
              backgroundColor: this.estadoConjuntoSeleccionado.estados[_i37].color,
              borderColor: this.estadoConjuntoSeleccionado.estados[_i37].color,
              barPercentage: 0.9
            });
          }

          this.configGrafEstados = {
            type: 'bar',
            data: {
              datasets: datos,
              labels: this.labels
            },
            options: {
              responsive: true,
              scales: {
                xAxes: [{
                  gridLines: {
                    offsetGridLines: false
                  },
                  stacked: true
                }],
                yAxes: [{
                  label: 'Porcentaje',
                  type: "linear",
                  stacked: true,
                  display: true,
                  position: "left",
                  id: "y-axis-1",
                  gridLines: {
                    display: false
                  },
                  labels: {
                    show: true
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          };

          if (this.graficaEstadosConjuntos != null) {
            this.graficaEstadosConjuntos.destroy();
          }

          this.graficaEstadosConjuntos = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('progresoConjuntoTotal', this.configGrafEstados);
        }
      }, {
        key: "actualizarGeneral",
        value: function actualizarGeneral() {
          var labels = [];
          var colores = [];
          var datos = [];
          console.log(this.estadoGlobalAlumno);

          for (var _i38 = 0; _i38 < this.estadoGeneralSeleccionado.estados.length; _i38++) {
            /*datos.push(
              {
                type: 'bar',
                label: 'Datos ' + this.estadoConjuntoSeleccionado.estados[i].nombre + ' de ' + this.alumno.nombre,
                data: this.datosIndividuales[this.estadoConjuntoSeleccionado.estados[i].nombre],
                backgroundColor: this.estadoConjuntoSeleccionado.estados[i].color,
                borderColor: this.estadoConjuntoSeleccionado.estados[i].color,
                barPercentage: 0.9,
              }
            );*/
            for (var j = 0; j < this.estadoGlobalAlumno.length; j++) {
              if (this.estadoGlobalAlumno[j].nombre == this.estadoGeneralSeleccionado.estados[_i38].nombre) {
                labels.push(this.estadoGeneralSeleccionado.estados[_i38].nombre);
                colores.push(this.estadoGeneralSeleccionado.estados[_i38].color);
                datos.push(this.estadoGlobalAlumno[j].datos);
              }
            }
          }

          console.log(datos);
          console.log(labels);
          this.configEstadoGlobal = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                backgroundColor: colores,
                data: datos
              }]
            },
            options: {
              responsive: true,
              cutoutPercentage: 50,
              borderColor: 'rgba(12,12,12,1)',
              legend: {
                position: 'right'
              }
            }
          };

          if (this.graficaEstadoGlobal != null) {
            this.graficaEstadoGlobal.destroy();
          }

          this.graficaEstadoGlobal = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('resumenGeneral', this.configEstadoGlobal);
        }
      }, {
        key: "irHome",
        value: function irHome() {
          this.profesor.abrirActividadActual();
        }
      }]);

      return VerEstadisticasClaseComponent;
    }();

    VerEstadisticasClaseComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_5__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerEstadisticasClaseComponent.prototype, "clase", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)], VerEstadisticasClaseComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)], VerEstadisticasClaseComponent.prototype, "sort", void 0);
    VerEstadisticasClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-estadisticas-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver-estadisticas-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver-estadisticas-clase.component.css */
      "./src/app/profesor/ver-estadisticas-clase/ver-estadisticas-clase.component.css")).default]
    })], VerEstadisticasClaseComponent);
    /***/
  },

  /***/
  "./src/app/socketio.service.ts":
  /*!*************************************!*\
    !*** ./src/app/socketio.service.ts ***!
    \*************************************/

  /*! exports provided: SocketioService */

  /***/
  function srcAppSocketioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketioService", function () {
      return SocketioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

    var SocketioService =
    /*#__PURE__*/
    function () {
      function SocketioService() {
        _classCallCheck(this, SocketioService);

        this.crearActividadLista = function (socket, actividad) {
          socket.emit('crearActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " está lista.");
        };

        this.borrarActividadLista = function (socket, actividad) {
          socket.emit('borrarActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " YA NO está lista.");
        };

        this.lanzarSocketSrv = function () {
          var cli = this;
          this.socket.on('connect', function () {
            console.log("Conectado al servidor de WebSockets");
          });
          this.socket.on('actividadAnadida', function (res) {
            console.log("Se ha añadido una actividad a las listas: " + res._id);
          });
          this.socket.on('actividadBorrada', function (res) {
            console.log("Se ha borrado una actividad a las listas: " + res._id);
          });
          this.socket.on('actividades', function (res) {
            cli.listaActividades.push(res);
            console.log(res); //callback(res);
          });
          /*
          this.socket.on('partidaCreada',function(partida){
              console.log("partida creada:",partida);
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('partidas',function(partidas){
              mostrarListaPartidas(partidas);
          });
          this.socket.on('unido',function(partida){
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('nuevoJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('saliste',function(){
              mostrarCrearPartida(cli.nick);
              borrarCanvas();
          });
          this.socket.on('saleJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('otropreparado',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('aJugar',function(data){
              cli.jugador=data.jugadores[cli.nick];
              cli.rival=cli.obtenerRival(data.jugadores);
              mostrarCanvas(data.numJugadores);
          });
          this.socket.on('anotado',function(){ //function(resultados)
              //mostrarListaResultados(resultados)
              console.log("Resultado anotado");
          });
          this.socket.on('finPartida',function(){
              console.log("Fin de la partida");
              alert("Fin de la partida");
              cli.salir();
          });
          this.socket.on("sigueVivo",function(){
              console.log("sigue vivo");
              cli.spriteLocal.volverAInicio();
          });
          this.socket.on("mover",function(operacion,posicion){
              if (cli.spriteRival){
                  cli.spriteRival.mover(operacion,posicion);
              }
          });*/
        };
      }

      _createClass(SocketioService, [{
        key: "setupSocketConnection",
        value: function setupSocketConnection() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
          this.socket.emit('mi mensaje', 'Hola desde Angular');
          this.socket.on('mi mensaje', function (data) {
            console.log(data);
          });
        }
      }, {
        key: "ini",
        value: function ini() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]();
          this.lanzarSocketSrv();
        }
      }]);

      return SocketioService;
    }();

    SocketioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/msalejandrojose/Documents/TFG/emotionapp/cliente/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map