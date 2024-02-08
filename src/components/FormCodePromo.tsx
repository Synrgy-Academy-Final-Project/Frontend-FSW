import { Button, Card, Form, InputGroup } from "react-bootstrap";

export default function FormCodePromo() {
  return (
    <Card className="p-3 my-3">
      <Form>
        <Form.Label>Masukkan code promo</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            name="codepromo"
            placeholder="XXXX"
            className="border-end-0"
          />
          <InputGroup.Text className="border-start-0 bg-white">
            <img src="public/images/check-circle.png" alt="Icon" />
          </InputGroup.Text>
        </InputGroup>
        <div className="d-grid gap-2 mt-3">
          <Button variant="primary" size="sm">
            oke
          </Button>
        </div>
      </Form>
    </Card>
  );
}
