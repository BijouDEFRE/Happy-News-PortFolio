import { connect } from 'react-redux';
import { deleteNews } from 'src/redux/actions';
import PopUp from '../components/NewsModal/Popup';

const mapDispatchToProps = (dispatch) => ({
  handleDelete: (value) => {
    dispatch(deleteNews(value));
  },
});
export default connect(null, mapDispatchToProps)(PopUp);
