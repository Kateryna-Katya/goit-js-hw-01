function getElementWidth(content, padding, border) {
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding);
    let borderWidth = parseFloat(border);
    let totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    return totalWidth;
}
/* ========================================================================================================================================================
console.log(getElementWidth("50px", "8px", "4px"));

VM740:1 74
undefined
console.log(getElementWidth("60px", "12px", "8.5px"));
VM744:1 101
undefined
console.log(getElementWidth("200px", "0px", "0px"));
VM748:1 200
======================================================================================================================================================== */
