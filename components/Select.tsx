import { FC } from 'react';
import styles from '@/styles/Select.module.scss';
import { ISelectDropdown } from 'types';

const sortList = [
  { id: 3, label: 'Rating Filter', value: '' },
  { id: 1, label: 'Rating Greater Than 3', value: '3' },
  { id: 2, label: 'Rating Greater Than 1', value: '1' },
];

export const SelectComponent: FC<ISelectDropdown> = ({
  onChange
}) => {
  return (
    <select className={styles.select} onChange={onChange}>
      {
        sortList.map((list) => (
          <option value={list.value} key={list.id}>{list.label}</option>
        ))
      }
    </select>
  );
}

export default SelectComponent;