declare namespace FeedbackStyleCssNamespace {
    export interface IFeedbackStyleCss {
        container: string;
        text: string;
        title: string;
    }
}

declare const FeedbackStyleCssModule: FeedbackStyleCssNamespace.IFeedbackStyleCss;

export = FeedbackStyleCssModule;
