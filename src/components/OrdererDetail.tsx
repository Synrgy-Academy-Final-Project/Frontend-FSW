import React from "react";
import {
  FormInput,
  Input,
  InputRadio,
  LabelRadio,
  OrdererForm,
  OrdererHead,
  OrdererWrapper,
  RadioGroup,
  RegulerTextBlack,
  RegulerTextNeutral,
  SemiBoldText,
  StarIcon,
} from "./styles/DetailSection.styled";

const OrdererDetail: React.FC = () => {
  return (
    <>
      <OrdererWrapper>
        <OrdererHead>
          <SemiBoldText>Detail Pemesan</SemiBoldText>
          <RegulerTextNeutral>
            Data pemesan akan digunakan untuk mengirimkan semua e-tiket dari
            pesanan
          </RegulerTextNeutral>
        </OrdererHead>

        <OrdererForm>
          <RadioGroup>
            <LabelRadio>
              <InputRadio type="radio" value="Tuan" name="orderer" />
              <RegulerTextBlack>Tuan</RegulerTextBlack>
            </LabelRadio>

            <LabelRadio>
              <InputRadio type="radio" value="Nyonya" name="orderer" />
              <RegulerTextBlack>Nyonya</RegulerTextBlack>
            </LabelRadio>

            <LabelRadio>
              <InputRadio type="radio" value="Nona" name="orderer" />
              <RegulerTextBlack>Nona</RegulerTextBlack>
            </LabelRadio>
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
        </OrdererForm>
      </OrdererWrapper>
    </>
  );
};
export default OrdererDetail;
