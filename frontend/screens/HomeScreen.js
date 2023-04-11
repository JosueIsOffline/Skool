import React, { useEffect, useContext } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  StyleSheet,
  TextInput
} from 'react-native'
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import TweetCard from '../components/TweetCard'
import { Data } from '../mock/Data'
import { AuthContext } from '../context/AuthContext'



const HomeScreen = ({navigation}) => {

  useEffect(() => {
    
  })

  const {userInfo} = useContext(AuthContext)
  const verify = userInfo.user.RoleId

  if(verify === 1){
    return(
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Hello, {userInfo.user.correo}</Text>
        <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
          <MaterialIcons style={styles.icon} name='person' size={25}/>
        </TouchableOpacity>
       </View>
      <ScrollView style={styles.scrollView}>

      
       <View style={styles.viewSearch}>
        <MaterialIcons style={styles.search} name='search' size={20} color='#181818'/>
        <TextInput placeholder='Search'/>
       </View>

         {Data.map(dat =>
          <TweetCard 
            key={dat.id}
            prof={dat.prof}
            id={dat.id}
            name={dat.name}
            tweet={dat.tweet}
            like={dat.like}
            reply={dat.reply}
            onPress={() => navigation.navigate('PostId', {
              name: dat.name,
              id: dat.id,
              tweet: dat.tweet
            })
            }
          />
          )}
       
      </ScrollView>
    </SafeAreaView>
    )
  }
  else if(verify === 2) {
    return( 
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Hello, {userInfo.user.correo}</Text>
        <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
          <MaterialIcons style={styles.icon} name='person' size={25}/>
        </TouchableOpacity>
       </View>
      <ScrollView style={styles.scrollView}>

      
       <View style={styles.viewSearch}>
        <MaterialIcons style={styles.search} name='search' size={20} color='#181818'/>
        <TextInput placeholder='Search'/>
       </View>

         {Data.map(dat =>
          <TweetCard 
            key={dat.id}
            prof={dat.prof}
            id={dat.id}
            name={dat.name}
            tweet={dat.tweet}
            like={dat.like}
            reply={dat.reply}
            onPress={() => navigation.navigate('PostId', {
              name: dat.name,
              id: dat.id,
              tweet: dat.tweet
            })
            }
          />
          )}
       
      </ScrollView>
    </SafeAreaView>
    )
  }
  else if(verify === 3){
    return(
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
           <Text style={styles.text}>Hello, {userInfo.user.correo}</Text>
           <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
             <MaterialIcons style={styles.icon} name='person' size={25}/>
           </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  
}

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    borderRadius: 25,
    color: '#181818'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 26
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20 
  },
  scrollView: {
    padding: 8
  },
  text: {
    fontSize: 16
  },
  search: {
    marginRight: 5
  },
  viewSearch: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
 
  
})

export default HomeScreen