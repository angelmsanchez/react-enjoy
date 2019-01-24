import * as React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  match: any;
}
interface State {}

class Post extends React.Component<Props, State> {
  render() {
    return (
      <>
        <h2>{this.props.match.params.id}</h2>
        <hr />
        <Link to="/">Go Back Home</Link>
      </>
    );
  }
}
export default Post;
