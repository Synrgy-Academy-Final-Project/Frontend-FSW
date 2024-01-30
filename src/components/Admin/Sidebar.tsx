import { useState } from "react";

import styled from "styled-components";
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const HelloAdmin = styled.b`
  position: relative;
  letter-spacing: -0.75px;
  line-height: 40px;
  
`;
const Flyid = styled.div`
  align-self: stretch;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Home1 = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Dropdown = styled.a`
  text-decoration: none;
  color:#ffffff;
  flex: 1;
  position: relative;
  font-size: 20px;
  letter-spacing: -0.75px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Open Sans";
  text-align: left;
`;

const InputData = styled.div`
  position: relative;
  font-size: 20px;
  letter-spacing: -0.75px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Open Sans";
  text-align: left;
`;
const MenuSidebar1 = styled.a`
  text-decoration: none;
  color:#ffffff;
  align-self: stretch;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 16px 0px 48px;
  box-sizing: border-box;
  gap: 16px;
  //&:hover {
  //  background-color: #6595fb;
  //}
`;
const Sidebar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: center;
  font-size: 16px;
  font-family: "Font Awesome 5 Pro";

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 100%; 
    position: absolute;
    z-index: 10;
  }
`;
const Sidebar1 = styled.div`
  background-color: #3e7bfa;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;

const DashboardRoot = styled.div`
  position: relative;
  background-color: #f5f5f9;
  //width: 100%;
  height: 1024px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 32px;
  color: #fff;
  font-family: "Open Sans";
`;
const ChevronIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 59px;
`;
const InputDataWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
`;

const SidebarComp = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <DashboardRoot>
            <Sidebar1>
                <Flyid>
                    <HelloAdmin>Fly.id</HelloAdmin>
                </Flyid>
                <Sidebar>
                    <MenuSidebar1 href={'/dashboard'}>
                        <Home1>
                            <Icon src="https://i.ibb.co/TLJ4RTz/Home.png" alt="Home" />
                        </Home1>
                        <Dropdown href={'/dashboard'}>Dashboard</Dropdown>
                    </MenuSidebar1>
                    <InputDataWrapper onClick={toggleDropdown}>
                        <MenuSidebar1>
                            <Home1>
                                <Icon src="https://i.ibb.co/kQfsLfJ/Edit.png" alt="Edit" />
                            </Home1>
                                <InputData>Input Data</InputData>
                                <ChevronIcon src={isDropdownOpen ? "https://i.ibb.co/y5RBDq2/Chevron-Up-1.png" : "https://i.ibb.co/nzyxQZ8/Chevron-Down-1.png"} alt="Chevron" />
                        </MenuSidebar1>
                    </InputDataWrapper>
                        {isDropdownOpen && (
                            <div>
                                <MenuSidebar1 href={'/airport'}>
                                    <Home1>
                                        <Icon src="https://i.ibb.co/Xxwc8HH/City.png" alt="City" />
                                    </Home1>
                                    <Dropdown href={'/airport'}>Kota/Bandara</Dropdown>
                                </MenuSidebar1>
                                <MenuSidebar1 href={'/airline'}>
                                    <Home1>
                                        <Icon src="https://i.ibb.co/K2qBzmS/Plane.png" alt="Plane" />
                                    </Home1>
                                    <Dropdown href={'/airline'}>Maskapai</Dropdown>
                                </MenuSidebar1>
                                <MenuSidebar1 href={'/departure-date'}>
                                    <Home1>
                                        <Icon src="https://i.ibb.co/mRJStTh/Calendar-Alt.png" alt="Calendar" />
                                    </Home1>
                                    <Dropdown href={'/departure-date'}>Tanggal</Dropdown>
                                </MenuSidebar1>
                                <MenuSidebar1 href={'/transaction'}>
                                    <Home1>
                                        <Icon src="https://i.ibb.co/0j1tTn7/Typewriter.png" alt="Typewriter" />
                                    </Home1>
                                    <Dropdown href={'/transaction'}>Laporan Transaksi</Dropdown>
                                </MenuSidebar1>
                            </div>
                        )}

                </Sidebar>
            </Sidebar1>
        </DashboardRoot>
    );
};

export default SidebarComp;