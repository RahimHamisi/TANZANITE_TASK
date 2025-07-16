// src/plugins/vuetify.ts
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // only import ONCE

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#35898C',     // ✅ your custom primary color
          secondary: '#FFCA28',
          accent: '#82B1FF',
          background: '#F5F5F5',
        },
      },
    },
  },
});
