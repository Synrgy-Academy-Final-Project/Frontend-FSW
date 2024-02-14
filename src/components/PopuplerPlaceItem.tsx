import { useState } from "react";
import styled from "styled-components";

const ImageFirst = styled.img`
  /* Tambahkan gaya CSS di sini */
  max-width: 100%;
  height: 100%;
`;

const ImageSecond = styled.img`
  /* Tambahkan gaya CSS di sini */
  max-width: 100%;
  height: auto;
`;

const ImageIconTop = styled.img`
  /* Tambahkan gaya CSS di sini */
  max-width: 100%;
  height: auto;
  align-self: flex-start;
`;

const ImageIconBottom = styled.img`
  align-self: flex-end;
  max-width: 90%;
  height: auto;
`;

const TextTitle = styled.p`
  color: #000;
  font-family: "Open Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.00625rem;
  margin-bottom: 2px;
`;

const TextSecondary = styled.p`
  color: var(--Neutral-08, #505050);

  /* website/regular/16 */
  font-family: "Open Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.00938rem;

  margin-bottom: 2px;
`;

const TextDescription = styled.p`
  color: var(--Neutral-09, #1c1c1e);

  /* website/regular/14 */
  font-family: "Open Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.00938rem;
  margin-bottom: 12px;
`;

export default function PopulerPlaceItem() {
  // Menyimpan nilai terpisah untuk setiap item
  const [counts, setCounts] = useState([0, 0, 0]);
  const [texts] = useState([
    {
      title: "Bromo",
      secondary: "Malang, Jawa Timur",
      description:
        "Gunung Bromo, sebuah ikon wisata alam di Jawa Timur, Indonesia, menawarkan pemandangan spektakuler dengan lautan pasir, kaldera, dan pemandangan matahari terbit yang menakjubkan. Dengan ketinggian sekitar 2.329 meter di atas permukaan laut, Gunung Bromo adalah salah satu gunung berapi paling aktif di Indonesia. Pengunjung sering melakukan perjalanan dini hari ke Puncak Penanjakan untuk menyaksikan matahari terbit yang dramatis di atas kabut dan kaldera. Selain itu, pendakian ke kawah Bromo dan puncaknya memberikan pengalaman mendalam kepada pengunjung.",
    },
    {
      title: "Pura Ulun Danu Batur",
      secondary: "Kab. Bangli, Bali",
      description:
        "Pura Ulun Danu Batur, sebuah kuil Hindu yang menawan, berdiri megah di tepi Danau Batur, di kaki Gunung Batur di Bali, Indonesia. Dikenal sebagai situs ibadah utama bagi umat Hindu Bali, pura ini didedikasikan untuk Dewi Danu, yang dianggap sebagai pelindung air dan pertanian. Keanggunan arsitektur pura, yang mencerminkan secara dramatis di permukaan danau yang tenang, menciptakan lanskap yang menakjubkan dan sering dianggap sebagai salah satu pemandangan paling menakjubkan di Bali. Selain berfungsi sebagai tempat ibadah, Pura Ulun Danu Batur juga menjadi pusat kegiatan keagamaan dan budaya, menjadi tuan rumah berbagai upacara dan festival yang meriah. Tempat suci ini tidak hanya menarik wisatawan dengan keindahannya, tetapi juga mengungkapkan kekayaan warisan budaya Bali yang kaya.",
    },
    {
      title: "Dufan",
      secondary: "Jakarta",
      description:
        "Taman hiburan terbesar dan paling populer di Jakarta, Indonesia, menawarkan beragam atraksi dan wahana yang menyenangkan untuk pengunjung dari segala usia. Terletak di Ancol Dreamland, kompleks hiburan yang luas di tepi pantai Jakarta Utara, Dufan menawarkan pengalaman yang tak terlupakan dengan berbagai wahana seru, mulai dari roller coaster ekstrem hingga wahana air yang menyegarkan. Selain atraksi utamanya, Dufan juga memiliki area hiburan keluarga, pertunjukan langsung, serta berbagai tempat makan dan belanja untuk memenuhi kebutuhan pengunjung. Sebagai destinasi wisata unggulan di Jakarta, Dufan terus menjadi favorit bagi warga setempat dan turis yang mencari kesenangan dan petualangan di tengah kesibukan ibu kota.",
    },
  ]);

  // Fungsi penanganan untuk setiap item
  const handleIconTopClick = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  return (
    <>
      {[0, 1, 2].map((index) => (
        <div className="row mt-5 my-5" key={index}>
          <div className="col-4">
            <ImageFirst
              src={`./images/mountainous-landscape-with-fog ${index}.png`}
              alt=""
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-11 pe-0">
                <TextTitle>{texts[index].title}</TextTitle>
                <TextSecondary>{texts[index].secondary}</TextSecondary>
                <TextDescription>{texts[index].description}</TextDescription>
                <ImageSecond
                  src="./images/mountainous-landscape-with-fog 6.png"
                  alt=""
                  className="me-3"
                />
                <ImageSecond
                  src="./images/mountainous-landscape-with-fog 6.png"
                  alt=""
                  className="me-3"
                />
                <ImageSecond
                  src="./images/mountainous-landscape-with-fog 6.png"
                  alt=""
                />
              </div>
              <div className="col-1">
                <ImageIconTop
                  src="./images/like.png"
                  onClick={() => handleIconTopClick(index)}
                />
                <div
                  className="row d-flex justify-content-between"
                  style={{ marginTop: "13rem" }}
                >
                  <div className="col-6 pe-0 py-2">
                    <span className="text-black ps-2 ms-1 fs-6">
                      {counts[index]}{" "}
                    </span>
                  </div>
                  <div className="col-6 px-0 mt-2">
                    <ImageIconBottom
                      src="./images/Grin Hearts.png"
                      className="mx-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
