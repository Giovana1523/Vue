var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '',
        lista: [
            {
                realizada: false,
                texto: ""
            }
        ],
    },
    methods:{
        Adicionar: function () {
            var novoItem ={
                texto: this.message,
                realizada: false,
            };
            this.lista.push(novoItem);
            
        }
    }
});
