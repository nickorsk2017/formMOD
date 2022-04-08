import React, {useEffect, useRef, useState, useCallback} from 'react';
import styles from './Content.module.css';

export type ContentProps = {
  content: string;
  preWrap?: boolean;
  language?: string;
  lines?: string;
  countLines?: number;
  minWidth?: string;
};

export const Content = (props: ContentProps) => {
    const {content, preWrap, lines, language, countLines = 0, minWidth} = props;
    const refPre: React.LegacyRef<HTMLPreElement> = useRef(null);
    const _countLines: React.MutableRefObject<number> = useRef(0);
    const hiddenLines: React.MutableRefObject<Array<string>> = useRef([]);
    const lastHiddenLines: React.MutableRefObject<Array<string>> = useRef([]);
    const [init, setInit] = useState(0);

    let uniqueChars = (chars: string[]) => chars.filter((element, index) => {
      return chars.indexOf(element) === index;
    });


    const initSize = () => {
      setInit((value) => (value + 1));
    }
    
    useEffect(() => {
      window.addEventListener("resize", initSize);
      initSize();
      return () => {
        window.removeEventListener("resize", initSize);
      }
    }, []);

    useEffect(() => {
      if(minWidth && preWrap){
        initSize();
      }
    }, [minWidth]);

    const setOpen = useCallback((e: any) => {
      const target = e.currentTarget;
      if(target){
        const isOpen = target.getAttribute("open");
        if(isOpen){
          const selectedObj = window.getSelection();
          if (selectedObj){
            const selectedText = selectedObj.toString();
            if(selectedText) return;
          }
          target.removeAttribute("open");
        } else {
          target.setAttribute("open", "true");
        }
        initSize();
      }
    }, []);

    _countLines.current = countLines;
    

    if(preWrap){
      let lang = "language-javascript";
      if(language){
        lang = `language-${language}`;
      }
      let collapsesEls = [];
      if(refPre.current){
        collapsesEls = Array.from(refPre.current.getElementsByClassName("collapse"));
        if(collapsesEls){
          collapsesEls.forEach(element => {
            const isOpen = element.getAttribute("open");
            const _hiddenLines = element.getAttribute("data-lines")?.split(",");
            const lastHiddenLine = element.getAttribute("data-last-line");
            element.removeEventListener("click", setOpen);
            element.addEventListener("click", setOpen);
            if(lastHiddenLine !== null){
              lastHiddenLines.current.push(lastHiddenLine);
              lastHiddenLines.current = uniqueChars(lastHiddenLines.current);
            }

            if(_hiddenLines && !isOpen){
              hiddenLines.current = hiddenLines.current.concat(_hiddenLines);
            } else {
              if(_hiddenLines){
                hiddenLines.current = hiddenLines.current.filter((h) => {
                  const found = _hiddenLines.find((_h) => {
                    return h === _h;
                  });
                  return !found
                });
              }
            }
          });
        }
      }

      let _lines = Array.from(Array(_countLines.current).keys());
      const linesArr = lines?.split(",") || [];

      const renderLines = () => {
        return _lines.map((line, index) => {
          let isInLines = false;
          const indexStr = index.toString();
          const isLastHiddenLine = lastHiddenLines.current.includes(indexStr);
          const isHidden = hiddenLines.current.includes(indexStr);
          if(isHidden && !isLastHiddenLine){
            return null;
          }
          linesArr.some((ln) => {
            const range = ln.split("-");
            if(range.length === 1){
              isInLines = parseInt(range[0]) === (line + 1)
            } else {
              isInLines = ((line + 1) >= parseInt(range[0]) && (line + 1) <= parseInt(range[1]));
            }
            if(isInLines){
              return isInLines;
            }
            return false;
          });
          return (<div key={line + "n"} className={[styles.line, isInLines ?  styles.lineBold : null].join(" ")}>
            {(isLastHiddenLine && isHidden) ? "+" : line + 1}
            {isInLines && <div style={{width: init > 0 ? `${refPre.current?.offsetWidth}px` : undefined}} className={styles.hightline}></div>}
            </div>)
        });
      };
      return (
        <pre ref={refPre} style={{minWidth: `${minWidth}`}} pre-wraped="true" className={[styles.container, !countLines ? styles.withoutLines: "", "content-overriding", "line-numbers", lang].join(" ")}>
          <code dangerouslySetInnerHTML={{__html: content}}></code>
            {countLines > 0 && <div className={styles.linesContainer}>
              {renderLines()}
            </div>}
          </pre>
      )
    }
    return (
      <div
        pre-wraped={preWrap ? "true": null}
        owerride-style="true"
        className={[styles.container, "content-overriding"].join(" ")}
        dangerouslySetInnerHTML={{__html: content}}
      />
    )
}
  