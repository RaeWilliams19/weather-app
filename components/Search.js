import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Input, Text } from './styled';

const API_KEY = '1ec47c308fcbd41c28063522869d5008';

export default class Search extends React.Component {
    state = {
        isLoading: '',
        searchValue: '',
    };

    getWeather = () => {
        this.setState({ isLoading: true })

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchValue}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => this.props.handleData(data))
            .catch(err => console.log(err))

        this.setState({ searchValue: '', isLoading: false })
    }

    handleChangeText = (searchValue) => {
        this.setState({ searchValue })
    }

    render() {

        const { searchValue, isLoading } = this.state

        return (
            <View>
                <Input
                    onChangeText={this.handleChangeText}
                    value={searchValue}
                    placeholder='Enter a city'
                />
                <Button onPress={this.getWeather}>
                    <Text>⚡️Get Weather </Text>
                </Button>
                {isLoading ? (
                    <View>
                        <Text>Fetching the weather...</Text>
                        <ActivityIndicator size="large" />
                    </View>
                ) : (
                        null
                    )}
            </View>
        )
    }
}