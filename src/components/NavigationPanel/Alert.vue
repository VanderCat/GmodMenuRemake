<template>
     <v-btn icon @click="runProblems">
        <v-badge :content="Problems.count" :color="Problems.severe? 'warning' : 'primary'"  overlap>
            <v-icon>mdi-alert</v-icon>
        </v-badge>
    </v-btn>
</template>

<script>
export default {
    name: "Alert",
    computed: {
        Problems() {
            return this.$store.state.problems //trick to enable reactivity
        }
    },
    methods: {
        runProblems() {
            window.lua.run('OpenProblemsPanel()')
        }
    }
}
</script>