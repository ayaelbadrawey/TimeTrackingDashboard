<script setup>

</script>
<template>
    <div class="tracking-card">
    </div>
</template>



<style lang="scss" scoped>
.tracking-card {
    background-color: #1C204B;
    width: 255px;
    height: 199px;
    border-radius: 15px;
    box-shadow: 0px -35px #FF5E7D;
    margin: 25px 0;
}

@media (max-width: 1400px) and (min-width: 769px) {
    .tracking-card {
        width: auto;
    }
}

@media (max-width: 768px) {
    .tracking-card {
        width: 100%;
        margin-bottom: 50px;
    }
}
</style>