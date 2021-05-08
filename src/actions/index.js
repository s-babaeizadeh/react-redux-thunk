import api from "../api/api"
import _ from "lodash"

export const fetchPosts = () => async (dispatch) => {
  const response = await api.get("/posts")
  dispatch({ type: "FETCH_POSTS", payload: response.data })
}

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await api.get(`/users/${id}`)
  dispatch({ type: "FETCH_USER", payload: response.data })
})
