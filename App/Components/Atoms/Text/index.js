import {Text} from 'react-native';
import React from 'react';
import {Colors} from 'Theme';

const Heading = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        color: '#3f3f3f',
        fontSize: 20,
        ...myStyle,
      }}
      {...props}>
      {children}
    </Text>
  );
};

const SubHeading = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        color: '#3f3f3f',
        fontSize: 16,
        ...myStyle,
      }}
      {...props}>
      {children}
    </Text>
  );
};

const Title = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        color: '#3f3f3f',
        fontSize: 16,
        ...myStyle,
      }}
      {...props}>
      {children}
    </Text>
  );
};

const Price = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        fontSize: 16,
        color: Colors.primary,
        ...myStyle,
      }}
      {...props}>
      £{children}
    </Text>
  );
};

const Normal = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        fontSize: 14,
        color: '#3f3f3f',
        ...myStyle,
      }}
      {...props}>
      {children}
    </Text>
  );
};

const Time = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        fontSize: 18,
        color: Colors.primary,
        ...myStyle,
      }}
      {...props}>
      {children}
    </Text>
  );
};

const Caption = props => {
  const {children, myStyle} = props;
  return (
    <Text
      style={{
        color: '#1119',
        fontSize: 12,
        ...myStyle,
      }}
      {...props}>
      {children}
    </Text>
  );
};

export {Price, Caption, Heading, SubHeading, Title, Time, Normal};
