
function addEventListener() {


    let myFirstArray = [];

    for (let i = 0; i < 10; i++) 
        {
            var Value = document.getElementById("input" + i).value;
        
        if (Value === 0) {
        
            myFirstArray.push(0);}
          else{
            myFirstArray.push(Number(Value));
            
        }
           
        } 
        // מייצרים טבלה 
        // שורת כותרת עליונה
        //הוספת המספרים לשורת הכותרת העליונה 
        //ניקוי שדות בטבלה +++
        //יצירת שורות בטבלה 
       // הצגת הטבלה בדף
        //לולאות הכפל

    }
/*
    const result = document.getElementById("result");
    result.value = ""; 

  
    for (let i = 0; i < myFirstArray.length; i++)
        {
        let row = "";
        for (let j = 0; j < 10; j++) {

            row += (myFirstArray[i] * j) + "\t"; 
        }
        result.value += row + "\n"; 
        }
*/  
