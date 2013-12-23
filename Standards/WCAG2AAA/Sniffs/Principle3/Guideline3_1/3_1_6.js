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

var HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
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
        return ['ruby'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        var rb = element.querySelectorAll('rb');
        var rt = element.querySelectorAll('rt');
        if (rt.length === 0) {
            // Vary the message depending on whether an rb element exists. If it doesn't,
            // the presumption is that we are using HTML5 that uses the body of the ruby
            // element for the same purpose (otherwise, assume XHTML 1.1 with rb element).
            if (rb.length === 0) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, 'ruby要素に、内容テキストの発音情報を提供するrt要素が含まれていません。', 'H62.1.HTML5');
            } else {
                HTMLCS.addMessage(HTMLCS.ERROR, element, 'ruby要素に、rb要素内のテキストに関する発音情報を提供するrt要素を含んでいません。', 'H62.1.XHTML11');
            }
        }

        var rp = element.querySelectorAll('rp');
        if (rp.length === 0) {
            // No "ruby parentheses" tags for those user agents that don't support
            // ruby at all.
            HTMLCS.addMessage(HTMLCS.ERROR, element, 'ruby要素に、ルビをサポートしていないユーザーエージェントに発音情報を提供するrp要素が含まれていません。', 'H62.2');
        }
    }
};
