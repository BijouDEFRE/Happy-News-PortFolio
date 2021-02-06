import { connect } from 'react-redux';
import Tab from 'src/components/RetaillerP/Tabs';
import { changeContentUserField, handleChangeProfilContent } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  user: state.user.user,
  news: state.newsList.list,
  content: state.auth.content,
});
const mapDispatchToProps = (dispatch) => ({
  changeContent: (value) => {
    dispatch(changeContentUserField(value));
  },
  handleChangeProfilContent: () => {
    dispatch(handleChangeProfilContent());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Tab);
