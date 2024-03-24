<template>
    <div>
        <h1>Directive Set and Binary Mapping</h1>
        <ul>
            <li v-for="(directive, index) in directiveSet" :key="index">
                {{ directive.name }}: {{ directive.binary }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            directiveSet: [
                { name: 'Directive 1', binary: '0001' },
                { name: 'Directive 2', binary: '0010' },
                { name: 'Directive 3', binary: '0011' },
                // Add more directives here
            ]
        };
    }
};
</script>

<style>
/* Add your component styles here */
</style>