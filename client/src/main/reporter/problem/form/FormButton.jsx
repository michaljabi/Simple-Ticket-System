import React from 'react'


const propTypes = {
  label: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
  options: React.PropTypes.object
};

const defaultProps = {
  type : 'button',
  className : '',
  options : {}
};

export function FormButton ({label, type, className, onClick, options, icon}) {

  return (
      <button type={type} className={`btn ${className}`} onClick={onClick} {...options}>
        <span className={`glyphicon glyphicon glyphicon-${icon}`}> </span>&nbsp;
        {label}
      </button>

  );
};

FormButton.propTypes = propTypes;
FormButton.defaultProps = defaultProps;