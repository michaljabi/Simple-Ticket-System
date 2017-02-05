import React from 'react'
import Recaptcha from 'react-recaptcha';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormButton } from './FormButton';
import { FormTextarea } from './FormTextarea';

const propTypes = {
  onFormCancel : React.PropTypes.func.isRequired
}

export class ReportTicketForm extends React.Component {

  constructor (props){
    super(props);
  }

  state = {
    title: '',
    component: 'page-clients',
    description: '',
    email: '',
    errors : {},
    isLoading : false
  };

  onInputChange = ( evt ) => {
    this.setState( { [evt.target.name]: evt.target.value } );
  };

  onLoadCaptchaCallback = () => {

  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
  };

  verifyCaptchaCallback = ( data ) => {
    console.log( "verify", data );
    this.setState({isSubmitDisabled : false});
  };

  render(){
    const optionListFeed = [
      {name: 'Clients page', value: 'page-clients'},
      {name: 'Products list', value: 'page-products'},
      {name: 'Other part of the Selling Platform', value: 'other-part'},
    ];

    return (
      <form onSubmit={this.onFormSubmit}>
        <FormInput
          name="title"
          label="What went wrong?"
          placeholder="Short description"
          onChange={this.onInputChange}
          value={this.state.title}
          error={this.state.errors.title}
          options={{maxLength:255}}
        />
        <FormSelect
          name="component"
          label="Specify where it happens:"
          options={optionListFeed}
          onChange={this.onInputChange}
          value={this.state.component}
        />
        <FormTextarea
          name="description"
          label="Give us more details:"
          onChange={this.onInputChange}
          value={this.state.description}
          error=''
        />
        <FormInput
          name="email"
          type="email"
          label="We will inform you about resolution process:"
          placeholder="Enter valid e-mail address"
          onChange={this.onInputChange}
          value={this.state.email}
          error=''
        />
        <div className="form-group">
          <Recaptcha theme="light" render="explicit" sitekey="6Lf-w8sSAAAAAMjaicvzOhHuWykW10W2Yp5ioG7e"
            verifyCallback={this.verifyCaptchaCallback}
            onloadCallback={this.onLoadCaptchaCallback}
          />
        </div>
        <div className="form-buttons">
          <FormButton label="Cancel" className="pull-left" onClick={this.props.onFormCancel} icon="remove" />
          <FormButton label="Submit this problem" type="submit" className="btn-primary pull-right" icon="upload" options={{disabled: this.state.isLoading}} />
        </div>
      </form>
    );
  }
};


ReportTicketForm.propTypes = propTypes;
