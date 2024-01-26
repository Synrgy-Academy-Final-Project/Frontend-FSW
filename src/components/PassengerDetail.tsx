import React from "react";
import {
  CheckWrapper,
  DetailForm,
  DetailWrapper,
  FormInput,
  Input,
  InputCheck,
  InputRadio,
  Label,
  PassengerHead,
  RadioContent,
  RadioGroup,
  RegulerTextNeutral,
  SemiBoldText,
  StarIcon,
} from "./styles/DetailSection.styled";

const PassengerDetail: React.FC = () => {
  return (
    <>
      <DetailWrapper>
        <PassengerHead>
          <SemiBoldText>Detail Penumpang</SemiBoldText>
        </PassengerHead>

        <DetailForm>
          <SemiBoldText>Penumpang 1: Dewasa</SemiBoldText>

          <CheckWrapper>
            <InputCheck type="checkbox" id="pemesan" name="pemesan" />
            <Label htmlFor="pemesan">Sama dengan data pemesan</Label>
          </CheckWrapper>

          <RadioGroup>
            <RadioContent>
              <InputRadio type="radio" id="tuan" name="dewasa" />
              <Label htmlFor="tuan">Tuan</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio type="radio" id="nyonya" name="dewasa" />
              <Label htmlFor="nyonya">Nyonya</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio type="radio" id="nona" name="dewasa" />
              <Label htmlFor="nona">
                Nona<StarIcon>*</StarIcon>
              </Label>
            </RadioContent>
          </RadioGroup>

          <FormInput>
            <RegulerTextNeutral>
              Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar)
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="text" placeholder="Nama Lengkap" />
          </FormInput>
        </DetailForm>

        <DetailForm>
          <SemiBoldText>Penumpang 2: Anak-anak</SemiBoldText>

          <RadioGroup>
            <RadioContent>
              <InputRadio type="radio" id="tuan" name="anakAnak" />
              <Label htmlFor="tuan">Tuan</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio type="radio" id="nona" name="anakAnak" />
              <Label htmlFor="nona">
                Nona<StarIcon>*</StarIcon>
              </Label>
            </RadioContent>
          </RadioGroup>

          <FormInput>
            <RegulerTextNeutral>
              Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar)
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="text" placeholder="Nama Lengkap" />
          </FormInput>

          <FormInput>
            <RegulerTextNeutral>
              Anak - anak usia 2 - 11 tahun
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="date" placeholder="dd/mm/yy" />
          </FormInput>
        </DetailForm>

        <DetailForm>
          <SemiBoldText>Penumpang 1: Bayi</SemiBoldText>

          <RadioGroup>
            <RadioContent>
              <InputRadio type="radio" id="tuan" name="bayi" />
              <Label htmlFor="tuan">Tuan</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio type="radio" id="nona" name="bayi" />
              <Label htmlFor="nona">
                Nona<StarIcon>*</StarIcon>
              </Label>
            </RadioContent>
          </RadioGroup>

          <FormInput>
            <RegulerTextNeutral>
              Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar)
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="text" placeholder="Nama Lengkap" />
          </FormInput>

          <FormInput>
            <RegulerTextNeutral>
              Anak - anak usia 2 - 11 tahun
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="date" placeholder="dd/mm/yy" />
          </FormInput>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default PassengerDetail;
