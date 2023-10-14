
import { Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, SafeAreaView, View, Alert, LogBox } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function AddExpense() {

    const [text, setText] = useState('');
    const [number, onChangeNumber] = React.useState(null);
    const [visible, setVisible] = useState(false)
    const [todos, setTodos] = useState([
        { text: 'Buy coffee', key: '1', no: '20', dd: 'Fri Oct 28 2022' },

    ]);

    const [getdate, setDate] = useState("")

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date.toString())
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const submitHandler = (text, number, date) => {
        setTodos((prevTodos) => {
            return [
                { text: text, key: Math.random().toString(), no: number, dd: date },
                //   {text: number, key: Math.random().toString() },
                //   {text: getdate, key: Math.random().toString() },

                ...prevTodos
            ]
        })
    }

    const pressDelete = (index) =>
    Alert.alert(
      "Delete Item",
      "Are You Sure Want To Delete",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPr2ess: () =>
        //  console.log("OK Pressed") 
        deleteSelectedElement(index)
        }
      ]
    );

   const deleteSelectedElement = (key) => {
    console.log("index", key);

    // Filter Data 
      const filteredData = todos.filter(item => item.key !== key);
      //Updating List Data State with NEW Data.

      setTodos(filteredData);
    
}
    return (
        <SafeAreaView style={{ height: '100%' }}>
            {/* cardview start  */}

            {visible ?
                <View style={{
                    margin: 20, borderRadius: 10,
                    elevation: 50, flexDirection: 'column',
                    shadowRadius: 2, backgroundColor: 'lightblue',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2, padding: 10
                }}>

                    <View
                        style={{ flexDirection: 'row' }}>
                        <TextInput
                            onChangeText={setText}
                            style={styles.input}
                            value={text}
                            placeholder="Add New Todo List" />

                        <TextInput
                            onChangeText={onChangeNumber}
                            value={number}
                            keyboardType='numeric'
                            style={styles.amount_input}
                            placeholder="₹.0"
                        />
                        <TouchableOpacity onPress={showDatePicker}
                            style={{ height: 50, width: 50, marginRight: 20, marginBottom: 10, position: "absolute", bottom: 0, right: 0 }}>
                            <Image
                                style={{ height: 50, width: 50, }}
                                source={require('../drawables/calendar.png')} />
                        </TouchableOpacity>

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />

                    </View>

                    <Text style={{ marginStart: 20 }}>{getdate}</Text>

                    {/* <Button onPress={() => console.log(text)} title="Add Todo" color='coral'/> */}
                    <TouchableOpacity
                        onPress={() => { submitHandler(text, number, getdate), setText(''), onChangeNumber('') }}
                        style={styles.submitButton}>
                        <Text style={styles.submitButtonText}> Save </Text>
                    </TouchableOpacity>


                </View> : null}

            <FlatList
                data={todos}
                renderItem={({ item, index }) => (
                    <View style={{
                        margin: 20, borderRadius: 10,
                        elevation: 50, flexDirection: 'row',
                        shadowRadius: 2, backgroundColor: 'lightblue',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2, padding: 10
                    }}>
                        
                        <Text style={{ fontSize: 20,color:'black' }}>{item.text} {"\n"}{item.dd}</Text>
                        <View style={{flexDirection:'column',right:0,position:'absolute'}}>
                        <Text style={{ fontSize: 20,color:'black'}}>Price = {item.no} </Text>
                        </View>
                        <TouchableOpacity style={{ height: 50, width: 50, position: "absolute", right: 0, marginTop: 20 }}

                            onPress={() => pressDelete(index)} >
                            <Image
                                style={{ height: 50, width: 50}}
                                source={require('../drawables/delete.png')} />
                        </TouchableOpacity>

                    </View>
                )}
            />

            <TouchableOpacity onPress={() => !visible ? setVisible(true) : setVisible(false)}
                style={{ height: 50, width: 50, borderRadius: 25, position: "absolute", margin: 20, bottom: 0, right: 0 }}>
                <Image
                    style={{ height: 50, width: 50, }}
                    source={require('../drawables/plus.png')} />
            </TouchableOpacity>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#4bae4f',
        margin: 15,
        height: 40,
        width: '20%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        marginBottom: 10,
        fontWeight: 'bold',
        borderBottomWidth: 4,
        marginLeft: 20,
        width: '50%',
        borderBottomColor: '#73C6B6'
    },
    amount_input: {
        marginBottom: 10,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        borderColor: '#73C6B6',
    },
})