import "./MinPrice.css";
import { ITicketsMinPrice } from "../services/types";

const MinimumPrice = ({ minprice }) => {
  console.log("minPrice : ", minprice);

  const minpriceWithId = minprice.map((record, index) => ({
    ...record,
    id: index + 1, // Misalnya, menggunakan index + 1 sebagai id
  }));

  const formatDate = (inputDate) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];

    const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

    const dateParts = inputDate.split("-");
    const dayIndex = new Date(
      `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
    ).getDay();
    const day = days[dayIndex];
    const month = months[parseInt(dateParts[1], 10) - 1];

    return `${day}, ${parseInt(dateParts[0], 10)} ${month}`;
  };

  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {minpriceWithId?.map((record: ITicketsMinPrice) => (
        <div key={record.id} style={{ margin: "0px 10px" }}>
          <p className="r-16-s">{formatDate(record.date)}</p>
          <p className="r-16-s">{formatPrice(record.price)}</p>
        </div>
      ))}
    </div>
  );
};

export default MinimumPrice;
