console.log("************** DELIVERABLE 05 *********************");

//Ejercicio SlotMachine
class SlothMachine {
    constructor()
    {
        this.monedas = 0;
    }
    monedas: number;
  
     play():string
    {
        this.monedas = ++this.monedas;
        let a,b,c;
        a = Math.random() < 0.5;
        b= Math.random() < 0.5;
        c = Math.random() < 0.5; 
        if(a  && b  && c ){
            const mensajeAcierto = `Congratulations!!!. You won ${this.monedas} coins!!`;
            this.monedas = 0; 
            return mensajeAcierto;
        } 
        else return "Good luck next time!!";
    }
  
  
  }
  
  console.log("Pruebas SlotMachine");
  const machine1:SlothMachine = new SlothMachine();
  console.log(machine1.play()); 
  console.log(machine1.play()); 
  console.log(machine1.play());
  console.log(machine1.play()); 
  console.log(machine1.play()); 