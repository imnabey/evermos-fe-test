import { FC } from 'react';
import styles from '@/styles/RadioButton.module.scss';
import mixins from '@/styles/mixins.module.scss';

import { IRadioButton } from 'types';

const categoryList = [
  { id: 7, label: 'All', value: '' },
  { id: 1, label: 'Lipstick', value: 'lipstick' },
  { id: 2, label: 'Blush', value: 'blush' },
  { id: 3, label: 'Bronzer', value: 'bronzer' },
  { id: 4, label: 'Eyeshadow', value: 'eyeshadow' },
  { id: 5, label: 'Foundation', value: 'foundation' },
  { id: 6, label: 'Mascara', value: 'mascara' },
];

export const RadioButton: FC<IRadioButton> = ({
  onChange
}) => {
  return (
    <div className={styles.radiosContainer}>
      <div className={styles.radiosWrap}>
        <div className={`${styles.radios} ${mixins.flex}`} onChange={onChange}>
          {
            categoryList.map((category) => (
              <div key={category.id}>
                <label className={`${styles.radiosLabel}`}>
                  <input type="radio" className={styles.radiosInput} name="mode" id="driving" value={category.value} defaultChecked={category.label === "All" || false} />
                  <span className={`${styles.radiosText} fw-medium`}>{category.label}</span>
                </label>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default RadioButton;
