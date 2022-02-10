import React, {useEffect, useRef, useState} from 'react';
import styles from './Content.module.css';

export type ContentParams = {
  content: string;
  preWrap?: boolean;
  language?: string;
  lines?: string;
  countLines?: number;
  minWidth?: string;
};

export const Content = (props: ContentParams) => {
    const {content, preWrap, lines, language, countLines = 0, minWidth} = props;
    const refPre: React.LegacyRef<HTMLPreElement> = useRef(null);
    const [init, setInit] = useState(0);

    const initSize = () => {
      setInit((value) => (value + 1));
    }
    
    useEffect(() => {
      window.addEventListener("resize", initSize);
      return () => {
        window.removeEventListener("resize", initSize);
      }
    }, []);

    useEffect(() => {
      if(minWidth && preWrap){
        initSize();
      }
    }, [minWidth]);

    if(preWrap){
      let lang = "language-javascript";
      if(language){
        lang = `language-${language}`;
      }
      const _lines = Array.from(Array(countLines).keys());
      const linesArr = lines?.split(",") || [];
      const renderLines = () => {
        return _lines.map((line) => {
          let isInLines = false;
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
            {line + 1}
            {isInLines && <div style={{width: init > 0 ? `${refPre.current?.offsetWidth}px` : undefined}} className={styles.hightline}></div>}
            </div>)
        });
      };
      return (
        <pre ref={refPre} style={{minWidth: `${minWidth}`}} pre-wraped="true" className={[styles.container, "content-overriding", "line-numbers", lang].join(" ")}>
          <code dangerouslySetInnerHTML={{__html: content}}></code>
            <div className={styles.linesContainer}>
              {renderLines()}
            </div>
          </pre>
      )
    }
    return (
      <div pre-wraped={preWrap ? "true": null} owerride-style="true" className={[styles.container, "content-overriding"].join(" ")} dangerouslySetInnerHTML={{__html: content}}>

      </div>
    )
}
  