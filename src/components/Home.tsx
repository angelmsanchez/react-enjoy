import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  incrementCounter,
  decrementCounter
} from './../store/actions/counter.action';

interface Props {
  counter: any;
  incrementCounter: any;
  decrementCounter: any;
}
interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <button onClick={this.props.incrementCounter}>
            Increment via redux
          </button>
          <button onClick={this.props.decrementCounter}>
            Decrement via redux
          </button>
          <p>Counter: {this.props.counter}</p>
        </div>
        CUSTOM ELEMEMENT
        <my-custom-element name="Angel" answer="yes" />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch: any) => ({
  decrementCounter: bindActionCreators(decrementCounter, dispatch),
  incrementCounter: bindActionCreators(incrementCounter, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
