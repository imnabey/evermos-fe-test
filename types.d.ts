declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface ICard {
  name: string,
  imgSrc: string,
  price: string,
  brand: string,
  rating: number
}

export interface IRadioButton {
  onChange: (e: any) => void
}

export interface IInputSearch {
  onChange: (e: any) => void
}

export interface ISelectDropdown {
  onChange: (e: any) => void
}

export interface INavbar {
  // isOpen: boolean,
  onChange: (e: any) => void
}

export interface ICarousel {
  imgSrc: { uuid: number; urlImg: StaticImageData; urlLink: string }[];
  className: string;
}
