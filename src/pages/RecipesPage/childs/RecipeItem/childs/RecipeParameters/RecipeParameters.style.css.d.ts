declare namespace RecipeParametersStyleCssNamespace {
    export interface IRecipeParametersStyleCss {
        container: string;
        itemContainer: string;
        itemParameters: string;
        parameterTitle: string;
        parameterValue: string;
    }
}

declare const RecipeParametersStyleCssModule: RecipeParametersStyleCssNamespace.IRecipeParametersStyleCss;

export = RecipeParametersStyleCssModule;
