import React, {Component} from 'react';

export const SongsContext = React.createContext({
    songsList: [],
    listUpdater: () => {}
});

export const withContext = (Component) => {
    return (props) => 
    <SongsContext.Consumer>
        {(songsList, listUpdater) => 
            <Component {...props} songsList={songsList} listUpdater={listUpdater} />}
    </SongsContext.Consumer>
}
  
class SongsProvider extends Component {    
      state = {
         songsList: [] 
      }

      listUpdater = () => {
          //utility function to update state
      }

      render() {
        return (
            <SongsContext.Provider value={this.state}>
                {this.props.children}
            </SongsContext.Provider>
        )
     }
}

export default SongsProvider;