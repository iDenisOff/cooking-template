declare namespace RecipePartStyleCssNamespace {
    export interface IRecipePartStyleCss {
        button: string;
        buttonContent: string;
        buttonText: string;
        contactsContainer: string;
        container: string;
        label: string;
        labelText: string;
        parameterContainer: string;
        parameterText: string;
        parameters: string;
        post: string;
        postAuthor: string;
        postDate: string;
        text: string;
        title: string;
    }
}

declare const RecipePartStyleCssModule: RecipePartStyleCssNamespace.IRecipePartStyleCss;

export = RecipePartStyleCssModule;
