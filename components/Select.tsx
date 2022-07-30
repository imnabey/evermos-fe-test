import React from 'react';
import styles from '@/styles/Select.module.scss';
// import mixins from '@/styles/mixins.module.scss';

export default function RadioButton() {
  const sortList = [
    { id: 1, label: 'Lipstick', value: 'lipstick' },
    { id: 2, label: 'Blush', value: 'blush' },
    { id: 3, label: 'Bronzer', value: 'bronzer' },
    { id: 4, label: 'Eyeshadow', value: 'eyeshadow' },
    { id: 5, label: 'Nail Polish', value: 'nailpolish' },
    { id: 6, label: 'Lip Liner', value: 'lipliner' },
  ];

  return (
    <select className={styles.select} value="">
      {
        sortList.map((list) => (
          <option value={list.value} key={list.id}>{list.label}</option>
        ))
      }
    </select>
  );
}
