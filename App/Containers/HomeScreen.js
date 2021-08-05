import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '@Redux/YourRedux'
import { ScrollView, Text, StatusBar, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '@Themes/OsmiProvider'
import HomeHeader from '@Components/HomeHeader'
import MenuCard from '@Components/MenuCard'
import Images from '@Images/index'
import HeadLine from '@Components/HeadLine'
import CourseCard from '@Components/CourseCard'
import ArticleCard from '@Components/ArticleCard'
import BottomTab from '@Components/BottomTab'

const menus = [
  { id: 1, title: 'Design', course: 49, image: Images.menu1 },
  { id: 2, title: 'Soft Skill', course: 12, image: Images.menu2 },
  { id: 3, title: 'Art', course: 50, image: Images.menu3 },
]

const courses = [
  {
    id: 1,
    status: 'Free',
    title: 'UI Design : Wireframe to Visual Design',
    stars: 5,
    count: 4016,
    image: Images.image4,
  },
  {
    id: 2,
    status: 'Free',
    title: 'UI Design : Styleguide with Figma',
    stars: 5,
    count: 1055,
    image: Images.image5,
  },
  {
    id: 3,
    status: 'Premium',
    title: 'Web Developer : Learn JavaScript From Scratch',
    stars: 4,
    count: 2000,
    image: Images.image4,
  },
  {
    id: 4,
    status: 'Premium',
    title:
      'Fullstack Developer : Learn Frontend and Backend From Beginning Using JavaScript',
    stars: 3,
    count: 2000,
    image: Images.image4,
  },
]

const articles = [
  {
    id: 1,
    image: Images.image4,
    title: 'How to: Work faster as Full Stack Designer',
    subTitle: 'UI Design',
    isLoved: true,
  },
  {
    id: 2,
    image: Images.image5,
    title: 'How to: Digital Art from Sketch',
    subTitle: 'Art Course',
    isLoved: false,
  },
  {
    id: 3,
    image: Images.image3,
    title: 'How to: Make Website from Scratch',
    subTitle: 'Programming',
    isLoved: false,
  },
  {
    id: 4,
    image: Images.image6,
    title: 'How to: Make Android App using React Native from Facebook',
    subTitle: 'React Native',
    isLoved: true,
  },
  {
    id: 5,
    image: Images.image6,
    title: 'How to: Master Web Development with Reactjs and Expressjs',
    subTitle: 'Web Development',
    isLoved: true,
  },
]

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={apply('gray-100')} />
      <HomeHeader />
      <ScrollView contentContainerStyle={apply('pt-16')}>
        <Text style={apply('font-bold text-xl ml-7 mr-20  leading-7')}>
          Want to Study Class what's Today?
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={apply('p-5')}
        >
          {menus.map((menu) => (
            <MenuCard key={menu.id} item={menu} />
          ))}
        </ScrollView>
        <HeadLine title='Popular Course' subTitle='Show all' />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={apply('px-5')}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} item={course} />
          ))}
        </ScrollView>
        <HeadLine title='Articles' subTitle='Show all' />
        {articles.map((article) => (
          <ArticleCard key={article.id} item={article} />
        ))}
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
