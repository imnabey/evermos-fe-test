// import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import {
  Row, Col, Card, ProgressBar, Form
} from 'react-bootstrap';
import Image from 'next/image';
import * as CurrencyFormat from 'react-currency-format';

import '@/pages/index.module.scss';
// import variables from "@/styles/variables.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { Campaign } from '../types';

import requests from '../utils/requests';

interface Props {
  campaigns: Campaign[];
  campaign: Campaign[];
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

// var CurrencyFormat = require('react-currency-format');

function Home({
  campaigns,
}: Props) {

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
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <h1 className="fw-bold">Kitabisa.com</h1>
            </Col>
            <Col className="justify-content-end d-flex">
              <div>Sorted By:</div>
              <Form.Select>
                <option>Donation Goal</option>
                <option>Day Left</option>
              </Form.Select>
              {/* <Dropdown className="btn-dark-custom home__sort-btn btn-no-line">
                <Dropdown.Toggle id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Col>
          </Row>

          <div className="home__item-wrapper border-radius-lg">
            <div className="d-flex mb-20 align-items-center">
              <FontAwesomeIcon
                icon={faBox}
                className="mr-10 fc-medium-blue fs-base"
              />
              Menampilkan
              {' '}
              <strong className="ml-5 mr-5 fc-medium-blue">
                {' '}
                {campaigns.length}
                {' '}
              </strong>
              {' '}
              data campaign.
            </div>

            <Row>
              {campaigns.map((campaign: any) => (
                <Col md={4} key={campaign.id} className="home__col-card-item mb-20">
                  <Card>
                    <Card.Img variant="top" src={campaign.image.includes('kitabisa-userupload') ? campaign.image : 'https://via.placeholder.com/468x100?text=Visit+Blogging.com+Now'} />
                    <Card.Body>
                      <Card.Title className="fs-subhead fw-semibold fc-light-grey">{campaign.title}</Card.Title>
                      <Card.Text className="fs-title fw-bold mb-10 pb-10">
                        <CurrencyFormat value={campaign.donation_received} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                      </Card.Text>
                      <div className="home__campaign-number-detail">
                        <Card.Text className="fs-caption fc-light-grey mb-10">
                          Terkumpul
                        </Card.Text>
                        <ProgressBar striped className={`home__progress ${decimalToPercentage(campaign.donation_received, campaign.donation_target) === 100 ? "home__progress--achived" : "home__progress--not-achived"}`} now={decimalToPercentage(campaign.donation_received, campaign.donation_target)} label={`${decimalToPercentage(campaign.donation_received, campaign.donation_target)}%`} />
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
