import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  NavBtn,
  NavList,
  Navbar,
  ProfileWrapper,
  SemiBoldBlue,
} from "./styles/PesananHeader.styled";

interface Header {
  label?: string;
}
interface User {
  firstName?: string;
  lastName?: string;
}

const PesananHeader: React.FC = () => {
  const token = localStorage.getItem("token");
  const base_url = "https://fly-id-1999ce14c36e.herokuapp.com";

  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(base_url + "/user-detail/logged-in-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 500) {
          localStorage.removeItem("token");
          throw new Error("Token tidak valid!");
        }

        const responseJson = await response.json();

        if (response.status === 200) {
          setUser({
            firstName: responseJson.data.usersDetails.firstName,
            lastName: responseJson.data.usersDetails.lastName,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <>
      <HeaderContainer>
        <img src="./images/logo-1.png" alt="logo-1" />

        <Navbar>
          <NavList>
            <NavBtn href="#">
              Unduh Aplikasi{" "}
              <img src="./images/ic_chevron_down.png" alt="ic_chevron_down" />
            </NavBtn>
          </NavList>
          <NavList>
            <NavBtn href="#">Tiket Pesawat</NavBtn>
          </NavList>
          <NavList>
            <NavBtn href="#">Tempat Populer</NavBtn>
          </NavList>
          <NavList>
            <NavBtn href="#">Pesanan</NavBtn>
          </NavList>
          <NavList>
            <NavBtn href="#">Favorit</NavBtn>
          </NavList>
        </Navbar>

        <ProfileWrapper>
          {token && user ? (
            <SemiBoldBlue>{user.firstName}</SemiBoldBlue>
          ) : (
            <SemiBoldBlue>Akun</SemiBoldBlue>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
          >
            <g clip-path="url(#clip0_2434_2106)">
              <path
                d="M42.289 42.7547C37.6152 38.4419 31.5097 36.0129 25.1505 35.9366C18.7914 35.8602 12.6293 38.1418 7.85329 42.3412L5.69214 39.8891C11.0739 35.1553 18.0182 32.5825 25.1851 32.6671C32.3521 32.7516 39.2338 35.4875 44.5024 40.3468L42.289 42.7547Z"
                fill="#3E7BFA"
              />
              <path
                d="M24.8399 14.8119C26.4435 14.8119 28.0112 15.2875 29.3446 16.1785C30.678 17.0694 31.7173 18.3358 32.331 19.8174C32.9447 21.2989 33.1052 22.9292 32.7923 24.5021C32.4795 26.075 31.7073 27.5197 30.5733 28.6537C29.4393 29.7876 27.9946 30.5599 26.4217 30.8727C24.8489 31.1856 23.2186 31.025 21.737 30.4113C20.2554 29.7976 18.989 28.7584 18.0981 27.425C17.2071 26.0916 16.7316 24.5239 16.7316 22.9202C16.7342 20.7706 17.5893 18.7097 19.1093 17.1897C20.6294 15.6697 22.6902 14.8145 24.8399 14.8119ZM24.8399 11.5425C22.5896 11.5425 20.3898 12.2098 18.5187 13.46C16.6477 14.7102 15.1894 16.4871 14.3282 18.5662C13.4671 20.6452 13.2418 22.9329 13.6808 25.1399C14.1198 27.347 15.2034 29.3743 16.7946 30.9655C18.3858 32.5567 20.4132 33.6404 22.6202 34.0794C24.8273 34.5184 27.115 34.2931 29.194 33.4319C31.273 32.5708 33.05 31.1125 34.3002 29.2414C35.5504 27.3703 36.2177 25.1706 36.2177 22.9202C36.2177 19.9027 35.0189 17.0087 32.8851 14.875C30.7514 12.7412 27.8574 11.5425 24.8399 11.5425Z"
                fill="#3E7BFA"
              />
              <path
                d="M25 3.77435C29.2979 3.77435 33.4993 5.04884 37.0728 7.43662C40.6464 9.8244 43.4317 13.2182 45.0764 17.189C46.7211 21.1597 47.1514 25.529 46.3129 29.7443C45.4745 33.9596 43.4048 37.8316 40.3658 40.8707C37.3267 43.9098 33.4547 45.9794 29.2394 46.8179C25.0241 47.6563 20.6548 47.226 16.6841 45.5813C12.7133 43.9366 9.3195 41.1513 6.93172 37.5777C4.54394 34.0042 3.26943 29.8028 3.26943 25.5049C3.27592 19.7436 5.56749 14.2201 9.64135 10.1463C13.7152 6.07241 19.2387 3.78084 25 3.77435ZM25 0.504883C20.0555 0.504883 15.222 1.97113 11.1108 4.71816C6.99953 7.4652 3.79519 11.3697 1.903 15.9378C0.0108074 20.506 -0.484243 25.5326 0.480388 30.3821C1.44502 35.2317 3.82604 39.6863 7.32235 43.1826C10.8187 46.6789 15.2732 49.0599 20.1227 50.0245C24.9723 50.9892 29.9989 50.4941 34.5671 48.6019C39.1352 46.7097 43.0397 43.5054 45.7867 39.3941C48.5337 35.2829 50 30.4494 50 25.5049C50 18.8745 47.3661 12.5156 42.6777 7.82722C37.9893 3.13881 31.6304 0.504883 25 0.504883Z"
                fill="#3E7BFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_2434_2106">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </ProfileWrapper>
      </HeaderContainer>
    </>
  );
};
export default PesananHeader;
