<template>
    <div>
        <div>
            <flip-countdown deadline="2021-05-09 00:00:00"></flip-countdown>
        </div>
        <div> 
            <div style="display: flex;justify-content: center;align-items: center;">
                <img src="https://img.icons8.com/bubbles/50/000000/milkshake.png"/>
                <p>До призового молочного коктейля осталось выполнить {{bonusLeft}} заданий</p>
            </div>
            <ul class="list-group list-group-flush">
                <li v-for="(task) in tasks" v-bind:key="task.id" class="list-group-item" :class="{ active: isActive(task), expired: isExpired(task) }">
                    <span class="badge badge-info">{{task.section}}</span>
                    <div class="alert alert-light" style="display: inline-block;">{{formatDate(task.deadline)}}</div>
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <h4>{{task.title}}</h4>
                            <span>{{task.desc}}</span>
                        </div>
                        <span class="btn-check" :class="{ completed: isCompleted(task) }" @click="completeClick(task)">
                            <i class="bi bi-check"></i>
                        </span>
                    </div> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import FlipCountdown from '../components/FlipCountdown';
export default {
    components:{
        FlipCountdown
    },
    data() {
        return {
            milkshakeGoals:[8, 16, 24, 32, 38],
            praise: [
                "Well done!",
                "Good for you!",
                "You rock!",
                "You rule!",
                "I knew you could do it!",
                "Good job!",
                "Bravo!",
                "You’ve got it!",
                "Keep it up!",
                "I’m proud of you!"
            ]
        }
    },
    methods: {
        isActive(task){
            const today = new Date();
            return new Date(task.deadline * 1000).toLocaleDateString() === today.toLocaleDateString();
        },
        isCompleted(task) {
            return task.completed;
        },
        isExpired(task) {
            const today = new Date();
            return !task.completed && new Date(task.deadline * 1000) < today;
        },
        isVisible(task){
            const today = new Date();
            return task.deadline !== today.toLocaleDateString();
        },
        formatDate(unix) {
            return new Date(unix * 1000).toLocaleDateString();
        },
        completeClick(task) {
            task.completed = !task.completed;
            this.$store.dispatch('setCompleted', { id: task.id, completed: task.completed  });

            if(task.completed) {
                var item = this.praise[Math.floor(Math.random() * this.praise.length)];
                alert(item);
            }
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        },
        completed(){
            return this.tasks.filter(item => { return item.completed; }).length;
        },
        bonusLeft() {
            const completed = this.completed;
            const near = this.milkshakeGoals.find(item => { return item >= completed; });
            return near - completed;
        }
    },
    mounted() {
        this.$store.dispatch('getEngTasks');
    },
    beforeUnmount(){
        
    },
    watch: {
        completed(val) {
            if(this.milkshakeGoals.indexOf(val) !== -1){
                alert('Вы заслужили молочный коктейль!');
            }
        }
    }
}
</script>

<style>
    .btn-check {
        font-size: 40px;
        cursor: pointer;
        transition: color 0.5s ease-out;
        color: grey;
    }
    .completed {
        color: #00CC66;
    }
    .expired {
        color: #FF3300;
    }
    .list-group-item.active {
        color: #17a2b8;
        background-color: transparent;
        border-color: #17a2b8;
    }
</style>