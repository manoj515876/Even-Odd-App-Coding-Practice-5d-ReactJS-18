import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(() => ({count: Math.floor(Math.random() * 101)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>
            Count <span>{count}</span>
          </h1>
          <div>
            {count % 2 === 0 && <p>Count is Even</p>}
            {!(count % 2 === 0) && <p>Count is Odd</p>}
          </div>

          <button type="button" className="button" onClick={this.increase}>
            Increment
          </button>
          <p className="para">*increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
