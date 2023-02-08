import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons'

const TweetCard = ({ id, name, tweet, like, reply, onPress}) => {
  return (
    <View style={styles.container}>
        
      <View style={styles.leftCont}>
        
      </View>
     <View style={styles.rightCont}>
        
        <View style={styles.topCont}>
            <View style={styles.nameCont}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.idText}>@{id}</Text>
                
            </View>

            <View>
                 <TouchableOpacity>
                        <MaterialCommunityIcons
                            name='dots-vertical'
                            color='gray'
                            size={20}
                        />
                 </TouchableOpacity>
           </View>
        </View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.tweetCont}>
                <Text style={styles.tweetText}>
                    {tweet}
                 </Text>
             </View>
        </TouchableOpacity>
       

        <View style={styles.actionCont}>
              <View style={styles.iconCont}>
                <MaterialCommunityIcons 
                    name='message-reply-outline'
                    color='gray'
                    size={20}
                />
                <Text style={styles.idText}>{reply}</Text>
              </View>
              <View style={styles.iconCont}>
                <MaterialCommunityIcons 
                    name='heart-outline'
                    color='gray'
                    size={20}
                />
                <Text style={styles.idText}>{like}</Text>
              </View>
              <View style={styles.iconCont}>
                <MaterialCommunityIcons 
                    name='share-variant-outline'
                    color='gray'
                    size={20}
                />
                <Text style={styles.idText}></Text>
              </View>
        </View>
       
      </View>
    </View>
  )
}

export default TweetCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 5,
        borderBottomColor: '#181818',
        borderBottomWidth: 1
    },
    rightCont: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 5,
        marginLeft: 5,
        flexDirection: 'column'
    },
    topCont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameText: {
        color: '#181818',
        fontWeight: "bold",
        marginRight: 5
    },
    idText: {
        marginLeft: 5,
        color: 'gray'
    },
    nameCont: {
        flexDirection: 'row'
    },
    tweetText: {
        color: '#181818'
    },
    tweetCont: {
        paddingRight: 15
    },
    actionCont: {
        marginBottom: 10,
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15
    },
    iconCont: {
        flexDirection: 'row'
    }
})


