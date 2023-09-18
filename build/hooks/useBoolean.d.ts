import { Dispatch, SetStateAction } from 'react';
interface useBooleanReturnType {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    on: () => void;
    off: () => void;
    toggle: () => void;
}
export declare const useBoolean: (defaultValue?: boolean) => useBooleanReturnType;
export {};
