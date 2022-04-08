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
    let countHiddenLines = 0;
    let result = code;
    const KEYWORD = "#813782";
    const STRING = "#207e43";
    const OPERATOR = "#9a6e3a;";
    const FN = "#dd4a68;";
    const COMMENT = "#a9941f";
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
    let lines = code.trim().
    replace(/\%collapse\%/gm, (collapse) => `${collapse} `).
    replace(/\/\/.*/g, (chr) => `%comment%${chr.replace("//", "")}%comment%`).
    replace(/=>|:|===|==|[><=/\/]/g, (chr) => `%spec%${chr}%spec%`).
    replace(/[a-zA-Z^s]+\(/g, (chr) => `%fn%${chr.replace("(", "")}%fn%(`).
    replace(/['"].*?['"]/gm, (chr) => `%qt%${chr}%qt%`).split("\n");
    let cloneLines = cloneDeep(lines) as Array<string>;
    lines.forEach((line, index) => {
      let _line = line || " ";
      cloneLines[index] = `%div line=${index}% ${_line}%div%`;
    });
    countLines = lines.length;
    const preLines = cloneLines.join("");
    //words
    let words = preLines.split(/\s/gm);
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
    replace(/\%collapse\%\s/gm, '%collapse%').
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
    .replace(/\%div line=[0-9]+\%\s+\%collapse\%/g, (chr) => {
      return "%collapse%"+chr.replace("%collapse%", "")}
    )
    .replace(/\%collapse\%\%div\%/g, (chr) => {
      return chr.replace("%collapse%", "")+"%collapse%"}
    )
    .replace(/(\%div line=[0-9]+\%).*?(\%div\%)/gm, (chr) => {
        const line = chr.match(/line=[0-9]+/g);
        let resultLine = "0";
        if(line){
          resultLine = line[0].replace("line=", "");
        }
        const str = chr.replace(/\%div line=[0-9]+\%\s/gm, '').replaceAll("%div%", '');
        return `<div class="highlight-block" data-line="${resultLine}">${str}</div>`;
    })
    .replace(/\%collapse\%[\s\S]*?\%collapse\%/gm, (chr) => {
      const divBlocks = chr.match(/<div.*?>/gm);
      const countHiddent = divBlocks?.length || 0;
      countHiddenLines += countHiddent;
      const str = chr.replaceAll("%collapse%", '');
      const lines = Array.from(chr.matchAll(/data-line="([0-9]+)"/gi)).map((_match) => {
        return parseInt(_match[1]);
      });
      const last = Math.max(...lines);
      return `<div class="collapse"  data-last-line="${last}" data-lines="${lines.join(",")}" data-count-hidden="${countHiddent}">
        <div class="collapse__label">---Show hidden code---</div>
        <div class="collapse__content">${str}</div>
        <div class="collapse__hide">hide</div>
      </div>`;
    })

    return {
        result,
        countLines,
        countHiddenLines
    };
}