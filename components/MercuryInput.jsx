class MercuryInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={
          this.props.valid || this.props.valid === undefined
            ? this.props.className + " mercury-input"
            : this.props.className + " mercury-input error-input"
        }
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        required
      />
    );
  }
}

export default MercuryInput;
