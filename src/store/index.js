import { createStore } from "vuex";

export default createStore({
  state: {
    electionData: [
      {
        year: "2021",
        data: [
          {type:'pradhan', img:'', doanloadLink:'',winner:'',opponent:''},
          {type:'jilapanchayat', img:'', doanloadLink:'',winner:'',opponent:''},
          {type:'bdc', img:'', doanloadLink:'',winner:'',opponent:''},
        ],
       
      },
      {
        year: "2015",
        data: [
          {type:'pradhan', img:'', doanloadLink:'',winner:'',opponent:'',about:''},
          {type:'jilapanchayat', img:'', doanloadLink:'',winner:'',opponent:'',about:''},
          {type:'bdc', img:'', doanloadLink:'',winner:'',opponent:'',about:''},
        ],
       
      },
      
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters:{
    getElectionData(state){
      return state.electionData;
    }
  }
});
