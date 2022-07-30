// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import inputStylesItem from '../styles/InputSearch.module.scss';
// import utilStyles from '../styles/utils.module.scss';

export default function InputSearch() {
    return (
        <div className={`${inputStylesItem.inputSearch} position-relative`}>
            <FontAwesomeIcon
                icon={faSearch}
                className={`position-absolute ${inputStylesItem.inputSearchIcon}`}
            />
            <input className={`${inputStylesItem.inputSearchItem}`} placeholder="Type Product Here..." />
        </div>
    )
}
