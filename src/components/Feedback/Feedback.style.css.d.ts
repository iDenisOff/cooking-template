declare namespace FeedbackStyleCssNamespace {
    export interface IFeedbackStyleCss {
        button: string;
        container: string;
        input: string;
        text: string;
        title: string;
    }
}

declare const FeedbackStyleCssModule: FeedbackStyleCssNamespace.IFeedbackStyleCss;

export = FeedbackStyleCssModule;
