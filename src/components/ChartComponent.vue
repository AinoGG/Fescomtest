<template>
    <button class="button-chart" type="button" @click="refreshDate">Обновить</button>
    <Chart :size="{ width: windowWidth - 40, height: windowHeight - 40 }" :data="plByMonth" :margin="margin"
        :direction="'horizontal'" v-if="render">

        <template #layers>
            <Grid strokeDasharray="2,2" />
            <Line :dataKeys="['name', 'P']" :lineStyle="{ stroke: 'red' }" />
            <Line :dataKeys="['name', 'Q']" :lineStyle="{ stroke: 'blue' }" />
            <Line :dataKeys="['name', 'S']" :lineStyle="{ stroke: 'green' }" />
        </template>


    </Chart>
    <div class="table" v-if="render">
        <ul class="table-header">
            <li class="table-header__item">Время</li>
            <li class="table-header__item red">P, кВт</li>
            <li class="table-header__item blue">Q, кВАр</li>
            <li class="table-header__item green">S, ВА</li>
        </ul>
        <ul class="table-list" v-for="(tableItem, i) in plByMonth" :key="i" v-show="plByMonth.length > 0">
            <li class="table-list__item">{{ tableItem.name }}</li>
            <li class="table-list__item">{{ tableItem.P }}</li>
            <li class="table-list__item">{{ tableItem.Q }}</li>
            <li class="table-list__item">{{ tableItem.S }}</li>
        </ul>
    </div>
    <div class="loading" v-if="!render">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <g transform="translate(50 50)">
                <g>
                    <animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s"
                        repeatCount="indefinite"></animateTransform>
                    <path
                        d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
                        fill="#e15b64"></path>
                </g>
            </g>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line } from 'vue3-charts'
// import { useQueryStore } from '@/stores/queryStore'

export default defineComponent({
    setup() {
        interface ArrayGraph {
            name: string,
            P: number,
            Q: number,
            S: number
        }
        // Реализация нормальной функции из стора
        // const queryStore = useQueryStore()
        // let date = new Date()
        // let beforeHourDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${(date.getHours() - 1) > 0 ? (date.getHours() - 1).toString().padStart(2, '0') : '00' }:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        // let currentDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        // function refreshData() {
        //     queryStore.getQuery(beforeHourDate, currentDate)
        // }

        const margin = ref({
            left: 0,
            top: 20,
            right: 20,
            bottom: 0
        })
        const plByMonth = ref([
            { name: 'date', P: 0, Q: 0, S: 0, }
        ])

        return { margin, plByMonth }
    },
    name: 'LineChart',
    components: { Chart, Grid, Line },
    data() {
        return {
            render: false,
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight / 2
        }
    },
    methods: {
        //фейковый метод получения данных с сервера, так как корсом не даете запрос сделать. В график я бы вставлял данные из ответа, но вставляю рандомные
        refreshDate() {
            let date = new Date()
            let currentDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
            this.render = false
            this.plByMonth.push({ name: currentDate, P: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000, Q: Math.floor(Math.random() * (99 - 10 + 1)) + 10, S: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000 })
            console.log(this.plByMonth)
            setTimeout(() => {
                this.render = true
            }, 1000)
        },
        startDate() {
            this.plByMonth = []
        }
    },
    mounted() {
        this.render = true
        this.startDate()
        this.refreshDate()
        window.addEventListener('resize', () => {
            this.windowWidth = document.documentElement.clientWidth
            this.windowHeight = document.documentElement.clientHeight / 2
            console.log(window.innerWidth)
        })
    },

})
</script>

<style lang="scss">
#app {
    color: #2ecc71;
    width: 100%;
    flex-direction: column;
}

.button-chart {
    position: absolute;
    right: 20px;
    top: 5px;
    background: #2d8feb;
    color: #ffffff;
    border-radius: 8px;
    border: none;
    width: 100px;
    height: 32px;
    font-size: 16px;
    cursor: pointer;
}

.tick {
    text {
        font-size: 7px;
    }
}

.table {
    color: #000000;
    border: 1px solid #000000;

    .table-header__item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #000000;
        font-weight: 700;

        &.red::after {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: red;
        }

        &.blue::after {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: blue;
        }

        &.green::after {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: green;
        }
    }

    ul {
        display: flex;

        li {
            width: 100px;
            padding: 5px;
            font-size: 10px;
            border: 1px solid #000000;
            text-align: center;

            &:nth-child(1) {
                width: 150px;
            }
        }
    }
}
</style>