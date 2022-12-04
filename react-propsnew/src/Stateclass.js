import React, { PureComponent } from 'react'

export class Stateclass extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         likes:0
      }
    }
incrementlike = ()=>{
    this.setState({Message:"you have liked",
    likes:this.state.likes+1
})

}

decrementlike = ()=>{
    this.setstate({Message1:"you have disliked",
    dislikes:this.state.likes-1
})
}

  render() {
    return (
      <div>
        <p>post1</p>
        <p>total number of likes: {this.state.likes}</p>
        <p>total number of dislikes: {this.state.dislikes}</p>
        <p>Status:{this.state.Message}</p>
        <p>Status:{this.state.Message1}</p>
        <button onClick={this.incrementlike}>Click me</button>
        <button onClick={this.decrementlike}>Dislike</button>
    
      </div>
    )
  }
}

export default Stateclass