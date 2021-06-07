import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button } from 'react-native';
import styles from '../styles/main';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
 

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2025, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

return(
      <View style={styles.layer2}>
        <Text style={styles.header}>Pesquisar estadias</Text>
        <TextInput
          placeholder={'Destino'}
          style={styles.input}
        />
        <Button
        onPress={() =>
          <View style={styles.container}>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#7300e6"
            selectedDayTextColor="#FFFFFF"
            onDateChange={this.onDateChange}
          />
          <View>
            <Text>SELECTED START DATE:{ startDate }</Text>
            <Text>SELECTED END DATE:{ endDate }</Text>
          </View>
          </View>
        
        }
          title = "Data"
          style={styles.input}

        />
        
        <TextInput
          placeholder={'Quartos'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Pessoas'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Pensao'}
          style={styles.input}
        />
        <Button
          title={'Pesquisar'} 
          color= "black"
        />
      </View>
    );
  }
}
