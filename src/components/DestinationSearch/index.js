// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

const destinationList = [
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
  {
    id: 6,
    name: 'Westminster abbey',
    imgUrl:
      'https://www.tripsavvy.com/thmb/0cxIfsqxrdCL2dPGixQMvcgENlc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/WestminsterAbbey-2-410f8042a62c419e9ebd935ed6750b00.jpg',
  },
  {
    id: 7,
    name: 'South down National Park',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9e/South_Down_-_national_park.jpg',
  },
  {
    id: 8,
    name: 'New York',
    imgUrl:
      'https://www.businessinsider.in/thumb/msid-70756608,width-700,resizemode-4,imgsize-1115026/The-13-biggest-misconceptions-people-have-about-New-York-City-from-someone-who-was-born-and-raised-there.jpg',
  },
  {
    id: 9,
    name: 'National Historic Site',
    imgUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/6c/88/42/fort-george-c-by-mila.jpg?w=1200&h=-1&s=1',
  },
  {
    id: 10,
    name: 'arc here',
    imgUrl:
      'https://gamingbolt.com/wp-content/uploads/2017/07/ark-survival-evolved-screenshot-4.jpg',
  },
  {
    id: 11,
    name: 'Steeple',
    imgUrl:
      'https://images.unsplash.com/photo-1617118069801-08850f78ad96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 12,
    name: 'Glaciokarst',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/46/Glaciokarst_Vucji_zub_Mt_Orjen_leg_P.Cikovac.jpg',
  },
]

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  gettingSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    const searchResult = destinationList.filter(eachPlace =>
      eachPlace.name.includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input
            type="search"
            onChange={this.gettingSearch}
            placeholder="search"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>

        <ul className="list-container">
          {searchResult.map(eachPlace => (
            <DestinationItem destinationList={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
