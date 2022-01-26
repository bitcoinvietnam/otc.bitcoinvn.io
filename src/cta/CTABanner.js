"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CTABanner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CTABanner = function (props) { return (jsx_runtime_1.jsxs("div", __assign({ className: "text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-gold-100 rounded-md" }, { children: [jsx_runtime_1.jsxs("div", __assign({ className: "text-2xl font-semibold" }, { children: [jsx_runtime_1.jsx("div", __assign({ className: "text-gray-900" }, { children: props.title }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "text-primary-500" }, { children: props.subtitle }), void 0)] }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2" }, { children: props.button }), void 0)] }), void 0)); };
exports.CTABanner = CTABanner;
