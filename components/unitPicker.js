import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';
const unitPicker = (props) => {
    const {setSystem,unitSystem} = props
    return (
        <View>
            <Picker style={style.picker} onValueChange={(value)=>setSystem(value)} selectedValue={unitSystem} mode='dropdown'>
                <Picker.Item label='°C' value='metric'/>
                <Picker.Item label='°F' value='imperial'/>
                <Picker.Item label='°K' value='standard'/>
            </Picker>
        </View>
    )
}

const style = StyleSheet.create({
    picker : {
        color : 'white',
        width : 50,
        height : 50,
    }
})
export default unitPicker
