<script setup>
import TrackingCard from '../components/TrackingCard.vue'
</script>

<template>
    <main>
        <div class="container">
            <div class="best-sales">
                <TrackingCard />>
            </div>
            <div class="tracking">
                <TrackingCard v-for="i in 10"></TrackingCard>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;

    .container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 20px;
        width: 90%;
    }

    .best-sales {
        grid-column: span 2;
    }

    .tracking {
        grid-column: span 10;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }
}

@media (max-width: 1400px) and (min-width: 769px) {
    main {
        padding-top: 70px;
        grid-template-columns: 1fr;

        .container {
            grid-template-columns: repeat(12, 1fr);
        }

        .best-sales {
            grid-column: span 4;
        }

        .tracking {
            grid-column: span 8;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media (max-width: 768px) {
    main {
        padding-top: 70px;
        grid-template-columns: 1fr;
        height: 100vh;

        .container {
            grid-template-columns: 1fr;
            gap: 0;
        }

        .best-sales {
            grid-column: span 1;
            width: 100%;
        }

        .tracking {
            grid-column: span 1;
            display: block;
        }
    }
}
</style>