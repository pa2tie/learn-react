import React from "react";
import MercuryInput from "../../../components/MercuryInput/MercuryInput";
import Panel from "../../../components/Panel/Panel";
import MercuryButton from "../../../components/MercuryButton/MercuryButton";
import { postRequest } from "../../../services/HttpService";
import { Consumer } from "../../../store/Context";
import styled from "styled-components";

const LoginHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  opacity: 0.8;
  font-family: Gotham;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
  color: #262626;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledMercuryButton = styled(MercuryButton)`
  margin: 16px 0;
`;

const ErrorMessage = styled.p`
  width: 100%;
  border-radius: 4px;
  background-color: rgba(237, 65, 89, 0.25);
  padding: 11px 16px;
  margin-top: 0;
  margin-bottom: 24px;

  font-family: Gotham;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ed4159;
`;

class MercuryLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
      validEmail: true
    };
  }

  handleSubmit = async (e, contextHandleSubmit) => {
    e.preventDefault();
    try {
      const url =
        "https://us-central1-mercdev-academy.cloudfunctions.net/login";
      let payload = {
        email: this.state.email,
        password: this.state.password
      };
      const user = await postRequest({ url, payload });
      contextHandleSubmit(user);
    } catch (response) {
      switch (response.status) {
        case 400:
          this.setState({
            error: response.error,
            validEmail: false
          });
          break;
        default:
          this.setState({
            error: response.error
          });
          break;
      }
    }
  };

  handleChangeEmail = e => {
    this.setState({
      email: e.target.value,
      validEmail: true
    });
  };

  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <Consumer>
        {context => (
          <Panel>
            <LoginHeader>Log In</LoginHeader>
            <LoginForm
              method="post"
              onSubmit={e => this.handleSubmit(e, context.handleSubmit)}
            >
              <MercuryInput
                valid={this.state.validEmail}
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="E-Mail"
                type="email"
              />
              <MercuryInput
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
              {this.state.error && (
                <ErrorMessage>{this.state.error}</ErrorMessage>
              )}
              <StyledMercuryButton type="submit">Login</StyledMercuryButton>
            </LoginForm>
          </Panel>
        )}
      </Consumer>
    );
  }
}

export default MercuryLogin;
