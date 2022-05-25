declare namespace BlogPostPageStyleCssNamespace {
    export interface IBlogPostPageStyleCss {
        author: string;
        authorContainer: string;
        block: string;
        container: string;
        date: string;
        link: string;
        linksContainer: string;
        linksTitle: string;
        postParameters: string;
        text: string;
        title: string;
    }
}

declare const BlogPostPageStyleCssModule: BlogPostPageStyleCssNamespace.IBlogPostPageStyleCss;

export = BlogPostPageStyleCssModule;
