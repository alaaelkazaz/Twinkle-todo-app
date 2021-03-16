import React  from 'react';

const Input = ({value,name , onChange, label}) => {
    return ( 
            <div className="mb-3">
                    <label  className="form-label" htmlFor={name}>{label}</label>
                    <input 
                    value={value}
                    name={name}
                    onChange={onChange}
                    type={name}
                    className="form-control" 
                    id={name}/>
                    
                </div> );
}
 
export default Input;