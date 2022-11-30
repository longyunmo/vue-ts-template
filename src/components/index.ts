import type { Component } from 'vue'
import AsideView from './aside/AsideView.vue'
import FooterView from './footer/FooterView.vue'
import HeaderView from './header/HeaderView.vue'
import MainView from './main/MainView.vue'

const components: {
  [propName: string]: Component
} = {
  AsideView,
  FooterView,
  HeaderView,
  MainView
}
export default components