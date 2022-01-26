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
exports.Section = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Section = function (props) { return (jsx_runtime_1.jsxs("div", __assign({ className: "max-w-screen-lg mx-auto px-3 rounded-xl " + (props.color || '') + " " + (props.yPadding ? props.yPadding : 'py-16') }, { children: [(props.title || props.description) && (jsx_runtime_1.jsxs("div", __assign({ className: "mb-12 text-center" }, { children: [props.title && (jsx_runtime_1.jsx("h2", __assign({ className: "text-4xl text-gray-900 font-bold" }, { children: props.title }), void 0)), props.description && (jsx_runtime_1.jsx("div", __assign({ className: "mt-4 text-xl md:px-20" }, { children: props.description }), void 0))] }), void 0)), props.children] }), void 0)); };
exports.Section = Section;
