import { connect } from 'react-redux';
import Animation from './components/Animation';
import Content from './components/Content';
import Header from './components/Header';
import { MainPage } from './styles/styledComponents';


function App() {
  return (
    <MainPage >
      <Header />
      <Content />
    </MainPage>
  );
}

const mapStateToProps = state => {
  return {
    menuVisibility : state.headerState,
  }
}
export default connect(mapStateToProps,{})(App);
