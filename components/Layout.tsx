import React, { useState } from 'react';
import { useRouter } from 'next/router';

import NavbarComponent from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
  children: JSX.Element,
};

export const LayoutComponent = ({ children }: Props) => {
  const { asPath } = useRouter();
  const NavbarCheck = asPath.includes("detail") && <NavbarComponent onChange={() => { }} />;
  return (
    <>
      {NavbarCheck}
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
};
export default LayoutComponent;
