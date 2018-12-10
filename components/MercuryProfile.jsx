import Panel from "./Panel";
import { Consumer } from "./Context";

class MercuryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {user => (
          <Panel className="profile">
            <img
              src={user.photoUrl}
              alt="profile-img"
              className="profile-img"
            />
            <span className="profile-name">{user.name}</span>
            <button
              className="btn logout-btn"
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
