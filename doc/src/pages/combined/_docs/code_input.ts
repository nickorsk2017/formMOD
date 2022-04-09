export default (() => {
  const code = `%collapse%import React from 'react';
import {TextInput} from '../';
import {useFormMod} from "formmod";
import styles from './SearchInput.module.css';
  
export type ItemType = {
  id: string,
  value: any,
};
  
export type SearchInputProps = {
  label: string;
  selectedItem: ItemType;
  items: Array<ItemType>;
  onChangeItem: (item: ItemType) => void;
  onReset: () => void;
  error: string | null;
  getterItemStringValue: (item: any) => string;
};%collapse%
  
export const SearchInput = (props: SearchInputProps) => {
  const {
    label,
    selectedItem,
    items,
    onChangeItem,
    onReset,
    error,
    getterItemStringValue,
  } = props;
  //Define a scheme for child UI component
  const SCHEME = {
    valid: null,
    formValue: {
      searchText: "",
      focused: false,
    },
    rules: {
      // You can describe a validation rules for your child UI component.
    }
  };
  //Connect a scheme and get methods.
  const {
    getValue,
    getError,
    setValue,
  } = useFormMod(
    SCHEME,
  );
  
  %collapse%const handlerSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      event.preventDefault();
    }
  };
  
  const resetInput = () => {
    setValue("searchText", "", {
      skipValidation: true
    });
    onReset();
  };
  
  const onChangeInput = (value: string) => {
    setValue("searchText", value);
  }
  
  const changeItem = (item: ItemType) => {
    onChangeItem(item);
    setValue("searchText", "", {
      skipValidation: true
    });
  };
  
  // getter a string value of item of component
  const getSelectedItemString = (item: ItemType): string => {
    return getterItemStringValue(item);
  };
  
  const onClickItemList = (event: React.MouseEvent<HTMLDivElement>, item: ItemType) => {
    event.stopPropagation();
    setValue("focused", false);
    changeItem(item);
  }
  
  const renderList = () => {
    return items.filter((item) => {
      return getSelectedItemString(item).toLocaleLowerCase().indexOf(getValue("searchText").toLocaleLowerCase()) > -1
    }).map((item) => {
      return <div onClick={(e) => onClickItemList(e, item)} key={item.id} className={styles.item}>{getSelectedItemString(item)}</div>
    });
  }
  
  const onFocus = () => {
    setValue("focused", true);
  };%collapse%

  return (
      <div onSubmit={handlerSubmit} className={styles.container}>
        {selectedItem ? <div className={styles.selectedContainer}>
          <div className={styles.selectedLabel}>{label}</div>
          <div className={styles.selected}>{getSelectedItemString(selectedItem)}</div>
          <button onClick={resetInput} type='button' className={styles.reset}>x</button>
        </div>:<TextInput
          onFocus={onFocus}
          label={label}
          value={getValue("searchText")}
          error={error || getError("searchText")}
          onChange={onChangeInput}
        />}
        {(getValue("focused") || (!selectedItem && getValue("searchText"))) && <div className={styles.list}>
          {renderList()}
        </div>}
      </div>
    )
  }`;
  return code;
})()