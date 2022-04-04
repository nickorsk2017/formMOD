import React from 'react';
import {TextInput} from '../';
import {useFormMod} from "formmod";
import styles from './SearchSelect.module.css';

export type Item = {
  id: string,
  value: string
};

export type SearchSelectProps = {
  label: string;
  selectedItem: Item;
  items: Array<Item>;
  onChangeItem: (item: Item) => void;
  onReset: () => void;
  error: string | null;
};

export const SearchSelect = (props: SearchSelectProps) => {
  const {
    label,
    selectedItem,
    items,
    onChangeItem,
    onReset,
    error,
  } = props;
  const SCHEME = {
      valid: null,
      formValue: {
        searchText: "",
      },
      rules: {
        searchText: [
            {
              name: "empty",
              message: "first name is required"
            }
        ]
      }
  };
  const {
      useRefMod,
      getValue,
      getError,
      setValue,
  } = useFormMod(
    SCHEME,
  );
  const searchTextRef = useRefMod("searchText");
  const handlerSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

  const changeItem = (item: Item) => {
    onChangeItem(item);
    setValue("searchText", "", {
      skipValidation: true
    });
  };

  const renderList = () => {
    return items.filter((item) => {
      return item.value.toLocaleLowerCase().indexOf(searchTextRef.getValue().toLocaleLowerCase()) > -1
    }).map((item) => {
      return <div onClick={() => changeItem(item)} key={item.id} className={styles.item}>{item.value}</div>
    });
  }

  return (
    <div onSubmit={handlerSubmit} className={styles.container}>
      {selectedItem ? <div className={styles.selectedContainer}>
        <div className={styles.selectedLabel}>{label}</div>
        <div className={styles.selected}>{selectedItem.value}</div>
        <button onClick={resetInput} type='button' className={styles.reset}>x</button>
      </div>:<TextInput
        autoFocus
        label={label}
        value={getValue("searchText")}
        error={error || getError("searchText")}
        onChange={onChangeInput}
      />}
      {!selectedItem && getValue("searchText") && <div className={styles.list}>
        {renderList()}
      </div>}
    </div>
  )
}
  