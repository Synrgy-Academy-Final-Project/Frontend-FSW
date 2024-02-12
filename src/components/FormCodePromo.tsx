import React, { useState, useEffect } from "react";
import { Button, Card, Form, InputGroup, Badge } from "react-bootstrap";
import { DiCelluloid } from "react-icons/di";

interface DiscountData {
  value: number,
  promoCode: string
}

interface DiscountProps {
  onDiscountChange: (discount: DiscountData) => void;
}

const FormCodePromo: React.FC<DiscountProps> = ({ onDiscountChange }) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoStatus, setPromoStatus] = useState(null); 
  const [discount, setDiscount] = useState(0);

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value.toUpperCase());
  };
  
  useEffect(() => {
    const handleDiscountChange = () => {
      const discountData: DiscountData = {
        value: discount,
        promoCode: promoCode,
      };
      onDiscountChange(discountData);
    }
    handleDiscountChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discount, promoCode]);

  const handlePromo = async () => {
    try {
      const response = await fetch(`https://fly-id-1999ce14c36e.herokuapp.com/promotions/${promoCode}`);
      if (response.status === 200) {
        const data = await response.json();        
        setDiscount(data?.data.discount);
        setPromoStatus('success');
      } else {
        setDiscount(0);
        setPromoStatus('secondary');
      }
    } catch (error) {
      console.error('Error fetching promo:', error);
      setDiscount(0);
      setPromoStatus('danger');
    }
    setTimeout(() => {
      setPromoStatus(null);
    }, 5000);
  };
  
  return (
    <Card className="p-3 my-3">
      <Form>
        <Form.Label>Masukkan kode promo</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            name="codepromo"
            placeholder="XXXX"
            className="border-end-0"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          <InputGroup.Text className="border-start-0 bg-white">
            <img src="public/images/check-circle.png" alt="Icon" />
          </InputGroup.Text>
        </InputGroup>
        <div className="d-grid gap-2 mt-3">
          <Button variant="primary" size="sm" onClick={handlePromo}>
            oke
          </Button>
        </div>
        {promoStatus && (
        <div className="mt-2">
          <Badge bg={promoStatus} className="fs-6">
            {promoStatus === 'success' ? 'Selamat! Promo ditemukan' : 'Maaf, promo tidak ditemukan'}
          </Badge>
        </div>
      )}
      </Form>
    </Card>
  );
}

export default FormCodePromo;