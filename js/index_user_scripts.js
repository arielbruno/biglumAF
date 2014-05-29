(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
    {
        $(document).on("click", "#btnp", function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sideBar"));  
        });
}
 $(document).ready(register_event_handlers);
})();

function toggleSideBar()
{
    uib_sb.toggle_sidebar($('#sideBar'));
    $('#sideBar').css('z-index','500');
    
}

function ahorrar()
{
    $('#btnToggleSideBar').show();
    //$('#btnComprar').Click();
}

function btnSalir()
{
    toggleSideBar();
    $('#btnToggleSideBar').hide();
}