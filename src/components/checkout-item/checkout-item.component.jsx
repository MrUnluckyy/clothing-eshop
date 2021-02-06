import React from 'react';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    ItemDetailCell,
    QuantityCell,
    ArrowIcon,
    QuantityText,
    RemoveItemButton
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <ItemDetailCell>{name}</ItemDetailCell>
        <QuantityCell>
            <ArrowIcon onClick={() => removeItem(cartItem)}>&#10094;</ArrowIcon>
            <QuantityText>{quantity}</QuantityText>
            <ArrowIcon onClick={() => addItem(cartItem)}>&#10095;</ArrowIcon>
        </QuantityCell>
        <ItemDetailCell>${quantity * price}</ItemDetailCell>
        <RemoveItemButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveItemButton>
    </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})



export default connect(null, mapDispatchToProps)(CheckoutItem);