const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdAC): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            console.log(typeof action.id, action.id)
            return {...state,themeId: action.id}
        default:
            return state
    }
}
type ChangeThemeIdAC = {
    type: "SET_THEME_ID",
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdAC => ({type: "SET_THEME_ID", id}) // fix any
