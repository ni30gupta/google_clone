import { View, Text } from 'react-native'
import React from 'react'
import ResizableDraggableComp from '../components/ResizableDraggableComp';
import ResizeGPT from '../components/ResizeGPT';

const Test = () => {
  return (
    <View style={{flex:1}}>
      <ResizableDraggableComp/>
      {/* <ResizeGPT/> */}
    </View>
  )
}

export default Test