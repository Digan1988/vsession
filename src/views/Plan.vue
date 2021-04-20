<template>
    <div>
        <div>
            <p></p>
        </div>
        <div> 
            <ul class="list-group list-group-flush">
                <li v-for="(task) in tasks" v-bind:key="task.id" class="list-group-item" :class="{ active: isActive(task) }">
                    <span class="badge badge-info">{{task.section}}</span>
                    <div class="alert alert-light" style="display: inline-block;">{{formatDate(task.deadline)}}</div>
                    <h4>{{task.title}}</h4>
                    <span>{{task.desc}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        isActive(task){
            //const today = new Date();
            return task.deadline === false;//today.toLocaleDateString();
        },
        isVisible(task){
            const today = new Date();
            return task.deadline !== today.toLocaleDateString();
        },
        formatDate(unix) {
            return new Date(unix * 1000).toLocaleDateString();
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        }
    },
    mounted() {
        this.$store.dispatch('getEngTasks');
    },
    beforeUnmount(){
        
    },
    watch: {
        
    }
}
</script>

<style>

</style>