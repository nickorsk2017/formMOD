export const getCodeSnippet = (code: string, language: string) => {
    console.log((window as any).Prism.highlight, 'Prism.highlight!!');
    return (window as any).Prism.highlight(code, (window as any).Prism.languages[language], language);
}