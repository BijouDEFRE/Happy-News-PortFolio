import { connect } from 'react-redux';

import { AddNewsForm } from 'src/components/AddNewsForm';

import { changeAddNewsField } from '../redux/actions';

// Cablage des données
const mapStateToProps = (state) => ({
    article_title: state.addNews.title,
    description: state.addNews.description,
    picture_url: state.addNews.file,
    price: state.addNews.price,
    is_news: true,
    user_id: state.auth.userId, // TODO: A récupérer depuis le state 
    activity_id: state.addNews.category,
    visible: state.addNews.visible
});

// Cablage des actions
const mapDispatchToProps = (dispatch) => ({
    handleChangeField: (name, value) => {
      console.log('name from handleChangeField : ', name);
      console.log('value from handleChangeField : ', value);
      dispatch(changeAddNewsField(name,value));
      // console.log('la value :', value);
      // console.log('le name :', name);
    },
    handleAddNews: () => {
      // dispatch(addNews());
    },
});

    
//   return {
//     // changeField : (value, name) => {
//     //   dispatch(changeAuthField(value, name));
//     // },
//     // handleAddNews : () => {
//     //   dispatch(handleAddNews( consoleLog('log depuis le container')));
//     // }
  
// }

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);