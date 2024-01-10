import React, { useState } from "react";
import "./FilterListTicket.css";
import Slider from "react-slider";

const MIN = 0;
const MAX = 10000000;

const FilterListTicket: React.FC = () => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);

  return (
    <div className="listContainer">
      {/* Filter Header */}
      <div className="lsHeader">
        <h2 className="textH2">Filter</h2>
        <h2 className="resetBtn">Reset</h2>
      </div>

      <div className="lsContent">
        {/* Waktu Keberangkatan */}
        <div className="lsTime">
          <h2 className="textH2">Waktu keberangkatan</h2>
          <div className="timeWrapper">
            <div className="timeRow">
              <div className="timeCard">
                <img src="./images/ic_morning.png" alt="ic_morning" />
                <h3 className="textH3">Pagi</h3>
                <h4 className="textH4">00:00 - 11:59</h4>
              </div>
              <div className="timeCard">
                <img src="./images/ic_noon.png" alt="ic_noon" />
                <h3 className="textH3">Siang</h3>
                <h4 className="textH4">12:00 - 14:59</h4>
              </div>
            </div>

            <div className="timeRow">
              <div className="timeCard">
                <img src="./images/ic_afternoon.png" alt="ic_afternoon" />
                <h3 className="textH3">Sore</h3>
                <h4 className="textH4">15:00 - 17:59</h4>
              </div>
              <div className="timeCard">
                <img src="./images/ic_night.png" alt="ic_night" />
                <h3 className="textH3">Malam</h3>
                <h4 className="textH4">18:00 - 23:59</h4>
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
              onChange={setValues}
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
      </div>
    </div>
  );
};

export default FilterListTicket;
