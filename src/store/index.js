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
        getEngTasks: async (context) => {
          let {data} = await Axios.get('/api/eng');
          context.commit('SET_ENGTASKS', data);
        }
    }
})