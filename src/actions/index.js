/**
 * On size change
 * @param e Size
 */
export const onSizeChange = (e) => ({
  type: 'SET_SIZE',
  size: Number(e.target.value),
  margin: 10,
})

/**
 * On radius change
 * @param e Radius
 */
export const onRadiusChange = (e) => ({
  type: 'SET_RADIUS',
  radius: Number(e.target.value),
})

/**
 * Add square (card)
 */
export const addSquare = (dispatch) => {
  const imageFetch = getImages(1);
  imageFetch
    .then((response) => {
      return response.json();
    })
    .then((images) => {
      dispatch(addCard(images));
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * Is prev card exists
 */
export const isPrevExists = (params) => (params.margin !== 10);

/**
 * Click on "Prev"
 */
export const onPrev = (params) => ({
  type: 'SET_MARGIN',
  margin: (
    isPrevExists(params) ?
    params.margin + (params.size + 10) :
    params.margin
  ),
  active: (
    isPrevExists(params) ?
    params.active - 1 :
    params.active
  )
})

/**
 * Is next card exists
 */
export const isNextExists = (params) => (
  ((params.count - 1) * (params.size + 10) + params.margin - 10) !== 0
);

/**
 * Click on "Next"
 */
export const onNext = (params) => ({
  type: 'SET_MARGIN',
  margin: (
    isNextExists(params) ?
    params.margin - (params.size + 10) :
    params.margin
  ),
  active: (
    isNextExists(params) ?
    params.active + 1 :
    params.active
  )
})

/**
 * Получаем изображения
 * @param {Number} count Количество изображений
 * @return {Promise} 
 */
export const getImages = (count) => {
  return fetch(`${process.env.REACT_APP_API_URL}/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&count=${count}`);
}

/**
 * Устанавливаем карточки
 * @param {Object[]} images Изображения
 * @param {Number} active Активная карточка
 */
export const setCards = (images) => ({
  type: 'SET_CARDS',
  cards: images.map(image => {
    return {
      id: image.id,
      src: image.urls.thumb
    };
  }),
  count: images.length
});

export const addCard = (images) => ({
  type: 'ADD_CARD',
  card: images.map(image => {
    return {
      id: image.id,
      src: image.urls.thumb
    };
  })[0]
});

/**
 * Set cards opacity
 */
export const getOpacity = (params) => {
  const { active, i } = params;
  return 1 + 0.2 * (active - i);
}
