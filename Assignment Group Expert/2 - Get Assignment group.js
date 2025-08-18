(function(inputs) {
    // only string inputs are allowed 
    // return outputs object where the keys in it are understandable by LLM
    var assignment_group = []; // Initialize an empty array to store group names
    var gr = new GlideRecord('sys_user_group'); // Create a GlideRecord object for the sys_user_group table
    gr.addActiveQuery(); // Add a query to retrieve only active groups
    gr.query(); // Execute the query
    while (gr.next()) {
        // Push the group name into the array
        assignment_group.push(gr.getValue('name'));
    }
    return assignment_group;
})(inputs);
