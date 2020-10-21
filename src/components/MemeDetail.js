import React from 'react';
import './MemeDetail.css'
import Draggable from 'react-draggable';
import domtoimage from 'dom-to-image';

class MemeDetail extends React.Component {
  //Design a modal here that has a large zoomed in image on the left and default top text and bottom text
  state = { input1:"Write Something here!", input2:"Want this as well?", colour:"black", fontSize:3, face:"Times New Roman"};

  myRef = React.createRef();

  downloadImage = event=>{
    event.preventDefault();
    var node = this.myRef.current;
    domtoimage.toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      //document.body.appendChild(img);
      var a = document.createElement('a');
      a.href = dataUrl;
      a.download = new Date().toISOString() + '.png';
      a.click();
      console.log('Downloading image!');
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  };

  render() {
      let showHideClassName = this.props.show?'modal display-block':'modal display-none';
      console.log(this.state.face);
      return (
        <div className={showHideClassName}>
              <div className="modal-main">
                <div ref={this.myRef} className="modal-left">  
                    <img src={this.props.meme.url} alt={this.props.meme.name} style={{width:"100%",height:"100%"}}></img>
                    <font size={this.state.fontSize} face={this.state.face}>
                      <Draggable><div className="top" style={{color:this.state.color}}><textarea rows="3" cols="20" value={this.state.input1} style={{color:this.state.colour,face:this.state.face}}></textarea></div></Draggable>
                      <Draggable><div className="bottom" style={{color:this.state.color}}><textarea rows="3" cols="20" value={this.state.input2} style={{color:this.state.colour,face:this.state.face}} ></textarea></div></Draggable>
                    </font>
                </div>
                <div className="modal-right">
                <form className="ui form">
                    <input type="text" onChange={(event)=>this.setState({input1:event.target.value})} value={this.state.input1}></input>
                    <input type="text" onChange={(event)=>this.setState({input2:event.target.value})} value={this.state.input2}></input>
                    <select onChange={(event)=>this.setState({colour:event.target.value})}> 
                      <option defaultChecked value="black">Black</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="white">White</option>
                    </select>
                    <select onChange={event=>this.setState({fontSize:event.target.value})}>
                      <option defaultChecked value="3">3</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <select onChange={event=>this.setState({face:event.target.value})}>
                      <option value = "Times New Roman" defaultChecked>Times New Roman</option>
                      <option value = "Verdana" >Verdana</option>
                      <option value = "Comic sans MS" >Comic sans MS</option>
                      <option value = "WildWest" >WildWest</option>
                      <option value = "Bedrock" >Bedrock</option>
                    </select>
                    <button className="ui button" onClick={this.downloadImage}>save</button>
                </form>
                <button className="ui button" onClick={this.props.closeModal}>close</button>
                </div>
              </div>
            </div>
          );
        }
      }
      
      export default MemeDetail;