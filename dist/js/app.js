const App = new Vue({
  el: "#app",
  data() {
    return {
      titlePage: "JoelFzop" ,
      navigation: [
        { link: "Inicio", url: "/" },
        { link: "Educación", url: "#education" },
        { link: "Habilidades", url: "#skills" },
        { link: "Trabajos", url: "#jobs" }
      ],

      skills: [
        {
          skill: "html 5",
          bgColor: "bg-yellow-700",
          nivel: '80%',
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="mdi:language-html5" data-inline="false"></span>`,
        },
        {
          skill: "css 3",
          bgColor: "bg-blue-500",
          nivel: '50%',
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="bx:bxl-css3" data-inline="false"></span>`,
        },
        {
          skill: "javascript",
          nivel: '60%',
          bgColor: "bg-yellow-500",
          img: ` <span class="iconify text-gray-800 text-2xl mr-2" data-icon="fa-brands:js-square" data-inline="false"></span>`,
        },
        {
          skill: "php",
          nivel: '50%',
          bgColor: "bg-blue-700",
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="cib:php" data-inline="false"></span>`,
        },
        {
          skill: "python",
          bgColor: "bg-yellow-400",
          nivel: '30%',
          img: ` <span class="iconify text-gray-800 text-2xl mr-2" data-icon="fa-brands:python" data-inline="false"></span>`,
        },
        {
          skill: "laravel",
          nivel: '65%',
          bgColor: "bg-red-600",
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="cib:laravel" data-inline="false"></span>`,
        },
        {
          skill: "vue js",
          bgColor: "bg-green-500",
          nivel: '80%',
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="cib:vue-js" data-inline="false"></span>`,
        },
        {
          skill: "bootstrap 4+",
          bgColor: "bg-indigo-700",
          nivel: '70%',
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="bi:bootstrap-fill" data-inline="false"></span>`,
        },
        {
          skill: "tailwindcss",
          bgColor: "bg-green-400",
          nivel: '80%',
          img: ` <span class="iconify text-gray-800 text-2xl mr-2" data-icon="simple-icons:tailwindcss" data-inline="false"></span>`,
        },
        {
          skill: "github",
          bgColor: "bg-gray-900",
          nivel: '70%',
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="ant-design:github-outlined" data-inline="false"></span>`,
        },
        {
          skill: "node js",
          bgColor: "bg-green-500",
          nivel: '50%',
          img: `<span class="iconify text-gray-800 text-2xl mr-2" data-icon="grommet-icons:node" data-inline="false"></span>`,
        },
      ],

      nameLenguje: "",
      nivelSkill: 0,
      bgColor: "bg-green-500",
    };
  },

  created() {},

  methods: {
    changeLenguajes(index = 0, nivel = 0) {
      this.nameLenguje = this.skills[index].skill;
      this.bgColor = this.skills[index].bgColor;
      this.nivelSkill = nivel;
    },
  },
});
