import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-top: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

    display: flex;
`;


const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable 
                draggableId={this.props.task.id} 
                index={this.props.index}
                // isDragDisabled={this.props.task.id === 'task-1'}
            >
                {(provided, snapshot) => (
                    <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    >
                        <Handle />
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}
