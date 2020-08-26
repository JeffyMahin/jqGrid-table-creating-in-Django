$("#js").jqGrid({
    colModel: [

        // {
        //     name: "firstName",
        //     editable:true,
        //     edittype:'text',
        // },

        {name: "firstName", align: "center"},
        {name: "lastName", align: "center"},
        {name: "Address", align: "center"},
    ],
    data: [
        {firstName: "Jeffy", lastName: "Mahin", Address: "USA"},
        {firstName: "Deepika", lastName: "Padukon", Address: "Mohammadpur"},
        {firstName: "Donald", lastName: "Trump", Address: "Farmgate"},
        {firstName: "Vladimir", lastName: "Putin", Address: "Gulistan"},
        {firstName: "Mim", lastName: "Jannat", Address: "Uttara"},
        {firstName: "Shahrukh", lastName: "Khan", Address: "Shyamoli"},
        {firstName: "Charley", lastName: "Chaplin", Address: "Chittagong"},

    ],
    caption: "My external JQGrid table",
    rownumbers: true,
    // editable:true
});