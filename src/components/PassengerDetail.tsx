import React, {useState, useEffect} from "react";
import {
  CheckWrapper,
  DetailForm,
  DetailWrapper,
  FormInput,
  Input,
  InputRadio,
  Label,
  PassengerHead,
  RadioContent,
  RadioGroup,
  RegulerTextNeutral,
  SemiBoldText,
  StarIcon,
} from "./styles/DetailSection.styled";

interface PenumpangData {
  nameAdult: string;
  nameKids: string;
  nameBaby: string;
  dateAdult: string;
  dateKids: string;
  dateBaby: string;
  genAdult: string;
  genKids: string;
  genBaby: string;
  phone: string;
}

interface PemesanData {
  nama: string;
  ponsel: string;
  email: string;
  gender: string;
  dateOfBirth: string;
}

interface PenumpangDataProps {
  Penumpang: (penumpang: PenumpangData) => void;
  Pemesan? : PemesanData;
}

const PassengerDetail: React.FC<PenumpangDataProps> = ({ Penumpang, Pemesan }) => {
  const [nameAdult, setNameAdult] = useState("");
  const [nameKids, setNameKids] = useState("");
  const [nameBaby, setNameBaby] = useState("");
  const [dateAdult, setDateAdult] = useState("");
  const [dateKids, setDateKids] = useState("");
  const [dateBaby, setDateBaby] = useState("");
  const [genAdult, setGenAdult] = useState("");
  const [genKids, setGenKids] = useState("");
  const [genBaby, setGenBaby] = useState("");
  const [ponsel, setPonsel] = useState("");

  useEffect(() => {
    const handlePenumpangChange = () => {
      const penumpangData: PenumpangData = {
        nameAdult: nameAdult,
        nameKids: nameKids,
        nameBaby: nameBaby,
        dateAdult: dateAdult,
        dateKids: dateKids,
        dateBaby: dateBaby,
        genAdult: genAdult,
        genKids: genKids,
        genBaby: genBaby,
        phone: ponsel,
      };
      Penumpang(penumpangData);
    };

    handlePenumpangChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameAdult, nameKids, nameBaby, dateAdult, dateKids, dateBaby, genAdult, genKids, genBaby, ponsel]);
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDateAdult(Pemesan.dateOfBirth);
      setGenAdult(Pemesan.gender);
      setNameAdult(Pemesan.nama);
    } else {
      setDateAdult("");
      setGenAdult("");
      setNameAdult("");
    }
  };

  return (
    <>
      <DetailWrapper>
        <PassengerHead>
          <SemiBoldText>Detail Penumpang</SemiBoldText>
        </PassengerHead>

        <DetailForm>
          <SemiBoldText>Penumpang 1: Dewasa</SemiBoldText>

          <CheckWrapper>
            <input
              type="checkbox"
              id="pemesan"
              name="pemesan"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="pemesan">Sama dengan data pemesan</label>
          </CheckWrapper>

          <RadioGroup>
            <RadioContent>
              <InputRadio
                type="radio"
                id="tuan"
                name="dewasa"
                checked={genAdult === "male"}
                value="male"
                onChange={(e) => setGenAdult(e.target.value)}
              />
              <Label htmlFor="tuan">Laki - Laki</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio
                type="radio"
                id="nona"
                name="dewasa"
                checked={genAdult === "female"}
                value="female"
                onChange={(e) => setGenAdult(e.target.value)}
              />
              <Label htmlFor="nona">
                Perempuan<StarIcon>*</StarIcon>
              </Label>
            </RadioContent>
          </RadioGroup>

          <FormInput>
            <RegulerTextNeutral>
              Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar)
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input
              type="text"
              placeholder="Nama Lengkap"
              value={nameAdult}
              onChange={(e) => setNameAdult(e.target.value)}
              required
            />
            <Input
              type="date"
              placeholder="dd/mm/yy"
              value={dateAdult}
              onChange={(e) => setDateAdult(e.target.value)}
              required
            />
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Masukkan nomor ponsel"
              value={ponsel}
              onChange={(e) => setPonsel(e.target.value)}
              pattern="0?[0-9]*"
              title="Harap masukkan hanya angka"
              required
            />
          </FormInput>
        </DetailForm>

        <DetailForm>
          <SemiBoldText>Penumpang 2: Anak-anak</SemiBoldText>

          <RadioGroup>
            <RadioContent>
              <InputRadio
                type="radio"
                id="tuan"
                name="anakAnak"
                value="male"
                onChange={(e) => setGenKids(e.target.value)}
              />
              <Label htmlFor="tuan">Laki - laki</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio
                type="radio"
                id="nona"
                name="anakAnak"
                value="female"
                onChange={(e) => setGenKids(e.target.value)}
              />
              <Label htmlFor="nona">
                Perempuan<StarIcon>*</StarIcon>
              </Label>
            </RadioContent>
          </RadioGroup>

          <FormInput>
            <RegulerTextNeutral>
              Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar)
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input
              type="text"
              placeholder="Nama Lengkap"
              value={nameKids}
              onChange={(e) => setNameKids(e.target.value)}
              
            />
          </FormInput>

          <FormInput>
            <RegulerTextNeutral>
              Anak - anak usia 2 - 11 tahun
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input
              type="date"
              placeholder="dd/mm/yy"
              value={dateKids}
              onChange={(e) => setDateKids(e.target.value)}
              
            />
          </FormInput>
        </DetailForm>

        <DetailForm>
          <SemiBoldText>Penumpang 1: Bayi</SemiBoldText>

          <RadioGroup>
            <RadioContent>
              <InputRadio
                type="radio"
                id="tuan"
                name="bayi"
                value="male"
                onChange={(e) => setGenBaby(e.target.value)}
              />
              <Label htmlFor="tuan">Laki - laki</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio
                type="radio"
                id="nona"
                name="bayi"
                value="female"
                onChange={(e) => setGenBaby(e.target.value)}
              />
              <Label htmlFor="nona">
                Perempuan<StarIcon>*</StarIcon>
              </Label>
            </RadioContent>
          </RadioGroup>

          <FormInput>
            <RegulerTextNeutral>
              Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar)
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input
              type="text"
              placeholder="Nama Lengkap"
              value={nameBaby}
              onChange={(e) => setNameBaby(e.target.value)}
              
            />
          </FormInput>

          <FormInput>
            <RegulerTextNeutral>
              Anak - anak usia 2 - 11 tahun
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input
              type="date"
              placeholder="dd/mm/yy"
              value={dateBaby}
              onChange={(e) => setDateBaby(e.target.value)}
              
            />
          </FormInput>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default PassengerDetail;
