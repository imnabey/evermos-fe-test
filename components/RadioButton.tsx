import React from 'react';
import styles from '@/styles/RadioButton.module.scss';
import mixins from '@/styles/mixins.module.scss';

export default function RadioButton() {
  const categoryList = [
    { id: 1, label: "Lipstick", value: "lipstick" },
    { id: 2, label: "Blush", value: "blush" },
    { id: 3, label: "Bronzer", value: "bronzer" },
    { id: 4, label: "Eyeshadow", value: "eyeshadow" },
    { id: 5, label: "Nail Polish", value: "nailpolish" },
    { id: 6, label: "Lip Liner", value: "lipliner" }
  ]
  return (
    <div className={`${styles.radios} ${mixins.flex}`}>
      {
        categoryList.map((category, index) => (
          <div key={category.id}>
            <label className={`${styles.radiosLabel}`}>
              <input type="radio" className={styles.radiosInput} name="mode" id="driving" value={category.value} checked />
              <span className={`${styles.radiosText} fw-medium`}>{category.label}</span>
            </label>
          </div>
        ))
      }
    </div>
  )
}
