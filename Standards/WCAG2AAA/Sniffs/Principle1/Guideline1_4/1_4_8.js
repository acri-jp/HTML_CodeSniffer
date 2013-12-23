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

var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = {
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
        // This Success Criterion has five prongs, and each should be thrown as a
        // separate notice as separate techniques apply to each.
        HTMLCS.addMessage(HTMLCS.NOTICE, top, 'Webページかブラウザを通じて、利用者がテキストのブロックの前景色と背景色を選択する仕組みが提供されているか確認します。', 'G148,G156,G175');
        HTMLCS.addMessage(HTMLCS.NOTICE, top, 'テキストのブロックの各行の文字数を80文字以下(または中国語、日本語、韓国語の場合は40文字以下)に減らす仕組みが提供されているか確認します。', 'H87,C20');
        HTMLCS.addMessage(HTMLCS.NOTICE, top, 'テキストのブロックがすべて両端ぞろえではないことを確認します - つまり、左揃えか右揃えになっているか、すべての両端揃えを解除する仕組みが提供されているかです。', 'C19,G172,G169');
        HTMLCS.addMessage(HTMLCS.NOTICE, top, 'テキストブロックの行間は少なくとも150%であり、段落間間隔は行間隔の1.5倍あるか、これを達成する仕組みが利用可能であることを確認します。', 'G188,C21');
        HTMLCS.addMessage(HTMLCS.NOTICE, top, 'コンテンツまたは機能を損なうことなく、利用者が全画面表示で水平スクロールすることなく、テキストを支援技術なしで200%まで変更できることを確認してください。', 'H87,G146,C26');

    }
};
