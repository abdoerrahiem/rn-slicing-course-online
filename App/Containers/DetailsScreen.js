import { useState } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '@Redux/YourRedux'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Styles
import styles from './Styles/DetailsScreenStyle'
import { apply } from '@Themes/OsmiProvider'
import DetailsHeader from '@Components/DetailsHeader'
import BottomTabDetails from '@Components/BottomTabDetails'
import Images from '@Images/index'
import Chip from '@Components/Chip'
import Lesson from '@Components/Lesson'

const chips = [
  { id: 1, text: 'About' },
  { id: 2, text: 'Lesson' },
  { id: 3, text: 'Tools' },
  { id: 4, text: 'Resource' },
  { id: 5, text: 'Reviews' },
]

const DetailsScreen = (props) => {
  const [currentChip, setCurrentChip] = useState('Lesson')

  return (
    <SafeAreaView>
      <DetailsHeader />
      <ScrollView contentContainerStyle={apply('pt-16 pb-20')}>
        <View style={apply('px-5')}>
          <View
            style={apply(
              'bg-white rounded-extra h-227 relative justify-center items-center'
            )}
          >
            <Image
              source={Images.image4}
              style={apply('w-303 h-203 rounded-extra')}
            />
            <TouchableOpacity style={apply('absolute')}>
              <Image source={Images.play} style={apply('h-45 w-45')} />
            </TouchableOpacity>
          </View>
          <Text style={apply('font-bold text-lg my-4 mr-12 leading-7.5')}>
            UI Design : Wireframe to Visual Design
          </Text>
          <TouchableOpacity style={apply('row items-center')}>
            <Image
              source={Images.image2}
              style={apply('h-36 w-36 rounded-full')}
            />
            <View style={apply('flex ml-2')}>
              <Text style={apply('font-bold text-sm mb-1')}>Shem Bizo</Text>
              <Text style={apply('text-gray-400 text-s')}>
                Mentor UI Designer
              </Text>
            </View>
            <Image
              source={Images.arrowRight}
              resizeMode='contain'
              style={apply('w-14 h-14')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={apply('px-3 pt-3')}
        >
          {chips.map((chip) => (
            <Chip
              key={chip.id}
              item={chip}
              currentChip={currentChip}
              onPress={() => setCurrentChip(chip.text)}
            />
          ))}
        </ScrollView>
        <Lesson />
      </ScrollView>
      <BottomTabDetails />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)
