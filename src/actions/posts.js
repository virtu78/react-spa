import fetch from 'cross-fetch'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(mess) {
  return {
    type: REQUEST_POSTS,
    mess
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(mess, json) {
  return {
    type: RECEIVE_POSTS,
    mess,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const INVALIDATE_POSTS = 'INVALIDATE_POSTS'
export function invalidatePosts(mess) {
  return {
    type: INVALIDATE_POSTS,
    mess
  }
}


export function fetchPosts(mess) {
  return function (dispatch) {
    dispatch(requestPosts(mess))
    return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Friz`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
       dispatch(receivePosts(mess, json))
      )
  }
}

function shouldFetchPosts(state, mess) {
  const posts = state.postsByMess[mess]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {


  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), mess)) {
      return dispatch(fetchPosts(mess))
    } else {     
      return Promise.resolve()
    }
  }



