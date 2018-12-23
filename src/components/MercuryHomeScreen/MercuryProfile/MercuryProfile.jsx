import React from "react";
import Panel from "../Panel/Panel";
import MercuryButton from "../MercuryButton/MercuryButton";
import { Consumer } from "../../../store/Context";
import styled from "styled-components";

const StyledPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledMercuryButton = styled(MercuryButton)`
  margin: 16px 0;
`;

const ProfileImg = styled.img`
  margin-bottom: 24px;
  border-radius: 50%;
  width: 128px;
  height: 128px;
  border: solid 1px #979797;
`;

const ProfileName = styled.span`
  margin-bottom: 24px;
  opacity: 0.8;
  font-family: Gotham;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
  color: #262626;
`;

class MercuryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {context => (
          <StyledPanel>
            <ProfileImg src={context.user.photoUrl} alt="profile-img" />
            <ProfileName>{context.user.name}</ProfileName>
            <StyledMercuryButton type="submit" onClick={context.onLogout}>
              Logout
            </StyledMercuryButton>
          </StyledPanel>
        )}
      </Consumer>
    );
  }
}

export default MercuryProfile;
