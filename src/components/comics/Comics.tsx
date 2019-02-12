import * as React from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { comicService } from '../../services/comic.service';

import './Comics.scss';

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  padding: 8 * 2,
  margin: `0 0 ${8}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 8,
  width: 250
});

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
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount(): void {
    this.getComics();
  }

  onDragEnd(result: any): void {
    if (result.destination) {
      const items = this.reorder(
        this.state.comics,
        result.source.index,
        result.destination.index
      );
      this.setState({ comics: items });
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.comics.map((comic, index) => (
                <Draggable key={comic.id} draggableId={comic.id} index={index}>
                  {(providedDraggable, snapshotDraggable) => (
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                      style={getItemStyle(
                        snapshotDraggable.isDragging,
                        providedDraggable.draggableProps.style
                      )}
                    >
                      {comic.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  private getComics(): void {
    comicService.getList().then(comics => {
      this.setState({ comics: comics['rebirth'] });
    });
  }

  private reorder(list: any[], startIndex: number, endIndex: number): any[] {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }
}

export default Comics;
