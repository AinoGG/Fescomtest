import { defineStore } from 'pinia'
import { queryRequest } from '@/API/index'

interface Query {
  startDate: string | any,
  endDate: string | any,
  responseArray: Object[]
}


export const useQueryStore = defineStore('query', {
    state: (): Query => {
        return {
            startDate: '',
            endDate: '',
            responseArray: []
        }
    },   
    actions: {
        async getQuery(startDate:any, endDate:any) {
            await queryRequest(`query {  
              metering(filter: {
                sampleBetween: {
                  startDate: "${startDate}",
                  endDate: "${endDate}"
                },    
              })
              {
                totalP
                totalQ
                totalS
                insertedAt
                
              }
            }`).then((data: Response) => data.json().then(res => {
              this.responseArray.push(res.data.metering) 
              console.log(this.responseArray)
            }))
        },
    }
})
