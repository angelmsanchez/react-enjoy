import * as React from 'react';

import { comicService } from '../../services/comic.service';

import './Comics.scss';

interface Props {}
interface State {
  comics: any[];
}

class Comics extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      comics: []
    };
  }

  componentDidMount(): void {
    this.getComics();
  }

  render() {
    return (
      <div id="comics">
        <ul>
          {this.state.comics.map((item, index) => (
            <li key={item.id} className="comic">
              <span> {item.name} </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private getComics(): void {
    comicService.getList().then(comics => {
      this.setState({ comics: comics['rebirth'] });
    });
  }
}

export default Comics;
