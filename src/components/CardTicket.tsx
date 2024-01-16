import Time from "../assets/images/Time.png";
import Garuda from "../assets/images/garuda.png";
type Props = {};

const CardTicket = (props: Props) => {
  return (
    <div className="d-flex flex-row card m-2 me-5 justify-content-between">
      <div
        className=" d-flex m-2 align-items-center"
        style={{ width: "14rem" }}
      >
        <img
          src={Garuda}
          className=" m-2 card-img-top align-items-center"
          alt="gambar"
        />
      </div>
      <div className="m-2 text-center">
        <div className="m-3">Keberangkatan</div>
        <div className="m-3">20.15</div>
        <div className="m-3">4 Oktober 2023</div>
      </div>
      <div className="m-2">
        <img
          className="text-center m-4"
          src={Time}
          style={{ width: "10rem" }}
          alt="gambar"
        />
      </div>
      <div className="m-2 text-center">
        <div className="m-3">Tiba</div>
        <div className="m-3">12.25</div>
        <div className="m-3">5 Oktober 2023</div>
      </div>
      <div className="m-2 text-center">
        <div className="m-4">1.500.000/orang</div>
        <div className="m-4">
          <button type="button" className="btn btn-primary">
            Pilih
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTicket;
