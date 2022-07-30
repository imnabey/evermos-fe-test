import React, { useState } from 'react';

import NavbarComponent from '@/components/Navbar';
import Footer from '@/components/Footer';
// import styles from '../styles/Utils.module.scss';

type Props = {
  children: JSX.Element,
};

export function LayoutComponent({ children }: Props) {
  const [isBurgerNavOpen, setIsBurgerNavOpen] = useState(false);

  const openNavMenu = () => setIsBurgerNavOpen(!isBurgerNavOpen);

  return (
    <>
      <NavbarComponent isOpen={isBurgerNavOpen} openFunc={openNavMenu} />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}
export default LayoutComponent;
