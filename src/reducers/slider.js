const slider = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: [action.card, ...state.cards],
        count: state.count + 1,
        margin: 10
    }
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.cards,
        count: action.count
    }
    case 'SET_SIZE':
      return {
          ...state,
          size: action.size,
          margin: action.margin
      }
    case 'SET_RADIUS':
      return {
          ...state,
          radius: action.radius
      }
    case 'SET_MARGIN':
      return {
          ...state,
          margin: action.margin,
          active: action.active
      }
    case 'SET_WIDTH':
      return {
          ...state,
          width: action.width
      }
    default:
      return state
  }
}

export default slider;
