Blockly.Blocks['text_element'] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("Text");
        this.setPreviousStatement(true, "element");
        this.setNextStatement(true, "element");
        this.setColour(90);
        this.setTooltip('Simple text block');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['text_element'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = (value_text ? eval(value_text) : '') + '\n';
    return code;
};