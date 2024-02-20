

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
        }


    }
}).mount('#app');