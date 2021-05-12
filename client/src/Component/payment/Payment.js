import React, {useEffect, useState} from 'react';
import Paypal from '../Component/Paypal/Paypal';
import {useDispatch, useSelector} from 'react-redux';
import {onSuccessBuy} from '../JS/actions';

const Payment = () => {
  const user = useSelector(state => state.userReducer.user);
  const [ShowSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const transactionSuccess = data => {
    dispatch().then(response => {
      onSuccessBuy({
        cartDetail: user,
        paymentData: data,
      });
      if (response.payload.success) {
        setShowSuccess(true);
        // setShowTotal(false);
      }
    });
  };

  const transactionError = () => {
    console.log('Paypal error');
  };

  const transactionCanceled = () => {
    console.log('Transaction canceled');
  };
  return (
    <div>
      <Paypal
        // toPay={Total}
        onSuccess={transactionSuccess}
        transactionError={transactionError}
        transactionCanceled={transactionCanceled}
      />
    </div>
  );
};

export default Payment;
