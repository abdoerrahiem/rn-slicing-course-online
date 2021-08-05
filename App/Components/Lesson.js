import { memo, useState } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/LessonStyle'
import { apply } from '@Themes/OsmiProvider'

const Lesson = (props) => {
  const [lessonsList, setLessonsList] = useState([
    { id: 1, text: 'Visual Design Intro', time: '00:01' },
    { id: 2, text: 'Design Reference', time: '03:45' },
    { id: 3, text: 'Create Moodboard', time: '04:47' },
    { id: 4, text: 'Wireframe to Visual Design Part 1', time: '09:03' },
    { id: 5, text: 'Wireframe to Visual Design Part 2', time: '18:03' },
  ])

  return (
    <View style={apply('px-5')}>
      <Text style={apply('text-sm font-bold mb-2')}>Course List</Text>
      <View style={apply('bg-white rounded-lg p-2')}>
        <ScrollView style={apply('')}>
          {lessonsList.map((item) => (
            <TouchableOpacity
              style={apply('row items-center m-2')}
              key={item.id}
            >
              <View
                style={apply(
                  'h-24 w-24 rounded-lg bg-primary justify-center items-center'
                )}
              >
                <Text style={apply('font-bold text-secondary')}>{item.id}</Text>
              </View>
              <View style={apply('ml-3')}>
                <Text style={apply('font-bold text-sm')}>{item.text}</Text>
                <Text style={apply('text-sm text-gray-400')}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default memo(Lesson)
