import { memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/HomeHeaderStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const HomeHeader = (props) => {
  return (
    <View
      style={apply(
        'row items-center justify-between px-7 py-3 absolute w/100 top-0 z-10'
      )}
    >
      <TouchableOpacity>
        <Image source={Images.image1} style={apply('w-40 h-40 rounded-full')} />
      </TouchableOpacity>
      <View style={apply('row items-center')}>
        <TouchableOpacity
          style={apply(
            'w-30 h-30 bg-white rounded-md justify-center items-center'
          )}
        >
          <Image source={Images.search} style={apply('w-24 h-24')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={apply(
            'w-30 h-30 bg-white rounded-md justify-center items-center ml-2'
          )}
        >
          <Image source={Images.notif} style={apply('w-24 h-24')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(HomeHeader)
