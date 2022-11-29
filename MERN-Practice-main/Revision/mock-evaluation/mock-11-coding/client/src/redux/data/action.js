import axios from "axios"

export const GET_TASK_LOADING = "GET_TASK_LOADING"
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS"
export const GET_TASK_ERROR = "GET_TASK_ERROR"
export const getTaskloading = () => ({
    type: GET_TASK_LOADING
})
export const getTaskSuccess = (payload) => ({
    type: GET_TASK_SUCCESS,
    payload
})
export const getTaskError = () => ({
    type: GET_TASK_ERROR
})

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const getData = (page) => (dispatch) => {
    dispatch(getTaskloading())
    axios.get(`https://mock11muskan.herokuapp.com/patients?_page=1` )
        .then((res) => { 
            console.log(res.data)
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}
export const getOneData = (id) => (dispatch) => {
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/flat/${id}`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}
export const geth2l = (page) => (dispatch) => {
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/flat/h2l?_page=${page}`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}
export const getl2h = (page) => (dispatch) => {
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/flat/l2h?_page=${page}`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}
export const getOwner = (page) => (dispatch) => {
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/flat/owner?_page=${page}`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}
export const getTenant = (page) => (dispatch) => {
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/flat/tenant?_page=${page}`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}
export const search = (page,block) => (dispatch) => {
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/flat/tenant?_page=${page}&block=${block}`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}