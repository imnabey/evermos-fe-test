/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  // faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useRouter } from 'next/router';
import { isEmpty } from 'lodash';
// import { useLocation } from 'react-router-dom';
// import { } from 'react-redux';

import styles from '@/pages/detail.module.scss';

// import CarouselImage from '@/components/Carousel';
// import { selectAuthState, setAuthState } from '../store/productListSlice';
import mixins from '@/styles/mixins.module.scss';
import BannerDetail from '../../assets/images/banner-detail.jpg';
import LoadingIcon from '../../assets/images/loading-icon.gif';
// import Card from '../components/Card';
// import { wrapper, AppState } from '../store/store';

import { AppState, wrapper } from '../../store/store';
import { fetchProductDetail } from '../../store/productDetailSlice';

import { Campaign } from '../../types';
import SimilarProduct from './components/SimilarProduct';
import Breadcrumb from '@/components/Breadcrumb';
// import requests from '../utils/requests';


interface Props {
  product: Campaign[];
}

export const DetailProduct = (props: any) => {
  const { asPath } = useRouter();
  const urlId = asPath.substring(asPath.lastIndexOf('/') + 1);
  const [isLoading, setIsLoading] = useState(false);

  const { detail: { data } } = props;

  const dispatch = useDispatch();

  async function getRandomUserListData(param: any) {
    setIsLoading(true);
    await dispatch(fetchProductDetail(param));
    setIsLoading(false);
  }

  useEffect(() => {
    // setCampaignData(campaigns);
    getRandomUserListData(urlId);
  }, []);
  console.log(data.product_colors, "productdetail")

  return (
    <>
      <main className={styles.detailProduct}>
        {/* <div className={styles.detailProductBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="font-20 pb10 pt10" />
          <div className="ml10">Back</div>
        </div> */}
        <Breadcrumb />
        {isLoading ?
          <div className="container-loading">
            <Image
              src={LoadingIcon}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          :
          <div className="row mb50 mt20 detail-product">
            <div className={`${mixins.colMd4} col`}>
              <div className="text-center">
                <img
                  src={data.image_link}
                  alt="logo"
                  className="detail-product__img"
                  height={210}
                />
              </div>
            </div>
            <div className={`${mixins.colMd8} col detail-product__item`}>
              <div className="color-3">{data.brand}</div>
              <h1 className={`${styles.detailProductTitle} font-30 mt10 mb10`}>{data.name}</h1>
              <h2 className="font-30 mt10 mb10"> $.{data.price}</h2>
              <div className={`${mixins.flex} ${mixins.alignItemsCenter}`}>
                <div className={"rating mr10"}>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <FontAwesomeIcon
                        icon={faHeart}
                        key={star}
                        className={`${index <= data.rating ? "ratingOn" : "ratingOff"} mr5`}
                      />
                    );
                  })}
                </div>
                <div className="color-3 font-14">{data.rating} Ratings</div>
              </div>
              <div className={`${mixins.flex} mb25`}>
                {!isEmpty(data.product_colors) && data.product_colors.map((color: any, index: any) => (
                  <div className={`${styles.detailProductColor} mr20`} key={color.hex_value} style={{ backgroundColor: color.hex_value }} />
                ))}
              </div>

              {/* <div className="fw-bold">Description</div> */}
              <p className="font-16">{data.description}</p>

            </div>
          </div>
        }


        {/* <div className={`home__container container row-reverse ${mixins.mt20}`}>
          dasdf
        </div> */}
        <SimilarProduct />

        <div className={`position-relative ${styles.bannerDetailWrap}`}>
          <div className={`position-absolute ${styles.bannerDetailText}`}>
            <div className={`font-14 ${styles.bannerDetailCaption} mb10`}>Just For You</div>
            <div className={`fw-bold font-22 ${styles.bannerDetailDesc} mb20`}>Want to get another make up discount? Let me show you.</div>
            <div className={`${styles.bannerButton} fw-bold font-16`}>BACK TO HOME</div>
          </div>
          <Link href="/">
            <a>
              <Image
                src={BannerDetail}
                alt="logo"
                className={styles.bannerImg}
                // width={50}
                height={250}
              />
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store: any) => async ({ query }: any) => {
    // we can set the initial state from here
    // await store.dispatch(setAuthState(false));
    // console.log(params, "kl");
    // const productDData = query.data || 'page data';
    // console.log(productData, "kkk");

    //  http://localhost:3000/product?data='some-data'
    await store.dispatch(fetchProductDetail("blush"));
    console.log('State on server', store.getState());

    // const [campaigns] = await Promise.all([
    //   fetch(requests.fetchCampaign).then((res) => res.json()),
    // ]);

    return {
      props: {
        // detail
        // campaigns,
      },
    };
  },
);

const mapStateToProps = (state: AppState) => ({
  // profile: state.profile,
  detail: state.detail
});

export default connect(mapStateToProps)(DetailProduct);

// export default Home;

