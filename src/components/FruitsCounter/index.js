import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}
  onIncrementMango = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onIncrementBanana = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="fruit">{count}</span> mangoes
            <span className="fruit">{count}</span> bananas
          </h1>
          <div className="row">
            <div className="fruitImage">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button
                className="mangoBtn"
                type="button"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruitImage">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-2"
              />
              <button
                className="bananaBtn"
                type="button"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
