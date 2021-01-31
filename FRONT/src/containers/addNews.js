import { connect } from 'react-redux';

import { AddNewsForm } from 'src/components/AddNewsForm';

import { changeAddNewsField } from '../redux/actions';

// Cablage des données
const mapStateToProps = (state) => ({
   
    // title: ,
    // description: 
    // category: state.addNews.category,
    // price: 
    // file:
    // is_news: true
    article_title: state.addNews.title,
    description: state.addNews.description,
    picture_url: state.addNews.file,
    price: state.addNews.price,
    is_news: true,
    user_id: '', // A récupérer depuis le localstorage via <localStorage.getItem('myData');>
    activity_id: state.addNews.category,
});

// Cablage des actions
const mapDispatchToProps = (dispatch) => ({
    handleChangeField: (name, value) => {
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