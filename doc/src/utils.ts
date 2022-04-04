export const cloneDeep = (
    obj: Record<string, any> | string | null,
    infinityLinks: Array<string> = []
  ): Record<string, any> | string | null | undefined => {
    let copy;
    if (null == obj || 'object' !== typeof obj || typeof obj === 'undefined') {
      return obj;
    }
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = cloneDeep(obj[i], infinityLinks);
      }
      return copy;
    }
    if (obj instanceof Object) {
      copy = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (infinityLinks.indexOf(key) > -1) {
            copy[key] = obj[key];
          } else {
            copy[key] = cloneDeep(obj[key], infinityLinks);
          }
        }
      }
      return copy;
    }
    return obj;
  };

export const getCodeSnippet = (code: string) => {
    let countLines = 0;
    let result = code;
    const KEYWORD = "#813782";
    const STRING = "#207e43";
    const OPERATOR = "#9a6e3a;";
    const FN = "#dd4a68;";
    const COMMENT = "#a7a6a6";
    const KEYWORD_ARR = [
        "export", 
        "function",
        "import",
        "from" ,
        "const",
        "alert",
        "return",
        "if",
        "new",
    ];
    // lines
    let lines = code.trim().replace(/\/\/.*/g, (chr) => {console.log(chr, "chr");return `%comment%${chr.replace("//", "")}%comment%`}).replace(/=>|:|===|==|[><=/\/]/g, (chr) => `%spec%${chr}%spec%`).replace(/[a-zA-Z^s]+\(/g, (chr) => `%fn%${chr.replace("(", "")}%fn%(`).replace(/['"].*?['"]/gm, (chr) => `%qt%${chr}%qt%`).split("\n");
    let cloneLines = cloneDeep(lines) as Array<string>;
    lines.forEach((line, index) => {
      let _line = line || " ";
      cloneLines[index] = `%div% ${_line}%div%`;
    });
    countLines = lines.length;
    const preLines = cloneLines.join("");
    //words
    let words = preLines.split(" ");
    let cloneWords = cloneDeep(words) as Array<string>;
    words.forEach((word, index) => {
        if(word === "*if*" || word === "*for*" || word === "*from*" || word === "*import*"){
          cloneWords[index] = word.replaceAll("*", "");
        } else if(KEYWORD_ARR.includes(word)){
            cloneWords[index] = `<span style="color: ${KEYWORD};">${word}</span>`;   
        }
    });
    // /(?<=\%spec\%).*?(?=\%spec\%)/g beetween
    result = cloneWords.join(" ").
    replace(/(\%qt\%).*?(\%qt\%)/gm, (chr) => {
        const str = chr.replaceAll("%qt%", '');
        return `<span style="color: ${STRING};">${str}</span>`;
    }).replace(/(\%fn\%).*?(\%fn\%)/gm, (chr) => {
        const str = chr.replaceAll("%fn%", '');
        if(str === "if"){
            return `<span style="color: ${KEYWORD};">${str}</span>`;
        }
        return `<span style="color: ${FN};">${str}</span>`;
    })
    .replace(/(\%spec\%).*?(\%spec\%)/gm, (chr) => {
        const str = chr.replaceAll("%spec%", '');
        return `<span style="color: ${OPERATOR};">${str}</span>`;
    }).replace(/(\%comment\%).*?(\%comment\%)/gm, (comment) => {
      const str = comment.replaceAll("%comment%", '');
      return `<span class="hightligh-comment" style="color: ${COMMENT} !important;">//${str}</span>`
    })
    .replace(/(\%div\%).*?(\%div\%)/gm, (chr) => {
        const str = chr.replaceAll("%div% ", '').replaceAll("%div%", '');
        return `<div>${str}</div>`;
    });

    return {
        result,
        countLines
    };
}