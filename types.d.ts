declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export interface Campaign {
  data: {};
  campaign: {
    title: string;
    donation_received: number;
    days_remaining: number;
    // films: string;
    // people: string;
    // planets: string;
    // species: string;
    // vehicles: string;
  };
}
