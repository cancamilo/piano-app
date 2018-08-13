import React, {Component} from 'react';
import styled from 'styled-components';

import {Button, 
        ButtonToolbar,
        Modal,
        FormGroup,
        ControlLabel,
        FormControl} from 'react-bootstrap';

import ControlsGrid from './UI/ControlsGrid'

const Hseparator = styled.div`
    width: 20px;
`;

export default class RecordModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saveText: ''
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.handleSave(this.state.saveText);
    }

    onTextChange(e) {
        this.setState({saveText: e.target.value});
    }

    render() {
        const disableSave = this.state.saveText.length < 1;
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton> 
                    <Modal.Title>Save your song!</Modal.Title>
                </Modal.Header>
                <Modal.Body>                    
                    <form onSubmit={this.onFormSubmit}>
                        <FormGroup controlId='123'>
                            <ControlLabel>Save as</ControlLabel>
                            <FormControl 
                                type = 'text' 
                                placeholder = 'Songs Name'
                                value={this.state.saveText}                                
                                onChange={this.onTextChange} />      
                        </FormGroup>
                        <ButtonToolbar>
                            <Button type ='submit' disabled={disableSave}>Save</Button>
                            <Button bsStyle = 'danger' onClick={this.props.handleClose}>Cancel</Button>
                        </ButtonToolbar>
                    </form>                    
                </Modal.Body>
            </Modal>
        )
    }
}

{/* <Button bsStyle='success' bsSize='large' onClick={this.props.recordHandler}>Start </Button>
<Hseparator/>
<Button bsStyle='info'    bsSize='large' onClick={this.props.stopHandler}>Stop</Button>                                 */}
