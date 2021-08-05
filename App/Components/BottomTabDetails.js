import { memo } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

// Styles
import styles from './Styles/BottomTabDetailsStyle'
import { apply } from '@Themes/OsmiProvider'

const BottomTabDetails = (props) => {
  return (
    <View style={apply('h-72 bg-white absolute bottom-0 w/100 row')}>
      <View style={apply('flex pl-5 py-3')}>
        <Text style={apply('text-gray-400 text-xs mb-1')}>Price</Text>
        <Text style={apply('text-three font-bold text-lg')}>Free</Text>
      </View>
      <TouchableHighlight
        underlayColor='#006EEE'
        style={apply(
          'bg-secondary flex rounded-tl-super-extra justify-center items-center px-10'
        )}
        onPress={() => {}}
      >
        <Text style={apply('text-white font-bold text-sm')}>Start Course</Text>
      </TouchableHighlight>
    </View>
  )
}

export default memo(BottomTabDetails)
