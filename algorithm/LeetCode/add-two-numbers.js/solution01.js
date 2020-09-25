/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = new ListNode();
    
    let n1 = l1, n2 = l2, resultNode = result, upper = 0; 
    
    while(true){
        resultNode.val = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + upper;
        
        if(resultNode.val >= 10){
            upper = 1;
            resultNode.val -= 10;
        }
        else{
            upper = 0;
        }
        
        n1 = (n1 ? n1.next : null);
        n2 = (n2 ? n2.next : null);
        
        if(n1 === null && n2 === null) break;
        
        resultNode.next = new ListNode();
        resultNode = resultNode.next;
    }
    
    if(upper === 1){
        resultNode.next = new ListNode(1);
    }
    
    return result;
};