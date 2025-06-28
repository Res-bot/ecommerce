
export const initiatePayment = (req, res) => {
    res.json({ success: true, paymentId: 'mock12345' });
  };
  
  export const confirmPayment = async (req, res) => {
    const { paymentId, success } = req.body;
    if (success) {
      res.json({ message: 'Payment confirmed and saved.' });
    } else {
      res.status(400).json({ message: 'Payment failed.' });
    }
  };
