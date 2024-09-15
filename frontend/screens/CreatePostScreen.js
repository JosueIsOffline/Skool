import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const CreatePostScreen = () => {

    const [postText, setPostText] = useState('');
    const [error, setError] = useState('');
  
    const handlePostTextChange = (text) => {
      setPostText(text);
    };
  
    const handlePostSubmit = () => {
      if (postText.trim() === '') {
        setError('Post text cannot be empty');
      } else {
        // Handle post submit here
        console.log('Post submitted:', postText);
        // Clear the post text
        setPostText('');
        setError('');
      }
    };

  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="What's on your mind?"
      value={postText}
      onChangeText={handlePostTextChange}
      multiline={true}
      numberOfLines={4}
    />
    {error ? <Text style={styles.error}>{error}</Text> : null}
    <TouchableOpacity style={styles.button} onPress={handlePostSubmit}>
      <Text style={styles.buttonText}>Post</Text>
    </TouchableOpacity>
  </View>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        paddingTop: 70
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
      },
      error: {
        color: 'red',
        marginBottom: 16,
      },
      button: {
        backgroundColor: '#1DA1F2',
        padding: 16,
        borderRadius: 4,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
      },
})