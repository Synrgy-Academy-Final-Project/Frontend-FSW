interface FlightSearchFormProps {
  onSearch: (data: FlightSearchData) => void;
}

interface FlightSearchFormState {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  classType: string;
}

interface FlightSearchData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  classType: string;
}
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SearchTicket extends Component<
  FlightSearchFormProps,
  FlightSearchFormState
> {
  constructor(props: FlightSearchFormProps) {
    super(props);
    this.state = {
      origin: "Jakarta Soekarno-Hatta Airport",
      destination: "Bali I Gusti Ngurah Rai International Airport",
      departureDate: new Date(),
      returnDate: null,
      passengers: 1,
      class: "economy",
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as any);
  };

  handleDateChange = (
    name: "departureDate" | "returnDate",
    date: Date | null
  ) => {
    this.setState({
      [name]: date || new Date(),
    } as any);
  };

  handlePassengerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    this.setState({
      passengers: value,
    } as any);
  };

  handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    this.setState({
      class: value,
    } as any);
  };

  handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      class: _class,
    } = this.state;
    const formData: FlightSearchFormData = {
      origin,
      destination,
      departureDate: departureDate.toISOString(),
      returnDate: returnDate ? returnDate.toISOString() : null,
      passengers,
      class: _class,
    };
    this.props.onSearch(formData);
  };

  render() {
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      class: _class,
    } = this.state;
    return (
      <Form className="d-flex flex-column" onSubmit={this.handleSearch}>
        <div className="d-flex">
          <Form.Group
            className="w-25 border border-2 p-3 m-3 rounded-2"
            controlId="origin"
          >
            <Form.Label>Asal</Form.Label>
            <Form.Control
              type="text"
              name="origin"
              value={origin}
              onChange={this.handleInputChange}
              placeholder="Jakarta Soekarno-Hatta Airport"
            />
          </Form.Group>
          <Form.Group
            className="w-25 border border-2 p-3 m-3 rounded-2"
            controlId="destination"
          >
            <Form.Label>Tujuan</Form.Label>
            <Form.Control
              type="text"
              name="destination"
              value={destination}
              onChange={this.handleInputChange}
              placeholder="Bali I Gusti Ngurah Rai International Airport"
            />
          </Form.Group>
          <Form.Group
            className="w-25 border border-2 p-3 m-3 rounded-2"
            controlId="departureDate"
          >
            <Form.Label>Tanggal Pergi</Form.Label>
            <Form.Control
              type="date"
              name="departureDate"
              value={departureDate.toISOString().split("T")[0]}
              onChange={(event) =>
                this.handleDateChange(
                  "departureDate",
                  new Date(event.target.value)
                )
              }
            />
          </Form.Group>
          <Form.Group
            className="w-25 border border-2 p-3 m-3 rounded-2"
            controlId="returnDate"
          >
            <Form.Label>Tanggal Pulang</Form.Label>
            <Form.Control
              type="date"
              name="returnDate"
              value={returnDate?.toISOString().split("T")[0] || ""}
              onChange={(event) =>
                this.handleDateChange(
                  "returnDate",
                  event.target.value ? new Date(event.target.value) : null
                )
              }
            />
          </Form.Group>
        </div>
        <div className="w-50 d-flex mx-auto">
          <Form.Group
            className="w-50 border border-2 p-3 m-3 rounded-2"
            controlId="passengers"
          >
            <Form.Label>Jumlah Penumpang</Form.Label>
            <Form.Control
              as="select"
              name="passengers"
              value={passengers}
              onChange={this.handlePassengerChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="w-50 border border-2 p-3 m-3 rounded-2"
            controlId="class"
          >
            <Form.Label>Kelas</Form.Label>
            <Form.Control
              as="select"
              name="class"
              value={_class}
              onChange={this.handleClassChange}
            >
              <option value="economy">Economy</option>
              <option value="business">bussniness</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Form>
    );
  }
}

export default SearchTicket;
