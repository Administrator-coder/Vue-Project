<template>
    <div>
        <h1>Computer Memory Model</h1>
        <table>
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, address) in memory" :key="address">
                    <td>{{ address }}</td>
                    <td>{{ data }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memory: {
                0x0000: 0x00,
                0x0001: 0x01,
                0x0002: 0x02,
                // Add more memory addresses and data here
            }
        };
    }
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid black;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}
</style>