import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    button {
      margin-top: auto;
    }
`;

export const CartDropdownItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 3px;
    }
    &::-webkit-scrollbar-track {
    background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
    background: #888;
    }
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;