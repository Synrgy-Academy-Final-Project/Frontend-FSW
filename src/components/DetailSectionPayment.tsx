import OrdererDetailPayment from "./OrdererDetailPayment";
import PassengerDetailPayment from "./PassengerDetailPayment";

const DetailSectionPayment = ({ bookingData }) => {
  const pemesan = bookingData?.pemesan
  const penumpang = bookingData?.penumpang
  
  return (
    <>
      <OrdererDetailPayment pemesan={pemesan}/>
      <PassengerDetailPayment penumpang={penumpang}/>
    </>
  );
};
export default DetailSectionPayment;