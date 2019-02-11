import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { thunkActionCreator } from './../store/actions/user.action';

interface Props {
  thunkActionCreator: any;
}
interface State {
  getUsername: any;
}

class Users extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      getUsername: ''
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.thunkActionCreator(this.state.getUsername);
  };

  changeUsername = (event: any) => {
    this.setState({ getUsername: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Enter the Github Username</h2>
          <input
            type="text"
            placeholder="Enter Github Username"
            required
            onChange={this.changeUsername}
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  thunkActionCreator: bindActionCreators(thunkActionCreator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
