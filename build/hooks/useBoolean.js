import { useCallback, useState } from 'react';
export var useBoolean = function (defaultValue) {
    var _a = useState(!!defaultValue), value = _a[0], setValue = _a[1];
    var on = useCallback(function () { return setValue(true); }, []);
    var off = useCallback(function () { return setValue(false); }, []);
    var toggle = useCallback(function () { return setValue(function (x) { return !x; }); }, []);
    return { value: value, setValue: setValue, on: on, off: off, toggle: toggle };
};
//# sourceMappingURL=useBoolean.js.map