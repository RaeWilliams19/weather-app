import React from 'react';

import { MainScreen, BottomView } from './components/styled';
import Weather from './components/Weather';
import Header from './components/Header';
import Search from './components/Search';


export default class App extends React.Component {
  state = {
    data: '',
  };

  handleData = (data) => {
    this.setState({ data })
    console.log(this.state.data)
  }

  render() {

    const { data } = this.state

    return (
      <MainScreen>
        <Header />
        <Search handleData={this.handleData} />
        <BottomView>
          <Weather data={data} />
        </BottomView>
      </MainScreen>
    );
  }
}
