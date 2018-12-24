import React from "react";
import ReactDOM from "react-dom";
import MercuryLogo from "../../components/MercuryLogo/MercuryLogo";
import MercuryLogin from "./MercuryLogin/MercuryLogin";
import MercuryProfile from "./MercuryProfile/MercuryProfile";
import { Provider } from "../../store/Context";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "../../assets/img/background.jpg";
import GothamBoldFont from "../../assets/fonts/Gotham_Cyrillic/GothaProBol.otf";
import GothamMedFont from "../../assets/fonts/Gotham_Cyrillic/GothaProMed.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Gotham";
    src: url(${GothamBoldFont});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham";
    src: url(${GothamMedFont});
    font-weight: normal;
    font-style: normal;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    position: relative;
  }

  body {
    background-image: url(${backgroundImage}),
      linear-gradient(151deg, #ff435d, #b0208e);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;

const MercurySection = styled.section`
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

class MercuryHomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  handleSubmit = user => {
    this.setState({
      user
    });
  };

  logout = () => {
    this.setState({
      user: null
    });
  };

  render() {
    return (
      <Provider
        value={{
          user: this.state.user,
          onLogout: this.logout,
          handleSubmit: this.handleSubmit
        }}
      >
        <MercurySection>
          <GlobalStyles />
          <MercuryLogo href="#/login" />
          {this.state.user ? (
            <Switch>
              <Route exact path="/profile" component={MercuryProfile} />
              <Redirect to="/profile" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/login" component={MercuryLogin} />
              <Redirect to="/login" />
            </Switch>
          )}
        </MercurySection>
      </Provider>
    );
  }
}

export default MercuryHomeScreen;
