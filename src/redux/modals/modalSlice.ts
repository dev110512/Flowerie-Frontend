import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    loginModal: boolean
    signupModal: boolean
    offerModal: boolean
}

const initialState: ModalState = {
    loginModal: false,
    signupModal: false,
    offerModal: false,
}

export const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        toggleLogin: (state) => {
            state.loginModal = !state.loginModal
        },
        toggleSignup: (state) => {
            state.signupModal = !state.signupModal
        },
        toggleOffer: (state) => {
            state.offerModal = !state.offerModal
        },
        redirectLogin: (state) => {
            state.signupModal = false
            state.loginModal = true
        },
        redirectSignup: (state) => {
            state.loginModal = false
            state.signupModal = true
        },
    },
})

export const {
    toggleLogin,
    toggleSignup,
    toggleOffer,
    redirectLogin,
    redirectSignup,
} = modalSlice.actions

export default modalSlice.reducer
