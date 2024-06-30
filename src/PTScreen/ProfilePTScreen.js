import React,{useState} from 'react';
import { View,Image, Text, TouchableOpacity, Button, StyleSheet,us} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

 const  ProfilePTScreen = () => {
    const[image, setImage] = useState(null);
    const[video, setVideo] = useState(null);

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibrartAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowEditing: true,
            aspect:[4, 3],
            quaility: 1,
        });

        if(!result.cancelled){
          setImage(result.uri);
      }
    }

    const pickVideo = async() => {

      let result = await ImagePicker.launchImageLibrartAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowEditing: true,
        aspect:[4, 3],
        quaility: 1,
    });


        if(!result.cancelled){
            setVideo(result.uri);
        }

    };

    const handleUploadPost = () => {
        // introduce the path of where the posrt is going to be 
        console.log('Post uploaded');
        setImage(null);
        setVideo(null);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Uplaod Content</Text>
            
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}> Upload Image</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={pickVideo}>
                <Text style={styles.buttonText}> Upload Video</Text>
            </TouchableOpacity>

            {image && <Image soruce={{ uri:image}} style= {styles.media}/>}
            {video && <Video soruce={{ uri:image}} style= {styles.media}/>}

            <Button title="Upload Post" onPress={handleUploadPost} disable={!image && !video}/>


            
        </View>
    );
    

 };

 const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  });
  export default ProfilePTScreen;
