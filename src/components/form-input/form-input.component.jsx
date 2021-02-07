import React from 'react';

import {
    FormInputGroupContainer,
    FormInputField,
    FormInputLabel,

} from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormInputGroupContainer>
        <FormInputField
            onChange={handleChange}
            {...otherProps}
        />
            {label ? (
                <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </FormInputLabel>)
                : null
            }
        
    </FormInputGroupContainer>
)

export default FormInput;