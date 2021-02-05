import { connect } from 'react-redux';
import RetailerP from 'src/components/RetaillerP';
import { getUserDetails, updateTextContent } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  list: state.newsList.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserDetails: (id) => {
    dispatch(getUserDetails(id));
  },
  loadNews: () => {
    dispatch({ type: 'GET_NEWS' });
  },
  changeContent: (value) => {
    dispatch(updateTextContent(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerP);
