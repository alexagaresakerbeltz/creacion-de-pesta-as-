 var menus = [{titulo:''},{titulo:''},{titulo:''},{titulo:''},{titulo:''}];

       var y=0;
       function capturar () {


         y++;
        var titulo = document.getElementById("title").value;
        var contenido = document.getElementById("contenido").value;

        document.getElementById('conte-ti' + y).innerHTML= titulo + ' <a href="#">----</a>';
        document.getElementById('cont' + y).innerHTML= contenido;
        menus[y] = titulo + contenido;
        document.getElementById("title").value =" ";
        document.getElementById("contenido").value =" ";

        y++
        var item=document.createElement("li");
        item.setAttribute("class","resul",);  
        item.setAttribute("id","conte-ti" +y,);
        var fat = document.getElementsByTagName("li")[0].parentNode;
        fat.appendChild(item);

        var tex = document.createElement("div");
        tex.setAttribute("class","conte-pan",);
        tex.setAttribute("id", "cont"+ y);
        var sis = document.getElementById("panele");
        sis.appendChild(tex);


             (function (d)
                        {
                        let tabs = Array.prototype.slice.apply( d.querySelectorAll('.resul'));
                        let panel = Array.prototype.slice.apply(d.querySelectorAll('.conte-pan'));
                        d.getElementById('contit').addEventListener('click', function(e){
                             if (e.target.classList.contains('resul'))
                         {
                        let i = tabs.indexOf(e.target);
                        tabs.map(x => x.classList.remove('active'));
                        tabs[i].classList.add('active');
                        panel.map(y => y.classList.remove('active'));
                        panel[i].classList.add('active');}} );})(document);


                y--;

                var btn = document.createElement("label");
                var bon = document.createTextNode(" x");
                btn.appendChild(bon);
                btn.setAttribute("onclick", "eliminar()");
                document.getElementById('conte-ti' + y).appendChild(btn);


            }


            function eliminar() 
            {

                var elimi = document.getElementById('contit');
                referencia = document.getElementById('conte-ti'+y);
                elimi.removeChild(referencia);
                var elimx = document.getElementById('cont'+y).parentNode;
                referencia2 = document.getElementById('cont'+y);
                elimx.removeChild(referencia2);

                y--;
            
            }
  