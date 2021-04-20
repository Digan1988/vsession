import { createStore } from 'vuex'
import Axios from 'axios';

export const store = createStore({
    state () {
      return {
        tasks: []
      }
    },
    getters: {},
    mutations: {
      SET_ENGTASKS: (state, payload) => {
        state.tasks = payload;
      }
    },
    actions: {
        getEngTasks: async ({commit}) => {
          let {data} = await Axios.get('/api/eng');
          commit('SET_ENGTASKS', data);
        },
        setCompleted: async ({}, payload) => {
          const completed = payload.completed ? 1 : 0;
          await Axios.put(`/api/eng/task?id=${payload.id}&completed=${completed}`);
        }
    }
})