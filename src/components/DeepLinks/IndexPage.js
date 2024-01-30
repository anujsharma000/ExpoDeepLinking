// IndexPage.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { handleDeepLinkByType } from '../DeepLinks/DeepLinkingConfig';

const IndexPage = () => {
  const handleButtonClick = (deepLinkType) => {
    console.log(`Button clicked: ${deepLinkType}`);
    handleDeepLinkByType(deepLinkType);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index Page</Text>
      <Button
        title='Open Schedule Activity Deep Link'
        onPress={() => handleButtonClick('ACTIVITY')}
      />
    </View>
  );
};

export default IndexPage;