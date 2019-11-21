import React, {Component} from 'react';


class Edit extends Component{
    constructor(props){
        super(props);
        this.state= {
			 text: 'what?',
            inputValue: ''
        };
        
        this.setText=this.setText.bind(this);
        this.editText=this.editText.bind(this);
    }
    
    	componentWillMount(){
		this.setText();
	}
    
    setText(){
		this.setState({text: this.props.text})
	}
    updateInputValue(evt) {
        this.setState({
            text: evt.target.value
        });
    }


deleteText(index) {
    const text = this.state.text;
    const newText = [
        ...text.slice(0, index),
        ...text.slice(index + 1)
    ];
    this.setState({
        text: newText
    });
    
}


editText(index,value){
    const text = this.state.text;
    //console.log(this.state.text)
    const newText = text.map((tex, i) => {
        if (i !== index) {
            return tex;
        }
        return value;
    });
    this.setState({ text: newText});

}
	



    render(){
		var text=this.state.text;
		console.log(text);
        return(
            <div>
               
                
                <input  value={this.state.text} 
                    onChange={evt => this.updateInputValue(evt)}>
                </input> 
                <button onClick={() => this.editText(text)}>edit</button>


            </div>
        );
    }
}

export default Edit;
