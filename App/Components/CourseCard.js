import { memo } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Styles
import styles from './Styles/CourseCardStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const CourseCard = ({ item }) => {
  const stars = () => {
    let updatedStars = []

    for (let i = 0; i < item.stars; i++) {
      updatedStars.push(
        <Image source={Images.star} key={i} style={apply('h-16 w-16 mr-1')} />
      )
    }

    return updatedStars
  }

  const { navigate } = useNavigation()

  return (
    <TouchableHighlight
      underlayColor='#E5E5E5'
      style={apply('bg-white w-180 h-205 rounded-extra overflow-hidden m-2')}
      onPress={() => navigate('DetailsScreen')}
    >
      <>
        <Image source={item.image} style={apply('w-181 h-100')} />
        <View style={apply('p-3')}>
          <Text style={apply('text-xs text-three mb-1 font-bold')}>
            {item.status}
          </Text>
          <Text
            style={apply('text-xs font-bold mb-2 leading-4.5 mr-3')}
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <View style={apply('row items-center')}>
            {stars()}
            <Text style={apply('ml-2 text-s text-gray-400')}>
              ({item.count})
            </Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  )
}

export default memo(CourseCard)
