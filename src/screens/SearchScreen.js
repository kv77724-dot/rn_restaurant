/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  // console.log(props);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  console.log('term', term);
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
