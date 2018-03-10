import axios from 'axios';
import API_ROOT from '../ip-addresses';

const SET_EVENT = 'SET_EVENT';

const event = {};

export const setEvent = (event) => ({
  type: SET_EVENT,
  event
});

export const addEvent = (name) => (dispatch) => {
  axios.post(`${API_ROOT}/events`, {name})
    .then(res => res.data)
    .then((createdEvent) => dispatch(setEvent(createdEvent)))
    .catch(err => console.log(err));
}

export default function (state = event, action) {
  switch (action.type) {
    case SET_EVENT:
      return action.event;
    default:
      return state;
  }
}
