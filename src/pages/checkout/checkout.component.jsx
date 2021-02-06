import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { 
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    CheckoutBlock,
    TotalPriceContainer,
    StripeButtonContainer,
    WarningCreditCardText 
} from './checkout.styles';


const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutBlock>
                <span>Product</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Description</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Quantity</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Price</span>
            </CheckoutBlock>
            <CheckoutBlock>
                <span>Remove</span>
            </CheckoutBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />    
            )
        }
        <TotalPriceContainer>
            <span>TOTAL: ${total}</span>
        </TotalPriceContainer>
        <StripeButtonContainer>
            <StripeCheckoutButton price={total} />
        </StripeButtonContainer>
        <WarningCreditCardText>
            * Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </WarningCreditCardText>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);