function val(){
    var a=document.getElementById('num1').value
       var len = a.split(",")
     document.getElementById("res").innerHTML=len.length;
    
    }



    function one(){

        var a=document.getElementById('num1').value
  
        let startval = document.getElementById('startval').value;
       

        var b=a.split(",")
        document.getElementById('res').innerHTML=b.at(startval);

    }


    function two(){

        var a=document.getElementById('num1').value
document.getElementById('res').innerHTML=a.toString();

    }


    function three(){
        var a=document.getElementById('num1').value
  
        let startval = document.getElementById('startval').value;
       

        var b=a.split(",")
        document.getElementById('res').innerHTML=b.join(startval);

    }


    function four(){
        var a=document.getElementById('num1').value
        var b=a.split(",")
        document.getElementById('res').innerHTML=b.pop();

    }


    function five(){
        var a1=document.getElementById('num1').value
        var b1=a1.split(",")
        var d1 =document.getElementById('startval').value
        b1.push(d1)
        document.getElementById("res").innerHTML=b1
    }


    

    function six(){
        var a1=document.getElementById('num1').value
        var b1=a1.split(",")
        var d1 =document.getElementById('startval').value
        b1.shift(d1)
        document.getElementById("res").innerHTML=b1
    }


    
    function seven(){
        var a1=document.getElementById('num1').value
        var b1=a1.split(",")
        var d1 =document.getElementById('startval').value
        b1.unshift(d1)
        document.getElementById("res").innerHTML=b1
    }

 

    function eight() {
        var a=document.getElementById('num1').value
        var b=a.split(",")
        document.getElementById('res').innerHTML=b.pop();

    }


    function nine() {
        var a=document.getElementById('num1').value
  
        let startval = document.getElementById('startval').value;
       

        var b=a.split(",")
        document.getElementById('res').innerHTML=b.concat(startval);
    }


    function ten(){
        var a=document.getElementById('num1').value
  
        let startval = document.getElementById('startval').value;
       

        var b=a.split(",")
        document.getElementById('res').innerHTML=b.copyWithin(startval);
    }


    function eleven()
    {
        let splicing = document.getElementById('num1').value;
        let splice = splicing.split(",");
        let val1 = document.getElementById("startval").value;
        let val2 = document.getElementById("endval").value;
        splice.splice(val1,val2)
        document.getElementById('res').innerHTML = splice;
    }


    function twele(){
        let splicing = document.getElementById("num1").value;
        let spliced = splicing.split(",");
        let val3 = document.getElementById("startval").value;
        let val4 = document.getElementById("endval").value;
         let c=spliced.toSpliced(val3,val4)
        document.getElementById("res").innerHTML = c;
         

    }


    function thirteen(){
        var a=document.getElementById('num1').value
        var b=a.split(",")
        var startval=document.getElementById('startval').value;
        document.getElementById('res').innerHTML=b.slice(startval)
    }