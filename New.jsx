import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import cars from './config/cars';
import colors from './config/colors';

const RecipeDetailScreen = ({ c = cars[0] }) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            style={{
              padding: 10 * 2,
              height: height / 2.5,
              padding: 10 * 2,
              paddingTop: 10 * 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={c.image}
          >
            <TouchableOpacity
              style={{
                height: 10 * 4.5,
                width: 10 * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10 * 2.5,
              }}
            >
              <Ionicons name="arrow-back" size={10 * 2.5} color={colors.gray} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 10 * 4.5,
                width: 10 * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10 * 2.5,
              }}
            >
              <Ionicons name="share" size={10 * 2.5} color={colors.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: 10 * 2,
              paddingTop: 10 * 3,
              marginTop: -10 * 3,
              borderTopLeftRadius: 10 * 3,
              borderTopRightRadius: 10 * 3,
              backgroundColor: colors.white,
            }}
          >
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10 * 3,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '70%' }}>
                <Text
                  style={{
                    fontSize: 10 * 3,
                    color: colors.black,
                    fontWeight: '700',
                  }}
                >
                  {c.name}
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 10 * 3,
                  backgroundColor: colors.yellow,
                  flexDirection: 'row',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="star" color={colors.black} size={10 * 1.7} />
                <Text
                  style={{
                    fontSize: 10 * 1.6,
                    fontWeight: '600',
                    marginLeft: 10 / 2,
                    color: colors.black,
                  }}
                >
                  {c.rating}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 10 * 2,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="" color={colors.gray} size={10 * 1.7} />
                <Text
                  style={{
                    fontSize: 10 * 1.6,
                    fontWeight: '600',
                    marginLeft: 10 / 2,
                    color: colors.gray,
                  }}
                >
                  {c.isMyFavorite}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 10 * 3 }}>
              <Text
                style={{
                  fontSize: 10 * 2,
                  fontWeight: '700',
                  color: colors.dark,
                }}
              ></Text>
              {/*  */}
              <View>
                <Text>{c.year}</Text>
                <Text>{c.style}</Text>
                <Text>{c.origin}</Text>
                <Text>{c.gearbox}</Text>
                <Text>{c.gasoline}</Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 10 * 2,
                fontWeight: '700',
                color: colors.dark,
                marginBottom: 10,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontSize: 10 * 1.7,
                fontWeight: '500',
                color: colors.gray,
              }}
            >
              {c.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: 10 * 2 }}>
          <TouchableOpacity
            style={{
              width: '100%',
              padding: 10 * 2,
              backgroundColor: colors.black,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10 * 2,
            }}
          >
            <Text
              style={{
                fontSize: 10 * 2,
                color: colors.white,
                fontWeight: '700',
              }}
            >
              Choose this for
            </Text>
            <Text
              style={{
                fontSize: 10 * 2,
                color: colors.yellow,
                fontWeight: '700',
                marginLeft: 10 / 2,
              }}
            >
              $ {c.price}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({});
