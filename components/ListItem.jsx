import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import bitcoin from '@/assets/images/bitcoin.jpg';
// import {SAMPLE_DATA} from '@/assets/data/sampleData'

const ListItem = ({ name, symbol, currentPrice, PriceChangePercentage7d, logoUrl}) => {
  const priceChangeColor = PriceChangePercentage7d > 0 ? 'green' : 'red';

  const numericPriceChange = typeof PriceChangePercentage7d === 'string' ? parseFloat(PriceChangePercentage7d) : PriceChangePercentage7d;
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.itemWrapper}>
          {/* left side */}
          <View style={styles.leftWrapper}>
            <Image style={styles.image} source={{uri:logoUrl}} />
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
          </View> 

          {/* right side */}
          <View style={styles.rightWrapper}>
            <Text style={styles.title}>${currentPrice}</Text>
            <Text style={[styles.subtitle, { color: priceChangeColor}]}>{numericPriceChange!= null && typeof numericPriceChange === 'number' ? numericPriceChange.toFixed(2): 'N/A'}% </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    itemWrapper:{
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  image:{
    width: 50,
    height: 50
  },

  titleWrapper: {
    marginLeft: 8
  },

  title: {
    fontSize: 18
  },

  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4
  },

  rightWrapper: {
    alignItems: 'flex-end'
  },
});

export default ListItem;
