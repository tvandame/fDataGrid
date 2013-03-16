fDataGrid
===========

SimpleJavaScript Data Grid (Simple Pure JavaScript Data Grid)


Example
=========================================================

var oDataGrid = new fDataGrid(<container div id>);

 // Set Table Attributes
oDataGrid.setId(<assigned to datagrid table id>);
oDataGrid.setName(<assigned to datagrid table name>);
oDataGrid.setClass(<assigned to datagrid table class>);

// Add Data Grid Caption
oDataGrid.addCaption(<assigned to datagrid table caption>);

// Enable Multiple Select Option
// This will provide you with a checkbox next to each row
oDataGrid_1.optionsMultiSelect.enabled = <true>; // false = no checkboxes / true = checkboxes

// Add Data Grid Header Items
oDataGrid.addHeader(<json object header data>);

// Example JSON Data
var oData = [ // Array
        "jon",  // Head Cell 1 Row Data
        "doe", // Head Cell 2 Row Data
        { // Object For Row Options
            "id": "1",
            "name": "1",
            "style": "",
            "value": "friends::1",
            "checked": true
        }
    ]

 // Create Table Body Rows Using JSON Example Data Listed Above
oDataGrid.addRow(<json object of row data>);

// Display Data Grid In Assigned Container
oDataGrid_1.init();