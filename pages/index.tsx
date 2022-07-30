/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, connect } from 'react-redux';
import { isEqual } from 'lodash';
//
import styles from '@/pages/index.module.scss';

import CarouselImage from '@/components/Carousel';
import CardComponent from '@/components/Card';
import SelectComp from '@/components/Select';
import NavbarComponent from '@/components/Navbar';
import RadioButtonComp from '@/components/RadioButton';

import mixins from '@/styles/mixins.module.scss';

import { AppState, wrapper } from '../store/store';
import { fetchProduct } from '../store/productListSlice';

import LoadingIcon from '../assets/images/loading-icon.gif';
import Carousel1 from '../assets/images/carousel-makeup1.jpg';
import Carousel2 from '../assets/images/carousel-makeup2.jpg';
import Carousel3 from '../assets/images/carousel-makeup3.jpg';
import Carousel4 from '../assets/images/carousel-makeup4.jpg';
import Carousel5 from '../assets/images/carousel-makeup5.jpg';

import {
  queryStringify,
  removeEmptyAttributes,
  usePrevious,
} from '../helpers';

const carouselImg = [
  {
    uuid: 1,
    urlImg: Carousel1,
    urlLink: '/detail/435',
  },
  {
    uuid: 2,
    urlImg: Carousel2,
    urlLink: '/detail/477',
  },
  {
    uuid: 3,
    urlImg: Carousel3,
    urlLink: '/detail/488',
  },
  {
    uuid: 4,
    urlImg: Carousel4,
    urlLink: '/detail/468',
  },
  {
    uuid: 5,
    urlImg: Carousel5,
    urlLink: '/detail/398',
  },
];

function Home(props: any) {
  const { product: { data } } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState({
    product_type: '',
    rating_greater_than: 0,
  });

  const [filteredData, setFilteredData] = useState([]);

  const prevActiveFilter = usePrevious(activeFilter);
  const prevProductData = usePrevious(data);

  async function getProductListData() {
    setIsLoading(true);
    await dispatch<any>(fetchProduct(queryStringify(
      removeEmptyAttributes({
        ...activeFilter,
      }),
    )));
    setIsLoading(false);
  }

  useEffect(() => {
    if (!isEqual(prevProductData, data)) {
      setFilteredData(data);
    }
  }, [prevProductData, data]);

  useEffect(() => {
    if (!isEqual(prevActiveFilter, activeFilter)) {
      getProductListData();
    }
  }, [activeFilter, prevActiveFilter]);

  const onCategoryChange = (e: any) => {
    const categoryValue = e.target.value;

    setActiveFilter({
      ...activeFilter,
      product_type: categoryValue,
    });
  };

  const onFilterChange = (e: any) => {
    const filterValue = e.target.value;

    setActiveFilter({
      ...activeFilter,
      rating_greater_than: filterValue,
    });
  };

  const onInputChange = (e: any) => {
    const convertValue = e.target.value;

    const filteredSearchData = data.filter((item: any) => Object.keys(item).some(
      (key) => item[key]
          && item[key]
            .toString()
            .toLowerCase()
            .search(convertValue.toLowerCase()) !== -1,
    ));

    setFilteredData(filteredSearchData);
  };

  return (
    <>
      <Head>
        <title>Evermos FE Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Evermos FE Test by Nabilah Ayu Permata" />
      </Head>

      <NavbarComponent onChange={onInputChange} />

      <main className={styles.home}>
        <div className={`home__container container row-reverse ${mixins.mt20}`}>

          <CarouselImage imgSrc={carouselImg} className={`${mixins.mb20}`} />
          <div className="section-title">
            <h2 className="playfair-display">Categories</h2>
            <div className="border-bottom-light position-absolute" />
          </div>
          <RadioButtonComp onChange={onCategoryChange} />
          <div className={styles.homeFilter}>
            <div className={`${mixins.row}`}>
              <div className={`${mixins.col} ${mixins.colMd6} ${mixins.colSm12} ${styles.homeFilterDesc}`}>
                <div className="d-flex mb-20 align-items-center font-14">
                  <FontAwesomeIcon
                    icon={faBox}
                    className={`${mixins.mr10} fc-medium-blue fs-base color-5`}
                  />
                  Menampilkan
                  <strong className={`${mixins.mr5} ${mixins.ml5} font-14 color-5`}>
                    {filteredData.length >= 20 ? 20 : filteredData.length}
                  </strong>
                  data produk.
                </div>
              </div>
              <div className={`${mixins.col} ${mixins.colMd6} ${mixins.colSm12} ${mixins.flex} ${mixins.justifyContentEnd} ${mixins.alignItemsCenter} ${styles.homeFilterItem}`}>
                <div className="font-14">Filtered By:</div>
                <div className="ml10">
                  <SelectComp onChange={onFilterChange} />
                </div>
              </div>
            </div>
          </div>

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
              <div className={mixins.row}>
                {filteredData.slice(0, 20).map((campaign: any) => (
                  <div className={`${mixins.colMd3} ${mixins.colSm12} ${mixins.colLg4}`} key={campaign.id}>
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
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store: any) => async () => {
    await store.dispatch(fetchProduct('maybelline'));

    return {
      props: {
      },
    };
  },
);

const mapStateToProps = (state: AppState) => ({
  product: state.product,
});

export default connect(mapStateToProps)(Home);
