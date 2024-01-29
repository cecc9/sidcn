import { View, Text } from 'react-native';
import React from 'react';
import colorTheme from '../../theme/toggleTheme';
import { isText } from '../../functions/global';
import { styled } from 'nativewind';
import { categorizeStyles } from '../../functions/filterArray';
const TextStyled = styled(Text);

const Card = ({ ...props }) => {
  const allChildren = React.Children.toArray(props.children).reduce(
    (acc: any, child) => {
      let componentName;
      if (
        React.isValidElement(child) &&
        child.props &&
        child.props.component &&
        child.props.component.name
      ) {
        componentName = child.props.component.name;
      } else if (React.isValidElement(child) && child.type === CardHeader) {
        componentName = 'CardHeader';
      } else if (React.isValidElement(child) && child.type === CardContent) {
        componentName = 'CardContent';
      } else if (React.isValidElement(child) && child.type === CardFooter) {
        componentName = 'CardFooter';
      } else {
        componentName = 'Other';
      }
      if (componentName) {
        // Handle the different component names
        if (componentName === 'CardHeader') {
          if (!acc.header) {
            acc.header = [];
          }
          acc.header.push(child);
        } else if (componentName === 'CardContent') {
          if (!acc.content) {
            acc.content = [];
          }
          acc.content.push(child);
        } else if (componentName === 'CardFooter') {
          if (!acc.footer) {
            acc.footer = [];
          }
          acc.footer.push(child);
        } else {
          // If it's neither AccordionTrigger nor AccordionContent, categorize as 'other'
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

  return (
    <View
      className={`${
        colorTheme() ? 'border border-[#cfcfcf]' : 'border border-[#4f4f4f]'
      } rounded-md p-4`}
      style={props.style}
    >
      {allChildren.header}
      {allChildren.content}
      {allChildren.footer}
    </View>
  );
};
const CardHeader = ({ ...props }) => {
  const allChildren = React.Children.toArray(props.children).reduce(
    (acc: any, child) => {
      let componentName;
      if (
        React.isValidElement(child) &&
        child.props &&
        child.props.component &&
        child.props.component.name
      ) {
        componentName = child.props.component.name;
      } else if (React.isValidElement(child) && child.type === CardTitle) {
        componentName = 'CardTitle';
      } else if (
        React.isValidElement(child) &&
        child.type === CardDescription
      ) {
        componentName = 'CardDescription';
      } else {
        componentName = 'Other';
      }
      if (componentName) {
        // Handle the different component names
        if (componentName === 'CardTitle') {
          if (!acc.title) {
            acc.title = [];
          }
          acc.title.push(child);
        } else if (componentName === 'CardDescription') {
          if (!acc.description) {
            acc.description = [];
          }
          acc.description.push(child);
        } else {
          // If it's neither AccordionTrigger nor AccordionContent, categorize as 'other'
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
  return (
    <View>
      {allChildren.title}
      {allChildren.description}
      {allChildren.footer}
    </View>
  );
};
const CardTitle = ({ ...props }) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <View style={categorizedStyles.View}>
      {isText(props.children) && (
        <TextStyled
          className={` text-[18px] font-bold ${
            colorTheme() ? 'text-[#000]' : 'text-[#fff]'
          }`}
          style={categorizedStyles.Text}
        >
          {props.children}
        </TextStyled>
      )}
      {!isText(props.children) && props.children}
    </View>
  );
};

const CardDescription = ({ ...props }) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <View style={categorizedStyles.View}>
      {isText(props.children) && (
        <TextStyled
          className="text-[12px] font-light text-[#7f7f7f] mt-1"
          style={categorizedStyles.Text}
        >
          {props.children}
        </TextStyled>
      )}
      {!isText(props.children) && props.children}
    </View>
  );
};

const CardContent = ({ ...props }) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <View className="py-4" style={categorizedStyles.View}>
      {isText(props.children) && (
        <TextStyled
          className="text-[12px] font-light text-[#7f7f7f] mt-1"
          style={categorizedStyles.Text}
        >
          {props.children}
        </TextStyled>
      )}
      {!isText(props.children) && props.children}
    </View>
  );
};

const CardFooter = ({ ...props }) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <View
      className="pt-4 border-t border-t-[#dfdfdf]"
      style={categorizedStyles.View}
    >
      {isText(props.children) && (
        <TextStyled
          className="text-[12px] font-light text-[#7f7f7f] mt-1"
          style={categorizedStyles.Text}
        >
          {props.children}
        </TextStyled>
      )}
      {!isText(props.children) && props.children}
    </View>
  );
};

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
