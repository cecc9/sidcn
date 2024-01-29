import React from 'react';
import {
  TouchableOpacity,
  Text,
  type TouchableOpacityProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { styled } from 'nativewind';
import { categorizeStyles } from '../../functions/filterArray';

import { isText } from '../../functions/global';
import colorTheme from '../../theme/toggleTheme';
import {
  darkTextVariant,
  darkVariants,
  textVariant,
  variants,
} from './variants';

const ButtonStyled = styled(TouchableOpacity);
const TextStyled = styled(Text);
type StyleArray = Array<ViewStyle | TextStyle>;
type Variant = (typeof variantValues)[number];

const variantValues = [
  'primary',
  'secondary',
  'destructive',
  'outline',
  'link',
] as const;

interface ButtonWithTextProps extends Omit<TouchableOpacityProps, 'style'> {
  variant?: Variant; // Make variant optional
  children?: React.ReactNode;
  className?: string;
  style?: StyleArray;
}

const Badge = ({ variant, ...props }: ButtonWithTextProps) => {
  const selectedVariant = variant
    ? variantValues.includes(variant)
      ? variant
      : 'primary'
    : 'primary';
  const variantStyles = selectedVariant
    ? colorTheme()
      ? variants[selectedVariant]
      : darkVariants[selectedVariant]
    : [];
  const textVariantStyles = selectedVariant
    ? colorTheme()
      ? textVariant[selectedVariant]
      : darkTextVariant[selectedVariant]
    : [];
  const stylesArray = props.style ? props.style : [];
  const mergedStyles = [...variantStyles, ...textVariantStyles, ...stylesArray];
  const categorizedStyles = categorizeStyles(mergedStyles);

  return (
    <ButtonStyled className='w-auto' {...props} style={categorizedStyles.View} activeOpacity={0.9}>
      {isText(props.children) && (
        <TextStyled style={categorizedStyles.Text}>{props.children}</TextStyled>
      )}
      {!isText(props.children) && props.children}
    </ButtonStyled>
  );
};

Badge.defaultProps = {
  variant: 'primary',
};

export { Badge };
