import { useEffect, useState } from "react";
import axios from "axios";
import { ITickets, ITicketsMinPrice } from "../../../services/types";

interface Option {
  value: string;
  label: string;
  detailLabel: string;
}

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

  const handleSearch = async (
    selectedTime: string,
    amenities: Record<string, boolean> = {},
    passengersData: { type: string; count: number }[],
    selectedPrice: { min: number; max: number }[]
  ) => {
    if (
      selectedOriginOption &&
      selectedDestinationOption &&
      departureDate &&
      ((!isReturnTicket && returnDate === null) || returnDate)
    ) {
      const departureCode = selectedOriginOption.value.toLowerCase();
      const arrivalCode = selectedDestinationOption.value.toLowerCase();
      console.log("selectedPrice : ", selectedPrice);

      const formattedDepartureDate = departureDate
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-");

      const formattedReturnDate = returnDate
        ? returnDate
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .replace(/\//g, "-")
        : null;

      const params = new URLSearchParams();
      params.append("departureCode", departureCode);
      params.append("arrivalCode", arrivalCode);
      params.append("departureDate", formattedDepartureDate);
      params.append("airplaneClass", selectedClass);

      if (
        selectedTime === "pagi" ||
        selectedTime === "siang" ||
        selectedTime === "sore" ||
        selectedTime === "malam"
      ) {
        params.append("departureTime", selectedTime);
      }

      if (selectedPrice.length === 2) {
        params.append("fromPrice", selectedPrice[0].toString());
        params.append("toPrice", selectedPrice[1].toString());
      }

      const amenityEndpoints: Record<string, string> = {
        bagasi: "baggage",
        hiburan: "entertainment",
        makanan: "meals",
        stopkontak: "usb",
        wifi: "wifi",
        reschedule: "reschedule",
      };

      // Menambahkan amenities ke params jika bernilai true
      Object.entries(amenities).forEach(([amenity, value]) => {
        if (value && amenityEndpoints[amenity]) {
          params.append(amenityEndpoints[amenity], amenityEndpoints[amenity]);
        }
      });

      const apiUrl = `https://fly-id-1999ce14c36e.herokuapp.com/scheduleflight/?${params.toString()}`;

      try {
        setLoading(true);

        const response = await axios.get(apiUrl);
        const flightData = response.data;
        const airplanes = flightData.data.content;
        setTickets(airplanes);

        // Handle flightData (e.g., display it, store it in state, etc.)
        console.log("Flight Data:", flightData);

        // Jika ini adalah pencarian tiket pulang dan returnDate tidak null
        if (isReturnTicket && returnDate) {
          // Buat parameter pencarian untuk tiket pulang
          const returnParams = new URLSearchParams();
          returnParams.append("departureCode", arrivalCode);
          returnParams.append("arrivalCode", departureCode);
          returnParams.append("departureDate", formattedReturnDate);
          returnParams.append("airplaneClass", selectedClass);

          if (
            selectedTime === "pagi" ||
            selectedTime === "siang" ||
            selectedTime === "sore" ||
            selectedTime === "malam"
          ) {
            returnParams.append("departureTime", selectedTime);
          }

          // Menambahkan amenities ke params jika bernilai true
          Object.entries(amenities).forEach(([amenity, value]) => {
            if (value && amenityEndpoints[amenity]) {
              returnParams.append(
                amenityEndpoints[amenity],
                amenityEndpoints[amenity]
              );
            }
          });

          if (selectedPrice.length === 2) {
            returnParams.append("fromPrice", selectedPrice[0].toString());
            returnParams.append("toPrice", selectedPrice[1].toString());
          }

          const returnApiUrl = `https://fly-id-1999ce14c36e.herokuapp.com/scheduleflight/?${returnParams.toString()}`;

          const returnResponse = await axios.get(returnApiUrl);
          const returnFlightData = returnResponse.data;
          const returnAirplanes = returnFlightData.data.content;

          // Handle return flight data
          console.log("Return Flight Data:", returnFlightData);

          setTickets((prevTickets) => [...prevTickets, ...returnAirplanes]);
        }

        const apiUrlMinimumPrice = `https://fly-id-1999ce14c36e.herokuapp.com/airplane/minimum-price?fromAirportCode=${departureCode}&toAirportCode=${arrivalCode}&departureDate=${formattedDepartureDate}`;
        const responseMP = await axios.get(apiUrlMinimumPrice);
        const flightDataMP = responseMP.data;
        const airplanesMP = flightDataMP.data;

        // Do something with the fetched data
        console.log("airplanes : ", airplanesMP);
        setMinimumPrice(airplanesMP);
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
