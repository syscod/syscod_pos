openerp.point_sale = function(instance) {

    instance.point_sale = {};

    var module = instance.point_sale;

    openerp_pos_db(instance,module);  		 // import db.js
    
   // openerp_pos_msgbox(instance,module);	 // import msgBox

    openerp_pos_models(instance,module);     // import pos_models.js

    openerp_pos_basewidget(instance,module); // import pos_basewidget.js

    openerp_pos_keyboard(instance,module);   // import  pos_keyboard_widget.js

    openerp_pos_scrollbar(instance,module);  // import pos_scrollbar_widget.js

    openerp_pos_screens(instance,module);    // import pos_screens.js
    
    openerp_pos_widgets(instance,module);    // import pos_widgets.js

    openerp_pos_devices(instance,module);    // import pos_devices.js

    instance.web.client_actions.add('pos.ui', 'instance.point_sale.PosWidget');
};

    
