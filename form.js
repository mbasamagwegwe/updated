   function handleClick()
          {         
        var amountCorrect = 0;          
        for(var i = 1; i <= 10; i++) {
          var radios = document.getElementsByName('group'+i);
          for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value === "good" && radio.checked ) {
              amountCorrect++;
            
         document.write("You are good to go!" );
            } 
            if (radio.value === "bad" && radio.checked)  {
                amountCorrect++;
              
           document.write("Remain home!" );
              } 
        }
    }
}
    