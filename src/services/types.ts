export interface IParams {
  page?: number;
  size?: number;
}

export interface ITickets {
  airplaneId?: string;
  companyName?: string;
  urlLogo?: string;
  airplaneName?: string;
  airplaneCode?: string;
  airplaneClassId?: string;
  airplaneClass?: string;
  capacity?: number;
  airplaneServices?: {
    baggage?: number;
    cabinBaggage?: number;
    meals?: boolean;
    travelInsurance?: boolean;
    inflightEntertainment?: boolean;
    electricSocket?: boolean;
    wifi?: boolean;
    reschedule?: boolean;
    refund?: number;
  };
  airplaneFlightTimeId?: string;
  flightTime?: number;
  departureCode?: string;
  departureCityCode?: string;
  arrivalCode?: string;
  arrivalCityCode?: string;
  departureTime?: string;
  arrivalTime?: string;
  totalPrice?: number;
}

export interface ITicketsMinPrice {
  id?: string;
  date?: string;
  price?: number;
}
