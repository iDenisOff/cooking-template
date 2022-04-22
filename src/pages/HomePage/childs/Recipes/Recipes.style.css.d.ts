declare namespace RecipesStyleCssNamespace {
    export interface IRecipesStyleCss {
        container: string;
        itemsContainer: string;
        text: string;
        title: string;
    }
}

declare const RecipesStyleCssModule: RecipesStyleCssNamespace.IRecipesStyleCss;

export = RecipesStyleCssModule;
