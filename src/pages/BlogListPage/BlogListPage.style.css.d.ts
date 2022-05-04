declare namespace BlogListPageStyleCssNamespace {
    export interface IBlogListPageStyleCss {
        container: string;
        main: string;
        text: string;
        title: string;
    }
}

declare const BlogListPageStyleCssModule: BlogListPageStyleCssNamespace.IBlogListPageStyleCss;

export = BlogListPageStyleCssModule;
