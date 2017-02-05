import React from 'react'


const propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
  options: React.PropTypes.array,
  error: React.PropTypes.string
};

const defaultProps = {
  options: []
};

export const FormSelect = ( { name, label, options, onChange, value, error } ) => {

  const hasErrorClass = 'has-error has-feedback';

  return (
    <div className={'form-group ' + (error ? hasErrorClass : '')}>
      <label htmlFor={name} className="control-label">{label}</label>
      <select
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      >
        {
          options.map( ( { value, name } ) => <option key={value} value={value}>{name}</option> )
        }
      </select>
      {error && <span className="glyphicon glyphicon-remove form-control-feedback" style={{ right: 6 }}> </span>}
      {error && <span className="help-block text-right">{error}</span>}
    </div>

  );
};

FormSelect.propTypes = propTypes;
FormSelect.defaultProps = defaultProps;