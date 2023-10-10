import React, { useState } from 'react';



function InputField({name, label, value, onChange, type='number'}) {
    return (
        <p>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name}
                value={value}
                onChange={onChange}>
            </input>
        </p>
    );
}

export default InputField;