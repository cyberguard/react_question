import React, { Component } from "react";
import { withRouter } from "react-router";

class IndividuTextInput extends Component {
  render() {
    const { onChange, value, id } = this.props;

    return (
      <input
        className="form-control form-control-sm"
        id={id}
        placeholder={id}
        value={value}
        required
        onChange={onChange}
      />
    );
  }
}

class TextInput extends Component {
  render() {
    const { onChange, value, id, label } = this.props;

    return (
      <div className="col-sm col-md-3 ">
        <label className="form-control-sm" htmlFor={id}>
          {label}
        </label>
        <IndividuTextInput id={id} value={value[id]} onChange={onChange} />
      </div>
    );
  }
}

class NewClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
      client: {},
      selectedClient: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const id = target.id;

    this.setState({
      selectedClient: {
        ...this.state.selectedClient,
        [id]: value
      }
    });

    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    // submitClientPost(this.state.selectedClient);
    this.props.history.push(this.props.path_to_on_submit);
  }
  render() {
    const { selectedClient = {} } = this.props;

    if (selectedClient.fetching) {
      return <div>Loading....</div>;
    }
    const cur_selected_client = selectedClient.data;

    return (
      <div className="card">
        <div>
          <input
            className="btn btn-primary"
            type="button"
            value="Sauvegarder"
            onClick={this.handleSubmit}
          />
        </div>
        <form className="needs-validation" noValidate>
          <div className="card-header">
            <strong>Details</strong>
          </div>
          <div className="card-body">
            <div>
              <div className="row">
                <TextInput
                  id="name"
                  value={cur_selected_client}
                  onChange={this.handleInputChange}
                  label="name"
                />
              </div>
              <div className="row">
                <TextInput
                  id="country"
                  value={cur_selected_client}
                  onChange={this.handleInputChange}
                  label="country"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// export default NewClientForm;
const NewClientFormWithRouter = withRouter(NewClientForm);
export default NewClientFormWithRouter;
