import React, {FC, PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import useIsDarkMode from '../hooks/useIsDarkMode';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface Props extends PropsWithChildren {
  title?: string;
  style?: StyleProp<TextStyle>;
}

const Section: FC<Props> = ({children, title, style}) => {
  const darkMode = useIsDarkMode();
  const grayScale = darkMode ? 200 : 50;

  const backgroundColor = {
    backgroundColor: `rgba(${grayScale}, ${grayScale}, ${grayScale}, 0.1)`,
  };

  return (
    <View style={[styles.root, backgroundColor, style]}>
      {title && (
        <Text
          style={[
            styles.sectionTitle,
            {color: darkMode ? Colors.white : Colors.black},
          ]}>
          {title}
        </Text>
      )}

      <View
        style={[
          styles.sectionDescription,
          {color: darkMode ? Colors.light : Colors.dark},
        ]}>
        {typeof children === 'string' ? <Text>{children}</Text> : children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    rowGap: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  sectionDescription: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 2,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Section;
