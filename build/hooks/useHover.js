import { useEffect } from 'react';
import { useBoolean } from './useBoolean';
export var useHover = function (ref) {
    var _a = useBoolean(false), value = _a.value, on = _a.on, off = _a.off;
    useEffect(function () {
        var node = ref.current;
        if (node) {
            node.addEventListener('mouseover', on);
            node.addEventListener('mouseout', off);
            return function () {
                node.removeEventListener('mouseover', on);
                node.removeEventListener('mouseout', off);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current]);
    return { ref: ref, isHovered: value };
};
//# sourceMappingURL=useHover.js.map