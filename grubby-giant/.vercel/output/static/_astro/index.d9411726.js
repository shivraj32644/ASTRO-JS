import{r as v,g as _}from"./index.bdf0bb5c.js";var f={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=v,x=Symbol.for("react.element"),d=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,b=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function c(s,t,n){var e,o={},r=null,l=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(e in t)y.call(t,e)&&!S.hasOwnProperty(e)&&(o[e]=t[e]);if(s&&s.defaultProps)for(e in t=s.defaultProps,t)o[e]===void 0&&(o[e]=t[e]);return{$$typeof:x,type:s,key:r,ref:l,props:o,_owner:b.current}}a.Fragment=d;a.jsx=c;a.jsxs=c;f.exports=a;var j=f.exports;const p="https://dev-cms.corpcare.co.in/api";function w(s){if(!s||!s.data)return{url:"",alternativeText:"",small:"",thumbnail:""};const{data:{attributes:{url:t,alternativeText:n,formats:e}}}=s;return{url:t?.split("/uploads/")?.length===1?t:p?.replace("/api","")+t,alternativeText:n,small:t?.split("/uploads/")?.length===1?e?.small?.url||t:p?.replace("/api","")+(e?.small?.url||t),thumbnail:t?.split("/uploads/")?.length===1?e?.thumbnail?.url||t:p?.replace("/api","")+(e?.thumbnail?.url||t)}}var m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var l=typeof r;if(l==="string"||l==="number")e.push(r);else if(Array.isArray(r)){if(r.length){var u=n.apply(null,r);u&&e.push(u)}}else if(l==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}s.exports?(n.default=n,s.exports=n):window.classNames=n})()})(m);var E=m.exports;const R=_(E);export{R as c,j,w as n};
