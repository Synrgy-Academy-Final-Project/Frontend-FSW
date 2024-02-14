import React, { useState, useEffect } from "react";
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
  index?: number;
  name?: string;
  date?: string;
  gender?: string;
  type?: string;
}

interface PenumpangDataProps {
  Pemesan?: {
    nama: string;
    ponsel: string;
    email: string;
    gender: string;
    dateOfBirth: string;
  };
  PassengersData: { type: string; count: number }[];
  onDetailPassengerChange: (detailpassengger: PenumpangData[]) => void;
}

const PassengerDetail: React.FC<PenumpangDataProps> = ({
  Pemesan,
  PassengersData,
  onDetailPassengerChange,
}) => {
  const [passengers, setPassengers] = useState<PenumpangData[]>([]);
  const [detailpassengger, setDetailPassenger] = useState<PenumpangData[]>([]);

  useEffect(() => {
    onDetailPassengerChange(detailpassengger);
  }, [detailpassengger, onDetailPassengerChange]);

  const today = new Date();
  const minDateKids = new Date(
    today.getFullYear() - 9,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const minDateBaby = new Date(
    today.getFullYear() - 2,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const isChecked = event.target.checked;
    const newPassengers = [...passengers];
    if (isChecked && Pemesan) {
      const pemesanData: PenumpangData = {
        name: Pemesan.nama,
        date: Pemesan.dateOfBirth,
        gender: Pemesan.gender,
      };
      newPassengers[index] = pemesanData;
      // Update detailpassengger with gender information
      const newDetailPassenger = [...detailpassengger];
      newDetailPassenger[index] = {
        ...newDetailPassenger[index],
        gender: Pemesan.gender,
      };
      setDetailPassenger(newDetailPassenger);
    } else {
      newPassengers[index] = {} as PenumpangData;
    }
    setPassengers(newPassengers);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    i: number,
    field: string,
    passengerType: string
  ) => {
    const newValue = event.target.value;
    const newDetailPassenger = [...detailpassengger];

    let countAdult, countChild, countBaby;
    let passengerIndex = 0;

    for (let j = 0; j < PassengersData.length; j++) {
      const { type, count } = PassengersData[j];

      if (j === 0 || passengerType == "adult") {
        countAdult = count;
        passengerIndex = i;
      } else if (j === 1 || passengerType == "child") {
        countChild = count;
        passengerIndex = countAdult + i;
      } else if (j === 2 || passengerType == "baby") {
        countBaby = count;
        passengerIndex = countAdult + countChild + i;
      }
    }

    if (newDetailPassenger[passengerIndex]) {
      // Jika penumpang sudah ada di newDetailPassenger, update nilainya
      newDetailPassenger[passengerIndex] = {
        ...newDetailPassenger[passengerIndex],
        [field]: newValue,
        type: passengerType,
      };
    } else {
      // Jika penumpang belum ada, buat penumpang baru
      newDetailPassenger[passengerIndex] = {
        index: index,
        type: passengerType,
        [field]: newValue,
      };
    }

    setDetailPassenger(newDetailPassenger);
  };
  console.log("detailpassengger : ", detailpassengger);

  let dewasaCounter = 0;
  let anakCounter = 0;
  let bayiCounter = 0;

  return (
    <>
      <DetailWrapper>
        <PassengerHead className="pb-0">
          <SemiBoldText>Detail Penumpang</SemiBoldText>
        </PassengerHead>

        {PassengersData.map((passenger, index) => {
          const forms = [];
          if (passenger.count > 0) {
            for (let i = 0; i < passenger.count; i++) {
              let description = "";
              switch (passenger.type) {
                case "adult":
                  dewasaCounter++;
                  description = `Dewasa ${dewasaCounter}`;
                  break;
                case "child":
                  anakCounter++;
                  description = `Anak-anak ${anakCounter}`;
                  break;
                case "baby":
                  bayiCounter++;
                  description = `Bayi ${bayiCounter}`;
                  break;
                default:
                  description = "Unknown";
                  break;
              }
              forms.push(
                <DetailForm key={index + "-" + i}>
                  <SemiBoldText>Penumpang {description}:</SemiBoldText>

                  {passenger.type === "adult" && (
                    <>
                      <CheckWrapper>
                        <input
                          type="checkbox"
                          id={`pemesan-${index}-${i}`}
                          name="pemesan"
                          onChange={(e) => handleCheckboxChange(e, index)}
                        />
                        <label htmlFor={`pemesan-${index}-${i}`}>
                          Sama dengan data pemesan {`pemesan-${index}-${i}`}
                        </label>
                      </CheckWrapper>

                      <RadioGroup>
                        <RadioContent>
                          <InputRadio
                            type="radio"
                            id={`tuan-${index}-${i}`}
                            name={`dewasa-${index}-${i}`}
                            value="male"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                i,
                                "gender",
                                passenger.type
                              )
                            }
                          />
                          <Label htmlFor={`tuan-${index}-${i}`}>
                            Laki - Laki
                          </Label>
                        </RadioContent>

                        <RadioContent>
                          <InputRadio
                            type="radio"
                            id={`nona-${index}-${i}`}
                            name={`dewasa-${index}-${i}`}
                            value="female"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                i,
                                "gender",
                                passenger.type
                              )
                            }
                          />
                          <Label htmlFor={`nona-${index}-${i}`}>
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
                          required
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "name",
                              passenger.type
                            )
                          }
                        />
                        <RegulerTextNeutral className="mt-2">
                          Tanggal Lahir
                          <StarIcon>*</StarIcon>
                        </RegulerTextNeutral>
                        <Input
                          type="date"
                          placeholder="dd/mm/yy"
                          required
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "date",
                              passenger.type
                            )
                          }
                        />
                        <RegulerTextNeutral className="mt-2">
                          Nomor Ponsel
                          <StarIcon>*</StarIcon>
                        </RegulerTextNeutral>
                        <Input
                          type="tel"
                          name="phone"
                          id={`phone-${index}-${i}`}
                          placeholder="Masukkan nomor ponsel"
                          pattern="0?[0-9]*"
                          title="Harap masukkan hanya angka"
                          required
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "phoneNumber",
                              passenger.type
                            )
                          }
                        />
                      </FormInput>
                    </>
                  )}

                  {passenger.type === "child" && (
                    <>
                      <RadioGroup>
                        <RadioContent>
                          <InputRadio
                            type="radio"
                            id={`tuan-${index}-${i}`}
                            name={`anakAnak-${index}-${i}`}
                            value="male"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                i,
                                "gender",
                                passenger.type
                              )
                            }
                          />
                          <Label htmlFor={`tuan-${index}-${i}`}>
                            Laki - Laki
                          </Label>
                        </RadioContent>

                        <RadioContent>
                          <InputRadio
                            type="radio"
                            id={`nona-${index}-${i}`}
                            name={`anakAnak-${index}-${i}`}
                            value="female"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                i,
                                "gender",
                                passenger.type
                              )
                            }
                          />
                          <Label htmlFor={`nona-${index}-${i}`}>
                            Perempuan<StarIcon>*</StarIcon>
                          </Label>
                        </RadioContent>
                      </RadioGroup>

                      <FormInput>
                        <RegulerTextNeutral>
                          Isi sesuai KTP/SIM/Paspor (tanpa tanda baca dan gelar){" "}
                          {`anakAnak-${index}-${i}`}
                          <StarIcon>*</StarIcon>
                        </RegulerTextNeutral>
                        <Input
                          type="text"
                          placeholder="Nama Lengkap"
                          required
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "name",
                              passenger.type
                            )
                          }
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
                          min={minDateKids}
                          max={today.toISOString().split("T")[0]}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "date",
                              passenger.type
                            )
                          }
                        />
                      </FormInput>
                    </>
                  )}

                  {passenger.type === "baby" && (
                    <>
                      <RadioGroup>
                        <RadioContent>
                          <InputRadio
                            type="radio"
                            id={`tuan-${index}-${i}`}
                            name={`bayi-${index}-${i}`}
                            value="male"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                i,
                                "gender",
                                passenger.type
                              )
                            }
                          />
                          <Label htmlFor={`tuan-${index}-${i}`}>
                            Laki - Laki
                          </Label>
                        </RadioContent>

                        <RadioContent>
                          <InputRadio
                            type="radio"
                            id={`nona-${index}-${i}`}
                            name={`bayi-${index}-${i}`}
                            value="female"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                index,
                                i,
                                "gender",
                                passenger.type
                              )
                            }
                          />
                          <Label htmlFor={`nona-${index}-${i}`}>
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
                          required
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "name",
                              passenger.type
                            )
                          }
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
                          min={minDateBaby}
                          max={today.toISOString().split("T")[0]}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              index,
                              i,
                              "date",
                              passenger.type
                            )
                          }
                        />
                      </FormInput>
                    </>
                  )}
                </DetailForm>
              );
            }
          }
          return forms;
        })}
      </DetailWrapper>
    </>
  );
};
export default PassengerDetail;
