import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/singInAction';

const backgroundImage = require('../public/src/mate4.jpg'); 

const ContactForm = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.profile);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageType: 'General Inquiry', 
    message: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMessageTypeSelect = (selectedType) => {
    handleInputChange('messageType', selectedType);
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.messageType && formData.message) {
      
    } else {
     
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <Text style={styles.sectionHeading}>Message Type:</Text>
          <View style={styles.messageTypeContainer}>
            <View style={styles.messageTypeColumn}>
              <TouchableOpacity
                style={[styles.messageTypeButton, formData.messageType === 'General Inquiry' && styles.selectedMessageTypeButton]}
                onPress={() => handleMessageTypeSelect('General Inquiry')}
              >
                <Text style={styles.messageTypeButtonText}>General Inquiry</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.messageTypeButton, formData.messageType === 'Product Support' && styles.selectedMessageTypeButton]}
                onPress={() => handleMessageTypeSelect('Product Support')}
              >
                <Text style={styles.messageTypeButtonText}>Product Support</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.messageTypeColumn}>
              <TouchableOpacity
                style={[styles.messageTypeButton, formData.messageType === 'Billing Question' && styles.selectedMessageTypeButton]}
                onPress={() => handleMessageTypeSelect('Billing Question')}
              >
                <Text style={styles.messageTypeButtonText}>Billing Question</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.messageTypeButton, formData.messageType === 'Other' && styles.selectedMessageTypeButton]}
                onPress={() => handleMessageTypeSelect('Other')}
              >
                <Text style={styles.messageTypeButtonText}>Other</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.textarea}
            placeholder="Message"
            multiline={true}
            numberOfLines={4}
            value={formData.message}
            onChangeText={(text) => handleInputChange('message', text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  messageTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  messageTypeColumn: {
    flex: 1,
  },
  messageTypeLabel: {
    marginRight: 10,
  },
  messageTypeButton: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  selectedMessageTypeButton: {
    backgroundColor: 'gray',
  },
  messageTypeButtonText: {
    fontWeight: 'bold',
  },
  textarea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  sendButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});

export default ContactForm;
