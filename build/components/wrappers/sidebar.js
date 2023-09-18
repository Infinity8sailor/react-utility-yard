import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Hamberger from "./../../assets/hamburger.png";
export var SideBar = function (_a) {
    var sideBar_list = _a.sideBar_list, children = _a.children, leftside = _a.leftside, title = _a.title;
    var _b = useState(true), state = _b[0], setState = _b[1];
    return (_jsxs("section", { className: " flex ".concat(!leftside && "flex-row-reverse", " gap-1 min-h-[inherit] max-h-[inherit] "), children: [_jsxs("div", { className: " bg-slate-600 ".concat(state ? "w-64" : "w-10", " "), children: [_jsx("div", { className: "m-1 ".concat(!leftside ? "float-left" : "float-right", " w-8"), onClick: function () { return setState(!state); }, children: _jsx("img", { height: "40px", src: Hamberger }) }), state && (_jsx("div", { className: "m-2 ".concat(leftside ? "float-left" : "float-right", " w-32"), children: _jsx("div", { children: title }) })), _jsx("div", { className: "pt-[40px] h-full max-h-full bg-slate-500", children: state && sideBar_list })] }), _jsx("div", { className: "p-1 flex-1 bg-slate-300", children: children })] }));
};
SideBar.defaultProps = {
    leftside: true,
    title: "Annie Leonhart",
};
//# sourceMappingURL=sidebar.js.map