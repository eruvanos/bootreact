export default  React.createClass({

  propTypes: {
    onInc: React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired,
    didMount: React.PropTypes.func
  },

  componentDidMount(){
    if (this.props.didMount)this.props.didMount();
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
