import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" style={styles.iconStyle} color="black" />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchContainer: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row',
  },
});

export default SearchBar;
