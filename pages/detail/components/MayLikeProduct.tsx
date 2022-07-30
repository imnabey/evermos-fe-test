/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, connect } from 'react-redux';

import mixins from '@/styles/mixins.module.scss';

import CardComponent from '@/components/Card';

import { AppState, wrapper } from '../../../store/store';
import { fetchProduct } from '../../../store/productListSlice';

import LoadingIcon from '../../../assets/images/loading-icon.gif';

export function MayLikeProduct(props: any) {
  const { product: { data } } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function getRandomUserListData(param: any) {
    setIsLoading(true);
    await dispatch<any>(fetchProduct(param));
    setIsLoading(false);
  }

  useEffect(() => {
    getRandomUserListData('maybelline');
  }, []);

  // console.log(data, 'productx');

  return (
    <div className="mb50">
      <div className="section-title">
        <h2 className="playfair-display">Similar Product You May Like</h2>
        <div className="border-bottom-light position-absolute" />
      </div>

      {isLoading
        ? (
          <div className="container-loading">
            <Image
              src={LoadingIcon}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        )
        : (
          <div className={mixins.row}>
            {data.slice(0, 6).map((campaign: any) => (
              <div className={mixins.colMd4} key={campaign.id}>
                <Link href={`/detail/${campaign.id}`} passHref>
                  <a href={`/detail/${campaign.id}`}>
                    <CardComponent name={campaign.name} imgSrc={campaign.image_link} price={campaign.price} brand={campaign.brand} rating={campaign.rating} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store: any) => async ({ query }: any) => {
    const productData = query.data || 'page data';

    await store.dispatch(fetchProduct('maybelline'));

    return {
      props: {
        productData,
      },
    };
  },
);

const mapStateToProps = (state: AppState) => ({
  product: state.product,
});

export default connect(mapStateToProps)(MayLikeProduct);
