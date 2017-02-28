Blockly.Blocks['render'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("render");
        this.appendStatementInput("RENDER")
            .setCheck("element");
        this.setColour(0);
        this.setTooltip('render');
        this.setHelpUrl('');
    }
};

Blockly.JavaScript['render'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'RENDER');
    // TODO: Assemble JavaScript into code variable.
    var code = '\nrender() {\n';
    code += 'return (\n' + statements_name + ');\n';
    code += '}';
    return code;
};