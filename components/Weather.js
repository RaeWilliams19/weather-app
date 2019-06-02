import React from 'react';
import { View } from 'react-native';
import { CityTitle, Text, WeatherDescription, Temperature } from './styled';

export default class Weather extends React.Component {
    render() {
        const { data } = this.props

        if (!data) return null

        if (data.cod !== 200) return <Text>Oop! City could not be found! 😔</Text>

        return (
            <View>
                <CityTitle>{data.name}, {data.sys.country}</CityTitle>
                <Temperature>{Math.round(data.main.temp)}°C</Temperature>
                <WeatherDescription>{data.weather[0].description}</WeatherDescription>
            </View>
        )
    }
}