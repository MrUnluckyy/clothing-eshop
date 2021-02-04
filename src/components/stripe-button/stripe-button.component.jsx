import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../custom-button/custom-button.component';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IHBVbDQgqQJCsPESbCVStlxem0yx1fVbmUrPel9rrhYZHr0nV7EGcdWNGokZYKMeCmPYVYMhRhfXLYFOfzaTmzs006QQhdvCv';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        >
            <CustomButton>PAY NOW</CustomButton>
            
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;