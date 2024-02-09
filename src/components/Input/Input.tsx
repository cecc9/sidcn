import { TextInput, type TextInputProps } from 'react-native';
import React from 'react';
import colorTheme from '../../theme/toggleTheme';

interface InputProps extends TextInputProps {
  style?: TextInputProps['style'];
}

const Input = ({ style, ...props }: InputProps) => {
  return (
    <TextInput
      className="border border-[#bfbfbf] dark:border-[#7f7f7f] text-[#4f4f4f] dark:text-[#9f9f9f] rounded-lg h-12 px-4 placeholder:text-[#000]"
      placeholderTextColor={colorTheme() ? '#9f9f9f' : '#7f7f7f'}
      style={[style]}
      {...props}
    />
  );
};

export { Input };
