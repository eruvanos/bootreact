export default React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  },

  render()
  {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
})
;