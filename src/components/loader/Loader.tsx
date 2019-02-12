import * as React from 'react';
import { connect } from 'react-redux';

import './Loader.scss';

interface Props {}
interface State {}

class Loader extends React.Component<Props, State> {
  render() {
    return (
      <div className="block-element">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube" />
          <div className="sk-cube2 sk-cube" />
          <div className="sk-cube4 sk-cube" />
          <div className="sk-cube3 sk-cube" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
