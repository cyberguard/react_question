import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
import ClientList from "./ClientList";
import NewClientForm from "./NewClientFom";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 1 };

    this.rerender = this.rerender.bind(this);
  }

  rerender() {
    this.setState({ time: this.state.time + 1 });
  }

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
            <button
              className="btn btn-secondary "
              type="button"
              onClick={this.rerender}
            >
              Trigger Outer app component rerender
            </button>{" "}
            Time for triggering rerender periodically : {this.state.time}
          </div>

          <div>
            <NavLink className="nav-link dropdown-item" to="/">
              <button className="btn btn-secondary " type="button" id="goHome">
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
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
