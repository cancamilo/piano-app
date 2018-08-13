import React, { Component } from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const HomeWrapper = styled.div`
    background: rgb(230,230,230);
    width: 100%;
    height: 80%;
    margin: auto;
    border: 1px solid red;
    overflow: auto;
    align-items: center;
    display: flex;
    justify-content: center;
`
const ButtonFrame = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <ButtonFrame>
          <Button bsStyle = 'warning'>List</Button>
        </ButtonFrame>
        {this.props.children}
      </HomeWrapper>
    )
  }
}