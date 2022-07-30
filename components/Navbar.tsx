import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import navbarStyles from '../styles/Navbar.module.scss';
import { INavbar } from '../types';
import mixins from '../styles/mixins.module.scss';

import InputSearch from './InputSearch';


export const Navbar: FC<INavbar> = ({ isOpen, openFunc }) => {
  const { asPath } = useRouter();
  const checkIfHomepage = asPath === "/";
  return (
    <header className={`${navbarStyles.header} container`}>
      <nav className={navbarStyles.navbar}>
        {/* <a className={navbarStyles.navlogo}>[BrandLogo]</a> */}
        <div className={`${mixins.row}`}>
          <div className={`${mixins.col} ${mixins.colLg6}`}>
            <div className={`${mixins.alignItemsCenter} ${mixins.flex}`}>
              <Link href="/">
                <a>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
              <div className="playfair-display">LineGoods</div>
            </div>
          </div>
          {checkIfHomepage &&
            <div className={`${mixins.col} ${mixins.colLg6} ${mixins.alignItemsCenter} ${mixins.flex} ${mixins.justifyContentEnd}`}>
              <InputSearch />
            </div>
          }
        </div>

        {/* <ul className={isOpen ? `${navbarStyles.navmenu} ${navbarStyles.active}` : navbarStyles.navmenu}>
        <li className={navbarStyles.navitem}>
          <Link href="/" className={navbarStyles.navlink}>
            <a>
              Home
            </a>
          </Link>
        </li>
        <li className={navbarStyles.navitem}>
          <Link href="/about" className={navbarStyles.navlink}>
            <a>
              About
            </a>
          </Link>
        </li>
        <li className={navbarStyles.navitem}>
          <Link href="/" className={navbarStyles.navlink}>Contact</Link>
        </li>
      </ul>
      <button className={isOpen ? `${navbarStyles.hamburger} ${navbarStyles.active}` : navbarStyles.hamburger} onClick={openFunc}>
        <span className={navbarStyles.bar} />
        <span className={navbarStyles.bar} />
        <span className={navbarStyles.bar} />
      </button> */}
      </nav>
    </header>
  )

};

export default Navbar;
