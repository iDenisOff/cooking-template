declare namespace HeaderStyleCssNamespace {
    export interface IHeaderStyleCss {
        contacts: string;
        container: string;
        logo: string;
    }
}

declare const HeaderStyleCssModule: HeaderStyleCssNamespace.IHeaderStyleCss;

export = HeaderStyleCssModule;
