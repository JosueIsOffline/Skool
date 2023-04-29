import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { onChange } from 'react-native-reanimated'



const CustomDropdown = ({ 
    label, 
    placeholder,
    heightt,
    data = [],
    value = {}, 
    onSelect = () => {}
}) => {

    const provider = () => {
      
    }

    const [selectedItem, setSelectedItem] = useState(placeholder)
    const [isClicked, setIsClicked] = useState(false)
    


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity 
        style={styles.dropdownSelector}
        onPress={() => {
            setIsClicked(!isClicked)
        }}
      >
        {selectedItem == placeholder ? (
            <Text style={styles.placeholder}>{selectedItem}</Text>
        )
            :
            (<Text>{selectedItem}</Text> )
        }
        
        
        {isClicked ? (
            <Image source={require('../assets/upload.png')} style={styles.icon}/>
        )
        :
        (
            <Image source={require('../assets/dropdown.png')} style={styles.icon}/>
        )}
      </TouchableOpacity>

      {isClicked ? 
        <View style={[styles.dropdownArea, {height: heightt}]}>
            {data.map((item, index) => (
                <TouchableOpacity
                    key={String(index)}
                    style={styles.selectionItem}
                    onPress={() => {
                        setSelectedItem(item.name)
                        setIsClicked(false)
                        onSelect(item)
                    }}
                >
                <Text style={styles}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
            :
        null
      }
    </View>
  )
}

export default CustomDropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dropdownSelector: {
        height: 55,
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: '#2A2929'
    },
    placeholder: {
        color: '#6C6C6C'
    },
    icon: {
        width: 20,
        height: 20
    },
    dropdownArea: {
        width: '100%',
        borderRadius: 13,
        marginTop: 20,
        backgroundColor: '#fff',
        elevation: 5,
        alignSelf: 'center'
    },
    searchInput: {
       width: '90%',
       height: 50,
       borderRadius: 10,
       borderWidth: 0.5,
       borderColor: '#8e8e8e',
       alignSelf: 'center',
       marginTop: 20,
       paddingLeft: 15
    },
    selectionItem: {
        width: '85%',
        height: 40,
        borderBottomWidth: 1.2,
        borderBottomColor: '#8e8e8e',
        alignSelf: 'center',
        marginTop: 15,
        justifyContent: 'center'
    },


})