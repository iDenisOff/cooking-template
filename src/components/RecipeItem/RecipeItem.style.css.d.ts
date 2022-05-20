declare namespace RecipeItemStyleCssNamespace {
    export interface IRecipeItemStyleCss {
        container: string;
        name: string;
        parameterContainer: string;
        parameterText: string;
        parameters: string;
    }
}

declare const RecipeItemStyleCssModule: RecipeItemStyleCssNamespace.IRecipeItemStyleCss;

export = RecipeItemStyleCssModule;
