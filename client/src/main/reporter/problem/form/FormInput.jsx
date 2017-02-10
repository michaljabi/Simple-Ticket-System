import React from 'react'


const propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  isRequired: React.PropTypes.bool,
  options: React.PropTypes.object,
  error: React.PropTypes.string
};

const defaultProps = {
  type : 'text',
  options : {}
};

export function FormInput ({name, label, type, placeholder, onChange, isRequired, value, options, error}) {

  const hasErrorClass = 'has-error has-feedback';

  return (
    <div className={'form-group ' + (error ? hasErrorClass : '')} >
      <label htmlFor={name} className="control-label">{isRequired && '* '}{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...options}
        className="form-control"
      />
      {error && <span className="glyphicon glyphicon-remove form-control-feedback"> </span>}
      {error && <span className="help-block text-right">{error}</span>}
    </div>

  );
};

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;