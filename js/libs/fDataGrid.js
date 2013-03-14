/*
 * fDataGrid.js v0.1
 *
 * Copyright (c) 2013-2013 - Travis J. VanDame
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * 
 * @returns {mDataGrid}
 */
function mDataGrid() {

    /**
     * 
     * @type Boolean|Boolean
     */
    this.debug = false;

    /**
     * 
     * @type @exp;document@call;createElement
     */
    this.domTbl = document.createElement('table');

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
     * @type String|type
     */
    this.multiSelectOpt = "";

    /**
     * 
     * @param {type} enabled
     * @returns {undefined}
     */
    this.multiSelectEnabled = false;
    
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

	if (this.debug) {
	    console.log('EVENT: addHeadItem');
	    console.log(strItem);
	}
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


	if (this.multiSelectEnabled) {
	    elCellChk = document.createElement('td');
	    elCellChk.className = this.multiSelectOpt.className;

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
	
	if (this.debug) {
	    console.log('EVENT: addRow');
	    console.log(aryRow);	
	}
    };

    /**
     * Set data grid table Id.
     * 
     * @param {type} strId
     * @returns {undefined}
     */
    this.setId = function(strId) {
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
    this.setName = function(strName) {
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
    this.setClassName = function(strClassName) {
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

	var domTblHeadRow = document.createElement('tr');

	// Build Table Head Row
	if (this.multiSelectEnabled) {
	    if (this.debug)
		console.log('NOTICE: Multiple Selected Enabled');

	    var domTblHeadCell = document.createElement('th');

	    domTblHeadCell.appendChild(document.createTextNode(this.multiSelectOpt.colTitle));
	    domTblHeadRow.appendChild(domTblHeadCell);
	    
	    this.domTblHead.appendChild(domTblHeadRow);
	}	
	
	for (var item in this.aryTblHeadCells) {
	    domTblHeadRow.appendChild(this.aryTblHeadCells[item]);
	}

	// Build Table Body Rows
	for (var kItem in this.aryTblRows) {
	    this.domTblBody.appendChild(this.aryTblRows[kItem]);
	}

	// Construct Table Header
	this.domTbl.appendChild(this.domTblHead);
	this.domTbl.appendChild(this.domTblBody);

	// Construct Table Footer
	var domTblFooterRow = document.createElement('tr');
	var domTblFooterCell = document.createElement('td');

	if (this.multiSelectEnabled) {
	    domTblFooterCell.colSpan = this.aryTblHeadCells.length + 1;
	} else {
	    domTblFooterCell.colSpan = this.aryTblHeadCells.length;
	}

	domTblFooterCell.appendChild(document.createTextNode('Count: ' + this.aryTblRows.length));
	domTblFooterRow.appendChild(domTblFooterCell);

	this.domTblFooter.appendChild(domTblFooterRow);
	this.domTbl.appendChild(this.domTblFooter);

	// Append Table to Element
	elDataTable.appendChild(this.domTbl);
    };
}