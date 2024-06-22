// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: process.env.NAME,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet",href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"}
      ]
    },
  },
  runtimeConfig: {
    public: {
      NAME: process.env.NAME
    }
  },
})
