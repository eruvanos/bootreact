export default  React.createClass({

  propTypes: {
    onInc: React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired
  },

  render() {
    return (<div>
      <p>Hello world!</p>
      <p>{this.props.counter}</p>
      <button ref={"incButton"}
              onClick={this.props.onInc}>Inc
      </button>
    </div>);
  }
});
