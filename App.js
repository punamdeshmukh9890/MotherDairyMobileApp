import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  OnPress,
  Alert,
  TouchableOpacity,
} from 'react-native';

const YourApp = () => {
  const [milkItem, setMilkItem] = useState({ quantity: 0, FAT: 0, SNF: 0 });
  const [milkData, setmilkData] = useState([]);

  const handleOnChange = (data) => {
    const { name, value } = data;
    let newMilkItem = milkItem;
    newMilkItem[name] = value;
    setMilkItem({ ...newMilkItem });
  };

  const handleAddMilkItem = () => {
    if (milkItem.quantity && milkItem.FAT && milkItem.SNF) {
      let emptyMilkItem = { quantity: 0, FAT: 0, SNF: 0 };
      setmilkData([...milkData, milkItem]);
      setMilkItem({ ...emptyMilkItem });
    } else alert('Fill all details');
  };

  const getMilkTotal = () => {
    return milkData.reduce((total, item) => {
      return Number(total) + Number(item.quantity);
    }, 0);
  };

  const getTotalMilkFat = () => {
    let totalMilkFat = milkData.reduce((total, item) => {
      return Number(total) + Number(item.quantity * item.FAT);
    }, 0);

    return totalMilkFat.toFixed(2);
  };

  const getTotalMilkSNF = () => {
    let totalMilkSNF = milkData.reduce((total, item) => {
      return Number(total) + Number(item.quantity * item.SNF);
    }, 0);
    return totalMilkSNF.toFixed(2);
  };

  const getAvrageFat = () => {
    const totalFat = getTotalMilkFat();
    const totalMilk = getMilkTotal();
    let avrageFat = Number(totalFat) / Number(totalMilk);
    return avrageFat.toFixed(2);
  };

  const getAvrageSNF = () => {
    const totalSNF = getTotalMilkSNF();
    const totalMilk = getMilkTotal();
    let avrageSNF = Number(totalSNF) / Number(totalMilk);
    return avrageSNF.toFixed(2);
  };

  return (
    <View style={{paddingTop:100}}>
      <View style={{ flex: 1, flexDirection: 'row', padding: 30 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Milk</Text>
          <TextInput
            style={{ height: 40 }}
            value={milkItem.quantity}
            placeholder="Enter Milk"
            onChangeText={(text) =>
              handleOnChange({ name: 'quantity', value: text })
            }
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>FAT</Text>
          <TextInput
            style={{ height: 40 }}
            value={milkItem.FAT}
            placeholder="Enter FAT"
            onChangeText={(text) =>
              handleOnChange({ name: 'FAT', value: text })
            }
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>SNF</Text>
          <TextInput
            style={{ height: 40 }}
            value={milkItem.SNF}
            placeholder="Enter SNF"
            onChangeText={(text) =>
              handleOnChange({ name: 'SNF', value: text })
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'red',
          borderRadius: 20,
          padding: 17,
          marginHorizontal: 30,
        }}
        onPress={handleAddMilkItem}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Add</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text>#</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text>Milk</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text>FAT</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text>SNF</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text>Milk*Fat</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'column',
          }}>
          <Text>Milk*Snf</Text>
        </View>
      </View>
      {milkData.map((item, index) => {
        return (
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
              flexDirection: 'row',
              margin: 10,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text>{index + 1}</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text>{item.quantity}</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text>{item.FAT}</Text> 
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text>{item.SNF}</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text>{item.quantity * item.FAT}</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text>{item.quantity * item.SNF}</Text>
            </View>
          </View>
        );
      })}

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
          paaddingTop:20,
        }}>
        <Text>Total Milk :{getMilkTotal()}</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
        }}>
        <Text>Avarage Fat :{milkData.length && getAvrageFat()}</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 10,
        }}>
        <Text>Avarage SNF :{milkData.length && getAvrageSNF()}</Text>
      </View>
    </View>
  );
};

export default YourApp;
