declare namespace BlogListItemStyleCssNamespace {
    export interface IBlogListItemStyleCss {
        author: string;
        authorContainer: string;
        container: string;
        date: string;
        postParameters: string;
        text: string;
        title: string;
    }
}

declare const BlogListItemStyleCssModule: BlogListItemStyleCssNamespace.IBlogListItemStyleCss;

export = BlogListItemStyleCssModule;
