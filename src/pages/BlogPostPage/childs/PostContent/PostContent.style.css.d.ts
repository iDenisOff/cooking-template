declare namespace PostContentStyleCssNamespace {
    export interface IPostContentStyleCss {
        container: string;
        quoteContainer: string;
        quoteText: string;
        text: string;
        title: string;
    }
}

declare const PostContentStyleCssModule: PostContentStyleCssNamespace.IPostContentStyleCss;

export = PostContentStyleCssModule;
