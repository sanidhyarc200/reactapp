import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  Avatar,
  Name,
  Input,
  Image,
  ImageContainer,
  Button,
  ButtonText,
  ImagePreview,
} from './styles';

const Post = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleSelectImage = () => {
    // Code to open device's image picker and set the selected image to the state
  };

  const handleSubmit = () => {
    // Code to handle the form submission and send the data to the server
  };

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: 'https://i.pravatar.cc/150?img=1' }} />
        <Name>John Doe</Name>
      </Header>
      <Input
        multiline
        placeholder="Add a description..."
        value={description}
        onChangeText={setDescription}
      />
      <ImageContainer>
        <Button onPress={handleSelectImage}>
          <ButtonText>Select Image</ButtonText>
        </Button>
        {image && <ImagePreview source={{ uri: image }} />}
      </ImageContainer>
      <Button onPress={handleSubmit}>
        <ButtonText>Post</ButtonText>
      </Button>
    </Container>
  );
};

export default Post;


export const Mynewproduct = ()=>{
    useEffect(()=>{
      fetch()
    },[])
}