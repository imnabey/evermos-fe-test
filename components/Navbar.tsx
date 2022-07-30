import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import navbarStyles from '../styles/Navbar.module.scss';
import { INavbar } from '../types';
import mixins from '../styles/mixins.module.scss';

import InputSearch from './InputSearch';

export const Navbar: FC<INavbar> = () => {
  const { asPath } = useRouter();
  const checkIfHomepage = asPath === '/';

  return (
    <header className={`${navbarStyles.header} container`}>
      <nav className={navbarStyles.navbar}>
        <div className={`${mixins.row}`}>
          <div className={`${mixins.col} ${mixins.colLg6}`}>
            <div className={`${mixins.alignItemsCenter} ${mixins.flex}`}>
              <Link href="/" passHref>
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
          {checkIfHomepage
            && (
              <div className={`${mixins.col} ${mixins.colLg6} ${mixins.alignItemsCenter} ${mixins.flex} ${mixins.justifyContentEnd}`}>
                <InputSearch />
              </div>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
