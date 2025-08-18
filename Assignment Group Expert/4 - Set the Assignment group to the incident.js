(function(inputs) {
    // Check if the necessary inputs are provided
    if (inputs.number && inputs.assignment_group) {
        var group_sys_id = "";
        var groupGR = new GlideRecord("sys_user_group");
        
        // Query by assignment group name
        groupGR.addQuery("name", inputs.assignment_group);
        groupGR.query();
        
        // Check if the group exists
        if (groupGR.next()) {
            group_sys_id = groupGR.getValue("sys_id");  // Get the sys_id of the group
        } else {
            return "Assignment group not found.";
        }
        // Now update the incident
        var incidentGR = new GlideRecord("incident");
        incidentGR.addQuery("number", inputs.number);
        incidentGR.query();
        
        // Update the assignment group for the incident
        if (incidentGR.next()) {
            incidentGR.setValue("assignment_group", group_sys_id);
            incidentGR.update();
            return "Incident updated successfully.";  // Return a success message
        } else {
            return "Incident not found.";
        }
    } else {
        return "No input data provided.";
    }
})(inputs);
