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
    this.optionsMultiSelect = {
	enabled: false,
	headRowCellTitle: "Select",
	bodyRowCellClass: "selectinput"
    };
    
    /**
     * @name addCaption
     * @param {string} strCaption
     * @returns {true}
     */
    this.addCaption = function(strCaption) {
	elCaptionTextNode = document.createTextNode(strCaption);

	this.domTblCaption.appendChild(elCaptionTextNode);
	
	return true;
    };

    /**
     * Add data grid table head item.
     * 
     * @name addHeadCell
     * @param {string} strItem
     * @returns {true}
     */
    this.addHeadCell = function(strItem) {
	elCell = document.createElement('th');
	elCellTextNode = document.createTextNode(strItem);
	elCell.appendChild(elCellTextNode);

	this.aryTblHeadCells.push(elCell);
	
	return true;
    };

    /**
     * Add data grid table body rows.
     * 
     * @name addrRow
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
	    elCellChk = document.createElement('td');
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
     * Set data grid table Id.
     * 
     * @name setId
     * @param {string} strId
     * @returns {true}
     */
    this.setId = function(strId) {
	this.domTbl.id = strId;
	return true;
    };

    /**
     * Set data grid table name.
     * 
     * @param {string} strName
     * @returns {true}
     */
    this.setName = function(strName) {
	this.domTbl.name = strName;
	return true;
    };

    /**
     * Set data grid table css class name.
     * 
     * @name setClass
     * @param {string} strClassName
     * @returns {true}
     */
    this.setClass = function(strClassName) {
	this.domTbl.className = strClassName;
	return true;
    };

    /**
     * Create data grid.
     * 
     * @name init
     * @returns {undefined}
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