/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { connect, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';

import styles from '@/pages/detail.module.scss';

import mixins from '@/styles/mixins.module.scss';

import Breadcrumb from '@/components/Breadcrumb';

import { AppState, wrapper } from '../../store/store';
import { fetchProductDetail } from '../../store/productDetailSlice';

import BannerDetail from '../../assets/images/banner-detail.jpg';
import LoadingIcon from '../../assets/images/loading-icon.gif';

import MayLikeProductComponent from './components/MayLikeProduct';

export function DetailProduct(props: any) {
  const { asPath } = useRouter();
  const urlId = asPath.substring(asPath.lastIndexOf('/') + 1);
  const [isLoading, setIsLoading] = useState(false);

  const { detail: { data } } = props;

  const dispatch = useDispatch();

  async function getProductDetailData(param: any) {
    setIsLoading(true);
    await dispatch<any>(fetchProductDetail(param));
    setIsLoading(false);
  }

  useEffect(() => {
    getProductDetailData(urlId);
  }, []);

  return (
    <main className={styles.detailProduct}>
      <Breadcrumb />
      {isLoading
        ? (
          <div className="container-loading">
            <Image
              src={LoadingIcon}
              alt="loading icon linegoods"
              width={100}
              height={100}
            />
          </div>
        )
        : (
          <div className="row mb50 mt20 detail-product">
            <div className={`${mixins.colMd4} ${mixins.colSm12} col`}>
              <div className="text-center">
                <Image
                  src={data.image_link}
                  alt={data.detailProductTitle}
                  className={styles.detailProductImg}
                  height={200}
                  width={180}
                />
              </div>
            </div>
            <div className={`${mixins.colMd8} ${mixins.colSm12} col detail-product__item`}>
              <div className="color-3">{data.brand}</div>
              <h1 className={`${styles.detailProductTitle} font-30 mt10 mb10`}>{data.name}</h1>
              <h2 className="font-30 mt10 mb10">
                {' '}
                $.
                {data.price}
              </h2>
              <div className={`${mixins.flex} ${mixins.alignItemsCenter}`}>
                <div className="rating mr10">
                  {[...Array(5)].map((star, index) => (
                    <FontAwesomeIcon
                      icon={faHeart}
                      key={star}
                      className={`${index <= data.rating ? 'ratingOn' : 'ratingOff'} mr5`}
                    />
                  ))}
                </div>
                <div className="color-3 font-14">
                  {data.rating}
                  {' '}
                  Ratings
                </div>
              </div>
              <div className={`${mixins.flex} mb25`}>
                {!isEmpty(data.product_colors) && data.product_colors.map((color: any) => (
                  <div className={`${styles.detailProductColor} mr20`} key={color.hex_value} style={{ backgroundColor: color.hex_value }} />
                ))}
              </div>

              <p className="font-16">{data.description}</p>
            </div>
          </div>
        )}

      <MayLikeProductComponent />

      <div className={`position-relative ${styles.bannerDetailWrap}`}>
        <div className={`position-absolute ${styles.bannerDetailText}`}>
          <div className={`font-14 ${styles.bannerDetailCaption} mb10`}>Just For You</div>
          <div className={`fw-bold font-22 ${styles.bannerDetailDesc} mb20`}>Want to get another make up discount? Let me show you.</div>
          <div className={`${styles.bannerButton} fw-bold font-16`}>BACK TO HOME</div>
        </div>
        <Link href="/" passHref>
          <a>
            <Image
              src={BannerDetail}
              alt="banner linegoods"
              className={styles.bannerImg}
              height={250}
            />
          </a>
        </Link>
      </div>
    </main>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store: any) => async () => {
    await store.dispatch(fetchProductDetail('blush'));
    // { query }: any
    return {
      props: {
        // campaigns,
      },
    };
  },
);

const mapStateToProps = (state: AppState) => ({
  detail: state.detail,
});

export default connect(mapStateToProps)(DetailProduct);
