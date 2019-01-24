import * as React from 'react';

interface Props {}
interface State {}

class Schedule extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <ul>
          <li>6/5 @ Evergreens</li>
          <li>6/8 vs Kickers</li>
          <li>6/14 @ United</li>
        </ul>
      </div>
    );
  }
}

export default Schedule;
