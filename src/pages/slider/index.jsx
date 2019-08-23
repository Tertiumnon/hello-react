import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getImages, setCards } from '../../actions';
import VirtualPhone from '../../components/virtual-phone';
import CardsForm from '../../components/cards-form';
import './index.css';

class Slider extends React.Component {

  componentDidMount() {
    const { location: { search } } = this.props;
    const params = queryString.parse(search);
    const imagesFetch = getImages(params.count);
    imagesFetch
      .then((response) => {
        return response.json();
      })
      .then((images) => {
        this.props.setCards(images);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="slider">
          <div className="left">
            <VirtualPhone />
          </div>
          <div className="right">
            <CardsForm />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  slider: state.slider
});

const mapDispatchToProps = (dispatch) => ({
  getImages: () => getImages(),
  setCards: (images) => dispatch(setCards(images))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
