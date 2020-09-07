// MenuInternas
const menuInt = document.getElementById('menuInt');
menuInt.innerHTML = `
<div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
    </div> 
    <div id="navbar" class="collapse navbar-collapse ">
    <ul class="nav navbar-nav navbar-left">
        <li><img src="../dist/img/logo.png" class="ola logo-seu-contador" alt="SeuContador • Com você. Em todos os momentos"></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">  
        <li class=""><a id="ola" class="ola" href="../"></a></li>        
        <li id="btSobre"><a href="../sobre"  id="menu-equipe"></a></li>                                                                                    
        <li id="btServicos"><a href="../servicos" id="menu-servicos"></a></li>                                        
        <li id="btContato" ><a href="../contato"id="menu-contato"></a></li>
        <!-- <li><a href="" target="_blank" id="menu-fb"></a></li>                     -->
        <li class="" ><a href="https://wa.me/5511989569207" target="_blank" class="telefone"><i class="fab fa-whatsapp"></i> 11 98956-9207</a></li>                                
    </ul>
</div>  
`
// declarar cada item do menu
    const btSobre = document.getElementById('btSobre');
    const btServicos = document.getElementById('btServicos');
    const btContato = document.getElementById('btContato');

    

  