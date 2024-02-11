import React, { useEffect, useState } from "react";
import "./FilterListTicket.css";
import Slider from "react-slider";

const MIN = 0;
const MAX = 10000000;

// interface FilterListTicketProps {
//   onDepartureTimeChange: (selectedTime: string) => void;
// }

const FilterListTicket = ({ onDepartureTimeChange, onAmenitiesChange }) => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleDepartureTimeClick = (selectedTime) => {
    // Panggil callback dan kirimkan data waktu keberangkatan
    console.log(amenities);
    onDepartureTimeChange(selectedTime, amenities);
    setSelectedTime(selectedTime);
  };

  const [amenities, setAmenities] = useState({
    bagasi: false,
    hiburan: false,
    makanan: false,
    stopkontak: false,
    wifi: false,
    reschedule: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newAmenities = { ...amenities, [name]: checked };
    setAmenities(newAmenities);
    console.log(selectedTime);
    // Panggil callback dan kirimkan data waktu keberangkatan serta fasilitas yang baru
    onAmenitiesChange(newAmenities, selectedTime); // Tambahkan selectedTime di sini
  };

  const handleResetFilter = () => {
    // Reset waktu keberangkatan
    setSelectedTime("");
    // Reset fasilitas (amenities)
    setAmenities({
      bagasi: false,
      hiburan: false,
      makanan: false,
      stopkontak: false,
      wifi: false,
      reschedule: false,
    });
    // Panggil callback untuk memberitahu perubahan filter
    onDepartureTimeChange(""); // Kosongkan waktu keberangkatan
    onAmenitiesChange({}); // Kosongkan fasilitas
  };

  return (
    <div className="listContainer">
      {/* Filter Header */}
      <div className="lsHeader">
        <h2 className="textH2">Filter</h2>
        <button className="resetBtn" onClick={handleResetFilter}>
          Reset
        </button>
      </div>

      <div className="lsContent">
        {/* Waktu Keberangkatan */}
        <div className="lsTime">
          <h2 className="textH2">Waktu keberangkatan</h2>
          <div className="timeWrapper">
            <div className="timeRow">
              <div
                className={`timeCard ${
                  selectedTime === "pagi" ? "selected" : ""
                }`}
              >
                <button onClick={() => handleDepartureTimeClick("pagi")}>
                  <img src="./images/ic_morning.png" alt="ic_morning" />
                  <h3 className="textH3">Pagi</h3>
                  <h4 className="textH4">00:00 - 11:59</h4>
                </button>
              </div>
              <div
                className={`timeCard ${
                  selectedTime === "siang" ? "selected" : ""
                }`}
              >
                <button onClick={() => handleDepartureTimeClick("siang")}>
                  <img src="./images/ic_noon.png" alt="ic_noon" />
                  <h3 className="textH3">Siang</h3>
                  <h4 className="textH4">12:00 - 14:59</h4>
                </button>
              </div>
            </div>

            <div className="timeRow">
              <div
                className={`timeCard ${
                  selectedTime === "sore" ? "selected" : ""
                }`}
              >
                <button onClick={() => handleDepartureTimeClick("sore")}>
                  <img src="./images/ic_afternoon.png" alt="ic_afternoon" />
                  <h3 className="textH3">Sore</h3>
                  <h4 className="textH4">15:00 - 17:59</h4>
                </button>
              </div>
              <div
                className={`timeCard ${
                  selectedTime === "malam" ? "selected" : ""
                }`}
              >
                <button onClick={() => handleDepartureTimeClick("malam")}>
                  <img src="./images/ic_night.png" alt="ic_night" />
                  <h3 className="textH3">Malam</h3>
                  <h4 className="textH4">18:00 - 23:59</h4>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Harga */}
        <div className="lsPrice">
          <h2 className="textH2">Harga</h2>
          <div className="sliderWrapper">
            <Slider
              className="slider"
              trackClassName="track"
              onChange={(values: number | number[] | null) => {
                if (values !== null && !Array.isArray(values)) {
                  setValues([values, MAX]);
                  console.log("log 1", values);
                } else if (Array.isArray(values)) {
                  setValues([values[0], values[1]]);
                  console.log("log 2", values);
                }
              }}
              value={values}
              min={MIN}
              max={MAX}
            />
          </div>
          <div className="priceWrapper">
            <div className="priceCard">
              <span>harga min</span>
              <h1 className="textH1">Rp{values[0]}</h1>
            </div>
            <div className="priceCard">
              <span>harga max</span>
              <h1 className="textH1">Rp{values[1]}</h1>
            </div>
          </div>
        </div>

        {/* Pemberhentian */}
        <div className="lsNOL">
          <h2 className="textH2">Pemberhentian</h2>
          <div className="NolContent">
            <div className="NolWrapper">
              <div className="checkContent">
                <input type="checkbox" name="nonStop" id="nonStop" />
                <label htmlFor="nonStop">Non stop</label>
              </div>
              <span>+0</span>
            </div>
            <div className="NolWrapper">
              <div className="checkContent">
                <input type="checkbox" name="oneStop" id="oneStop" />
                <label htmlFor="oneStop">1 Stop</label>
              </div>
              <span>+Rp200.000</span>
            </div>
            <div className="NolWrapper">
              <div className="checkContent">
                <input type="checkbox" name="twoStop" id="twoStop" />
                <label htmlFor="twoStop">2 Stop</label>
              </div>
              <span>+Rp400.000</span>
            </div>
          </div>
        </div>

        {/* Maskapai */}
        <div className="lsAirlines">
          <h2 className="textH2">Maskapai</h2>
          <div className="airlinesContent">
            <div className="checkContent">
              <input type="checkbox" name="airlines1" id="airlines1" />
              <label htmlFor="airlines1">Air Asia</label>
            </div>
            <div className="checkContent">
              <input type="checkbox" name="airlines2" id="airlines2" />
              <label htmlFor="airlines2">Aerolineas Argentinas</label>
            </div>
          </div>
        </div>

        {/* Facility */}
        <div className="lsNOL">
          <h2 className="textH2">Fasilitas</h2>
          <div className="NolContent">
            <div className="NolWrapper">
              <div className="checkContent">
                <input
                  type="checkbox"
                  name="bagasi"
                  id="bagasi"
                  checked={amenities.bagasi}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="bagasi">Bagasi</label>
              </div>
              <img src="./images/ic_shopping_bag.png" alt="shopping_bag" />
            </div>
            <div className="NolWrapper">
              <div className="checkContent">
                <input
                  type="checkbox"
                  name="hiburan"
                  id="hiburan"
                  checked={amenities.hiburan}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="hiburan">Hiburan di pesawat</label>
              </div>
              <img src="./images/ic_youtube_square.png" alt="youtube_square" />
            </div>
            <div className="NolWrapper">
              <div className="checkContent">
                <input
                  type="checkbox"
                  name="makanan"
                  id="makanan"
                  checked={amenities.makanan}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="makanan">Makanan di pesawat</label>
              </div>
              <img src="./images/ic_utensils.png" alt="utensils" />
            </div>
            <div className="NolWrapper">
              <div className="checkContent">
                <input
                  type="checkbox"
                  name="stopkontak"
                  id="stopkontak"
                  checked={amenities.stopkontak}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="stopkontak">Stopkontak atau USB</label>
              </div>
              <img src="./images/ic_usb.png" alt="usb" />
            </div>
            <div className="NolWrapper">
              <div className="checkContent">
                <input
                  type="checkbox"
                  name="wifi"
                  id="wifi"
                  checked={amenities.wifi}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <img src="./images/ic_wifi.png" alt="wifi" />
            </div>
          </div>
        </div>

        {/* Refund & Reschedule */}
        <div className="lsRR">
          <h2 className="textH2">Refund & Reschedule</h2>
          <div className="RRContent">
            <div className="checkContent">
              <input type="checkbox" name="refund" id="refund" />
              <label htmlFor="refund">Refund</label>
            </div>
            <div className="checkContent">
              <input
                type="checkbox"
                name="reschedule"
                id="reschedule"
                checked={amenities.reschedule}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="reschedule">Reschedule</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterListTicket;
