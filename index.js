
      let todolistElement =  document.getElementById("todolistElement");

      let userInputval = document.getElementById("userInputval");


      // let arrayobtodo = [
      //   {

      //     title:"html",
      //     id:1
      //   }
      // ]


      function  onCheckparsetodo(){
       
        let nwstrin = localStorage.getItem("mytodolist");

        if(nwstrin === null){

          return []
        }

        else{

          let parsetodo = JSON.parse(nwstrin);

          return parsetodo;

        }
      }

      let arrayobtodo = onCheckparsetodo();




      function onAppendElement(todo){

        let checkid = "mycheck" + todo.id;

        let titleid = "mytit" +todo.id;

        let todoid ="todo" +todo.id;

        

        let listitem = document.createElement("li")

        listitem.classList.add("list-item");

        listitem.id = todoid;

        todolistElement.appendChild(listitem);



        let checkboxitem = document.createElement("input");

        checkboxitem.type = "checkbox";

        checkboxitem.id =checkid;

        if(todo.isChecked === true){

          checkboxitem.checked = true;
        }

        checkboxitem.onclick = function(){

          onLineThrough(checkid,titleid,todoid)
        }

        listitem.appendChild(checkboxitem);


        let labelitem = document.createElement("label");

        labelitem.classList.add("label-item");

        labelitem.htmlFor = checkid;

        listitem.appendChild(labelitem);




        let titleitem = document.createElement("h4");

        titleitem.textContent = todo.title;

        titleitem.id = titleid;

        if(todo.isChecked === true){

         titleitem.classList.add("checked");
        }

        labelitem.appendChild(titleitem);



        let deleteitem = document.createElement("button")

        deleteitem.classList.add("delete-button");

        deleteitem.onclick = function(){

          onDeletebutton(todoid)
        }

        labelitem.appendChild(deleteitem);



        let trashitem = document.createElement("i")

        trashitem.classList.add("fa-solid", "fa-trash");

        deleteitem.appendChild(trashitem);

        
      }


      for(each of arrayobtodo){

        onAppendElement(each);
      }


     function onAddingTitle(){

      let date = new Date();

      let uniquedId = Math.ceil(Math.random() * date.getTime())

      // let totalId = arrayobtodo.length + 1;

      let nwtodoobj = {

        title:userInputval.value,
        id: uniquedId,
        isChecked : true


      }

      if(userInputval.value ===""){

        alert("please enter valid input");

      }

      else{

        onAppendElement(nwtodoobj);

        arrayobtodo.push(nwtodoobj);

        userInputval.value = "";

      }

     }


    function onLineThrough(checkid,titleid,todoid){

       let checkboxitem = document.getElementById(checkid);

       let titleitem = document.getElementById(titleid);


       if(checkboxitem.checked === true){


        titleitem.classList.add("checked");

       }

       else{

        titleitem.classList.remove("checked");

       }


       let sclc = todoid.slice(4);

       let index = arrayobtodo.findIndex((each) => each.id == sclc)

      //  console.log(index);


       for(i = 0 ; i<arrayobtodo.length; i++){

        if(index === i){

          if(arrayobtodo[i] ===  false){

            arrayobtodo[i].isChecked = true;

          }

          else{

            arrayobtodo[i].isChecked = false;
          }

        }
       }

    }


    function onDeletebutton(todoid){


      let mytodo = document.getElementById(todoid);

      todolistElement.removeChild(mytodo);


      let slc = todoid.slice(4);

      let index = arrayobtodo.findIndex((each)=>each.id == slc);

      console.log(index);

      arrayobtodo.splice(index,1);

    }


   function onSavebutton(){

    let stringitem = JSON.stringify(arrayobtodo);

    localStorage.setItem("mytodolist",stringitem);


   }
    
