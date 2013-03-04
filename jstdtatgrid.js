/** @constructor */
function jstDataTable() {
    /** Debug Mode. */
    this.debug = false;
    /** Main data grid table. */
    this.domTble = document.createElement('table');
    /** Main data grid table body. */
    this.domTbleBody = document.createElement('tbody');
    /** Main data grid table body head. */
    this.domTbleHead = document.createElement('thead');
    /** Main data grid table head/cell items. */
    this.aryTbleHeadItems = [];
    /** Main data grid table body rows. */
    this.aryTbleRows = [];
    /** Multi-Select Options. */
    this.multiSelectOpt = "";
    /** Multiselect Mode. */
    this.multiSelectEnabled = false;

    /** Add data grid table head items/cells. */
    this.addHeadItem = function (strItem) {
        if (this.debug) console.log('EVENT: addHeadItem');
        if (this.debug) console.log(strItem);
        
        this.aryTbleHeadItems.push(strItem);
    };

    /** Add data grid table body rows. */
    this.addRow = function (aryRow) {
        if (this.debug) console.log('EVENT: addRow');
        if (this.debug) console.log(aryRow);
            
        this.aryTbleRows.push(aryRow);
    };

    /** Set data grid table Id. */
    this.setTableId = function (strId) {
        if (this.debug) console.log('EVENT: setTableId');
        if (this.debug) console.log(strId);
        
        this.domTble.id = strId;
    };

    /** Set data grid table name. */
    this.setTableName = function (strName) {
        if (this.debug) console.log('EVENT: setTableName');
        if (this.debug) console.log(strName);
        
        this.domTble.name = strName;
    };

    /** Set data grid tabke css class name. */
    this.setTableClassName = function (strClassName) {
        if (this.debug) console.log('EVENT: setTableClassName');
        if (this.debug) console.log(strClassName);
        
        this.domTble.className = strClassName;
    };

    /** Set data grid multi-select. */
    this.multiSelectEnabled = function (enabled) {
        if (this.debug) console.log('EVENT: enableMultiSelect');
        if (this.debug) console.log(enabled);
        
        this.multiSelectOpt = enabled;
        this.multiSelectEnabled = true;
    };

    /** Set data grid debug. */
    this.enableDebug = function () {
        if (this.debug) console.log('EVENT: enableDebug');
        
        this.debug = true;
        
        if (this.debug) console.log(this.debug);
    };

    /** Create data grid. */
    this.createDataTable = function (strApplyTo) {
        if (this.debug) console.log('EVENT: createDataTable');

        // Build Table Head
        var domTbleHeadRow = document.createElement('tr');
        var domTbleHeadCell = document.createElement('th');

        if (this.multiSelectEnabled) {
            if (this.debug) console.log('NOTICE: Multiple Selected Enabled');

            domTbleHeadCell.appendChild(document.createTextNode(this.multiSelectOpt.colTitle));
            domTbleHeadRow.appendChild(domTbleHeadCell);
        }
        
        for (var item in this.aryTbleHeadItems) {
            domTbleHeadCell = document.createElement('th');
            domTbleHeadCell.appendChild(document.createTextNode(this.aryTbleHeadItems[item]));
            domTbleHeadRow.appendChild(domTbleHeadCell);
        }
        
        this.domTbleHead.appendChild(domTbleHeadRow);
                
        // Build Table Body Rows
        for (var kItem in this.aryTbleRows) {
            var domTbleCell = document.createElement('td');
            // Do not pass rows array by refrence
            var aryRow = this.aryTbleRows[kItem].slice(0); 
            // If aryRow was passed by refrence this would eat the row cells and cause a bug!
            var oRowOptions = aryRow.pop();
                       
            domTbleRow = document.createElement('tr');
            
            if (this.multiSelectEnabled) {
                domTbleCell = document.createElement('td');
                domTbleCell.className = this.multiSelectOpt.className;

                var el = document.createElement('input');
                
                el.type = "checkbox";
                el.id = oRowOptions.id;
                el.name = oRowOptions.name;
                el.value = oRowOptions.value;
                el.checked = oRowOptions.checked;

                domTbleCell.appendChild(el);
                domTbleRow.appendChild(domTbleCell);
            }
            
            for (var itemKey in aryRow) {
                domTbleCell = document.createElement('td');
                domTbleCell.appendChild(document.createTextNode(aryRow[itemKey]));
                domTbleRow.appendChild(domTbleCell);
            }

            this.domTbleBody.appendChild(domTbleRow);
        }

        // Construct Table
        this.domTble.appendChild(this.domTbleHead);
        this.domTble.appendChild(this.domTbleBody);

        // Append Table to Element
        elDataTable.appendChild(this.domTble);
    };
}
