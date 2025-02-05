import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';

const ProfilePTScreen = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  const handleUploadPost = () => {
    const newPost = { image, video, content: postContent };
    setPosts([...posts, newPost]);
    setImage(null);
    setVideo(null);
    setPostContent('');
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postItem}>
      {item.image && <Image source={{ uri: item.image }} style={styles.media} />}
      {item.video && <Video source={{ uri: item.video }} style={styles.media} useNativeControls resizeMode="contain" />}
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
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
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPostItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
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
  postsContainer: {
    alignItems: 'center',
  },
  postItem: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  postContent: {
    marginTop: 10,
    fontSize: 16,
  },
});

  export default ProfilePTScreen;
