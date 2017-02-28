Blockly.Blocks['element_simple'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Element")
            .appendField(new Blockly.FieldTextInput("div"), "type");
        this.appendStatementInput("elements")
            .setCheck("element");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "element");
        this.setNextStatement(true, "element");
        this.setColour(90);
        this.setTooltip('Simple Element');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['element_simple'] = function (block) {
    var text_type = block.getFieldValue('type');
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if (statements_elements) {
        code += '<' + text_type + '>\n';
        code += statements_elements;
        code += '</' + text_type + '>\n';

    } else {
        code += '<' + text_type + '/>\n';
    }
    return code;
};