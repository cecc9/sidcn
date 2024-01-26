import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import colorTheme from '../../theme/toggleTheme';
import { categorizeStyles } from '../../functions/filterArray';

const Accordion = ({ ...props }) => {
  return <View style={props.style}>{props.children}</View>;
};
const AccordionItem = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    setShow(!show);
    Animated.timing(fadeAnim, {
      toValue: show ? 0 : 1, // Animate to 0 for hide and 1 for show
      duration: 300, // Adjust the duration as needed
      useNativeDriver: false, // Add this line for performance improvement
    }).start();
  };

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
        child.type === AccordionTrigger
      ) {
        componentName = 'AccordionTrigger';
      } else if (
        React.isValidElement(child) &&
        child.type === AccordionContent
      ) {
        componentName = 'AccordionContent';
      } else {
        componentName = 'Other';
      }
      if (componentName) {
        // Handle the different component names
        if (componentName === 'AccordionTrigger') {
          if (!acc.trigger) {
            acc.trigger = [];
          }
          acc.trigger.push(child);
        } else if (componentName === 'AccordionContent') {
          if (!acc.content) {
            acc.content = [];
          }
          acc.content.push(child);
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

  const trigger = React.cloneElement(allChildren.trigger[0], { toggle, show });

  return (
    <View
      className={`w-full border-b 
      ${colorTheme() ? 'border-b-[#cfcfcf]' : 'border-b-[#4f4f4f]'} `}
    >
      {trigger}
      <Animated.View
        style={{
          opacity: fadeAnim, // Bind opacity to the animated value
        }}
        ref={contentRef}
      >
        {show && allChildren.content}
      </Animated.View>
    </View>
  );
};
const AccordionContent = ({ ...props }) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <View className="px-1 pb-4" style={categorizedStyles.View}>
      <Text
        className={`text-[12px] ${
          colorTheme() ? 'text-[#000]' : 'text-[#fff]'
        }`}
        style={categorizedStyles.Text}
      >
        {props.children}
      </Text>
    </View>
  );
};
const AccordionTrigger = ({ show, toggle, ...props }: any) => {
  const categorizedStyles = props.style
    ? categorizeStyles(props.style)
    : { Text: [], View: [] };
  return (
    <TouchableOpacity
      onPress={() => {
        toggle();
      }}
      activeOpacity={0.95}
      className="py-4 flex flex-row px-1"
      style={categorizedStyles.View}
    >
      <Text
        className={`text-black text-[14px] font-medium ${
          colorTheme() ? 'text-[#000]' : 'text-[#fff]'
        }`}
        style={categorizedStyles.Text}
      >
        {props.children}
      </Text>
      <View className="ml-auto my-auto">
        {show ? (
          <ChevronUp color="#9f9f9f" size={20} />
        ) : (
          <ChevronDown color="#9f9f9f" size={20} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
