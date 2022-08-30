/** Class representing a Node in a tree. */
class Node {
    /**
     * Creates a Node and intializes the following fields to null/empty:
     * parentNode, children, parentName,level,position
     * @param {string} nodeName - The name of the node.
     * @param {string} parentName - The name of the parent node.
     */
    constructor(nodeName, parentName) {

        /** String of Node Name */
        this.name = nodeName;

        /** String of Parent Name */
        this.parentName = parentName;

        /** Reference to parent Node Object. */
        this.parentNode = null;

        /** Array of Children. */
        this.children = [];

        /** Level of the node. */
        this.level = null;

        /**
         * Position of the node.
         * Initialize to -1
         */
        this.position = -1;
    }

    /**
     * Add child to current Node.
     * @param {Node} childNode - add a child to this node.
     */
    addChild(childNode) {
        this.children.push(childNode);
    }


}