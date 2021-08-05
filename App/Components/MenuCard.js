import { memo } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

// Styles
import styles from './Styles/MenuCardStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const MenuCard = ({ item }) => {
  return (
    <TouchableHighlight
      style={apply('w-120 h-120 rounded-extra bg-white px-3 py-5 mx-2')}
      underlayColor='#E5E5E5'
      onPress={() => {}}
    >
      <>
        <View
          style={apply(
            'w-40 h-40 bg-primary rounded-full justify-center items-center mb-3'
          )}
        >
          <Image
            source={item.image}
            style={apply('w-35 h-35')}
            resizeMode='center'
          />
        </View>
        <Text style={apply('font-bold text-xs mb-1')}>{item.title}</Text>
        <Text style={apply('font-bold text-s text-gray-400')}>
          {item.course} Course
        </Text>
      </>
    </TouchableHighlight>
  )
}

export default memo(MenuCard)
