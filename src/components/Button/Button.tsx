import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

type ButtonProps = {
    label: string;
    onPress: () => void;
};

function Button({ label, onPress }: ButtonProps) {
    return (
        <TouchableOpacity className="bg-red-500" onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
}

export { Button };
export type { ButtonProps };