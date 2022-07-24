/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Row, Col, Card, ProgressBar, Form,
} from 'react-bootstrap';
import Image from 'next/image';
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import '@/pages/index.module.scss';

import { Campaign } from '../types';
import requests from '../utils/requests';

interface Props {
  campaigns: Campaign[];
}

export const getServerSideProps = async () => {
  const [campaigns] = await Promise.all([
    fetch(requests.fetchCampaign).then((res) => res.json()),
  ]);

  return {
    props: {
      campaigns: campaigns.data,
    },
  };
};

function Home({
  campaigns,
}: Props) {
  const [campaignData, setCampaignData] = useState<Campaign[]>([]);
  const [, setSortValueData] = useState('');

  const onChangeSort = (e: any) => {
    const sortValue = e.target.value;
    let result = [];
    if (sortValue === 'asc-donation') {
      result = campaigns.sort((a, b) => a.donation_target - b.donation_target);
    } else {
      result = campaigns.sort((a, b) => a.days_remaining - b.days_remaining);
    }
    setSortValueData(sortValue);
    setCampaignData(result);
  };

  useEffect(() => {
    setCampaignData(campaigns);
  }, []);

  const decimalToPercentage = (received: number, target: number) => (
    Math.floor((received / target) * 100) >= 100 ? 100 : Math.floor((received / target) * 100));

  return (
    <>
      <Head>
        <title>Kitabisa.com FE Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="home">
        <div className="home__container container">
          <Row xs={1} md={2} className="mb-30 align-items-center">
            <Col className="d-flex align-items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
              <h1 className="fw-bold">Kitabisa.com</h1>
            </Col>
            <Col className="d-flex align-items-center home__sorting">
              <div className="home__sorting-text fs-base mr-10">Sorted By:</div>
              <div className="home__sorting-select">
                <Form.Select className="form-select--grey fs-base" onChange={onChangeSort}>
                  <option value="asc-donation">Donation Goal</option>
                  <option value="asc-day">Day Left</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <div className="home__item-wrapper border-radius-lg">
            <div className="d-flex mb-20 align-items-center">
              <FontAwesomeIcon
                icon={faBox}
                className="mr-10 fc-medium-blue fs-base"
              />
              Menampilkan
              <strong className="ml-5 mr-5 fc-medium-blue">
                {campaigns.length}
              </strong>
              data campaign.
            </div>

            <Row xs={1} md={2} lg={3}>
              {campaignData.map((campaign: any) => (
                <Col key={campaign.id} className="home__col-card-item mb-20">
                  <Card>
                    <div className="position-relative home__card-image">
                      <div className="position-absolute home__card-image-label fs-caption fw-semibold">
                        Target:
                        <CurrencyFormat className="ml-5" value={campaign.donation_target} displayType="text" thousandSeparator prefix="Rp." />
                      </div>
                      <Card.Img variant="top" src={campaign.image} />
                    </div>
                    <Card.Body>
                      <Card.Title className="fs-subhead fw-semibold fc-light-grey">{campaign.title}</Card.Title>
                      <ProgressBar striped className={`home__progress mb-15 ${decimalToPercentage(campaign.donation_received, campaign.donation_target) === 100 ? 'home__progress--achived' : 'home__progress--not-achived'}`} now={decimalToPercentage(campaign.donation_received, campaign.donation_target)} label={`${decimalToPercentage(campaign.donation_received, campaign.donation_target)}%`} />
                      <Card.Text className="fs-caption fc-light-grey mb-10">
                        Terkumpul
                      </Card.Text>
                      <Card.Text className="fs-title fw-bold mb-10 pb-10">
                        <CurrencyFormat value={campaign.donation_received} displayType="text" thousandSeparator prefix="Rp." />
                      </Card.Text>
                      <div className="border-bottom-light mb-10 mt-10" />
                      <div className="d-flex align-items-center fs-caption fc-light-grey">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="mr-10 fc-light-grey fs-base"
                        />
                        <Card.Text className="mr-5">
                          {campaign.days_remaining}
                        </Card.Text>
                        <Card.Text>
                          Sisa Hari
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
