import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

const ImageFirst = styled.img`
  max-width: 100%;
  height: 100%;
`;

const TextTitle = styled.p`
  color: #000;
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.00625rem;
`;

const TextSecondary = styled.p`
  color: var(--Neutral-08, #505050);

  font-family: "Open Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.00938rem;

  margin-bottom: 2px;
`;

const TextDescription = styled.p`
  color: var(--Neutral-09, #1c1c1e);

  font-family: "Open Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.00938rem;
  margin-bottom: 12px;
`;

export default function PopulerPlaceItem() {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://backend-fsw.fly.dev/api/v1/wisata")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.data.map((place) => ({
          ...place,
          liked: false, // Menambahkan properti liked ke setiap tempat wisata
        }));
        setPlaces(updatedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleIconTopClick = (index) => {
    setPlaces((prevPlaces) => {
      const newPlaces = [...prevPlaces];
      newPlaces[index] = {
        ...newPlaces[index],
        liked: !newPlaces[index].liked, // Mengubah status liked
        jumlah_like: newPlaces[index].liked
          ? newPlaces[index].jumlah_like - 1 // Mengurangi jumlah like jika sudah dilike sebelumnya
          : newPlaces[index].jumlah_like + 1, // Menambah jumlah like jika belum dilike sebelumnya
      };
      return newPlaces;
    });
  };

  const renderPlaces = () => {
    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    return places.slice(startIndex, endIndex).map((place, index) => (
      <div className="row mt-5 my-5" key={place.id}>
        <div className="col-4">
          <ImageFirst src={place.link_gambar} alt="" />
        </div>
        <div className="col-8">
          <div className="row h-100 d-flex justify-content-center flex-column">
            <div className="col-10 pe-0 ">
              <div>
                <TextTitle>{place.nama_tempat_wisata}</TextTitle>
                <TextSecondary>{place.lokasi_wisata}</TextSecondary>
                <TextDescription>{place.deskripsi}</TextDescription>
              </div>
            </div>
            <div className="col-2 h-100 d-flex align-items-start flex-column">
              <div className="mx-auto justify-content-center mb-auto mt-3">
                <img
                  src={
                    place.liked ? "./images/like (2).png" : "./images/like.png"
                  }
                  onClick={() => handleIconTopClick(index + startIndex)}
                  alt="like"
                  width={"40px"}
                />
              </div>
              <div className="mx-auto mb-3">
                <span className="text-black fs-6">{place.jumlah_like}</span>
                <img
                  src="./images/Grin Hearts.png"
                  className="mb-1"
                  alt="heart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {renderPlaces()}
      <div className="d-flex justify-content-center">
        <Pagination>
          {[...Array(Math.ceil(places.length / 4)).keys()].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => handlePagination(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
}
