import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    ImageContainer,
    CollectionItemFooterContainer,
    CollectionItemNameText,
    CollectionItemPriceText
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <ImageContainer className="image" imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <CollectionItemNameText>{name}</CollectionItemNameText>
                <CollectionItemPriceText>{price}</CollectionItemPriceText>
            </CollectionItemFooterContainer>
            <CustomButton onClick={() => addItem(item)} inverted >ADD TO CART</CustomButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);