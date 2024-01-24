import React from 'react';
import {
  Text,
  View,
  type TextStyle,
  type ViewProps,
} from 'react-native';
import { styled } from 'nativewind';
import {
  darkDescriptionTextVariant,
  darkTitleTextVariant,
  darkVariants,
  descriptionTextVariant,
  titleTextVariant,
  variants,
} from './variants';
import colorTheme from '../../theme/toggleTheme';
const ViewStyled = styled(View);
const TextStyled = styled(Text);
type Variant = (typeof variantValues)[number];

const variantValues = [
  'primary',
  'secondary',
  'destructive',
  'outline',
] as const;

interface ViewWithComponents extends Omit<ViewProps, 'style'> {
  variant?: Variant;
  children?: React.ReactNode;
  style?: any;
}

const Alert = ({
  variant = 'primary',
  children,
  ...props
}: ViewWithComponents) => {
  const allChildren = React.Children.toArray(children).reduce(
    (acc: any, child) => {
      let componentName;
      if (
        React.isValidElement(child) &&
        child.props &&
        child.props.component &&
        child.props.component.name
      ) {
        componentName = child.props.component.name;
      } else if (
        React.isValidElement(child) &&
        child.type == AlertDescription
      ) {
        // Check if child is an AlertDescription
        componentName = 'AlertDescription';
      } else if (React.isValidElement(child) && child.type === AlertTitle) {
        // Check if child is an AlertDescription
        componentName = 'AlertTitle';
      } else {
        componentName = 'Other';
      }

      if (componentName) {
        // Handle the different component names
        if (componentName === 'AlertTitle') {
          if (!acc.title) {
            acc.title = [];
          }
          acc.title.push(child);
        } else if (componentName === 'AlertDescription') {
          if (!acc.description) {
            acc.description = [];
          }
          acc.description.push(child);
        } else {
          // If it's neither AlertTitle nor AlertDescription, categorize as 'other'
          if (!acc.other) {
            acc.other = [];
          }
          acc.other.push(child);
        }
      }

      return acc;
    },
    {}
  );
  const variantStyle = colorTheme() ? variants[variant] : darkVariants[variant];
  return (
    <ViewStyled
      {...props}
      className="flex flex-row"
      style={[variantStyle, props.style]}
    >
      {allChildren.other.length == 1 && (
        <>
          <View>{allChildren.other}</View>
          <View className="flex flex-col ml-4">
            {React.Children.map(allChildren.title, (child) =>
              React.cloneElement(child, { variant })
            )}
            {React.Children.map(allChildren.description, (child) =>
              React.cloneElement(child, { variant })
            )}
          </View>
        </>
      )}
      {allChildren.other.length == 0 && (
        <>
          <View className="flex flex-col">
            {React.Children.map(allChildren.title, (child) =>
              React.cloneElement(child, { variant })
            )}
            {React.Children.map(allChildren.description, (child) =>
              React.cloneElement(child, { variant })
            )}
          </View>
        </>
      )}
    </ViewStyled>
  );
};

interface AlertTitleProps extends TextStyle {
  variant?: Variant;
  children: React.ReactNode;
  style: any;
}

const AlertTitle = ({ variant = 'primary', ...props }: AlertTitleProps) => {
  const variantStyle = colorTheme()
    ? titleTextVariant[variant]
    : darkTitleTextVariant[variant];
  return (
    <TextStyled style={[variantStyle, props.style]}>
      {props.children}
    </TextStyled>
  );
};

interface AlertDescriptionProps extends TextStyle {
  variant?: Variant;
  children: React.ReactNode;
  style: any;
}
const AlertDescription = ({
  variant = 'primary',
  ...props
}: AlertDescriptionProps) => {
  const variantStyle = colorTheme()
    ? descriptionTextVariant[variant]
    : darkDescriptionTextVariant[variant];
  return (
    <TextStyled style={[variantStyle, props.style]}>
      {props.children}
    </TextStyled>
  );
};

export { Alert, AlertTitle, AlertDescription };
