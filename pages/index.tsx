import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.scss";
// import variables from "@/styles/variables.module.scss";
import { Campaign } from "../types";

import requests from "../utils/requests";

interface Props {
  campaigns: Campaign[];
  campaign: Campaign[];
}

export const getServerSideProps = async () => {
  const [campaigns] = await Promise.all([
    fetch(requests.fetchCampaign).then(res => res.json())
  ]);

  return {
    props: {
      campaigns: campaigns.data
    }
  };
};

const Home = ({
  campaigns
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  console.log(campaigns, "CEl");

  return (
    <div className={styles.home}>
      <Head>
        <title>Kitabisa.com FE Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <h1 className="fw-bold">Kitabisa.com</h1>
        <div className="row">
          {campaigns.map((campaign: any, index: number) => (
            <div className="col-sm-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{campaign.title}</h5>
                  <p className="card-text">{campaign.donation_received}</p>
                  <div>{campaign.days_remaining}</div>
                  <a href="#" className="btn btn-primary"></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
