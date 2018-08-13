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

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>        
        {this.props.children}
      </HomeWrapper>
    )
  }
}