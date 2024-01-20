import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styled } from 'nativewind';


function isText(child) {
    if (React.isValidElement(child)) {
        return false
    } else if (typeof child === 'string' || typeof child === 'number') {
        return true
    }
}

const variants = {
    primary: 'bg-[#000] dark:bg-[#fff] p-3 px-5 rounded-md',
    secondary: 'bg-[#f1f1f3] dark:bg-[#1d1d20] p-3 px-5 rounded-md',
    destructive: 'bg-[#d10e1d] dark:bg-[#6b1117] p-3 px-5 rounded-md',
    outline: 'bg-[#fff] dark:bg-[#000] border border-[#cfcfcf] dark:border-[#2f2f2f] p-3 px-5 rounded-md',
    link: ' p-1 border-b border-[#cfcfcf] dark:border-[#2f2f2f]',
};

const textVariant = {
    primary: 'text-[#fff] dark:text-[#000]',
    secondary: 'text-[#000] dark:text-[#fff]',
    destructive: 'text-[#fff] dark:text-[#fff]',
    outline: 'text-[#000] dark:text-[#fff]',
    link: 'text-[#000] dark:text-[#fff]',
};

interface ButtonWithTextProps extends Omit<TouchableOpacityProps, 'style'> {
    variant?: keyof typeof variants;
    textClass?: string;
    children?: React.ReactNode;
    className?: string
}

const Button = ({ variant, ...props }: ButtonWithTextProps) => {
    const ButtonStyled = styled(TouchableOpacity,props.className);
    const TextStyled = styled(Text);
    return (
        <ButtonStyled className={`${variants[variant]} ${props.className} `} activeOpacity={0.9} {...props}>
            {isText(props.children)
                &&
                <TextStyled tw={`${textVariant[variant]} text-center my-auto ${props.textClass} `}>
                    {props.children}
                </TextStyled>
            }
            {!isText(props.children)
                &&
                props.children
            }
        </ButtonStyled>
    );
};

Button.defaultProps = {
    variant: 'primary',
};

export { Button };
export type { ButtonWithTextProps };