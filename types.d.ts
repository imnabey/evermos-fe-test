declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface Campaign {
  campaign: {
    name: string,
    imgSrc: string,
    price: string,
    brand: string,
    // id: number
  };
  // data: {};
  // campaign: {
  //   title: string,
  //   donation_received: number,
  //   days_remaining: number,
  //   donation_percentage: number,
  //   donation_target: number,
  //   days_remaining: number,
  // };
  // donation_target: number,
  // days_remaining: number,
}

export interface ICard {
  name: string,
  imgSrc: string,
  price: string,
  brand: string,
  rating: number
  // id: number
}

export interface INavbar {
  isOpen: boolean,
  openFunc: () => void
}

export interface ICarousel {
  imgSrc: { uuid: number; urlImg: StaticImageData; urlLink: string }[];
  className: string;
  // src: { uuid: number; url: StaticImageData; }[];
  // id: number,
  // url: string
}
