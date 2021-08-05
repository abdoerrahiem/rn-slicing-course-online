import { memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Styles
import styles from './Styles/DetailsHeaderStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const DetailsHeader = (props) => {
  const { goBack } = useNavigation()

  return (
    <View
      style={apply(
        'row items-center justify-between px-5 py-2 absolute w/100 top-0 z-10 bg-gray-100'
      )}
    >
      <TouchableOpacity
        style={apply(
          'w-26 h-26 bg-white justify-center items-center rounded-md'
        )}
        onPress={() => goBack()}
      >
        <Image
          source={Images.arrowLeft}
          resizeMode='center'
          style={apply('w-12 h-12')}
        />
      </TouchableOpacity>
      <Text style={apply('font-bold text-sm')}>Course Details</Text>
      <TouchableOpacity
        style={apply(
          'w-26 h-26 bg-white justify-center items-center rounded-md'
        )}
      >
        <Image
          source={Images.wishlist}
          resizeMode='contain'
          style={apply('w-12 h12')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default memo(DetailsHeader)
