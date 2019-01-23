import * as React from 'react';

interface Props {
  value: string;
  onClick: any
};
interface State { };

export default class Square extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
