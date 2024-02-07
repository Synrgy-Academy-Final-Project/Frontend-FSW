import { useEffect, useState } from "react";
import axios from "axios";
import { ITickets, ITicketsMinPrice } from "../../../services/types";

interface Option {
  value: string;
  label: string;
  detailLabel: string;
}

// const getAirportData = async (): Promise<Option[]> => {
//   try {
//     const response = await axios.get(
//       "https://fly-id-1999ce14c36e.herokuapp.com/airports"
//     );
//     const airportData = response.data.data.content;

//     // Transform the data from the API into the desired format
//     const transformedData: Option[] = airportData.map((airport) => ({
//       value: airport.airportCode,
//       label: airport.airportCityCountry,
//       detailLabel: airport.airportCodeName,
//     }));

//     return transformedData;
//   } catch (error) {
//     console.error("Error fetching airport data:", error);
//     return [];
//   }
// };

// const options: Option[] = await getAirportData();

export const useTicketSearch = () => {
  const [tickets, setTickets] = useState<ITickets[]>([]);
  const [minprice, setMinimumPrice] = useState<ITicketsMinPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);

  const [selectedOriginOption, setSelectedOriginOption] =
    useState<Option | null>(null);
  const [selectedDestinationOption, setSelectedDestinationOption] =
    useState<Option | null>(null);

  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [DepartureDay, setDepartureDay] = useState<string>("");
  const [ReturnDay, setReturnDay] = useState<string>("");

  useEffect(() => {
    const fetchAirportData = async () => {
      try {
        const response = await axios.get(
          "https://fly-id-1999ce14c36e.herokuapp.com/airports"
        );
        const airportData = response.data.data.content;

        // Transform the data from the API into the desired format
        const transformedData: Option[] = airportData.map((airport) => ({
          value: airport.airportCode,
          label: airport.airportCityCountry,
          detailLabel: airport.airportCodeName,
        }));

        setOptions(transformedData);
      } catch (error) {
        console.error("Error fetching airport data:", error);
        setOptions([]);
      }
    };

    fetchAirportData();
  }, []);

  const handleOriginChange = (selected: Option | null) => {
    setSelectedOriginOption(selected);
  };

  const handleDestinationChange = (selected: Option | null) => {
    setSelectedDestinationOption(selected);
  };

  const handleDepartureDateChange = (date: Date | null) => {
    setDepartureDate(date);

    if (date) {
      const day = getHariFromDate(date);
      setDepartureDay(day);
    }
  };

  const handleReturnDateChange = (date: Date | null) => {
    setReturnDate(date);

    if (date) {
      const day = getHariFromDate(date);
      setReturnDay(day);
    }
  };

  const getHariFromDate = (date: Date | null): string => {
    if (date) {
      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];
      const dayIndex = date.getDay();
      return days[dayIndex];
    }
    return "";
  };

  const handleSwitch = () => {
    // Swap the values of selectedOriginOption and selectedDestinationOption
    const temp = selectedOriginOption;
    setSelectedOriginOption(selectedDestinationOption);
    setSelectedDestinationOption(temp);
  };

  const [isReturnTicket, setIsReturnTicket] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsReturnTicket(event.target.checked);
    // Clear the return date when unchecking the checkbox
    if (!event.target.checked) {
      setReturnDate(null);
      setReturnDay("");
    }
  };

  const [selectedClass, setSelectedClass] = useState<string>("");

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(event.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (selectedOriginOption && selectedDestinationOption && departureDate) {
      const departureCode = selectedOriginOption.value.toLowerCase();
      const arrivalCode = selectedDestinationOption.value.toLowerCase();
      const formattedDepartureDate = departureDate
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-");
      try {
        setLoading(true);
        console.log(loading);
        const apiUrl = `https://fly-id-1999ce14c36e.herokuapp.com/scheduleflight/?departureCode=${departureCode}&arrivalCode=${arrivalCode}&departureDate=${formattedDepartureDate}&airplaneClass=${selectedClass}`;
        const response = await axios.get(apiUrl);
        const flightData = response.data;
        const airplanes = flightData.data.content;

        const apiUrlMinimumPrice = `https://fly-id-1999ce14c36e.herokuapp.com/airplane/minimum-price?fromAirportCode=${departureCode}&toAirportCode=${arrivalCode}&departureDate=${formattedDepartureDate}`;
        console.log("apiUrl : ", apiUrlMinimumPrice);
        const responseMP = await axios.get(apiUrlMinimumPrice);
        const flightDataMP = responseMP.data;
        const airplanesMP = flightDataMP.data;

        // Do something with the fetched data
        console.log("airplanes : ", airplanesMP);
        setTickets(airplanes);
        setMinimumPrice(airplanesMP);

        // Handle flightData (e.g., display it, store it in state, etc.)
        console.log("Flight Data:", flightData);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // Handle case where required fields are not selected
      console.log("Please select origin, destination, and departure date.");
    }
  };

  return {
    tickets,
    minprice,
    options,
    isReturnTicket,
    selectedOriginOption,
    setSelectedOriginOption,
    selectedDestinationOption,
    setSelectedDestinationOption,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    DepartureDay,
    setDepartureDay,
    ReturnDay,
    setReturnDay,
    handleOriginChange,
    handleDestinationChange,
    handleDepartureDateChange,
    handleReturnDateChange,
    handleSwitch,
    handleCheckboxChange,
    handleClassChange,
    handleSearch,
    loading,
    // Other state variables and functions...
  };
};

export default useTicketSearch;
