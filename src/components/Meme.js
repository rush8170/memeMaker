import React from 'react';
import './Meme.css';

class Meme extends React.Component {
    //state = {activeMeme:null};
    
    expandModal = (event) => {
        event.preventDefault();
        console.log(this.props.meme);
        this.props.onSelect(this.props.meme);
    }

    render() {
        return (
                <div key={this.props.meme.id} className="container">
                    <img onClick={this.expandModal} src={this.props.meme.url} alt={this.props.meme.name}></img>
                    <div className="shown">{this.props.meme.name}</div>
                </div>
        );
    }
}

export default Meme;