import { connect } from 'react-redux';
import Tab from 'src/components/RetaillerP/Tabs';

const mapStateToProps = (state) => ({
  user: state.user.user,
  news: state.newsList.list,
});
const mapDispatchToProps = (dispatch) => ({
  // changeContent: (value) => {
  //   dispatch(updateTextContent(value));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
