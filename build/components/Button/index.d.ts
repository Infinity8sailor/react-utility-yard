import "./button.css";
interface props {
    /**
     * Bias: bias_text[rating.bias[0]],
     */
    text: string;
    focus: boolean;
    onclick: any;
    onkeydown: any;
    z_id: number;
    size: string;
    loading: boolean;
    icon: null | string;
}
export declare function Button({ text, focus, onclick, onkeydown, z_id, size, loading, // for loading image to be displayed
icon, }: props): import("react/jsx-runtime").JSX.Element;
export {};
