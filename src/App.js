import { connect } from 'react-redux';
import Animation from './components/Animation';
import Content from './components/Content';
import Header from './components/Header';
import { MainPage } from './styles/styledComponents';
import About from './components/About';
import FetchingData from './components/fetchingData/FetchingData';


function App() {
  return (
    <MainPage >
      <Header />
      <Content />
      <FetchingData/>
    </MainPage>
  );
}

const mapStateToProps = state => {
  return {
    menuVisibility : state.headerState,
  }
}
export default connect(mapStateToProps,{})(App);
