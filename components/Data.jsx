import React, { Component } from 'react';
import { View, TextInput, Text, Image, Button, TouchableHighlight } from 'react-native';
import styles from '../styles/main';
import CalendarPicker from 'react-native-calendar-picker';

 class Data extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedStartDate: null,
        selectedEndDate: null,
      };
   
  
      this.onDateChange = this.onDateChange.bind(this);
    }
    Estadia_S = async () => {
      this.props.navigation.navigate("Estadia")
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
  
    return (

        <View style={styles.layer2}>
           <TouchableHighlight onPress={this.Estadia_S} underlayColor="lavender">
            <View >
                <Text style={styles.goBack} >{'<'}</Text>
            </View>
          </TouchableHighlight>
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
        <Button
          title={'Guardar'} 
          color= "black"
        />
        </View> 
    );
    }
}
export default Data;
