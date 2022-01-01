import React, {Fragment, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import validex from 'validex'

export {validex}

export const withValidator = (Comp) => {
    

    return  (props) => {
        const ref = useRef()
        const [,setState] = useState()
        if(!ref.current){
            ref.current = validex()
            ref.current.callback = () => {
                setState(Math.random())
            }
        }
        
        return <Fragment>
            <Comp {...props} validator={ref.current}/>
        </Fragment>
    }
}



export const ValidField = ({ children, name, validator, value, showError, ...schema}) => {
    if(!validator){
        return children
    }
    validator.set(name, value, schema)
    showError = showError !== undefined && showError === true ? true : false
    return (
        <Fragment>
            {children}
            {
                showError && <p style={{ color: '#e74c3c', fontSize: 13, padding: 0, margin: '4px 0 0 0' }}>{validator.errorMessage(name)}</p>
            }
        </Fragment>
    )
}



ValidField.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element, 
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    validator: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    showError: PropTypes.bool,

    // validator props
    compare: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
    hex: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    lowercase: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    uppercase: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    capitalize: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    url: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    email: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    equal: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    maxNumberRange: PropTypes.oneOfType([
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        PropTypes.array
    ]),
    minNumberRange: PropTypes.oneOfType([
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        PropTypes.array
    ]),
    minWords: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    maxWords: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    notAllowedChars: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    notAllowedSpecialChars: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    notAllowedWords: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    type: PropTypes.oneOfType([
        PropTypes.oneOf(['number', 'string', 'array', 'object']), 
        PropTypes.array
    ]),
}


