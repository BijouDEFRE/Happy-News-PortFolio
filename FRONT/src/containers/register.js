import { connect } from 'react-redux';
import FormRegister from 'src/components/Register';
import {
  changeAuthField, getSelectField, HandleRoleIdChecked, subscriptionSubmitForm
} from 'src/redux/actions';

const mapStateToProps = (state) => ({
  lastName: state.auth.last_name,
  firstName: state.auth.first_name,
  adress: state.auth.adress,
  zipCode: state.auth.zip_code,
  city: state.auth.city,
  companyName: state.auth.company_name,
  shopName: state.auth.shop_name,
  registrationNumber: state.auth.registration_number,
  email: state.auth.email,
  password: state.auth.password,
  roleId: state.auth.role_id,
  messageErrorsubscribe: state.auth.messageErrorsubscribe,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
  subscriptionSubmit: () => {
    dispatch(subscriptionSubmitForm());
  },
  HandleRoleId: (checked) => {
    dispatch(HandleRoleIdChecked(checked));
  },
  changeSelectField: (value) => {
    dispatch(getSelectField(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
