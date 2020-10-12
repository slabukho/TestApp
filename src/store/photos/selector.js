export const photosStateSelector = state => state.photos

export const dataStateSelector=state=> photosStateSelector(state).data