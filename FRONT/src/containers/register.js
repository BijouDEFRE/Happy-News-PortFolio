import { connect } from 'react-redux';
import FormRegister from 'src/components/Register';
import {
  changeAuthField, getSelectField, HandleRoleIdChecked, subscriptionSubmitForm
} from 'src/redux/actions';

const mapStateToProps = (state) => ({
  last_name: state.auth.last_name,
  first_name: state.auth.first_name,
  adress: state.auth.adress,
  zip_code: state.auth.zip_code,
  city: state.auth.city,
  company_name: state.auth.company_name,
  shop_name: state.auth.shop_name,
  registration_number: state.auth.registration_number,
  email: state.auth.email,
  password: state.auth.password,
  role_id: state.auth.role_id,
  messageErrorsubscribe: state.auth.messageErrorsubscribe,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
  subscriptionSubmit: () => {
    console.log('je suis dans le container subscripition submit');
    dispatch(subscriptionSubmitForm());
  },
  HandleRoleId: (checked) => {
    console.log('je suis dans le register container, valeur de checked', checked);
    dispatch(HandleRoleIdChecked(checked));
  },
  changeSelectField: (value) => {
    console.log('je suis dans le register container, valeur de l\'input', value);
    dispatch(getSelectField(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
