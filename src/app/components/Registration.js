import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  BODY_BACKGROUND,
  LIGHT_BLUE,
  LIGHT_GREY,
  DARK_GREY
} from '../../shared/constants';

import { RNS3 } from 'react-native-aws3';
var ImagePicker = require('react-native-image-picker');

import Button from '../../shared/components/Button';
import Card from '../../shared/components/Card';
import Alert from '../../shared/components/Alert';

export default class Onboarding extends Component {

  constructor(props) {
    super(props)

    this._registerAccount = this._registerAccount.bind(this);

    this.state = {
      showActivityIndicator: false
    }

    //photo functions binding
    this._setSourceToState = this._setSourceToState.bind(this);
    this._uploadPhotoToS3 = this._uploadPhotoToS3.bind(this);
    this._takePhoto = this._takePhoto.bind(this);
  }

  _registerAccount() {

    if (this.state.password != this.state.passwordConfirm) {
      this.props.sendErrorMessage('Password and password confirmation do not match');
      return
    }
    let user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.createAccount(user);

    this.props.navigator.push({
      screen: 'reEngage.HomeScreen',
      title: 'Your Politicians',
      backButtonHidden: true,
    })
  }

  // photo functions - should be refactored
  _setSourceToState(source, response, petArrayIndex) {
    if (petArrayIndex || petArrayIndex === 0) {
      let pets = this.state.pets;
      let pet = pets[petArrayIndex];
      pet['avatarSource'] = source;
      this.setState({pets})
    } else {
      this.setState({
        avatarSource: source,
        showActivityIndicator: true,
      })
    }

    this.uploadPhotoToS3(source, response, petArrayIndex);
  }


  _uploadPhotoToS3(source, response, petArrayIndex) {

    function makeFileName() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 32; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    let filename = makeFileName();
    filename = `${filename}.jpg`;

    const file = {
      // `uri` can also be a file system path (i.e. file://)
      uri: response.uri,
      name: filename,
      type: "image/jpg"
    }

    const options = {
      keyPrefix: "avatars/",
      bucket: "dvmhealth-media",
      region: "us-east-1",
      accessKey: "AKIAIEPU5WGG7BAF5L3Q",
      secretKey: "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",
      successActionStatus: 201
    }


    RNS3.put(file, options).then(response => {
      if (response.status !== 201)
        this.props.sendErrorMessage('Error uploading photo')
        throw new Error("Failed to upload image to S3");
      RNS3.put(file, options)
      .progress((e) => {
        if ((e.loaded / e.total) === 1) {
          if (petArrayIndex || petArrayIndex === 0) {
            let pets = this.state.pets;
            let pet = pets[petArrayIndex];
            pet['photo_url'] = response.body.postResponse.key;
            this.setState({pets})
          } else {
            this.setState({
              photoUrl: response.body.postResponse.key,
              showActivityIndicator: false,
            })
          }
        }
      })
    });

  }


  _takePhoto() {

    var options = {
      maxHeight: 150,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };


        this.setSourceToState(source, response)
      }
    });
  }

  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={64}>
        <Card style={{flex: 1, marginBottom: 15}}> 
          <View style={styles.photoWrapper}>
            {this.state.showActivityIndicator ? <ActivityIndicator size='large' color='white' style={{position: 'absolute', zIndex: 3}} /> : null}
            {
              this.state.avatarSource ? 
              ( <Image style={styles.photoUpload} source={this.state.avatarSource} />
              ) : (
                  <TouchableOpacity style={styles.photoIcon} onPress={this.takePhoto}> 
                    <Image source={require('../../assets/picture.png')} />
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>Add Photo</Text>
                  </TouchableOpacity>
                )
            }
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            onChangeText={ (email) => this.setState({email}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Password</Text>
          <TextInput 
            type='password'
            style={styles.input}
            onChangeText={ (password) => this.setState({password}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput 
            type='password'
            style={styles.input}
            onChangeText={ (passwordConfirm) => this.setState({passwordConfirm}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Location</Text>
          <TextInput 
            type='text'
            style={styles.input}
            onChangeText={ (location) => this.setState({location}) }
            autoCorrect={false}
            autoCapitalize='none'
          />
          {this.props.errorMessage ?  <Alert type='error' message={this.props.errorMessage} /> : null}
        </Card>
        <Button style={{backgroundColor: LIGHT_BLUE, marginTop: 'auto'}} textStyle={{color: 'white'}} onPress={this._registerAccount}>Register</Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: BODY_BACKGROUND,
    paddingBottom: 40
  },
  label: {
    color: LIGHT_GREY,
    marginTop: 10,
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    borderRadius: 4,
    color: DARK_GREY,
    paddingLeft: 10,
    marginBottom: 15
  },
  photoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
    marginTop: 35,
    marginBottom: 25,
  },
  photoIcon: {
    backgroundColor: BODY_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
    borderRadius: 100
  },
  photoUpload: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
})