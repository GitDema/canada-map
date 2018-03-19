import React, { Component } from 'react';
import { cityList } from './cityList';

class FromInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '2018-' + '03-' + new Date().getDate(),
      from: '',
      to: '',
      list: []
    }
  }

  dateValidate(e) {
    let dateArr = e.target.value.split('-'),
      year = +dateArr[0],
      month = +dateArr[1],
      day = +dateArr[2],
      realYear = new Date().getFullYear(),
      realMonth = new Date().getMonth() + 1,
      realDay = new Date().getDate();

    if (year === realYear || month === realMonth || day > realDay) {
      this.setState({ date: e.target.value });
    }
  }

  getFrom(e) {
    let value = e.target.value.toLowerCase();
    let showList = cityList.filter(function (item, i) {
      if (!item.name.toLowerCase().indexOf(value)) return item.name;
    });
    if (showList.length > 0) {
      this.setState({ from: value });
    } else {
      alert('city not found');
      this.setState({ from: '' });
    }
    return this.setState({ list: showList });
  }

  getTo(e) {
    let value = e.target.value.toLowerCase();
    let showList = cityList.filter(function (item, i) {
      if (!item.name.toLowerCase().indexOf(value)) return item.name;
    });
    if (showList.length > 0) {
      this.setState({ to: value });
    } else {
      alert('city not found');
      this.setState({ to: '' });
    }
    return this.setState({ list: showList });
  }

  mapUpdate(e) {
    let from = e.target.getAttribute('data-from'),
      to = e.target.getAttribute('data-to'),
      newCoordinates = Math.floor(Math.random() * 270);
    window.simplemaps_canadamap_mapdata.locations = {};
    window.simplemaps_canadamap_mapdata.locations['0'] = {
      name: 'From: ' + from,
      id: 0,
      lat: cityList[newCoordinates].lat,
      lng: cityList[newCoordinates].lng,
      color: 'green'
    };
    newCoordinates = Math.floor(Math.random() * 270);
    window.simplemaps_canadamap_mapdata.locations['1'] = {
      name: 'To: ' + to,
      id: 1,
      lat: cityList[newCoordinates].lat,
      lng: cityList[newCoordinates].lng,
      color: 'red'
    };

    window.simplemaps_canadamap_mapdata.main_settings.location_size=20;
    window.simplemaps_canadamap_mapdata.main_settings.location_type='square';

    window.simplemaps_canadamap.load();
  }

  render() {
    return (
      <div>
        <br />
        <p>Date:</p>
        <input type="date"
          min={'2018-' + '03-' + new Date().getDate()}
          max="2018-03-31"
          onChange={e => { this.dateValidate(e) }}
          defaultValue="2018-03-19"
        />
        <br /><br /><br />
        <p>From:</p>
        <input type="text"
          id="from"
          onChange={(e) => this.getFrom(e)}
          value={this.state.from}
        />
        <ul hidden={this.state.from.length < 0 ? true : false}>
          {
            this.state.list.map(function (item) {
              return (
                <CitySelect
                  key={item.id}
                  name={item.name}
                />
              );
            })
          }
        </ul>
        <br /><br /><br />
        <p>TO:</p>
        <input type="text"
          id="to"
          onChange={(e) => this.getTo(e)}
          value={this.state.to}
        />
        <ul hidden={this.state.to.length < 0 ? true : false}>
          {
            this.state.list.map(function (item) {
              return (
                <CitySelect
                  key={item.id}
                  name={item.name}
                />
              );
            })
          }
        </ul>
        <br /><br />
        <button id="btn-create"
          data-from={this.state.from}
          data-to={this.state.to}
          onClick={e => this.mapUpdate(e)}>CREATE</button>
        <br /><br />
      </div>
    );
  }
}

class CitySelect extends Component {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default FromInput;
