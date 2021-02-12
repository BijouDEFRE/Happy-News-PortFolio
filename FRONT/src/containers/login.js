// == Import npm
import { connect } from 'react-redux';

// Import components
import Login from 'src/components/Login';

// Import from actions creator
import { changeAuthField, handleLogin } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  // to get state parameters
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// mapDispatchToProps = cabling of actions (function type props)
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
  handleLogin: () => {
    dispatch(handleLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
