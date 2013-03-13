/** @constructor */
function mDataGrid() {
    /**
     * Debug Mode.
     * 
     * @type Boolean|Boolean
     */
    this.debug = false;
    /** Main data grid table. */
    this.domTbl = document.createElement('table');
    /** Main data grid table body. */
    this.domTblBody = document.createElement('tbody');
    /** Main data grid table body head. */
    this.domTblHead = document.createElement('thead');
    /** Main data grid table head/cell items. */
    this.aryTblHeadItems = [];
    /** Main data grid table body rows. */
    this.aryTblRows = [];
    /** Multi-Select Options. */
    this.multiSelectOpt = "";
    /** Multiselect Mode. */
    this.multiSelectEnabled = false;

    /**
     * Add data grid table head items/cells.
     * 
     * @param {type} strItem
     * @returns {undefined}
     */
    this.addHeadItem = function(strItem) {
        if (this.debug)
            console.log('EVENT: addHeadItem');
        if (this.debug)
            console.log(strItem);

        this.aryTblHeadItems.push(strItem);
    };

    /**
     * Add data grid table body rows.
     * 
     * @param {type} aryRow
     * @returns {undefined}
     */
    this.addRow = function(aryRow) {
        if (this.debug)
            console.log('EVENT: addRow');
        if (this.debug)
            console.log(aryRow);

        this.aryTblRows.push(aryRow);
    };

    /**
     * Set data grid table Id.
     * 
     * @param {type} strId
     * @returns {undefined}
     */
    this.setTableId = function(strId) {
        if (this.debug)
            console.log('EVENT: setTableId');
        if (this.debug)
            console.log(strId);

        this.domTbl.id = strId;
    };

    /**
     * Set data grid table name.
     * 
     * @param {type} strName
     * @returns {undefined}
     */
    this.setTableName = function(strName) {
        if (this.debug)
            console.log('EVENT: setTableName');
        if (this.debug)
            console.log(strName);

        this.domTbl.name = strName;
    };

    /**
     * Set data grid tabke css class name.
     * 
     * @param {type} strClassName
     * @returns {undefined}
     */
    this.setTableClassName = function(strClassName) {
        if (this.debug)
            console.log('EVENT: setTableClassName');
        if (this.debug)
            console.log(strClassName);

        this.domTbl.className = strClassName;
    };

    /**
     * Set data grid multi-select.
     * 
     * @param {type} enabled
     * @returns {undefined}
     */
    this.multiSelectEnabled = function(enabled) {
        if (this.debug)
            console.log('EVENT: enableMultiSelect');
        if (this.debug)
            console.log(enabled);

        this.multiSelectOpt = enabled;
        this.multiSelectEnabled = true;
    };

    /**
     * Set data grid debug.
     * 
     * @returns {undefined}
     */
    this.enableDebug = function() {
        if (this.debug)
            console.log('EVENT: enableDebug');

        this.debug = true;

        if (this.debug)
            console.log(this.debug);
    };

    /**
     * Create data grid.
     * 
     * @param {type} strApplyTo
     * @returns {undefined}
     */
    this.createDataTable = function(strApplyTo) {
        if (this.debug)
            console.log('EVENT: createDataTable');

        // Build Table Head
        var domTblHeadRow = document.createElement('tr');
        var domTblHeadCell = document.createElement('th');

        if (this.multiSelectEnabled) {
            if (this.debug)
                console.log('NOTICE: Multiple Selected Enabled');

            domTblHeadCell.appendChild(document.createTextNode(this.multiSelectOpt.colTitle));
            domTblHeadRow.appendChild(domTblHeadCell);
        }

        for (var item in this.aryTblHeadItems) {
            domTblHeadCell = document.createElement('th');
            domTblHeadCell.appendChild(document.createTextNode(this.aryTblHeadItems[item]));
            domTblHeadRow.appendChild(domTblHeadCell);
        }

        this.domTblHead.appendChild(domTblHeadRow);

        // Build Table Body Rows
        for (var kItem in this.aryTblRows) {
            var domTblCell = document.createElement('td');
            // Do not pass rows array by refrence
            var aryRow = this.aryTblRows[kItem].slice(0);
            // If aryRow was passed by refrence this would eat the row cells and cause a bug!
            var oRowOptions = aryRow.pop();

            domTblRow = document.createElement('tr');

            if (this.multiSelectEnabled) {
                domTblCell = document.createElement('td');
                domTblCell.className = this.multiSelectOpt.className;

                var el = document.createElement('input');

                el.type = "checkbox";
                el.id = oRowOptions.id;
                el.name = oRowOptions.name;
                el.value = oRowOptions.value;
                el.checked = oRowOptions.checked;

                domTblCell.appendChild(el);
                domTblRow.appendChild(domTblCell);
            }

            for (var itemKey in aryRow) {
                domTblCell = document.createElement('td');
                domTblCell.appendChild(document.createTextNode(aryRow[itemKey]));
                domTblRow.appendChild(domTblCell);
            }

            this.domTblBody.appendChild(domTblRow);
        }

        // Construct Table
        this.domTbl.appendChild(this.domTblHead);
        this.domTbl.appendChild(this.domTblBody);

        // Append Table to Element
        elDataTable.appendChild(this.domTbl);
    };
}
