declare namespace PostContentStyleCssNamespace {
    export interface IPostContentStyleCss {
        container: string;
        text: string;
        title: string;
    }
}

declare const PostContentStyleCssModule: PostContentStyleCssNamespace.IPostContentStyleCss;

export = PostContentStyleCssModule;
