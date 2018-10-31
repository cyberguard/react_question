import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route, HashRouter, BrowserRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as user from "./redux/client-actions";

import { bindActionCreators } from "redux";

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelectClient = this.handleSelectClient.bind(this);
  }

  handleSelectClient(event) {
    var selectedClient = event.currentTarget.getAttribute("data-client-uri");

    this.props.loadSelectedClient(selectedClient);
  }

  render() {
    const { cur_client_page = [] } = this.props;

    return (
      <div className="card-body">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">edit</th>

              <th scope="col">id</th>
              <th scope="col">name</th>
            </tr>
          </thead>
          <tbody>
            {cur_client_page.map(p => (
              <tr
                key={p.id}
                onClick={this.handleSelectClient}
                data-client-uri={p.id}
              >
                <td>
                  <NavLink to={`client/edit/${p.id}`}>Edit</NavLink>
                </td>
                <td>{p.id}</td>
                <td>{p.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    client: state.client
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators(
    {
      loadSelectedClient: user.thunk_loadSelectedClient
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(ClientList)
);
