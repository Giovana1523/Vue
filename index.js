var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '',
        messages: [],
        curtido: 'Curtido',
        descurtir: 'Descurtido'
    },

    methods: {
        Postar: function () {
            var newTw = {
                texto: this.message,
                curtidas: 0,
                descurtidas: 0,
            };
            this.messages.push(newTw);

        },
        Curtir: function (tweet) {
            //document.getElementById("Curtir").style.color = "#FFFFFF";
            tweet.curtidas++;
            if(tweet.descurtidas>0){
                tweet.descurtidas--;
            }
         
            console.log('curtido');
            
        },
        Descurtir: function (tweet) {
            if(tweet.curtidas>0){
                tweet.curtidas--;
            }
            tweet.descurtidas++;
           
        }


    }
});
