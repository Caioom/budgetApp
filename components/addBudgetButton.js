import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const ButtonComponent = () => {
    return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}>
              <Image
           
                source={{
                    uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                }}
          
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
        bottom: 40,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 65,
        height: 65,
    },
})

export default ButtonComponent