function fDataGridMVC() {
    
    function controller() {}
    
    function model() {
	var aryHeaderCells = new array();
	
	this.addHeaderCell = function(strText, oOptions) {
	    elCell = document.createElement('th');
	    nodeCellText = document.createTextNode(strText);
	    elCell.appendChild(elCell);
	    
	    aryHeaderCells.push(elCell);
	};
    }
    function view() {}
}