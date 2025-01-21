import React, { useState, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { overlay } from 'react-native-paper';

const ResizableDraggableRect = (props) => {
  const [rect, setRect] = useState({
    x: 100,
    y: 100,
    width: 200,
    height: 150,
  });

  // Refs for interaction state
  const modeRef = useRef(null);
  const activeCornerRef = useRef(null);
  const initialTouchRef = useRef({ x: 0, y: 0 });
  const initialRectRef = useRef(rect);


  // Get screen dimensions
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // Update rect ref when state changes
  const rectRef = useRef(rect);

  React.useEffect(() => {
    rectRef.current = rect;
    props.onCropperMove(rect)
  }, [rect]);

  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: (evt) => {
      const touch = evt.nativeEvent;
      initialTouchRef.current = {
        x: touch.pageX,
        y: touch.pageY
      };
      initialRectRef.current = { ...rectRef.current };
    },

    onPanResponderMove: (evt, gestureState) => {
      if (!modeRef.current) return;

      if (modeRef.current === 'drag') {
        let _x = initialRectRef.current.x + gestureState.dx;
        let _y = initialRectRef.current.y + gestureState.dy;

        // Restrict x movement
        if (_x < 0) _x = 0;
        if (_x + rect.width > windowWidth) _x = windowWidth - rect.width;

        // Restrict y movement
        if (_y < 0) _y = 0;
        if (_y + rect.height > windowHeight) _y = windowHeight - rect.height;

        setRect(prevRect => ({
          ...prevRect,
          x: _x,
          y: _y
        }));
      } else if (modeRef.current === 'resize') {
        const newRect = { ...initialRectRef.current };

        switch (activeCornerRef.current) {
          case 'topLeft':
            newRect.width = Math.max(50, newRect.width - gestureState.dx);
            newRect.height = Math.max(50, newRect.height - gestureState.dy);
            newRect.x = initialRectRef.current.x + (initialRectRef.current.width - newRect.width);
            newRect.y = initialRectRef.current.y + (initialRectRef.current.height - newRect.height);
            break;
          case 'topRight':
            newRect.width = Math.max(50, newRect.width + gestureState.dx);
            newRect.height = Math.max(50, newRect.height - gestureState.dy);
            newRect.y = initialRectRef.current.y + (initialRectRef.current.height - newRect.height);
            break;
          case 'bottomLeft':
            newRect.width = Math.max(50, newRect.width - gestureState.dx);
            newRect.height = Math.max(50, newRect.height + gestureState.dy);
            newRect.x = initialRectRef.current.x + (initialRectRef.current.width - newRect.width);
            break;
          case 'bottomRight':
            newRect.width = Math.max(50, newRect.width + gestureState.dx);
            newRect.height = Math.max(50, newRect.height + gestureState.dy);
            break;
        }

        setRect(newRect);
      }
    },

    onPanResponderRelease: () => {
      modeRef.current = null;
      activeCornerRef.current = null;
    },
  })).current;

  const Corner = ({ position }) => (
    <View
      style={[styles.corner, styles[position]]}
      onTouchStart={(e) => {
        e.stopPropagation();
        modeRef.current = 'resize';
        activeCornerRef.current = position;
      }}
    />
  );

  return (
    <ImageBackground
      source={{ uri: props.image }}
      style={styles.container}>
      <View style={styles.overlay} />
      <View
        style={[
          styles.rectangle,
          {
            left: rect.x,
            top: rect.y,
            width: rect.width,
            height: rect.height,
          },
        ]}
        {...panResponder.panHandlers}
        onTouchStart={() => {
          modeRef.current = 'drag';
        }}
      >
        <Corner position="topLeft" />
        <Corner position="topRight" />
        <Corner position="bottomLeft" />
        <Corner position="bottomRight" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'rgba(0,0,0,0.5)'
  },
  rectangle: {
    position: 'absolute',
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#fff',
    backgroundColor: 'transparent'
    // backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    // borderRadius: 10,
    // borderWidth: 2,
    borderColor: '#3b82f6',
  },
  topLeft: {
    left: 0,
    top: 0,
  },
  topRight: {
    right: -10,
    top: -10,
  },
  bottomLeft: {
    left: -10,
    bottom: -10,
  },
  bottomRight: {
    right: -10,
    bottom: -10,
  },
});

export default ResizableDraggableRect;