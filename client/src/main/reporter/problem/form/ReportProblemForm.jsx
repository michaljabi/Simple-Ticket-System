import React from 'react'
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormButton } from './FormButton';
import { FormTextarea } from './FormTextarea';
import { FormCaptcha } from './FormCaptcha';
import { validateProblemReportForm } from './validateProblemReport';
import { reportProblemAction } from '../reportProblemAction';

const propTypes = {
  onFormCancel: React.PropTypes.func.isRequired
}

export class ReportTicketForm extends React.Component {

  constructor ( props ) {
    super( props );
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    title: '',
    component: 'page-clients',
    description: '',
    email: '',
    errors: {},
    isVerified: true,
    isLoading: false
  };

  handleInputChange = ( evt ) => {
    const errors = { ...this.state.errors };
    errors[ evt.target.name ] = '';

    this.setState( { [evt.target.name]: evt.target.value, errors } );
  };

  handleLoadCaptchaCallback = () => {

  };

  handleVerifyCallback = ( data ) => {
    this.setState( { isVerified: true } );
  };

  handleFormSubmit = ( evt ) => {
    evt.preventDefault();
    if ( this.validateForm() ) {
      reportProblemAction( this.state )
        .then( ( data ) => {
          this.context.router.push( `/sts/ticket/${data.ticket}` );
        } )
        .catch( ( errors ) => {
          this.setState( { errors } );
        } );
    }
  };

  validateForm = () => {
    const errors = validateProblemReportForm( this.state );
    this.setState( { errors } );
    return !errors;
  };


  render () {
    const optionListFeed = [
      { name: 'Clients page', value: 'page-clients' },
      { name: 'Products list', value: 'page-products' },
      { name: 'Other part of the Selling Platform', value: 'other-part' },
    ];

    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.errors.__connection && <span className="has-error">{this.state.errors.__connection}</span>}
        <FormInput
          name="title"
          label="What went wrong?"
          placeholder="Short description"
          onChange={this.handleInputChange}
          value={this.state.title}
          error={this.state.errors.title}
          isRequired={true}
          options={{ maxLength: 255 }}
        />
        <FormSelect
          name="component"
          label="Specify where it happens:"
          options={optionListFeed}
          onChange={this.handleInputChange}
          value={this.state.component}
          error={this.state.errors.component}
        />
        <FormTextarea
          name="description"
          label="Give us more details:"
          onChange={this.handleInputChange}
          value={this.state.description}
          error={this.state.errors.description}
        />
        <FormInput
          name="email"
          type="email"
          label="We will inform you about resolution process:"
          placeholder="Enter valid e-mail address"
          onChange={this.handleInputChange}
          value={this.state.email}
          error={this.state.errors.email}
        />
        <FormCaptcha
          verifyCallback={this.handleVerifyCallback}
          onLoadCallback={this.handleLoadCaptchaCallback}
          error={this.state.errors.isVerified}
        />
        <div className="form-buttons">
          <FormButton label="Cancel" className="pull-left" onClick={this.props.onFormCancel} icon="remove"/>
          <FormButton label="Submit this problem" type="submit" className="btn-primary pull-right" icon="upload"
                      options={{ disabled: !this.state.isVerified }}/>
        </div>
      </form>
    );
  }
}
;


ReportTicketForm.propTypes = propTypes;
