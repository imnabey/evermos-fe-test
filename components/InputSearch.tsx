import { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import inputStylesItem from '../styles/InputSearch.module.scss';
import { IInputSearch } from 'types';

export const InputSearch: FC<IInputSearch> = ({
  onChange
}) => {
  return (
    <div className={`${inputStylesItem.inputSearch} position-relative`}>
      <FontAwesomeIcon
        icon={faSearch}
        className={`position-absolute ${inputStylesItem.inputSearchIcon}`}
      />
      <input className={`${inputStylesItem.inputSearchItem}`} onChange={onChange} placeholder="Type Product Name Here..." />
    </div>
  );
}

export default InputSearch;