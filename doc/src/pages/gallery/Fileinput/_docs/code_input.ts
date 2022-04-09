export default (() => {
const code = `import React, {useRef, useCallback, useState} from 'react';
import styles from './Fileinput.module.css';

export type FileInputValue = {
  file: {
    name: string,
    type: string,
  }, 
  result: string
}

export type FileinputProps = {
  mimes?: Array<string>;
  onChange: (fileInputValue: FileInputValue) => void;
  onDelete: (fileInputValue: FileInputValue) => void
  files: Array<FileInputValue>;
} | any;

export const Fileinput = (props: FileinputProps) => {
    const [message, setMessage] = useState<string>("");
    const fileRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const {mimes, onChange, onDelete, files} = props;

    const clickHadler = useCallback(() => {
      fileRef.current && fileRef.current.click();
    }, [fileRef.current]);

    const uploadHandler = (files: FileList) => {
      const file: File = files[0];
      if (!file) {
        return;
      }
      if(Array.isArray(mimes) && file.type){
        if(mimes.includes(file.type)) {
          setMessage("Wrong format");
          return;
        }
      }
      const result = URL.createObjectURL(file);
      onChange({file: {
        name: file.name,
        type: file.type,
        size: file.size,
      }, result});
      setMessage("");
    };

    const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      files && uploadHandler(files);
    }

    const renderFiles = () => {
      return files.map((fileInputValue: FileInputValue, index: number) => {
        if(fileInputValue.file.type.includes("image") && fileInputValue.result){
          return <div className={styles.imageContainer}>
            <img key={index} src={fileInputValue.result}/>
            <button onClick={() => onDelete(fileInputValue)} className={styles.clearImg}>x</button>
          </div>
        }
        return <div key={index} className={styles.fileContainer}>
          {fileInputValue.file.name}
          <button onClick={() => onDelete(fileInputValue)} className={styles.clearFile}>x</button>
        </div>
      });
    }

    return (
      <div>
        <div onClick={clickHadler} className={styles.container}>
          <input onChange={handleFiles} ref={fileRef} type="file" className={styles.fileInput}></input>
          <div className={styles.label}>Upload files</div>
          {message && <div>{message}</div>}
        </div>
        <div className={styles.files}>
          {renderFiles()}
        </div>
      </div>
    )
}`;

return code;
})()