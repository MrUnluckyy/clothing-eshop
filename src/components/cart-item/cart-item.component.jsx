import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemText
} from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <CartItemText>{ name }</CartItemText>
            <CartItemText>{ quantity } x ${ price }</CartItemText>
        </ItemDetailsContainer>

    </CartItemContainer>
)

export default CartItem;