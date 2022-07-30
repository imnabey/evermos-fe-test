import React from 'react'
import styles from '@/styles/Footer.module.scss';
import Image from 'next/image';
import mixins from '@/styles/mixins.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>
        <div className="container">
          <div className="row">
            <div className="colMd6">
              <div className={`${styles.footerImageWrap} ${mixins.mb30}`}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <div className="playfair-display">LineGoods</div>
              </div>
              <div className="fw-bold mb10">
                LineGoods HQ
              </div>
              <div>
                Jl. Mawar Melati, Semuanya Indah. Jakarta Selatan. Indonesia
              </div>
            </div>
            <div className="colMd3">
              <div className="fw-bold">
                SOCIAL MEDIA
              </div>
              <ul className="list-unstyled">
                <li>
                  Instagram
                </li>
                <li>
                  Facebook
                </li>
                <li>
                  Twitter
                </li>
              </ul>
            </div>
            <div className="colMd3">
              <div className="fw-bold">
                CUSTOMER CARE
              </div>
              <ul className="list-unstyled font-14">
                <li className={`${mixins.mb15}`}>
                  <div className={`fw-bold`}>
                    Whatshapp
                  </div>
                  08883123214
                </li>
                <li>
                  <div className="fw-bold">
                    Email
                  </div>
                  contact@linegoods.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footerCopyright} font-12 mt15 text-center`}>
        <div className="container">
          2022 © PT. Line Goods. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
