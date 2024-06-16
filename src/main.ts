import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

// TODO: научиться подключать два файла локализации
import localeRu from "@/locale/ru.json";
type MessageSchema = typeof localeRu;

import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './app.vue'
import router from './router'
import './registerServiceWorker'

import Highcharts from "highcharts";
import HighchartsTheme from "highcharts/themes/high-contrast-dark"
HighchartsTheme(Highcharts);
import MapInit from "highcharts/modules/map";
MapInit(Highcharts);

const app = createApp(App)

// регистрируются все иконки
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router)

// подключение локализации
app.use(createI18n<[MessageSchema], 'ru'>({
    locale: 'ru',
    messages: {
        ru: localeRu
    },
}))

app.mount('#app')
