/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector, connect } from 'react-redux';
// import { } from 'react-redux';

import styles from '@/pages/index.module.scss';

import CarouselImage from '@/components/Carousel';
// import { selectAuthState, setAuthState } from '../store/productListSlice';
import mixins from '../styles/mixins.module.scss';
import Card from '../components/Card';
import Select from '@/components/Select';
// import { wrapper, AppState } from '../store/store';

import { AppState, wrapper } from '../store/store';
import { fetchProduct } from '../store/productListSlice';

import { Campaign } from '../types';
import requests from '../utils/requests';
import LoadingIcon from '../assets/images/loading-icon.gif';
// import LogoBg from '../assets/images/logo-bg.jpg';
import Carousel1 from '../assets/images/carousel-makeup1.jpg';
import Carousel2 from '../assets/images/carousel-makeup2.jpg';
import Carousel3 from '../assets/images/carousel-makeup3.jpg';
import Carousel4 from '../assets/images/carousel-makeup4.jpg';
import Carousel5 from '../assets/images/carousel-makeup5.jpg';
import RadioButton from '@/components/RadioButton';
interface Props {
  product: Campaign[];
}

const carouselImg = [
  {
    uuid: 1,
    urlImg: Carousel1,
    urlLink: '/detail/435',
  },
  {
    uuid: 2,
    urlImg: Carousel2,
    urlLink: '/detail/431',
  },
  {
    uuid: 3,
    urlImg: Carousel3,
    urlLink: '/detail/415',
  },
  {
    uuid: 4,
    urlImg: Carousel4,
    urlLink: '/detail/535',
  },
  {
    uuid: 5,
    urlImg: Carousel5,
    urlLink: '/detail/495',
  },
];

export const Home = (props: any) => {
  const { product: { data } } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function getRandomUserListData(param: any) {
    setIsLoading(true);
    await dispatch(fetchProduct(param));
    setIsLoading(false);
  }

  useEffect(() => {
    getRandomUserListData("");
  }, []);


  console.log(data, "product")

  return (
    <>
      <Head>
        <title>Evermos FE Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.home}>
        <div className={`home__container container row-reverse ${mixins.mt20}`}>

          <CarouselImage imgSrc={carouselImg} className={`${mixins.mb20}`} />
          <div className="section-title">
            <h2 className="playfair-display">Categories</h2>
            <div className="border-bottom-light position-absolute"></div>
          </div>
          <RadioButton />
          <div className="mt50">
            <div className={styles.homeFilter}>
              <div className={`${mixins.row}`}>
                <div className={`${mixins.col} ${mixins.colMd6}`}>
                  <div className="d-flex mb-20 align-items-center font-14">
                    <FontAwesomeIcon
                      icon={faBox}
                      className={`${mixins.mr10} fc-medium-blue fs-base color-5`}
                    />
                    Menampilkan
                    <strong className={`${mixins.mr5} ${mixins.ml5} font-14 color-5`}>
                      {data.length}
                    </strong>
                    data campaign.
                  </div>
                </div>
                <div className={`${mixins.col} ${mixins.colMd6} ${mixins.flex} ${mixins.justifyContentEnd} ${mixins.alignItemsCenter}`}>
                  <div className="font-14">Sorted By:</div>
                  <div className={"ml10"}>
                    <Select />
                  </div>
                </div>
              </div>

            </div>

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
              <div className={mixins.row}>
                {data.slice(0, 20).map((campaign: any) => (
                  <div className={mixins.colMd3} key={campaign.id}>
                    <Link href={`/detail/${campaign.id}`} passHref>
                      <a>
                        <Card name={campaign.name} imgSrc={campaign.image_link} price={campaign.price} brand={campaign.brand} rating={campaign.rating} />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>}
          </div>
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
    const productData = query.data || 'page data';
    console.log(productData, "kkk");

    //  http://localhost:3000/product?data='some-data'
    await store.dispatch(fetchProduct("blush"));
    console.log('State on server', store.getState());

    // const [campaigns] = await Promise.all([
    //   fetch(requests.fetchCampaign).then((res) => res.json()),
    // ]);

    return {
      props: {
        productData,
        // campaigns,
      },
    };
  },
);

const mapStateToProps = (state: AppState) => ({
  // profile: state.profile,
  product: state.product
});

export default connect(mapStateToProps)(Home);

