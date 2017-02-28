Blockly.Blocks['element'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Element")
            .appendField(new Blockly.FieldTextInput("div"), "type");
        this.appendStatementInput("attributes")
            .setCheck("el_attribute")
            .appendField("Att");
        this.appendStatementInput("elements")
            .setCheck(["element", "String"]);
        this.setInputsInline(true);
        this.setPreviousStatement(true, "element");
        this.setNextStatement(true, "element");
        this.setColour(90);
        this.setTooltip('Creates an element');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['element'] = function (block) {
    var text_type = block.getFieldValue('type');
    var statements_attributes = Blockly.JavaScript.statementToCode(block, 'attributes');
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if (statements_elements) {
        code += '<' + text_type + statements_attributes + '>\n';
        code += statements_elements;
        code += '</' + text_type + '>\n';

    } else {
        code += '<' + text_type + ' ' + statements_attributes + '/>\n';
    }
    return code;
};