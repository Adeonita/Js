function createCalculator(){
 
    return {

        display: document.querySelector("#display"),

        start(){
            this.clickButton();
            this.pressEnter();
        },

        clickButton() {
            document.addEventListener("click", function(event){
                const element = event.target;
                if(element.classList.contains("btn-num")) {
                    this.btnForDisplay(element.innerText);
                }if(element.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }if(element.classList.contains("btn-del")){
                    this.deleteOne();
                }if(element.classList.contains("btn-equal")){
                   this.calculate(element.innerText);
                }
            }.bind(this));
        },

        btnForDisplay(value){
            this.display.value += value;
        },

        clearDisplay(){
            this.display.value = "";
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        }, 

        calculate(value){
            let count = this.display.value;
                
            try {
                count = eval(count);
                if(!count){
                    alert('Conta inválida!');
                }
                this.display.value = String(count);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.calculate();
                }
            });
        },

    };
}

const calculator = createCalculator();
calculator.start();