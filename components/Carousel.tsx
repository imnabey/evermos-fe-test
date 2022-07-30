import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from '@/styles/Carousel.module.scss';

import { ICarousel } from 'types';

export const CarouselComponent: FC<ICarousel> = ({ imgSrc, className }) => (
  <Carousel showThumbs={false} swipeable className={className} emulateTouch showStatus={false} showArrows={false}>
    {imgSrc.map((src) => (
      <Link href={src.urlLink} key={src.uuid}>
        <a>
          <Image
            className={styles.carouselImg}
            src={src.urlImg}
            alt="Picture of the author"
            height={550}
          />
          <div className={`${styles.carouselText} ${styles.carouselTextSlide1}`}>
            <div className={styles.carouselTextItem}>
              <div className="font-18">Exclusive Now</div>
              <h3 className="playfair-display font-40 fw-bold mt20 mb25">UP TO 35% OFF</h3>
              <div className="font-20 pb30">Koleksi terbaik blush hanya untukmu bestie. Yuk liat dulu, siapa tahu minat!</div>
              <div className={`${styles.carouselBannerButton} fw-bold fs-25`}>SHOP NOW</div>
            </div>
          </div>
        </a>
      </Link>

    ))}
  </Carousel>
);

export default CarouselComponent;
