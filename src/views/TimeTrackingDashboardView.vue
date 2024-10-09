<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import TrackingCard from '../components/TrackingCard.vue'
import BestSalesCard from '../components/BestSalesCard.vue'

const store = useStore();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

onMounted(() => {
    store.dispatch('fetchProducts');
});

const randColors = ['#FF8B64', '#55C2E6', '#FF5E7D', '#F1C75B', '#4BCF82', '#7335D2']

const productList = computed(() => store.getters.getProducts);
const isLoading = computed(() => store.getters.isLoading);
</script>

<template>
    <main>
        <span class="loading-spinner" v-if="isLoading">.</span>
        <div v-else class="container">
            <div class="best-sales">
                <BestSalesCard></BestSalesCard>
            </div>
            <div class="tracking">
                <TrackingCard :background="randColors[getRandomInt(0, 5)]" v-for="product in productList"
                    :key="product.id" :product="product"></TrackingCard>
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

.loading-spinner {
    display: inline-block;
    width: 100px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    padding: 20px 20px;
    animation: spinner 1.5s infinite linear;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
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