import { View, Text, TouchableOpacity } from 'react-native';
import React, {
  useState,
  type ReactNode,
  type ReactElement,
  type ReactChild,
} from 'react';
import { isText } from '../../functions/global';
import { styled } from 'nativewind';
import { categorizeStyles } from '../../functions/filterArray';

const TextStyled = styled(Text);
interface ProcessChildrenProps {
  isVisible: boolean;
  children?: ReactNode;
  component?: { name: string };
}


const Collapsible = ({ ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  //use the function here
  const processChildren = (
    child: ReactElement<ProcessChildrenProps>
  ): ReactNode => {
    if (React.isValidElement(child)) {
      const childType =
        child.props && child.props.component && child.props.component.name
          ? child.props.component.name
          : child.type;
      if (
        childType === CollapsibleTrigger ||
        childType == 'CollapsibleTrigger'
      ) {
        const customOnPress = () => {
          setIsVisible(!isVisible);
        };
        const modifiedChild = React.cloneElement(child as any, {
          onPress: () => customOnPress(),
        });
        return modifiedChild;
      } else if (
        childType === CollapsibleContent ||
        childType == 'CollapsibleContent'
      ) {
        const modifiedChild = React.cloneElement(child, {
          isVisible,
        });
        return modifiedChild;
      } else if (child.props.children) {
        // If it has children, recursively process them
        // If it has children, recursively process them
        const processedChildren: ReactNode = React.Children.map(
          child.props.children as ReactChild | ReactChild[],
          (c) => processChildren(c as React.ReactElement<ProcessChildrenProps>)
        );

        return React.cloneElement(child, {}, processedChildren);
      }
    }

    // For other types of children, keep them as they are
    return child;
  };

  // Apply the processing function to all children
  const processedChildren = React.Children.map(props.children, processChildren);
  return <View style={props.style}>{processedChildren}</View>;
};

const CollapsibleTrigger = ({ onPress, ...props }: any) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={onPress}>
      {isText(props.children) && (
        <TextStyled
          className="text-[12px] font-light text-[#7f7f7f] mt-1"
          style={categorizedStyles.Text}
        >
          {props.children}
        </TextStyled>
      )}
      {!isText(props.children) && props.children}
    </TouchableOpacity>
  );
};

const CollapsibleContent = ({ isVisible, ...props }: any) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  if (!isVisible) {
    return null;
  }
  if (!isVisible) {
    return null; // Hide the content if isVisible is false
  }

  return (
    <View>
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

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
