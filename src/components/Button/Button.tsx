import React from 'react';
import { TouchableOpacity, Text, type TouchableOpacityProps } from 'react-native';
import { styled } from 'nativewind';
import { categorizeStyles } from '../../functions/filterArray';

const ButtonStyled = styled(TouchableOpacity);
const TextStyled = styled(Text);
function isText(child) {
    if (React.isValidElement(child)) {
        return false
    } else if (typeof child === 'string' || typeof child === 'number') {
        return true
    }
}

const variants = {
    primary: [
        { backgroundColor: '#000' },
        { color: '#fff' },
        { paddingBottom: 12 },
        { paddingLeft: 12 },
        { paddingRight: 12 },
        { paddingTop: 12 },
        { borderRadius: 8 },
    ],
    secondary: [
        { backgroundColor: '#f1f1f3' },
        { color: '#000' },
        { paddingBottom: 12 },
        { paddingLeft: 12 },
        { paddingRight: 12 },
        { paddingTop: 12 },
        { borderRadius: 8 },
    ],
    destructive: [
        { backgroundColor: '#d10e1d' },
        { color: '#fff' },
        { paddingBottom: 12 },
        { paddingLeft: 12 },
        { paddingRight: 12 },
        { paddingTop: 12 },
        { borderRadius: 8 },
    ],
    outline: [
        { backgroundColor: '#fff' },
        { color: '#000' },
        { borderColor: '#cfcfcf' },
        { darkBorderColor: '#2f2f2f' },
        { borderWidth: 1 },
        { paddingBottom: 12 },
        { paddingLeft: 12 },
        { paddingRight: 12 },
        { paddingTop: 12 },
        { borderRadius: 8 },
    ],
    link: [
        { paddingTop: 2 },
        { paddingBottom: 2 },
        { borderBottomWidth: 1 },
        { borderBottomColor: '#cfcfcf' },
        { darkBorderColor: '#2f2f2f' },
    ],
};

const textVariant = {
    primary: [
        { color: '#fff' },
        { darkColor: '#000' },
        { textAlign: 'center' }
    ],
    secondary: [
        { color: '#000' },
        { darkColor: '#fff' },
        { textAlign: 'center' }
    ],
    destructive: [
        { color: '#fff' },
        { darkColor: '#fff' },
        { textAlign: 'center' }
    ],
    outline: [
        { color: '#000' },
        { darkColor: '#fff' },
        { textAlign: 'center' }
    ],
    link: [
        { color: '#000' },
        { darkColor: '#fff' },
        { textAlign: 'center' }
    ],
};



interface ButtonWithTextProps extends Omit<TouchableOpacityProps, 'style'> {
    variant?: keyof typeof variants; // Make variant optional
    textClass?: string;
    children?: React.ReactNode;
    className?: string
}

const Button = ({ variant, ...props }: ButtonWithTextProps) => {
    const variantStyles = variant ? variants[variant] : {};
    const textVariantStyles = variant ? textVariant[variant] : {};

    const stylesArray = props.style ? props.style : [];
    const mergedStyles = [...variantStyles, ...textVariantStyles, ...stylesArray];
    const categorizedStyles = categorizeStyles(mergedStyles);



    return (
        <ButtonStyled {...props} style={categorizedStyles.View} activeOpacity={0.9} >
            {isText(props.children)
                &&
                <TextStyled style={categorizedStyles.Text} >
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