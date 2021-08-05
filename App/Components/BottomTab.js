import { memo } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

// Styles
import styles from './Styles/BottomTabStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const BottomTab = (props) => {
  return (
    <View style={apply('bg-white h-72 row items-center justify-around')}>
      <TouchableOpacity>
        <Image
          source={Images.tab1}
          style={apply('w-25 h-25')}
          resizeMode='center'
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={Images.tab2}
          style={apply('w-25 h-25')}
          resizeMode='center'
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={Images.tab3}
          style={apply('w-25 h-25')}
          resizeMode='center'
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Images.image1} style={apply('w-25 h-25 rounded-full')} />
      </TouchableOpacity>
    </View>
  )
}

export default memo(BottomTab)
