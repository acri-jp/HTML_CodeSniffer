/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */

var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
    /**
     * Determines the elements to register for processing.
     *
     * Each element of the returned array can either be an element name, or "_top"
     * which is the top element of the tested code.
     *
     * @returns {Array} The list of elements.
     */
    register: function()
    {
        return ['_top'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        if (element === top) {
            var failures = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(top, 4.5, 3.0);

            for (var i = 0; i < failures.length; i++) {
                var element   = failures[i].element;
                
                var decimals  = 2;
                var value     = (Math.round(failures[i].value * Math.pow(10, decimals)) / Math.pow(10, decimals));
                var required  = failures[i].required;
                var recommend = failures[i].recommendation;
                var hasBgImg  = failures[i].hasBgImage || false;
                var bgColour   = failures[i].bgColour || false;
                var isAbsolute = failures[i].isAbsolute || false;

                // If the values would look identical, add decimals to the value.
                while (required === value) {
                    decimals++;
                    value = (Math.round(failures[i].value * Math.pow(10, decimals)) / Math.pow(10, decimals));
                }
                
                if (required === 4.5) {
                    var code = 'G18';
                } else if (required === 3.0) {
                    var code = 'G145';
                }

                var recommendText = [];
                if (recommend) {
                    if (recommend.fore.from !== recommend.fore.to) {
                        recommendText.push('テキストの色を ' + recommend.fore.to);
                    }
                    if (recommend.back.from !== recommend.back.to) {
                        recommendText.push('背景色を ' + recommend.back.to);
                    }
                }//end if

                if (recommendText.length > 0) {
                    recommendText = ' 推奨: ' + recommendText.join(', ') + ' に変更。';
                }

                if (isAbsolute === true) {
                    code += '.Abs';
                    HTMLCS.addMessage(HTMLCS.WARNING, element, 'この要素は絶対位置指定で配置され、背景色が検出できません。テキストと画像のすべてのカバー部分が少なくとも ' + required + ':1 のコントラスト比を持つことを確認します。', code);
                } else if (hasBgImg === true) {
                    code += '.BgImage';
                    HTMLCS.addMessage(HTMLCS.WARNING, element, 'この要素のテキストは背景画像の上に配置されています。テキストと画像のすべてのカバー部分が少なくとも ' + required + ':1 のコントラスト比を持つことを確認します。', code);
                } else {
                    code += '.Fail';
                    HTMLCS.addMessage(HTMLCS.ERROR, element, 'この要素のコントラストはこの達成等級では不適合です。期待されるコントラスト比は最低 ' + required + ':1 ですが、この要素のテキストのコントラスト比は ' + value + ':1 となっています。' + recommendText, code);
                }//end if
            }//end for
        }//end if
    }
};
