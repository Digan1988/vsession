<template>
    <div>
        <div>
            <p></p>
        </div>
        <div> 
            <ul class="list-group list-group-flush">
                <li v-for="(task) in tasks" v-bind:key="task.id" class="list-group-item" :class="{ active: isActive(task) }">
                    <span class="badge badge-info">{{task.section}}</span>
                    <h4>{{task.title}}</h4>
                    <span>{{task.desc}}</span>
                    <br/>
                    <span>{{task.deadline.getTime()/1000}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks:[
                { id:1, title: 'Topical Vocabulary (Family)', desc: 'file FAMILY VOCABULARY (folder VOCABULARY)', section: 'Vocabulary', deadline: new Date(2021, 3, 20) },
                { id:2, title: 'Family vocabulary with pronunciation', desc: 'https://www.highlevellistening.com/family-vocabulary-part-2/', section: 'Vocabulary', deadline: new Date(2021, 3, 20) },
                { id:3, title: 'Vocabulary extension exercises', desc: 'file FAMILY VOCABULARY EXERCISES (folder VOCABULARY)', section: 'Vocabulary', deadline: new Date(2021, 3, 21) },
                { id:4, title: 'Topical Vocabulary (DIFFICULT CHILDREN)', desc: 'file DIFFICULT CHILDREN VOCABULARY (folder VOCABULARY)', section: 'Vocabulary', deadline: new Date(2021, 3, 21) },
                { id:5, title: 'TRANSLATION EXERCISES', desc: 'file TRANSLATION EXERCISES (folder TRANSLATION EXERCISES)', section: 'Translation', deadline: new Date(2021, 3, 22) },
                { id:6, title: 'Поколение Z', desc: 'file Поколение Z (folder TRANSLATION EXERCISES)', section: 'Translation', deadline: new Date(2021, 3, 22) },
                { id:7, title: 'The generational power balance', desc: 'file The generational power balance   (folder TEXTS FOR READING)', section: 'Reading Comprehension Tests', deadline: new Date(2021, 3, 23) },
                { id:8, title: 'The Adolescents', desc: 'file The Adolescents   (folder TEXTS FOR READING)', section: 'Reading Comprehension Tests', deadline: new Date(2021, 3, 23) },
                { id:9, title: 'The Lumber Room', desc: 'File The Lumber Room (folder TEXTS FOR READING)', section: 'Reading Comprehension Tests', deadline: new Date(2021, 3, 24) },
                { id:10, title: 'Work-life family dynamic', desc: 'File Work-life family dynamic (folder TEXTS FOR READING)', section: 'Reading Comprehension Tests', deadline: new Date(2021, 3, 24) },
                { id:11, title: 'The evolution of the family', desc: 'file The evolution of the family  (folder TEXTS FOR REPORTS)', section: 'Reports/Debates', deadline: new Date(2021, 3, 25) },
                { id:12, title: 'Family and technologies', desc: 'file Family and technologies (folder TEXTS FOR REPORTS)', section: 'Reports/Debates', deadline: new Date(2021, 3, 25) },
                { id:13, title: 'Teenagers in turmoil', desc: 'file TEENAGERS (folder TEXTS FOR REPORTS)', section: 'Reports/Debates', deadline: new Date(2021, 3, 26) },
                { id:14, title: 'Generation Alpha', desc: 'file Generation Alpha (folder TEXTS FOR REPORTS)', section: 'Reports/Debates', deadline: new Date(2021, 3, 26) },
                { id:15, title: 'The Difficult Child', desc: 'file The Difficult Child (folder TEXTS FOR REPORTS)', section: 'Reports/Debates', deadline: new Date(2021, 3, 27) },
                { id:16, title: 'Child adoption: for and against', desc: '', section: 'Dialogues', deadline: new Date(2021, 3, 27) },

                { id:17, title: '', desc: 'Nowadays, families are not as close as in the past and a lot of people have become used to this. Do the advantages of this trend outweigh the drawbacks?', section: 'Writing', deadline: new Date(2021, 3, 28) },
                { id:18, title: '', desc: 'Nowadays it is more difficult to bring up a child than it used to be some years ago. Do you agree?', section: 'Writing', deadline: new Date(2021, 3, 28) },
                { id:19, title: '', desc: 'Nowadays many parents are permissive. Do you think it is a positive trend?', section: 'Writing', deadline: new Date(2021, 3, 28) },
                { id:20, title: '', desc: 'An increasing number of people are now using dating sites to meet their second halves. Do you think that this tendency helps people to socialize or does more harm than good? Give your opinion. Provide relevant examples if necessary.', section: 'Writing', deadline: new Date(2021, 3, 28) },
                { id:21, title: 'Phrases for rendering', desc: 'files Phrases for rendering + Phrases for Rendering New  (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 3, 29) },
                { id:22, title: 'Здоровые дети в здоровой семье', desc: 'File Здоровые дети в здоровой семье (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 3, 29) },
                { id:23, title: 'Family matters / семейные отношения', desc: 'File Family matters / семейные отношения (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 3, 30) },
                { id:24, title: 'Японская методика/Indian upbringing', desc: 'File Японская методика/Indian upbringing (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 3, 30) },
                { id:25, title: 'A baby with a baby', desc: 'File A baby with a baby (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 4, 3) },
                { id:26, title: 'Dealing with difficult children', desc: 'File Dealing with difficult children (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 4, 3) },
                { id:27, title: 'Terrific tips for taming beastly boys and ghastly girls', desc: 'File Terrific tips for taming beastly boys and ghastly girls (folder RENDERING)', section: 'Rendering', deadline: new Date(2021, 4, 4) },
                
                { id:28, title: 'For Parents happiness is a High Bar', desc: 'Videofile For Parents happiness is a High Bar + document  For Parents happiness is a High Bar (folder VIDEO)', section: 'Video', deadline: new Date(2021, 4, 5) },
                { id:29, title: 'Where the Wild Things Are', desc: 'Videofile Where the Wild Things Are + document  Where the Wild Things Are (folder VIDEO)', section: 'Video', deadline: new Date(2021, 4, 5) },
                { id:30, title: 'Bridging the generation gap', desc: 'Videofile Bridging the generation gap + document  Bridging the generation gap (folder VIDEO)', section: 'Video', deadline: new Date(2021, 4, 6) },
                { id:31, title: 'Helicopter Parents', desc: 'Videofile Helicopter Parents ( answer the question Are helicopter parents harmful or beneficial? Provide examples from the video)', section: 'Video', deadline: new Date(2021, 4, 6) },
                
                { id:32, title: 'Marriage (lecture)', desc: 'Audiofile Marriage.  Listen to the lecture. Make notes. Be ready to comment on the contents (folder AUDIO)', section: 'Audio ', deadline: new Date(2021, 4, 7) },
                { id:33, title: 'Why do men want to be fathers', desc: 'Audiofile Why do men want to be fathers + document  Why do men want to be fathers (folder AUDIO)', section: 'Audio ', deadline: new Date(2021, 4, 7) },
                { id:34, title: 'Japanese style of parenting', desc: 'Audiofile Japanese style of parenting + document  Japanese style of parenting (folder AUDIO)', section: 'Audio ', deadline: new Date(2021, 4, 7) },
                { id:35, title: 'Family and Globalization', desc: 'Audiofile Family and Globalization Listen to the lecture. Make notes. Be ready to comment on the contents (folder AUDIO).', section: 'Audio ', deadline: new Date(2021, 4, 7) },
                { id:36, title: 'Marriage and health', desc: 'Audiofile Marriage and health. Listen to the lecture. Make notes. Be ready to comment on the contents (folder AUDIO).', section: 'Audio ', deadline: new Date(2021, 4, 7) },

                { id:37, title: '', desc: 'PREPARATORY TESTS', section: 'Preparatory tests', deadline: new Date(2021, 4, 8) },
                { id:38, title: '', desc: 'THE CURIOUS INCIDENT OF THE DOG IN THE NIGHT-TIME (the book + the assignments) –(folder  INDIVIDUAL READING) ', section: 'INDIVIDUAL  READING', deadline: new Date(2021, 4, 8) },
            ]
        }
    },
    methods: {
        isActive(task){
            //const today = new Date();
            return task.deadline.toLocaleDateString() === false;//today.toLocaleDateString();
        },
        isVisible(task){
            const today = new Date();
            return task.deadline.toLocaleDateString() !== today.toLocaleDateString();
        }
    },
    computed: {
        
    },
    mounted() {
        
    },
    beforeUnmount(){
        
    },
    watch: {
        
    }
}
</script>

<style>

</style>