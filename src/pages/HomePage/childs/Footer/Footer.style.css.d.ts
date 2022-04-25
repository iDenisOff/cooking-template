declare namespace FooterStyleCssNamespace {
    export interface IFooterStyleCss {
        bottom: string;
        bottomContacts: string;
        bottomText: string;
        container: string;
        logo: string;
        text: string;
        top: string;
    }
}

declare const FooterStyleCssModule: FooterStyleCssNamespace.IFooterStyleCss;

export = FooterStyleCssModule;
