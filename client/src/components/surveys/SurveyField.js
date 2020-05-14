import React from 'react';

export default (props) => {
    // console.log('These are all the functions passed along as props from redux-forms', props.input)
    // console.log(props.meta)
    return (
        <div>
            <label>{props.label}</label>
            <div className="red-text" style={{ marginBottom: '10px' }}>
                {props.meta.touched && props.meta.error}
            </div>
            <input {...props.input} />
        </div>
    );
};