/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
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

var oData = {
    "description": "Circles JSON Schema",
    "type": "object",
    "properties":
            {
                "friends": [
                    [
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
                    ],
                    [
                        "jon_3",
                        "doe_3",
                        {
                            "id": "3",
                            "name": "3",
                            "class": "chkbox",
                            "value": "friends::3",
                            "checked": true
                        }
                    ],
                    [
                        "jon_4",
                        "doe_4",
                        {
                            "id": "4",
                            "name": "4",
                            "class": "chkbox",
                            "value": "friends::4",
                            "checked": false
                        }
                    ]
                ],
                "family": [
                    [
                        "jon_5",
                        "doe_5",
                        {
                            "id": "5",
                            "name": "1",
                            "class": "chkbox",
                            "value": "family::1",
                            "checked": false
                        }
                    ],
                    [
                        "jon_6",
                        "doe_6",
                        {
                            "id": "6",
                            "name": "2",
                            "class": "chkbox",
                            "value": "family::2",
                            "checked": false
                        }
                    ],
                    [
                        "jon_7",
                        "doe_7",
                        {
                            "id": "7",
                            "name": "3",
                            "class": "chkbox",
                            "value": "family::3",
                            "checked": false
                        }
                    ],
                    [
                        "jon_8",
                        "doe_8",
                        {
                            "id": "8",
                            "name": "4",
                            "class": "chkbox",
                            "value": "family::4",
                            "checked": false
                        }
                    ]
                ]
            }
};

