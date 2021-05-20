import React, {useEffect} from 'react';
import {getExperienceDetails} from '../../JS/actions/index';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../layout/Loader';

const Paypal = props =>
  // props: {
  //   params: {id},
  // },
  {
    const dispatch = useDispatch();
    const experience = useSelector(state => state.experiencesReducers.experience);
    const isLoading = useSelector(state => state.experiencesReducers.isLoading);
    const id = props.props.match.params.id;
    const exp = experience && experience.price;
    console.log('🚀 ~ file: Paypal.js ~ line 17 ~ exp', exp);

    useEffect(() => {
      dispatch(getExperienceDetails(id));
    }, [dispatch]);

    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log('The payment was succeeded!', payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log('The payment was cancelled!', data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = err => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log('Error!', err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'EUR'; // or you can set this value from your props or state
    let total = exp; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: 'Ab6EYUPJNEx-4N7ib7v5HeN7iAUj5A63qobTxkKBAWPyLSrzCqrqSCY9zIZWZyLENuQMkqDrJ-mBLPts',
      production: 'YOUR-PRODUCTION-APP-ID',
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return isLoading ? (
      <Loader />
    ) : experience ? (
      <>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'large',
            color: 'blue',
            shape: 'rect',
            label: 'checkout',
          }}
        />
      </>
    ) : (
      <p>fail</p>
    );
  };
export default Paypal;
