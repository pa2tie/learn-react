import React from "react";
import Panel from "./Panel";
import { Consumer } from "../store/Context";
import styles from "../css/style.css";

class MercuryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {user => (
          <Panel className={styles["profile"]}>
            <img
              src={user.photoUrl}
              alt="profile-img"
              className={styles["profile-img"]}
            />
            <span className={styles["profile-name"]}>{user.name}</span>
            <button
              className={styles.btn + " " + styles["logout-btn"]}
              type="submit"
              onClick={this.props.onLogout}
            >
              Logout
            </button>
          </Panel>
        )}
      </Consumer>
    );
  }
}

export default MercuryProfile;
