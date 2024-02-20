

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

            // controllo per verificare se il campo di input è vuoto
            if (this.newElement.trim() === "") {
                return;
            }

            // aggiungo il testo scritto dentro il campo di input alla lista
           

            this.toDoList.push({
                text: this.newElement,
                done: false 
              });

            // cancello il contenuto del campo di input
            this.newElement = "";

        },

        inverterDone(toDoList) {
            toDoList.done =! toDoList.done;
          },

    }
}).mount('#app');