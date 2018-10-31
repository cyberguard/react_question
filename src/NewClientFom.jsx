import React, { Component } from "react";
import { withRouter } from "react-router";

class NewClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedClient: { ...props.selectedClient } };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.getStateToUse_FromProps = this.getStateToUse_FromProps.bind(this);
    this.getStateToUse_FromStateCopiedFromProps = this.getStateToUse_FromStateCopiedFromProps.bind(
      this
    );
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

  handleReset(event) {
    alert("Reset to original value from redux store... somehow");
  }

  handleSubmit(event) {
    event.preventDefault();

    alert("Would have saved " + JSON.stringify(this.state));
  }

  // Option 1 - Get it from props on render.
  // ==> But then how to I reflect a user changing value ?
  getStateToUse_FromProps() {
    const { selectedClient = {} } = this.props;
    return selectedClient;
  }

  // The async nature of the load, cause the constructor to be
  // evaluated before the data is here.
  // So it does not work... While the render method is called when props are udated, the state is not...
  // Thus loading is never replaced by the form.
  getStateToUse_FromStateCopiedFromProps() {
    const { selectedClient = {} } = this.state;
    return selectedClient;
  }

  render() {
    // Use option1, from the props directly
    const selectedClient = this.getStateToUse_FromProps();

    // Use option2, from the state init from props in constructor
    // This cause the form to never load
    // const selectedClient = this.getStateToUse_FromStateCopiedFromProps();

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
            value="Save"
            onClick={this.handleSubmit}
          />
          <input
            className="btn btn-primary"
            type="button"
            value="Reset"
            onClick={this.handleReset}
          />
        </div>
        <form className="needs-validation" noValidate>
          <div className="card-header">
            <strong>Details</strong>
          </div>
          <div className="card-body">
            <div>
              <div className="row">
                <div className="col-sm col-md-3 ">
                  <label className="form-control-sm" htmlFor="name">
                    name
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="name"
                    value={cur_selected_client["name"]}
                    required
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm col-md-3 ">
                  <label className="form-control-sm" htmlFor="country">
                    country
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="country"
                    value={cur_selected_client["country"]}
                    required
                    onChange={this.handleInputChange}
                  />
                </div>
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
