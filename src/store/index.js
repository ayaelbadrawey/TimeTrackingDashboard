import { createStore } from 'vuex';

const store = createStore({
    state: {
        products: [],
        loading: false
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                commit('setLoading', true);
                const response = await fetch('https://fakestoreapi.com/products?limit=10');
                const data = await response.json();
                commit('setProducts', data);
                commit('setLoading', false);
            } catch (error) {
                commit('setLoading', false);
                console.error('Failed to fetch products:', error);
            }
        },
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        isLoading(state){
            return state.loading;
        }
    },
});

export default store;
