import { FC } from 'react';
// import Image from 'next/image';
import { ICard } from 'types';
import styles from '@/styles/Card.module.scss';
import mixins from '@/styles/mixins.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

export const Card: FC<ICard> = ({
  name, price, brand, imgSrc, rating
}) => (
    // return (
    <div className={styles.card}>
      <div className={`${styles.cardBadge} position-absolute font-12`}>20%</div>
      {/* <div className="c-card__header"> */}
      <div className={`${styles.cardImage}`}>
        <img src={imgSrc} alt="Card Image" className={styles.cardImageItem} />
      </div>

      {/* </div> */}
      <div className={styles.cardBody}>
        <div className={`${styles.cardCaption} font-12 ${mixins.mb10}`}>{brand}</div>
        <h2 className={`${styles.cardTitle} font-16`}>
          {name}
        </h2>
        <p className={`${styles.cardSubtitle} fw-bold`}>
          $.{price}
        </p>
        <div className={"rating"}>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <FontAwesomeIcon
                icon={faHeart}
                key={star}
                className={`${index <= rating ? "ratingOn" : "ratingOff"} mr5`}
              />
            );
          })}
        </div>
        <div className={`${styles.cardButtonOverlay} font-12 fw-medium`}>
          VIEW DETAIL
        </div>
        {/* <p className={`${styles.cardIntro} font-12`}>
       
        </p> */}
      </div>
    </div>
  );

export default Card;
