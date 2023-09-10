import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {currentCapital: countryAndCapitalsList[0].id}

  onchangeValue = event => this.setState({currentCapital: event.target.value})

  getCapitel = () => {
    const {currentCapital} = this.state
    const currentCapitalValue = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === currentCapital,
    )
    return currentCapitalValue.country
  }

  render() {
    const {currentCapital} = this.state

    const currentCapitalValue = this.getCapitel(currentCapital)
    return (
      <div className="all-back">
        <div className="bg-container">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select onChange={this.onchangeValue}>
              {countryAndCapitalsList.map(eachCapital => (
                <option value={eachCapital.id} key={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="select-text"> is capital of which country?</p>
          </div>
          <p className="capital-name">{currentCapitalValue}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
