import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/Card.module.scss';
import mixins from '@/styles/mixins.module.scss';

import { ICard } from 'types';

export const Card: FC<ICard> = ({
  name, price, brand, imgSrc, rating,
}) => (
  // return (
  <div className={styles.card}>
    <div className={`${styles.cardBadge} position-absolute font-12`}>20%</div>
    <div className={`${styles.cardImage}`}>
      <img src={imgSrc} alt={name} className={styles.cardImageItem} />
    </div>

    <div className={styles.cardBody}>
      <div className={`${styles.cardCaption} font-12 ${mixins.mb10}`}>{brand}</div>
      <h2 className={`${styles.cardTitle} font-16`}>
        {name}
      </h2>
      <p className={`${styles.cardSubtitle} fw-bold`}>
        $.
        {price}
      </p>
      <div className="rating">
        {[...Array(5)].map((star, index) =>
        // index += 1;
          (
            <FontAwesomeIcon
              icon={faHeart}
              key={star}
              className={`${index <= rating ? 'ratingOn' : 'ratingOff'} mr5`}
            />
          ))}
      </div>
      <div className={`${styles.cardButtonOverlay} font-12 fw-medium`}>
        VIEW DETAIL
      </div>
    </div>
  </div>
);

export default Card;
