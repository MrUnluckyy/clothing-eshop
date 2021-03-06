import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {
    CartIconContainer,
    ShoppingBagIcon,
    ItemCountText
} from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingBagIcon as={ShoppingIcon} />
        <ItemCountText>{ itemCount }</ItemCountText>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);