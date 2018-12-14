import styles from "../css/style.css";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={
          styles["panel"] +
          (this.props.className ? " " + this.props.className : "")
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
