import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';

const ProfilePTScreen = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [postContent, setPostContent] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  const handleUploadPost = () => {
    console.log('Post uploaded', { image, video, postContent });
    setImage(null);
    setVideo(null);
    setPostContent('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Upload Content</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={pickVideo}>
        <Text style={styles.buttonText}>Upload Video</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.media} />}
      {video && <Video source={{ uri: video }} style={styles.media} useNativeControls resizeMode="contain" />}

      <TextInput
        style={styles.input}
        placeholder="Write your post content here..."
        multiline
        value={postContent}
        onChangeText={(text) => setPostContent(text)}
      />

      <Button title="Upload Post" onPress={handleUploadPost} disabled={!image && !video && !postContent} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  media: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 20,
    width: '100%',
  },
});

  export default ProfilePTScreen;
