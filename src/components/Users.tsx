import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { thunkActionCreator } from './../store/actions/user.action';

interface Props extends RouteComponentProps<{}> {
  thunkActionCreator: any;
  user: any;
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

  goToUserDetail = () => {
    const id: string = this.props.user.userData.login;
    console.log('goToUserDetail ' + id);
    this.props.history.push(`/users/${id}`);
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
        {this.props.user.userData && (
          <button className="button" onClick={this.goToUserDetail}>
            Go To User Detail
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  thunkActionCreator: bindActionCreators(thunkActionCreator, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
);
