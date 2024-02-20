

const { createApp } = Vue

createApp({
    data() {
        return {

            newElement: "",


            toDoList: [
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Comprare mangiare cani",
                    done: true,
                },
                {
                    text: "Ripassare concetti vue",
                    done: false,
                },
                {
                    text: "Comprare biscotti per asilo",
                    done: true,
                },
                {
                    text: "Fare lavatrice",
                    done: false,
                },
                {
                    text: "Svuotare lavastoviglie",
                    done: true,
                },
            ]


            
            
        }


    },

    methods: {

        // rimuovo una proprietà dall'oggetto
        deleteElement(todoDone){
            this.toDoList.splice(todoDone,1)
        },

        addElement() {

            // aggiungo il testo scritto dentro il campo di input alla lista
           

            this.toDoList.push({
                text: this.newElement,
                done: false 
              });

            // cancello il contenuto del campo di input
            this.newElement = "";

        },

        changeDone(){
            if(this.toDoList.done == true){
                this.toDoList.done == false
            }
        }


    }
}).mount('#app');