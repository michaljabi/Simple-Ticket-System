import React from 'react'


const propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
  rows: React.PropTypes.number
};

const defaultProps = {
  rows : 5
};

export const FormTextarea = ({name, label, rows, onChange, value, error}) => {

  const hasErrorClass = 'has-error has-feedback';

  return (
    <div className={'form-group ' + (error ? hasErrorClass : '')}>
      <label htmlFor={name}>{label}</label>
      <textarea
        className="form-control"
        name={name}
        rows={rows}
        onChange={onChange}
        value={value}
      />
      {error && <span className="glyphicon glyphicon-remove form-control-feedback" style={{ right: 6 }}> </span>}
      {error && <span className="help-block text-right">{error}</span>}
    </div>
  );
};

FormTextarea.propTypes = propTypes;
FormTextarea.defaultProps = defaultProps;