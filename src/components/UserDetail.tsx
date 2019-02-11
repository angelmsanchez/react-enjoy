import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { thunkActionCreator } from './../store/actions/user.action';

interface Props {
  user: any;
}
interface State {}

class UserDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="user-info">
        <div className="avatar">
          <img src={this.props.user.avatar_url} alt="avatar" width="250px" />
        </div>
        <div className="content">
          <h1>{this.props.user.name}</h1>
          <p>
            <strong>Bio: </strong>
            {this.props.user.bio}
          </p>
          <p>
            <strong>Location:</strong> {this.props.user.location}
          </p>
          <p>
            <strong>Followers:</strong> {this.props.user.followers}
          </p>
          <p>
            <strong>Following:</strong> {this.props.user.following}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user.userData
});

const mapDispatchToProps = (dispatch: any) => ({
  thunkActionCreator: bindActionCreators(thunkActionCreator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
