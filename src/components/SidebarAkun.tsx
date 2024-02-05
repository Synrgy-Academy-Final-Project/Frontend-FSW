import React, { useState } from "react";
import "./SidebarAkun.css";

const SidebarAkun: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  interface Option {
    id: number;
    whiteIcon: JSX.Element;
    blueIcon: JSX.Element;
    text: string;
  }

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const options = [
    {
      id: 1,
      whiteIcon: (
        <img src="./images/ic_history-white.png" alt="ic_history-white" />
      ),
      blueIcon: (
        <img src="./images/ic_history-blue.png" alt="ic_history-blue" />
      ),
      text: "Pesanan",
    },
    {
      id: 2,
      whiteIcon: <img src="./images/ic_bell-white.png" alt="ic_bell-white" />,
      blueIcon: <img src="./images/ic_bell-blue.png" alt="ic_bell-blue" />,
      text: "Notifikasi Harga",
    },
    {
      id: 3,
      whiteIcon: <img src="./images/ic_star-white.png" alt="ic_star-white" />,
      blueIcon: <img src="./images/ic_star-blue.png" alt="ic_star-blue" />,
      text: "Favorit",
    },
    {
      id: 4,
      whiteIcon: (
        <img
          src="./images/ic_folder_download-white.png"
          alt="ic_folder_download-white"
        />
      ),
      blueIcon: (
        <img
          src="./images/ic_folder_download-blue.png"
          alt="ic_folder_download-blue"
        />
      ),
      text: "Data Penumpang Tersimpan",
    },
    {
      id: 5,
      whiteIcon: <img src="./images/ic_cog-white.png" alt="ic_cog-white" />,
      blueIcon: <img src="./images/ic_cog-blue.png" alt="ic_cog-blue" />,
      text: "Pengaturan Akun",
    },
    {
      id: 6,
      whiteIcon: (
        <img src="./images/ic_power_off-white.png" alt="ic_power_off-white" />
      ),
      blueIcon: (
        <img
          src="./images/ic_power_off-blue.png"
          alt="./images/ic_power_off-blue"
        />
      ),
      text: "Pengaturan Akun",
    },
  ];

  return (
    <div className="sidebar">
      <ul>
        {options.map((option) => (
          <li
            key={option.id}
            className={
              selectedOption && selectedOption.id === option.id
                ? "selected"
                : ""
            }
            onClick={() => handleOptionClick(option)}
          >
            <span className="option-icon">
              {selectedOption && selectedOption.id === option.id
                ? option.whiteIcon
                : option.blueIcon}
            </span>
            <span className="option-text">{option.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SidebarAkun;
