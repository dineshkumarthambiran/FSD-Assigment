import React, { PureComponent } from 'react'

export class EventClassComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello World"
      }
    }

    showAlert(){
        alert("A class based Component")
    }

    changeTextEventHandler()

    {
        this.setState({
            message:"The text is changed"
        })
    }

    changeTextEventHandler = ()=>

    {
        this.setState({
            message:"The text is changed"
        })
    }

     

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* method 1 */}
        <button onClick={this.changeTextEventHandler.bind(this)}>click me - class method - 1</button>
        
        {/* method 2 */}
        <button onClick={()=>{this.changeTextEventHandler()}}>click me -Class method -2</button>

          {/* method 3 */}
          <button onClick={this.changeTextEventHandler}>click me - Class method3</button>

          <button onClick={this.state.message}>reset</button>

        


        
      </div>
    )
  }
}

export default EventClassComponent