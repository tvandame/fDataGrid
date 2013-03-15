/**
 * 
 * @param {string} strContainer
 * @returns {mDataGrid}
 */
function mDataGrid(strContainer) {
    /**
     * 
     * @type @exp;document@call;getElementById
     */
    this.container = document.getElementById(strContainer);
    /**
     * 
     * @type @exp;document@call;createElement
     */
    this.domTbl = document.createElement('table');

    /*
     * 
     * @type @exp;document@call;createElement
     */
    this.domTblCaption = document.createElement('caption');
    
    /**
     * 
     * @type @exp;document@call;createElement
     */
    this.domTblBody = document.createElement('tbody');

    /**
     * 
     * @type @exp;document@call;createElement
     */
    this.domTblHead = document.createElement('thead');

    /**
     * 
     * @type @exp;document@call;createElement
     */
    this.domTblFooter = document.createElement('tfoot');

    /**
     * 
     * @type Array
     */
    this.aryTblHeadCells = [];

    /**
     * 
     * @type Array
     */
    this.aryTblRows = [];

    /**
     * 
     * @type Object Object
     */
    this.multiSelectOptions = {
        enabled: false,
        headRowCellTitle: "Select",
        bodyRowCellClass: "selectinput"
    };
    
    this.addCaption = function(strCaption) {
        elCaptionTextNode = document.createTextNode(strCaption);
        
        this.domTblCaption.appendChild(elCaptionTextNode);
    };
    
    /**
     * Add data grid table head item.
     * 
     * @param {type} strItem
     * @returns {undefined}
     */
    this.addHeadItem = function(strItem) {
	elCell = document.createElement('th');
	elCellTextNode = document.createTextNode(strItem);
	elCell.appendChild(elCellTextNode);

	this.aryTblHeadCells.push(elCell); 
    };

    /**
     * Add data grid table body rows.
     * 
     * @param {type} aryRow
     * @returns {undefined}
     */
    this.addRow = function(aryRow) {
	var elRow = document.createElement('tr');
	var aryRowClone =aryRow.slice(0);
	var oRowOptions = aryRowClone.pop();

	if (this.multiSelectOptions.enabled) {
	    elCellChk = document.createElement('td');
	    elCellChk.className = this.multiSelectOptions.bodyRowCellClass;

	    var elChk = document.createElement('input');

	    elChk.type = "checkbox";
	    elChk.id = oRowOptions.id;
	    elChk.name = oRowOptions.name;
	    elChk.value = oRowOptions.value;
	    elChk.checked = oRowOptions.checked;

	    elCellChk.appendChild(elChk);
	    elRow.appendChild(elCellChk);
	}	

	for (var item in aryRowClone) {	        	    
	    var elCell = document.createElement('td');
	    var elCellTextNode = document.createTextNode(aryRowClone[item]);

	    elCell.appendChild(elCellTextNode);
	    elRow.appendChild(elCell);

	    this.aryTblRows.push(elRow);
	}
    };

    /**
     * Set data grid table Id.
     * 
     * @param {type} strId
     * @returns {undefined}
     */
    this.setId = function(strId) {
	this.domTbl.id = strId;
    };

    /**
     * Set data grid table name.
     * 
     * @param {type} strName
     * @returns {undefined}
     */
    this.setName = function(strName) {
	this.domTbl.name = strName;
    };

    /**
     * Set data grid tabke css class name.
     * 
     * @param {type} strClassName
     * @returns {undefined}
     */
    this.setClassName = function(strClassName) {
	this.domTbl.className = strClassName;
    };

    /**
     * Create data grid.
     * 
     * @returns {undefined}
     */
    this.createDataTable = function() {
        var headCellsCount = this.aryTblHeadCells.length;
                
        if (this.multiSelectOptions.enabled) {
            headCellsCount++;
        }

	var domTblHeadRow = document.createElement('tr');

	/**
         * If multiple select is enabled attach a new cell to head row
         * and attach a DOM TextNode to the cell describing the multiple 
         * select column. 
         */
	if (this.multiSelectOptions.enabled) {
	    var domTblHeadCell = document.createElement('th');

	    domTblHeadCell.appendChild(document.createTextNode(this.multiSelectOptions.headRowCellTitle));
	    domTblHeadRow.appendChild(domTblHeadCell);
	    
	    this.domTblHead.appendChild(domTblHeadRow);
	}	
	
	for (var item in this.aryTblHeadCells) {
	    domTblHeadRow.appendChild(this.aryTblHeadCells[item]);
            this.domTblHead.appendChild(domTblHeadRow);
	}

	// Build Table Body Rows
        if (this.aryTblRows.length > 0) {
            for (var kItem in this.aryTblRows) {
                this.domTblBody.appendChild(this.aryTblRows[kItem]);
            }
        } else {
            elRow = document.createElement('tr');
            elCell = document.createElement('td');
            elCell.colSpan = headCellsCount;
            nodeText = document.createTextNode('No Data Found');
            elCell.appendChild(nodeText);
            elRow.appendChild(elCell);
            
            this.domTblBody.appendChild(elRow);
        }

        // Construct Table
        this.domTbl.appendChild(this.domTblCaption);
	this.domTbl.appendChild(this.domTblHead);
	this.domTbl.appendChild(this.domTblBody);

	// Construct Table Footer
	var domTblFooterRow = document.createElement('tr');
	var domTblFooterCell = document.createElement('td');

        domTblFooterCell.colSpan = headCellsCount;
	domTblFooterCell.appendChild(document.createTextNode('Count: ' + this.aryTblRows.length));
	domTblFooterRow.appendChild(domTblFooterCell);

	this.domTblFooter.appendChild(domTblFooterRow);
	this.domTbl.appendChild(this.domTblFooter);

        this.container.innerHTML = "";
	this.container.appendChild(this.domTbl);
        
        return true;
    };
}