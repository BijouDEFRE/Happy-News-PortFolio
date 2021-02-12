import { connect } from 'react-redux';
import InformationForm from 'src/components/RetaillerP/ProfilInformation/InformationForm';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(InformationForm);
