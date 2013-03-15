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
     * @name optionsMultiSelect
     * @description Data grid multi select options.
     * @type Object Object
     */
    this.optionsMultiSelect = {
	enabled: false,
	headRowCellTitle: "Select",
	bodyRowCellClass: "selectinput"
    };
    
    /**
     * @name 
     * @description Add data grid caption.
     * @param {string} strCaption
     * @returns {true}
     */
    this.addCaption = function(strCaption) {
	var elCaptionTextNode = document.createTextNode(strCaption);

	this.domTblCaption.appendChild(elCaptionTextNode);
	
	return true;
    };

    /**
     * @name addHeadCell
     * @description Add data grid header cell
     * @param {string} strItem
     * @returns {true}
     */
    this.addHeadCell = function(strItem) {
	var elCell = document.createElement('th');
	var elCellTextNode = document.createTextNode(strItem);
	elCell.appendChild(elCellTextNode);

	this.aryTblHeadCells.push(elCell);
	
	return true;
    };

    /**
     * @name addrRow
     * @description Add row to data grid.
     * @param {array} aryRow
     * @returns {true}
     */
    this.addRow = function(aryRow) {
	var elRow = document.createElement('tr');
	var aryRowClone = aryRow.slice(0);
	var oRowOptions = aryRowClone.pop();

	/**
	 * If multiple select is enabled attach a new cell to body row
	 * and attach a DOM checkbox element to the cell.
	 */
	if (this.optionsMultiSelect.enabled) {
	    var elCellChk = document.createElement('td');
	    elCellChk.className = this.optionsMultiSelect.bodyRowCellClass;

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
	
	return true;
    };

    /**
     * @name setId
     * @description Set the data grid table id
     * @param {string} strId
     * @returns {true}
     */
    this.setId = function(strId) {
	this.domTbl.id = strId;
	return true;
    };

    /**
     * @name setName
     * @description Set the data grid table name.
     * @param {string} strName
     * @returns {true}
     */
    this.setName = function(strName) {
	this.domTbl.name = strName;
	return true;
    };

    /**
     * @name setClass
     * @description Set the data grid table css class name.
     * @param {string} strClassName
     * @returns {true}
     */
    this.setClass = function(strClassName) {
	this.domTbl.className = strClassName;
	return true;
    };

    /**
     * @name init
     * @description Initialize the data grid and display.
     * @returns {true}
     */
    this.init = function() {
	var headCellsCount = this.aryTblHeadCells.length;

	if (this.optionsMultiSelect.enabled) {
	    headCellsCount++;
	}

	var domTblHeadRow = document.createElement('tr');

	/**
	 * If multiple select is enabled attach a new cell to head row
	 * and attach a DOM TextNode to the cell describing the multiple 
	 * select column. 
	 */
	if (this.optionsMultiSelect.enabled) {
	    var domTblHeadCell = document.createElement('th');

	    domTblHeadCell.appendChild(document.createTextNode(this.optionsMultiSelect.headRowCellTitle));
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
	    var elRow = document.createElement('tr');
	    var nodeText = document.createTextNode('No Data Found');
	    
	    elCell = document.createElement('td');
	    elCell.colSpan = headCellsCount;
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