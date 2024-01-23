import React from "react";
import {
  DetailForm,
  DetailWrapper,
  FormInput,
  Input,
  InputRadio,
  Label,
  OrdererHead,
  RadioContent,
  RadioGroup,
  RegulerTextNeutral,
  SemiBoldText,
  StarIcon,
} from "./styles/DetailSection.styled";

const OrdererDetail: React.FC = () => {
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
          <RadioGroup>
            <RadioContent>
              <InputRadio type="radio" id="tuan" name="pemesan" />
              <Label htmlFor="tuan">Tuan</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio type="radio" id="nyonya" name="pemesan" />
              <Label htmlFor="nyonya">Nyonya</Label>
            </RadioContent>

            <RadioContent>
              <InputRadio type="radio" id="nona" name="pemesan" />
              <Label htmlFor="nona">Nona</Label>
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
              Nomor Ponsel
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="number" placeholder="Nomor Ponsel" />
          </FormInput>

          <FormInput>
            <RegulerTextNeutral>
              Email digunakan untuk mengirim e-tiket
              <StarIcon>*</StarIcon>
            </RegulerTextNeutral>
            <Input type="text" placeholder="Email" />
          </FormInput>
        </DetailForm>
      </DetailWrapper>
    </>
  );
};
export default OrdererDetail;
