// import Avatar from '../Header/Avatar';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdReportProblem } from 'react-icons/md';
import Button from '../Header/Button';
import Field from '../Login/Field';
import './style.scss';

const FormRegister = ({
  last_name,
  first_name,
  adress,
  zip_code,
  city,
  company_name,
  shop_name,
  registration_number,
  email,
  password,
  changeField,
  HandleRoleId,
  role_id,
  changeSelectField,
  subscriptionSubmit,
  messageErrorsubscribe,
}) => {
  const { register, handleSubmit, errors } = useForm({
    shouldFocusError: true,
  });

  return (
    <div className="containerRegister">
      <form className="register" onSubmit={handleSubmit(subscriptionSubmit)}>
        <h1 className="register-title">Inscription</h1>
        {
            messageErrorsubscribe && (
            <div className="error-message">
              <MdReportProblem className="error-icon" /> {messageErrorsubscribe}
            </div>
            )
}
        <fieldset className="register-sec-identite">
          <legend className="register-leg-identite">Identité</legend>
          <div className="register-form">
            <Field
              name="last_name"
              value={last_name}
              onChange={changeField}
              placeholder="Nom"
              type="text"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },
              })}
            />
            {errors.last_name && <div className="login__form-error"> {errors.last_name.message} </div>}
            <Field
              name="first_name"
              value={first_name}
              onChange={changeField}
              placeholder="prenom"
              type="text"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },
              })}
            />
          </div>
          {errors.first_name && <div className="login__form-error"> {errors.first_name.message} </div>}
        </fieldset>
        <fieldset className="register-sec-address">
          <legend className="register-leg-address">adresse</legend>
          <div className="register-form">
            <Field
              name="adress"
              value={adress}
              onChange={changeField}
              placeholder="adresse"
              type="text"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },

              })}
            />
          </div>
          {errors.adress && <div className="login__form-error"> {errors.adress.message} </div>}
          <div className="register-form">
            <Field
              name="zip_code"
              value={zip_code}
              onChange={changeField}
              placeholder="code postal"
              type="number"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },
                minLength: { value: 5, message: 'Ce champ ne peux contenir moins de 5 caracteres' },
                maxLength: { value: 5, message: 'Ce champ ne peux contenir plus de 5 caracteres' },
              })}
            />
          </div>
          {errors.zip_code && <div className="login__form-error"> {errors.zip_code.message} </div>}
          <div className="register-form">
            <Field
              name="city"
              value={city}
              onChange={changeField}
              placeholder="ville"
              type="text"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },
              })}
            />
          </div>
          {errors.city && <div className="login__form-error"> {errors.city.message} </div>}
        </fieldset>
        <div className="register-input-checkbox">
          <label className="form__label-register" htmlFor="roleID">Cliquez si vous etes commerçant</label>
          <input
            onChange={(event) => {
              HandleRoleId(event.target.checked);
            }}
            id="roleID"
            type="checkbox"
            className="form__input"
            name="role_id"
          />
        </div>

        { role_id === 3
    && (
    <>
      <fieldset className="register-sec-business">
        <legend className="register-leg-business">informations professionnelles</legend>
        <div className="register-form">
          <div className="register-form-activity">
            <label className="form__label" htmlFor="activity">Domaine d'activité :</label>
            <select
              className="register-form-activity-select"
              id="activity"
              onChange={(event) => {
                changeSelectField(event.target.value);
                console.log(event.target.value);
              }}
              name="activity_id"
            >
              <option value="">choisissez votre activité</option>
              <option value="boulangerie">boulangerie</option>
              <option value="boucherie">boucherie</option>
              <option value="fleuriste">fleuriste</option>
              <option value="fromagerie">fromagerie</option>
              <option value="charcuterie">charcuterie</option>
              <option value="garagiste">garagiste</option>
              <option value="primeur">primeur</option>
              <option value="coiffeur">coiffeur</option>
              <option value="papeterie">papeterie</option>
            </select>
          </div>
          <div>
            <Field
              name="company_name"
              value={company_name}
              onChange={changeField}
              placeholder="societe"
              type="text"
            />
          </div>
          <div className="register-form">
            <Field
              name="shop_name"
              value={shop_name}
              onChange={changeField}
              placeholder="enseigne"
              type="text"
            />
          </div>
          <div className="register-form">
            <Field
              name="registration_number"
              value={registration_number}
              onChange={changeField}
              placeholder="siret"
              type="text"
              register={register({
                minLength: { value: 14, message: 'le siret doit contenir 14 caracteres' },
                maxLength: { value: 14, message: 'le siret doit contenir 14 caracteres' },
              })}
            />
          </div>
          {errors.registration_number && <div className="login__form-error"> {errors.registration_number.message} </div>}
        </div>
      </fieldset>
    </>
    )}
        <fieldset className="register-sec-security">
          <legend className="register-leg-security">securité</legend>
          <div className="register-form">
            <Field
              name="email"
              value={email}
              onChange={changeField}
              placeholder="email"
              type="email"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },
              })}
            />
          </div>
          {errors.email && <div className="login__form-error"> {errors.email.message} </div>}
          <div className="register-form">
            <Field
              name="password"
              value={password}
              onChange={changeField}
              placeholder="mot de passe"
              type="password"
              register={register({
                required: { value: true, message: 'ce champ est obligatoire' },
              })}
            />
          </div>
          {errors.password && <div className="login__form-error"> {errors.password.message} </div>}
        </fieldset>
        <Button>Validez la création</Button>
      </form>
    </div>
  );
};

export default FormRegister;
FormRegister.propTypes = {
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  zip_code: PropTypes.string,
  city: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  shop_name: PropTypes.string.isRequired,
  // registration_number: PropTypes.number,
  email: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  HandleRoleId: PropTypes.func.isRequired,
  role_id: PropTypes.number.isRequired,
  changeSelectField: PropTypes.func.isRequired,
  subscriptionSubmit: PropTypes.func.isRequired,

};
FormRegister.defaultProps = {
  // siret: 0,
  zip_code: '',
};
