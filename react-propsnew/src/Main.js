import React, { PureComponent } from 'react'

export class Main extends PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.about}</p>
      </div>
    )
  }
}

export default Main