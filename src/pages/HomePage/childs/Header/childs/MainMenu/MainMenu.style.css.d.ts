declare namespace MainMenuStyleCssNamespace {
    export interface IMainMenuStyleCss {
        container: string;
        text: string;
        textActive: string;
    }
}

declare const MainMenuStyleCssModule: MainMenuStyleCssNamespace.IMainMenuStyleCss;

export = MainMenuStyleCssModule;
