<template>
    <div>
        <h1>Compilation Process</h1>
        <div v-for="(step, index) in compilationSteps" :key="index">
            <h2>{{ step.title }}</h2>
            <p>{{ step.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            compilationSteps: [
                {
                    title: 'Lexical Analysis',
                    description: 'This step breaks the source code into tokens.',
                },
                {
                    title: 'Syntax Analysis',
                    description: 'This step checks the grammar and structure of the code.',
                },
                {
                    title: 'Semantic Analysis',
                    description: 'This step ensures the code follows the language rules and semantics.',
                },
                {
                    title: 'Code Generation',
                    description: 'This step translates the code into binary instructions.',
                },
                {
                    title: 'Linking',
                    description: 'This step combines multiple object files into an executable binary.',
                },
            ],
        };
    },
};
</script>