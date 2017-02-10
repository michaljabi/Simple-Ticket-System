import React from 'react'
import Recaptcha from 'react-recaptcha';

const propTypes = {
  verifyCallback: React.PropTypes.func.isRequired,
  onLoadCallback: React.PropTypes.func.isRequired
};

export function FormCaptcha ( { verifyCallback, onLoadCallback, error } ) {

  const hasErrorClass = 'has-error has-feedback';

  return (
    <div className={'form-group ' + (error ? hasErrorClass : '')}>
      <Recaptcha
        theme="light"
        render="explicit"
        sitekey="6Lf-w8sSAAAAAMjaicvzOhHuWykW10W2Yp5ioG7e"
        verifyCallback={verifyCallback}
        onloadCallback={onLoadCallback}
      />
      {error && <span className="glyphicon glyphicon-remove form-control-feedback"> </span>}
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

FormCaptcha.propTypes = propTypes;