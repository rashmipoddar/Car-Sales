export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = ({name, price, id}) => {
  return {
    type: ADD_FEATURE,
    payload: {
      id,
      name,
      price
    }
  }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = ({name, price, id}) => {
  return {
    type: REMOVE_FEATURE,
    payload: {
      id,
      name,
      price
    }
  }
}
