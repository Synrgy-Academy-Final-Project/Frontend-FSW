import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const useSnap = () => {
    const [snap, setSnap] = useState(null)
  const navigate = useNavigate();
    useEffect(() => {
        const midtransClientKey = "SB-Mid-client-Zvh_au3g17CqMgom";
        const script = document.createElement('script');
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute('data-client-key', midtransClientKey);
        script.onload = () => {
            // eslint-disable-next-line no-undef
            setSnap(window.snap)
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }

    }, []);
    const snapPay = (snap_token, action) => {
        if (snap) {
            snap.pay(snap_token, {
                onSuccess: function (result) {
                    console.log("sukses di js", result);
                    const order_id = result.order_id;     
                    if (order_id) {
                    navigate(`/eticket?order_id=${order_id}`);
                    } else {
                    console.error("Error: No finish_redirect_url found in result object.");
                    }
                },
                onPending: function (result) {
                    console.log("pending", result);
                    action.onPending(result);
                },
                onError: function (result) {
                    alert("payment failed!");
                    console.log("eror", result);
                    action.onPending(result);
                },
                onClose: function () {
                    alert('you closed the popup without finishing the payment');
                    action.onClose();
                }
            })
        }
    }
    return {snapPay}
}

export default useSnap;
