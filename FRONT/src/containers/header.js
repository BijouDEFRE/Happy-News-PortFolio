import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  // to get state parameters
  token: state.auth.token,
  prenom: state.auth.first_name,
  id: state.auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    // 1er changement
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
