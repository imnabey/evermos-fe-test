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
import LoadingIcon from '../../../assets/images/loading-icon.gif';
// import { } from 'react-redux';

// import styles from '@/pages/index.module.scss';

import CarouselImage from '@/components/Carousel';
// import { selectAuthState, setAuthState } from '../store/productListSlice';
import mixins from '@/styles/mixins.module.scss';
import Card from '@/components/Card';
// import { wrapper, AppState } from '../store/store';

import { AppState, wrapper } from '../../../store/store';
import { fetchProduct } from '../../../store/productListSlice';

import { Campaign } from '../../../types';
import requests from '../../../utils/requests';

interface Props {
  product: Campaign[];
}

export const SimilarProduct = (props: any) => {
  const { product: { data } } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function getRandomUserListData(param: any) {
    setIsLoading(true);
    await dispatch(fetchProduct(param));
    setIsLoading(false);
  }

  useEffect(() => {
    getRandomUserListData("lipstick");
  }, []);

  console.log(data, "product")

  return (
    <div className="mb50">
      <div className="section-title">
        <h2 className="playfair-display">Similar Product You May Like</h2>
        <div className="border-bottom-light position-absolute"></div>
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
          {data.slice(0, 6).map((campaign: any) => (
            <div className={mixins.colMd4} key={campaign.id}>
              <Link href={`/detail/${campaign.id}`} passHref>
                <a>
                  <Card name={campaign.name} imgSrc={campaign.image_link} price={campaign.price} brand={campaign.brand} rating={campaign.rating} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      }
    </div>
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

export default connect(mapStateToProps)(SimilarProduct);

