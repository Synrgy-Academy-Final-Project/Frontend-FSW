import React from "react";
import AboutUsHeader from "../../../components/AboutUsHeader";
import {
  AboutUsWrapper,
  BoldFeatText,
  BoldOptionText,
  BoldText,
  FeatCard,
  FeatMainWrapper,
  FeatTitle,
  FeatTitleBold,
  FeatTitleWrapper,
  Feature,
  Line,
  OptionButton,
  OptionCard,
  OptionImage,
  OptionWrapper,
  RegularOptionText,
  RegularText,
  RegulerFeatText,
} from "../../../components/styles/AboutUs.styled";
import Footer from "../../../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <AboutUsHeader />

      <BoldText>Tentang Kami</BoldText>

      <AboutUsWrapper>
        <img src="./images/meeting.png" alt="meeting" />
        <RegularText>
          Fly.id hadir sebagai solusi terkini bagi para pelancong modern yang
          menginginkan pengalaman perjalanan yang berkesan. Didirikan pada bulan
          Desember 2023, Fly.id telah menjadi sorotan sebagai platform online
          yang menyediakan layanan pemesanan tiket pesawat secara efisien dan
          menyediakan rekomendasi tempat populer yang layak dikunjungi ketika
          berlibur. <br /> <br /> Dengan misi untuk menyediakan platform yang
          mudah, cepat, dan nyaman, Fly.id memastikan bahwa penggunanya dapat
          melakukan reservasi tiket pesawat dengan mudah, cepaat, dan nyaman.
          Tak hanya itu, Fly.id menyediakan rekomendasi tempat populer yang
          disertai dengan sedikit sejarah, yang dapat memperkaya wawasan
          pengguna mengenai destinasi wisata yang mereka kunjungi. Dengan
          demikian, Fly.id bukan hanya menjadi tempat untuk memesan tiket,
          tetapi juga menjadi panduan terpercaya untuk menjelajahi keindahan
          alam dan budaya di berbagai belahan dunia. <br /> <br /> Dengan
          layanan yang terus ditingkatkan dan komitmen untuk memberikan
          pengalaman terbaik kepada pelanggan, Fly.id berusaha menjadi mitra
          perjalanan yang handal bagi setiap pengguna yang menjelajahi dunia.
        </RegularText>
      </AboutUsWrapper>

      <Feature>
        <FeatTitleWrapper>
          <FeatTitle>
            Layanan <FeatTitleBold>terbaik</FeatTitleBold> untuk{" "}
            <FeatTitleBold>Perjalanan Anda</FeatTitleBold>
          </FeatTitle>
        </FeatTitleWrapper>

        <Line />

        <FeatMainWrapper>
          <FeatCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M50 47.5V26.25C50 25.8619 49.9096 25.4791 49.7361 25.132C49.5625 24.7848 49.3105 24.4829 49 24.25L31.5 11.125C31.0673 10.8004 30.5409 10.625 30 10.625C29.4591 10.625 28.9327 10.8004 28.5 11.125L11 24.25C10.6895 24.4829 10.4375 24.7848 10.2639 25.132C10.0904 25.4791 10 25.8619 10 26.25V47.5C10 48.163 10.2634 48.7989 10.7322 49.2678C11.2011 49.7366 11.837 50 12.5 50H22.5C23.163 50 23.7989 49.7366 24.2678 49.2678C24.7366 48.7989 25 48.163 25 47.5V40C25 39.337 25.2634 38.7011 25.7322 38.2322C26.2011 37.7634 26.837 37.5 27.5 37.5H32.5C33.163 37.5 33.7989 37.7634 34.2678 38.2322C34.7366 38.7011 35 39.337 35 40V47.5C35 48.163 35.2634 48.7989 35.7322 49.2678C36.2011 49.7366 36.837 50 37.5 50H47.5C48.163 50 48.7989 49.7366 49.2678 49.2678C49.7366 48.7989 50 48.163 50 47.5Z"
                fill="#F1A025"
                stroke="#F1A025"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <BoldFeatText>Pemesanan mudah</BoldFeatText>
            <RegulerFeatText>
              Dapatkan pengalaman mudah dalam pemesanan tiket Anda
            </RegulerFeatText>
          </FeatCard>

          <FeatCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M39.5 17.5V18H40H50C52.4739 18 54.5 20.0261 54.5 22.5V30C54.5 32.4739 52.4739 34.5 50 34.5H35.5V32.5C35.5 30.8489 34.1511 29.5 32.5 29.5H27.5C25.8489 29.5 24.5 30.8489 24.5 32.5V34.5H10C7.50114 34.5 5.5 32.4989 5.5 30V22.5C5.5 20.0261 7.52614 18 10 18H20H20.5V17.5C20.5 12.2511 24.7511 8 30 8C35.2489 8 39.5 12.2511 39.5 17.5ZM25.5 18H35H35.5V17.5C35.5 14.4739 33.0261 12 30 12C26.9739 12 24.5 14.4739 24.5 17.5H24.975V18H25H25.5ZM32.5 40.5C33.9809 40.5 35.2186 39.415 35.4581 38H52V47.5C52 49.9739 49.9739 52 47.5 52H12.525C10.0511 52 8.025 49.9739 8.025 47.5V38H24.5419C24.7814 39.415 26.0191 40.5 27.5 40.5H32.5Z"
                fill="#3E7BFA"
                stroke="#3E7BFA"
              />
            </svg>
            <BoldFeatText>Bermacam pilihan</BoldFeatText>
            <RegulerFeatText>
              Terdapat banyak pilihan untuk penerbangan Anda
            </RegulerFeatText>
          </FeatCard>

          <FeatCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M46.5698 48.0981L43.7442 50.9237L33.4391 32.0108L33.1192 31.4237L32.6464 31.8964L22.8964 41.6464L22.7203 41.8226L22.7548 42.0693L23.5953 48.0726L21.6184 50.0495L17.5637 42.6351L17.4934 42.5066L17.3649 42.4363L9.95053 38.3816L11.9274 36.4047L17.9307 37.2452L18.1774 37.2797L18.3536 37.1036L28.1036 27.3536L28.5763 26.8808L27.9892 26.5609L9.07629 16.2558L11.9019 13.4302L35.5008 19.4843L35.7749 19.5546L35.9763 19.3558L45.7263 9.73083L45.7286 9.72855C46.339 9.11808 47.085 8.8125 48 8.8125C48.915 8.8125 49.661 9.11808 50.2714 9.72855C50.8819 10.339 51.1875 11.085 51.1875 12C51.1875 12.915 50.8819 13.661 50.2714 14.2714L50.2692 14.2737L40.6442 24.0237L40.4454 24.2251L40.5157 24.4992L46.5698 48.0981Z"
                fill="#18AF5E"
                stroke="#18AF5E"
              />
            </svg>
            <BoldFeatText>Penerbangan terbaik</BoldFeatText>
            <RegulerFeatText>
              Memberikan pengalaman terbaik dalam penerbangan Anda
            </RegulerFeatText>
          </FeatCard>
        </FeatMainWrapper>
      </Feature>

      <OptionWrapper>
        <OptionCard>
          <OptionImage src="./images/view-2.png" alt="view-2" />
          <BoldOptionText>Pesan Tiketmu sekarang juga yuk!</BoldOptionText>
          <RegularOptionText>
            Dapatkan berbagai pilihan penerbanganmu
          </RegularOptionText>
          <OptionButton href="list-ticket">Pesan Tiket</OptionButton>
        </OptionCard>

        <OptionCard>
          <OptionImage src="./images/view-1.png" alt="view-1" />
          <BoldOptionText>
            Tempat Populer yang bisa kamu kunjungi!
          </BoldOptionText>
          <RegularOptionText>
            Bingung mau kemana? lihat dulu disini buat referensimu
          </RegularOptionText>
          <OptionButton href="list-ticket">Tempat Populer</OptionButton>
        </OptionCard>
      </OptionWrapper>

      <Footer />
    </>
  );
};
export default AboutUs;
