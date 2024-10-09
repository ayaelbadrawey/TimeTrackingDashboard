<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    background: {
        type: String,
        default: '#3498db'
    },
    product: {
        type: Object,
        default: () => ({
            category: '',
            price: '',
            title: '',
            rating: { count: 0 }
        }),
    }
});

const boxShadowStyle = {
    boxShadow: `0px -35px ${props.background}`
};
</script>
<template>
    <div class="tracking-card" :style="boxShadowStyle">
        <div class="category">
            <span class="title">{{ product.category }}</span>
            <svg fill="#D8D8D8" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.055 32.055" xml:space="preserve">
                <g>
                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
		C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
		s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
		c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
                </g>
            </svg>
        </div>
        <div class="category-content">
            <span class="price">{{ product.price }}$</span>
            <div class="description-content">
                <span class="description">{{ product.title }}</span>
                <div class="stock-content">
                    <span v-if="product.rating.count > 0">InStore</span>
                    <span v-else>OutOfStore</span>
                    <span>{{ product.rating.count }}</span>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.tracking-card {
    font-family: Rubik;
    background-color: #1C204B;
    width: 255px;
    height: 199px;
    border-radius: 15px;
    margin: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
        font-size: 18px;
        font-weight: 500;
        line-height: 21.33px;
        color: #fff;
    }

    .category {
        display: flex;
        justify-content: space-between;
        width: 80%;
    }

    .category-content {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        width: 85%;

        .price {
            font-size: 39px;
            font-weight: 300;
            line-height: 46.22px;
            color: #fff;
            padding: 5px;
        }

        .description-content {
            display: flex;
            justify-content: space-between;

            .description {
                font-size: 12px;
                font-weight: 400;
                line-height: 14.22px;
                width: 130px;
                display: block;
                color: #BBC0FF;
            }

            .stock-content {
                display: flex;
                flex-direction: column;
                justify-content: end;
                text-align: center;
                color: #fff;

                span {
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 14.22px;
                }
            }
        }
    }


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

        .category-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .description {
                text-align: right;
            }
            .stock-content {
                display: none !important;
            }
        }

    }
}
</style>