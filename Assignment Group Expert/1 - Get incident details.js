(function(inputs) {
    // only string inputs are allowed 
    // return outputs object where the keys in it are understandable by LLM
    var incidentGR = new GlideRecord("incident");
    incidentGR.addQuery("number", inputs.number);
    incidentGR.query();
    if (incidentGR.next()) {
        return incidentGR.short_description.toString();
    } else {
        throw new Error('No incident found with number ' + inputs.number);
    }
})(inputs);
