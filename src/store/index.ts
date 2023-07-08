import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IState, IAlert } from '../types'
import { IProduct, IProductBasket } from '../types/index'

export const key: InjectionKey<Store<IState>> = Symbol()

export const store = createStore<IState>({
  state: {
    productsInCart: [],
    status: {
      text: '',
      type: '',
      check: false,
      sending: false,
    },
  },
  getters: {
    products(state: IState) {
      return state.productsInCart
    },
    status(state: IState) {
      return state.status
    },
    cartPriceSum(state: IState) {
      return state.productsInCart.reduce((acc: number, prod: IProductBasket) => {
        const count = prod.count * prod.price

        return acc + count
      }, 0)
    },
    cartProductsSum(state: IState) {
      return state.productsInCart.reduce((acc: number, prod: IProductBasket) => {
        return acc + prod.count
      }, 0)
    },
    hasProducts(state: IState) {
      return state.productsInCart.length > 0
    },
  },
  actions: {
    addProduct({ commit }: any, productData: IProduct) {
      commit('ADD_PRODUCT', productData)
    },
    removeProduct({ commit }: any, productId: number) {
      commit('REMOVE_PRODUCT', productId)
    },
    setAlert({ commit }: any, props: IAlert) {
      commit('SET_ALERT', props)
    },
    async sendProducts({ getters, commit }: any) {
      const products = getters.products

      if (products.length === 0) {
        commit('SET_ALERT', { text: 'Brak produktów w koszyku', type: 'error', time: 4000 })
        return
      }

      try {
        commit('SET_PROGRESS')
        await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(products),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then(async (response) => {
          if (!response.ok) {
            commit('SET_ALERT', { text: 'Wystąpił błąd podczas wysłyania zamówienia', type: 'error', time: 4000 })
            commit('SET_PROGRESS')
            return {
              data: [],
              error: 'Wystąpił błąd podczas wysyłania zamówienia',
            }
          }
          store.state.productsInCart = []
          commit('SET_ALERT', { text: 'Zamówienie zostało złożone', type: 'success', time: 4000 })
          commit('SET_PROGRESS')
          return {
            data: await response.json(),
            error: null,
          }
        })
      } catch (error) {
        console.log(error)
        commit('SET_ALERT', { text: 'Wystąpił błąd podczas wysłyania zamówienia', type: 'error', time: 4000 })
        commit('SET_PROGRESS')
      }
    },
  },
  mutations: {
    SET_ALERT(state: IState, props: IAlert) {
      state.status.check = !state.status.check
      state.status.text = props.text
      state.status.type = props.type
      setTimeout(() => {
        state.status.check = false
      }, props.time)
    },
    SET_PROGRESS(state: IState) {
      state.status.sending = !state.status.sending
    },
    ADD_PRODUCT(state: IState, productData: IProduct) {
      const product = state.productsInCart.find((prod: IProduct) => prod.id === productData.id)

      if (!product) {
        store.commit('SET_ALERT', { text: 'Dodano do koszyka!', type: 'success', time: 1500 })

        state.productsInCart.push({
          ...productData,
          count: 1,
        })
        return
      }

      state.productsInCart = state.productsInCart.map((prod: IProductBasket) => {
        if (prod.id === productData.id) {
          store.commit('SET_ALERT', { text: 'Dodano do koszyka!', type: 'success', time: 1500 })

          return {
            ...prod,
            count: prod.count + 1,
          }
        }

        return prod
      })
    },

    REMOVE_PRODUCT(state: IState, id: number) {
      const productInCart = state.productsInCart.find((prod: IProduct) => prod.id === id)
      if (!productInCart) return

      state.productsInCart = state.productsInCart.filter((prod: IProduct) => prod.id !== id)
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
