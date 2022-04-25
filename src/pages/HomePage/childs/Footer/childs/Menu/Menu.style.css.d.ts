declare namespace MenuStyleCssNamespace {
    export interface IMenuStyleCss {
        container: string;
        text: string;
        textActive: string;
    }
}

declare const MenuStyleCssModule: MenuStyleCssNamespace.IMenuStyleCss;

export = MenuStyleCssModule;
