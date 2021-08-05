import { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/HeadLineStyle'
import { apply } from '@Themes/OsmiProvider'

const HeadLine = ({ title, subTitle }) => {
  return (
    <View style={apply('row px-7 items-center mb-3')}>
      <Text style={apply('flex font-bold text-sm')}>{title}</Text>
      <TouchableOpacity>
        <Text style={apply('text-s text-secondary')}>{subTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default memo(HeadLine)
