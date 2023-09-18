/// <reference types="react" />
type Props = {
    /**
     * Side bar list,
     */
    sideBar_list?: JSX.Element | null;
    /**
     * Children Object Content
     */
    children: JSX.Element;
    /**
     * side bar on left side ?
     */
    leftside?: boolean;
    title?: string;
};
export declare const SideBar: {
    ({ sideBar_list, children, leftside, title }: Props): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        leftside: boolean;
        title: string;
    };
};
export {};
