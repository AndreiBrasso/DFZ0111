Blockly.Blocks['attribute'] = {
    init: function () {
        this.appendValueInput("attribute")
            .setCheck("String")
            .appendField("Attr")
            .appendField(new Blockly.FieldTextInput("name"), "attribute");
        this.setPreviousStatement(true, "el_attribute");
        this.setNextStatement(true, "el_attribute");
        this.setColour(345);
        this.setTooltip('Attribute');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['attribute'] = function (block) {
    var text_attribute = block.getFieldValue('attribute');
    var value_attribute = Blockly.JavaScript.valueToCode(block, 'attribute', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if (value_attribute && text_attribute) {
        code = text_attribute + '=' + value_attribute + ' ';
    }
    return code;
};