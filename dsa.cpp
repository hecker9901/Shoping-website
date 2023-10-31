#include <iostream>

// TreeNode class represents each node in the binary tree
class TreeNode {
public:
    int data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int value) : data(value), left(nullptr), right(nullptr) {}
};

// BinaryTree class for the binary tree operations
class BinaryTree {
public:
    TreeNode* root;

    BinaryTree() : root(nullptr) {}

    // Function to insert a new node into the binary tree
    void insert(int value) {
        root = insertRecursive(root, value);
    }

    // Helper function to insert a new node recursively
    TreeNode* insertRecursive(TreeNode* current, int value) {
        if (current == nullptr) {
            return new TreeNode(value);
        }

        if (value < current->data) {
            current->left = insertRecursive(current->left, value);
        } else if (value > current->data) {
            current->right = insertRecursive(current->right, value);
        }

        return current;
    }

    // Function to perform an inorder traversal of the tree
    void inorderTraversal(TreeNode* node) {
        if (node != nullptr) {
            inorderTraversal(node->left);
            std::cout << node->data << " ";
            inorderTraversal(node->right);
        }
    }
};

int main() {
    BinaryTree tree;

    // Insert some elements into the binary tree
    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    tree.insert(60);
    tree.insert(80);

    // Perform an inorder traversal to display the elements in sorted order
    std::cout << "Inorder Traversal: ";
    tree.inorderTraversal(tree.root);
    std::cout << std::endl;

    return 0;
}
