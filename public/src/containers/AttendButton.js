import React, { Component } from 'react';
import { updateVenue } from '../actions';
import { connect } from 'react-redux';

class AttendButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateVenue(this.props.id);
  }

  render() {
    let { goingList } = this.props
    if (this.props.user && this.props.user.loggedIn) {
      return (
        <button
          onClick={this.handleClick}
          className="num-going"
        >{goingList.length} going</button>
      )
    }
    return (
      <a
        href="/auth/twitter"
        className="num-going"
      >
        {goingList.length} going
      </a>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { updateVenue })(AttendButton);
