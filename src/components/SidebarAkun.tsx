import React, { useState } from "react";
import "./SidebarAkun.css";
import { useNavigate } from "react-router-dom";

interface SidebarAkunProps {
  handleOptionClick: (optionId: number) => void;
}

const SidebarAkun: React.FC<SidebarAkunProps> = ({ handleOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const navigate = useNavigate()

  interface Option {
    id: number;
    page: string;
    whiteIcon: JSX.Element;
    blueIcon: JSX.Element;
    text: string;
  }

  const options: Option[] = [
    {
      id: 1,
      page: "/pesanan",
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
      page: "/notifikasi-harga",
      whiteIcon: <img src="./images/ic_bell-white.png" alt="ic_bell-white" />,
      blueIcon: <img src="./images/ic_bell-blue.png" alt="ic_bell-blue" />,
      text: "Notifikasi Harga",
    },
    {
      id: 3,
      page: "/favorit",
      whiteIcon: <img src="./images/ic_star-white.png" alt="ic_star-white" />,
      blueIcon: <img src="./images/ic_star-blue.png" alt="ic_star-blue" />,
      text: "Favorit",
    },
    {
      id: 4,
      page: "/data-penumpang-favorit",
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
      page: "/profile",
      whiteIcon: <img src="./images/ic_cog-white.png" alt="ic_cog-white" />,
      blueIcon: <img src="./images/ic_cog-blue.png" alt="ic_cog-blue" />,
      text: "Pengaturan Akun",
    },
    {
      id: 6,
      page: "/",
      whiteIcon: (
        <img src="./images/ic_power_off-white.png" alt="ic_power_off-white" />
      ),
      blueIcon: (
        <img
          src="./images/ic_power_off-blue.png"
          alt="./images/ic_power_off-blue"
        />
      ),
      text: "Keluar Akun",
    },
  ];

  return (
    <div className="sidebar">
      <ul>
        {options.map((option) => (
          <li
            key={option.id}
            className={
              window.location.pathname === option.page
                ? "bg-primary p-3 bg-opacity-75 rounded-2"
                : ""
            }
            onClick={() => {
              setSelectedOption(option.id);
              handleOptionClick(option.id);
            }}
          >
            <span className="option-icon">
              {window.location.pathname === option.page
                ? option.whiteIcon
                : option.blueIcon}
            </span>
            <button
              onClick={() => navigate(option.page)}
              className={
                window.location.pathname === option.page ? "text-white" : "text-secondary"
              }
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SidebarAkun;
