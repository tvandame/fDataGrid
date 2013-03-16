fDataGrid
===========

SimpleJavaScript Data Grid (Simple Pure JavaScript Data Grid)


Example
=========================================================

```javascript
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

// Example JSON Header Data
var oDataGridHeader = {
       "total":2,
       "columns": ["id","fname","lname"], 
       "results": [
           {"id":1, "nodeText":"First Name"},
           {"id":2, "nodeText":"Last Name"}
       ],
       "summary": "Data Grid Header",
       "caption": "Example Data Grid One"
   }; 

// Add Data Grid Header Items
oDataGrid.addHeader(<json object header data>);

// Example JSON Row Data
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
```