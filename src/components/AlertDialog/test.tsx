import React, { useState } from 'react';
import { View, Button } from 'react-native'; // Import necessary components from 'react-native'

const Alert = () => {
    const [isPressed, setIsPressed] = useState(false);
    const trigger = children[0];
    const content = children[1];

    const AlertDialogContent = ({ children, ...props }) => (
        <View style={props.style}>{children}</View>
    );

    const AlertDialogTrigger = ({ variant, style, ...props }) => {
        const handlePress = () => {
            setIsPressed(!isPressed); // Corrected to setIsPressed
            console.log(isPressed);
        };

        return (
            <Button style={style} onPress={handlePress}>
                {props.children}
            </Button>
        );
    };

    const AlertDialog = () => {
        return (
            <View>
                {trigger}
                {isPressed && content} {/* Corrected to use isPressed as a boolean */}
            </View>
        );
    };

    return { AlertDialogTrigger, AlertDialogContent, AlertDialog };
};
export default Alert;
