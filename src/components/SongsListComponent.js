import React, { Component } from 'react'
import styled from 'styled-components'

const List = styled.ul` 
    list-style-type: none;
    text-align: left;
    padding: 0;    
`

const ListElement = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid rgb(160, 160, 160);        
    height: 40px;
    width: 300px;    
    cursor: pointer;
    background: ${props => props.selected? 'rgb(180, 180, 180)' : 'rgb(230,230,230)'};
    &:hover {
        background: ${props => props.selected? 'rgb(180, 180, 180)' : 'rgb(210,210,210)'};
    }
`;

const SongsListComponent = (props) =>
   <div>
       <h3>Saved songs</h3>
        <List>
            {props.savedSongs.map( (songItem, idx) => 
                <ListElement 
                    key={idx} 
                    selected = { props.selected === idx }
                    onClick  = { (e) => props.selectionHandler(idx) }>
                        {`${idx+1}. ${songItem}`}
                </ListElement>
            )}
        </List>        
    </div>

export default SongsListComponent;

