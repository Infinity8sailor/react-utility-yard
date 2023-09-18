import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import "./button.css";
export function Button(_a) {
    var _b = _a.text, text = _b === void 0 ? "Button" : _b, _c = _a.focus, focus = _c === void 0 ? false : _c, _d = _a.onclick, onclick = _d === void 0 ? null : _d, _e = _a.onkeydown, onkeydown = _e === void 0 ? null : _e, _f = _a.z_id, z_id = _f === void 0 ? 10 : _f, _g = _a.size, size = _g === void 0 ? "" : _g, _h = _a.loading, loading = _h === void 0 ? false : _h, // for loading image to be displayed
    _j = _a.icon, // for loading image to be displayed
    icon = _j === void 0 ? null : _j;
    var button_ref = useRef(null);
    // console.log(size);
    useEffect(function () {
        if (focus) {
            button_ref.current.focus();
        }
    }, [focus]);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "x-btn-normal", style: { zIndex: z_id, position: "relative" }, children: _jsx("button", { ref: button_ref, className: "button-85", onKeyDown: onkeydown, onClick: onclick, children: text }) }) }));
}
//# sourceMappingURL=index.js.map