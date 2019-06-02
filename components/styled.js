import styled from 'styled-components/native';
import { primaryColor, secondaryColor, screenHeight, defaultMargin, defaultPadding } from '../constants';

export const MainScreen = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${secondaryColor};
`

export const BottomView = styled.View`
    height: ${screenHeight * 0.2}
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    color: ${primaryColor};
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    margin-vertical: 30px;
`

export const Input = styled.TextInput`
    color: ${primaryColor};
    font-size: 18px;
    text-align: center;
    border: 2px solid ${primaryColor};
    border-radius: 3px;
    padding: ${defaultPadding};
    margin-bottom: ${defaultMargin};
    background-color: white;
`

export const Button = styled.TouchableOpacity`
    margin: ${defaultMargin};
    border: 2px solid ${primaryColor};
    border-radius: 3px;
`

export const Text = styled.Text`
    color: ${primaryColor};
    font-weight: 500;
    font-size: 18px;
    padding: ${defaultPadding};
`

export const CityTitle = styled.Text`
    color: ${primaryColor};
    font-weight: 500;
    font-size: 35px;
    padding: ${defaultPadding};
    text-align: center;

`

export const WeatherDescription = styled.Text`
    color: ${primaryColor};
    font-weight: 500;
    font-size: 15px;
    text-align: center;
`

export const Temperature = styled.Text`
    color: ${primaryColor};
    font-weight: 500;
    font-size: 35px;
    text-align: center;
`
