import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/ChipStyle'
import { apply } from '@Themes/OsmiProvider'

const Chip = ({ item, currentChip, onPress }) => {
  return (
    <TouchableOpacity
      style={apply(
        `${
          currentChip === item.text ? 'bg-primary' : 'bg-white'
        } px-3 py-1 rounded-lg m-2`
      )}
      onPress={onPress}
    >
      <Text
        style={apply(
          `text-xs ${
            currentChip === item.text ? 'text-secondary' : 'text-black'
          } font-bold`
        )}
      >
        {item.text}
      </Text>
    </TouchableOpacity>
  )
}

// // Prop type warnings
// Chip.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// Chip.defaultProps = {
//   someSetting: false
// }

export default memo(Chip)
