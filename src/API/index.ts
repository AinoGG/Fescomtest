import axios from "axios";
const baseUrl = 'https://test.fescom.space/graphiql'

export async function authRequest(query: string){
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: query
    });
  };


export async function queryRequest(query: string){
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: query
    });
  };

  

// interface AuthGraph {
//     data: Object,
//     signin: Object,
//     token: string,
//     user: Object,
//     username: string,
//     email: string

     
//   }

// export async function getGQLChart(query: string) {
//     return axios({
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         url: baseUrl,
//         body: query
//     })
// } 