export const getCodeSnippet = (code: string, language: string) => {
    return (window as any).Prism.highlight(code, (window as any).Prism.languages[language]);
}