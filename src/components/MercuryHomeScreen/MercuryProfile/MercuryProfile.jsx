import React from "react";
import Panel from "../Panel/Panel";
import MercuryButton from "../MercuryButton/MercuryButton";
import { Consumer } from "../../../store/Context";
import styles from "./MercuryProfile.css";

class MercuryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {context => (
          <Panel className={styles["profile"]}>
            <img
              src={context.user.photoUrl}
              alt="profile-img"
              className={styles["profile-img"]}
            />
            <span className={styles["profile-name"]}>{context.user.name}</span>
            <MercuryButton
              className={styles["logout-btn"]}
              type="submit"
              onClick={context.onLogout}
            >
              Logout
            </MercuryButton>
          </Panel>
        )}
      </Consumer>
    );
  }
}

export default MercuryProfile;
