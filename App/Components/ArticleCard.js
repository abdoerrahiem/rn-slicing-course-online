import { memo } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'

// Styles
import styles from './Styles/ArticleCardStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const ArticleCard = ({ item }) => {
  return (
    <TouchableHighlight
      underlayColor='#E5E5E5'
      style={apply('mx-7 rounded-extra bg-white h-80 mb-5 row overflow-hidden')}
      onPress={() => {}}
    >
      <>
        <Image source={item.image} style={apply('h-80 w-80')} />
        <View style={apply('row items-center flex px-4')}>
          <View style={apply('flex')}>
            <Text
              style={apply('font-bold text-xs mb-2 leading-4.5 mr-5')}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <Text style={apply('text-s text-gray-400')}>{item.subTitle}</Text>
          </View>
          <Image
            source={item.isLoved ? Images.loveColor : Images.love}
            style={apply('h-17 w-17')}
            resizeMode='center'
          />
        </View>
      </>
    </TouchableHighlight>
  )
}

export default memo(ArticleCard)
