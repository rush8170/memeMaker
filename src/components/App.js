import React from 'react';
import axios from 'axios';
import Meme from './Meme';
import MemeDetail from './MemeDetail';
import './App.css';
import Draggable from 'react-draggable';

class App extends React.Component {
    state = {memes: [], activeMeme:null};

    componentDidMount() {
        axios.get('https://api.imgflip.com/get_memes')
        .then(apiData=>{
            this.setState({memes:apiData.data.data.memes});
        })
        .catch(err=>console.log(err));
    };

    closeModal = ()=>{
        this.setState({activeMeme:null});
    }; 

    render() {
        const allMemes = this.state.memes.map(meme=>{
            return <Meme meme={meme} onSelect={(meme)=>this.setState({activeMeme:meme})} />
        });
        if(this.state.activeMeme) {
            return (
                <MemeDetail meme={this.state.activeMeme} show={true} closeModal={this.closeModal} />
            );
            
        }
        return (
            <div className="container">
                {allMemes}
            </div>
        );
    }
}

export default App;

/*
Add download option
*/