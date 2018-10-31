import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route, HashRouter, BrowserRouter, Link } from "react-router-dom";
import ClientList from "./ClientList";
import NewClientForm from "./NewClientFom";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    // For simplicity, simulate I have a list of client already provided by some rest call.
    const cur_client_page = [
      { id: 1, name: "Jonh" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Peter" }
    ];
    return (
      <HashRouter>
        <div className="App">
          <div>
            <NavLink className="nav-link dropdown-item" to="/">
              <button className="btn btn-secondary " type="button" id="gotHome">
                Home
              </button>{" "}
            </NavLink>
          </div>

          <div className="nav-scroller bg-white shadow-sm">
            <NavLink className="nav-link dropdown-item" to="client/new">
              <button
                className="btn btn-secondary "
                type="button"
                id="createNewOrganisme"
              >
                Create
              </button>{" "}
            </NavLink>
          </div>

          <div>
            <Route
              exact
              path="/"
              render={props => <ClientList cur_client_page={cur_client_page} />}
            />
            <Route
              exact
              path="/client/new"
              render={props => <NewClientForm />}
            />
            <Route
              path={`/client/edit/:organismeURI`}
              render={props => (
                <NewClientForm selectedClient={this.props.current_client} />
              )}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    current_client: state.client.current_client
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators(
    {
      // setSelectedSejour: setSelectedSejour
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
