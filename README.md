fDataGrid
===========

SimpleJavaScript Data Grid (Simple Pure JavaScript Data Grid)


Example Usage
=========================================================
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>fDataGrid (Just a pure JavaScript Data Table)</title>
        <style type="text/css">
        ```css
        /* 
            Document   : example.css
            Created on : Mar 7, 2013, 9:54:31 PM
            Author     : Travis J. VanDame
            Description:
                Purpose of the stylesheet follows.
        */
        .datatable {
            border: 1px solid #000000;
            width: 200px;
        }

        .datatable thead th {
            background: #cccccc;
            border: 1px solid #000000;
            padding: 5px;
        }

        .datatable tbody td {
            border: 1px solid #000000;
            text-align: center;
        }

        .datatable tfoot tr {
            background: #cccccc;
            text-align:  right;
        }

        .selectinput {
            text-align: center;
        }
        ```
        </style>
    </head>
    <body>
        <div id="divToolBar">
            <form>
                <fieldset>
                   <span>
                        <select id="selCircles">
                            <option value="NULL">Select A Circle</option>
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                        </select>
                    </span>
                    |
                    <span>
                        <input type="button" id="btnLoadGrid" name="btnLoadGrid" value="Load Grid" />
                    </span>
                </fieldset>
            </form>
        </div>
        <div id="divDataGrid">
            <fieldset>
                <legend>Output</legend>
                <div id="divDataTable_1" style="margin: 10px; width: 100%;"></div>
                <div id="divDataTable_2" style="margin: 10px; width: 100%;"></div>
            </fieldset>
        </div>
    </body>
</html>
```

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