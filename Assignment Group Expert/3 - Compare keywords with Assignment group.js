(function(inputs) {
    // only string inputs are allowed 
    // return outputs object where the keys in it are understandable by LLM
    if (inputs.assignment_group && inputs.number) {
        return {
            message: "We found some suggestions..."
        };
    } else {
        return "We found no suggestions.";
    }
})(inputs);
