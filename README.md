fDataGrid
=========

A very Simple Pure JavaScript Data Grid. This is fun to play with and build
on when there is nothing else to do. There are many data grids out there
and this project does not aim to compete with those projects. It's just pure
coding fun!

See fDataGrid in action over at jsFiddle http://jsfiddle.net/tvandame/Jh7HQ/

Example Data Schema
=============================================================================
```javascript
var oDataGridHeader = {
       "type":"object",
       "total":2,
       "columns": ["id","fname","lname"], 
       "results": [
           {"id":"fdg_head_1", "nodeText":"First Name"},
           {"id":"fdg_head_2", "nodeText":"Last Name"}
       ],
       "summary": "Data Grid Header",
       "caption": "Example Data Grid Header One"
   };

var oData = [
        "jon_1",
        "doe_1",
        {
            "id": "1",
            "name": "1",
            "class": "chkbox",
            "value": "friends::1",
            "checked": true
        }
    ],
    [
        "jon_2",
        "doe_2",
        {
            "id": "2",
            "name": "2",
            "class": "chkbox",
            "value": "friends::2",
            "checked": false
        }
    ]
```

Example Data Grid Configuration
=============================================================================
```javascript
// Create Eample Two Data Grid Object
var oDataGrid_2 = new fDataGrid("divDataTable_2");
// Set Table Id
oDataGrid_2.setId("data_2");
// Set Table Name
oDataGrid_2.setName("data_2");
// Set Table Class
oDataGrid_2.setClass("datatable_2");
// Add Data Grid Caption
oDataGrid_2.addCaption("Data Grid Example Two");
// Enable Multiple Select Option
oDataGrid_2.optionsMultiSelect.enabled = false;
// Set Multi Select Head Row Cell Text
oDataGrid_2.optionsMultiSelect.headRowCellTitle = "Select";
// Set Multi Select Row Cells Class
oDataGrid_2.optionsMultiSelect.bodyRowCellClass = "selectinput";            
// Add Data Grid Header Items
oDataGrid_2.addHeader(oDataGridHeader);
// Create Table Body Rows
oDataGrid_2.addRows(oData.properties[strCirclesValue]);
// Initialize Data Grid
oDataGrid_2.init();
```