// import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// import ListItem from '@/components/ListItem';
// import { SAMPLE_DATA } from '@/assets/data/sampleData';
// import React, { useMemo } from 'react';
// import {
//   BottomSheetModal,
//   BottomSheetView,
//   // BottomSheetModalMethods,
//   BottomSheetModalProvider,
// } from '@gorhom/bottom-sheet';
// //ref
//   const bottomSheetModalRef = useRef<BottomSheetModal>(null);
// //variable;
// const snapPoints = useMemo(() => ['50%'], []);

// const ListHeader = () => (
//   <>
//     <View style={styles.titleWrapper}>
//       <Text style={styles.largeTitle}>Markets</Text>
//     </View>
//     <View style={styles.divider} />
//   </>
// );

// const Index = () => {
//   return (
//     <BottomSheetModalProvider>
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           keyExtractor={(item) => item.id}
//           data={SAMPLE_DATA}
//           renderItem={({ item }) => {
//             console.log('Image URL:', item.image);
//             return (
//               <ListItem
//                 name={item.name}
//                 symbol={item.symbol}
//                 currentPrice={item.current_price}
//                 PriceChangePercentage7d={
//                   item.price_change_percentage_7d_in_currency
//                 }
//                 logoUrl={item.image}
//               />
//             );
//           }}
//           ListHeaderComponent={<ListHeader />}
//         />
//       </SafeAreaView>
//       <BottomSheetModal
//         ref={bottomSheetModalRef}
//         index={0}
//         snapPoints={snapPoints}
//       >
//         <View style={styles.contentContainer}>
//           <Text>Awesome🎉</Text>
//         </View>
//       </BottomSheetModal>
//     </BottomSheetModalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   titleWrapper: {
//     marginTop: 40,
//     paddingHorizontal: 16,
//   },

//   largeTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },

//   divider: {
//     height: StyleSheet.hairlineWidth,
//     backgroundColor: 'gray',
//     marginHorizontal: 16,
//     marginTop: 16,
//   },
// });

// export default Index;
import 'react-native-reanimated';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '@/components/ListItem';
import { SAMPLE_DATA } from '@/assets/data/sampleData';
import React, { useMemo, useRef } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
);

const Index = () => {
  //ref
const bottomSheetModalRef = useRef(null);
//variable;
const snapPoints = useMemo(() => ['50%'], []);
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => {
            return (
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                PriceChangePercentage7d={
                  item.price_change_percentage_7d_in_currency
                }
                logoUrl={item.image}
              />
            );
          }}
          ListHeaderComponent={<ListHeader />}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View>
          <Text>Awesome🎉</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleWrapper: {
    marginTop: 40,
    paddingHorizontal: 16,
  },

  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default Index;
