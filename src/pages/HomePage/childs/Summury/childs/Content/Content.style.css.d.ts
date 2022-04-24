declare namespace ContentStyleCssNamespace {
    export interface IContentStyleCss {
        button: string;
        container: string;
        text: string;
        title: string;
    }
}

declare const ContentStyleCssModule: ContentStyleCssNamespace.IContentStyleCss;

export = ContentStyleCssModule;
