import React from "react";
import {useState} from "react";
import {
  OrdererData,
  OrdererDataWrapper,
  DetailForm,
  DetailWrapper,
  OrdererHead,
  RegulerText,
  RegulerTextNeutral,
  RegulerTextBold,
  SemiBoldText,
} from "./styles/DetailSection.styled";

interface PemesanData {
  nama: string;
  ponsel: string;
  email: string;
  gender: string;
  dateOfBirth: string;
}

interface OrdererDetailProps {
  Pemesan: (pemesan: PemesanData) => void;
}

const OrdererDetail: React.FC<OrdererDetailProps> = ({ Pemesan }) => {
  const [userdata, setUserdata] = useState<PemesanData>(null);
  
  const token = localStorage.getItem('token')
  const base_url = 'https://fly-id-1999ce14c36e.herokuapp.com'

  const fetchUser = async () => {
    try {
      const response = await fetch(base_url + '/user-detail/logged-in-user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const responseJson = await response.json()
      
      if (response.status === 500) {
        localStorage.removeItem('token');
      } else if (response.status === 200) {
        const name: string = responseJson.data.usersDetails.firstName + " " +responseJson.data.usersDetails.lastName
        const formattedDate = new Date(responseJson.data.usersDetails.dateOfBirth).toISOString().split('T')[0];
        setUserdata({
          nama: name,
          ponsel: responseJson.data.usersDetails.phoneNumber,
          email: responseJson.data.email,
          gender: responseJson.data.usersDetails.gender,
          dateOfBirth: formattedDate,
        })
        Pemesan(userdata)
      }
    } catch (error) {
      console.error("ada eror >>>", error)
      return
    }
  }
  if (token) {
    fetchUser()
  }

  return (
    <>
      <DetailWrapper>
        <OrdererHead>
          <SemiBoldText>Detail Pemesan</SemiBoldText>
          <RegulerTextNeutral>
            Data pemesan akan digunakan untuk mengirimkan semua e-tiket dari
            pesanan
          </RegulerTextNeutral>
        </OrdererHead>

        <DetailForm>
          <OrdererDataWrapper>
            <OrdererData>
              <img src="./images/ic_user_check.png" alt="user_check" />
              <RegulerTextBold>Nama pemesan</RegulerTextBold>
              <RegulerTextBold>: {token && userdata ? userdata.nama : ''} </RegulerTextBold>
            </OrdererData>
          </OrdererDataWrapper>

          <OrdererData>
            <img src="./images/ic_phone_alt.png" alt="phone" />
            <RegulerText>No ponsel</RegulerText>
            <RegulerText>: {token && userdata ? userdata.ponsel : ''}</RegulerText>
          </OrdererData>

          <OrdererData>
            <img src="./images/ic_envelope.png" alt="envelope" />
            <RegulerText>Email</RegulerText>
            <RegulerText>: {token && userdata ? userdata.email : ''}</RegulerText>
          </OrdererData>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default OrdererDetail;
