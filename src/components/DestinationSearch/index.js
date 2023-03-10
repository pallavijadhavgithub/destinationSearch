// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

const destinationPlace = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl:
      'https://www.everydayonsales.com/wp-content/uploads/sites/5/2020/12/2e92.jpg',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl:
      'https://www.worldatlas.com/r/w960-q80/upload/0b/13/57/shutterstock-665762374.jpg',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl:
      'https://www.businessinsider.in/thumb/msid-70756608,width-700,resizemode-4,imgsize-1115026/The-13-biggest-misconceptions-people-have-about-New-York-City-from-someone-who-was-born-and-raised-there.jpg',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl:
      'https://www.doorcounty.com/getmedia/7eaccb81-a06c-443e-bd1b-2a6114994514/niagara-escarpment.jpg?resizemode=force&height=860',
  },
  {
    id: 5,
    name: 'Tower Bridge',
    imgUrl:
      'https://www.thetrainline.com/cms/media/5766/aerial-view-of-tower-bridge-on-river-thames-in-london-uk.jpg?mode=crop&width=860&height=574&quality=70',
  },
]

class DestinationSearch extends Component {
  state: {
    searchInput: '',
  }

  gettingSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)

    const searchResult = destinationPlace.filter(eachPlace =>
      eachPlace.name.includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.gettingSearch}
          placeholder="search"
          value={searchInput}
        />
        <ul className="list-container">
          {searchResult.map(eachPlace => (
            <DestinationItem destinationPlace={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
