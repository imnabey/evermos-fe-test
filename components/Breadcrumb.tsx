import React from 'react'
import Link from 'next/link';

import styles from '@/styles/Breadcrumb.module.scss';
import mixins from '@/styles/mixins.module.scss';

export default function Breadcrumb() {
  return (
    <div className={`${styles.breadcrumb} ${mixins.flex} ${mixins.alignItemsCenter} font-14 color-3`}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div className="ml20 mr20">/</div>
      <div className="color-5">Detail</div>
    </div>
  )
}
