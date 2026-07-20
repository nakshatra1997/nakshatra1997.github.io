const categories = [
    { id: 'all', name: 'All Patterns', desc: 'Complete list of all essential Google LeetCode patterns.' },
    { id: 'arrays-hashing', name: 'Arrays & Hashing', desc: 'Fundamental operations on arrays and hash maps.' },
    { id: 'two-pointers', name: 'Two Pointers', desc: 'Iterating with two pointers to solve problems efficiently.' },
    { id: 'sliding-window', name: 'Sliding Window', desc: 'Maintaining a window of elements to solve subarray problems.' },
    { id: 'stack', name: 'Stack', desc: 'LIFO data structure problems.' },
    { id: 'binary-search', name: 'Binary Search', desc: 'Divide and conquer on sorted data.' },
    { id: 'linked-list', name: 'Linked List', desc: 'Pointer manipulation and sequence traversal.' },
    { id: 'trees', name: 'Trees', desc: 'Hierarchical data structures, DFS, and BFS.' },
    { id: 'tries', name: 'Tries', desc: 'Prefix trees for string matching.' },
    { id: 'heap-pq', name: 'Heap / Priority Queue', desc: 'Managing elements by priority.' },
    { id: 'backtracking', name: 'Backtracking', desc: 'Exploring all potential solutions.' },
    { id: 'graphs', name: 'Graphs', desc: 'Nodes, edges, and traversals.' },
    { id: 'advanced-graphs', name: 'Advanced Graphs', desc: 'Shortest paths and complex graph algorithms.' },
    { id: '1d-dp', name: '1D Dynamic Programming', desc: 'Breaking down problems into simpler subproblems.' },
    { id: '2d-dp', name: '2D Dynamic Programming', desc: 'DP with multiple states.' },
    { id: 'greedy', name: 'Greedy', desc: 'Making locally optimal choices.' },
    { id: 'intervals', name: 'Intervals', desc: 'Merging and checking overlaps.' },
    { id: 'math-geometry', name: 'Math & Geometry', desc: 'Mathematical and geometrical operations.' },
    { id: 'bit-manipulation', name: 'Bit Manipulation', desc: 'Operations at the binary level.' }
];

const questionsData = [
    // Arrays & Hashing
    { type: 'core', id: 'q1', categoryId: 'arrays-hashing', title: 'Two Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/two-sum' , acceptance: '57.5%', frequency: '100.0%' },
    { type: 'core', id: 'q2', categoryId: 'arrays-hashing', title: 'Valid Anagram', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-anagram' , acceptance: '68.1%', frequency: '50.0%' },
    { type: 'core', id: 'q3', categoryId: 'arrays-hashing', title: 'Contains Duplicate', difficulty: 'Easy', url: 'https://leetcode.com/problems/contains-duplicate' , acceptance: '64.4%', frequency: '50.0%' },
    { type: 'core', id: 'q4', categoryId: 'arrays-hashing', title: 'Group Anagrams', difficulty: 'Medium', url: 'https://leetcode.com/problems/group-anagrams' , acceptance: '72.6%', frequency: '50.0%' },
    { type: 'core', id: 'q5', categoryId: 'arrays-hashing', title: 'Top K Frequent Elements', difficulty: 'Medium', url: 'https://leetcode.com/problems/top-k-frequent-elements' , acceptance: '66.4%', frequency: '62.5%' },
    { type: 'core', id: 'q6', categoryId: 'arrays-hashing', title: 'Product of Array Except Self', difficulty: 'Medium', url: 'https://leetcode.com/problems/product-of-array-except-self' , acceptance: '68.9%', frequency: '50.0%' },
    { type: 'core', id: 'q7', categoryId: 'arrays-hashing', title: 'Valid Sudoku', difficulty: 'Medium', url: 'https://leetcode.com/problems/valid-sudoku' , acceptance: '64.5%', frequency: '50.0%' },
    { type: 'core', id: 'q8', categoryId: 'arrays-hashing', title: 'Longest Consecutive Sequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-consecutive-sequence' , acceptance: '47.1%', frequency: '75.0%' },
    { type: 'core', id: 'q_g1', categoryId: 'arrays-hashing', title: 'Logger Rate Limiter', difficulty: 'Easy', url: 'https://leetcode.com/problems/logger-rate-limiter' , acceptance: '76.8%', frequency: '50.0%' },
    { type: 'core', id: 'q_g2', categoryId: 'arrays-hashing', title: 'Bulls and Cows', difficulty: 'Medium', url: 'https://leetcode.com/problems/bulls-and-cows' , acceptance: '52.5%', frequency: '25.0%' },

    // Two Pointers
    { type: 'core', id: 'q9', categoryId: 'two-pointers', title: 'Valid Palindrome', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-palindrome' , acceptance: '53.3%', frequency: '50.0%' },
    { type: 'core', id: 'q10', categoryId: 'two-pointers', title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted' , acceptance: '65.1%', frequency: '50.0%' },
    { type: 'core', id: 'q11', categoryId: 'two-pointers', title: '3Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/3sum' , acceptance: '39.1%', frequency: '75.0%' },
    { type: 'core', id: 'q12', categoryId: 'two-pointers', title: 'Container With Most Water', difficulty: 'Medium', url: 'https://leetcode.com/problems/container-with-most-water' , acceptance: '60.0%', frequency: '62.5%' },
    { type: 'core', id: 'q13', categoryId: 'two-pointers', title: 'Trapping Rain Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water' , acceptance: '67.4%', frequency: '75.0%' },

    // Sliding Window
    { type: 'core', id: 'q14', categoryId: 'sliding-window', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock' , acceptance: '56.8%', frequency: '75.0%' },
    { type: 'core', id: 'q15', categoryId: 'sliding-window', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters' , acceptance: '39.1%', frequency: '75.0%' },
    { type: 'core', id: 'q16', categoryId: 'sliding-window', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-repeating-character-replacement' , acceptance: '59.7%', frequency: '50.0%' },
    { type: 'core', id: 'q17', categoryId: 'sliding-window', title: 'Permutation in String', difficulty: 'Medium', url: 'https://leetcode.com/problems/permutation-in-string' , acceptance: '48.9%', frequency: '37.5%' },
    { type: 'core', id: 'q18', categoryId: 'sliding-window', title: 'Minimum Window Substring', difficulty: 'Hard', url: 'https://leetcode.com/problems/minimum-window-substring' , acceptance: '47.5%', frequency: '37.5%' },
    { type: 'core', id: 'q19', categoryId: 'sliding-window', title: 'Sliding Window Maximum', difficulty: 'Hard', url: 'https://leetcode.com/problems/sliding-window-maximum' , acceptance: '48.8%', frequency: '50.0%' },

    // Stack
    { type: 'core', id: 'q20', categoryId: 'stack', title: 'Valid Parentheses', difficulty: 'Easy', url: 'https://leetcode.com/problems/valid-parentheses' , acceptance: '44.2%', frequency: '62.5%' },
    { type: 'core', id: 'q21', categoryId: 'stack', title: 'Min Stack', difficulty: 'Medium', url: 'https://leetcode.com/problems/min-stack' , acceptance: '58.2%', frequency: '50.0%' },
    { type: 'core', id: 'q22', categoryId: 'stack', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation' , acceptance: '57.8%', frequency: '37.5%' },
    { type: 'core', id: 'q23', categoryId: 'stack', title: 'Generate Parentheses', difficulty: 'Medium', url: 'https://leetcode.com/problems/generate-parentheses' , acceptance: '78.7%', frequency: '62.5%' },
    { type: 'core', id: 'q24', categoryId: 'stack', title: 'Daily Temperatures', difficulty: 'Medium', url: 'https://leetcode.com/problems/daily-temperatures' , acceptance: '68.7%', frequency: '50.0%' },
    { type: 'core', id: 'q25', categoryId: 'stack', title: 'Car Fleet', difficulty: 'Medium', url: 'https://leetcode.com/problems/car-fleet' , acceptance: '55.1%', frequency: '37.5%' },
    { type: 'core', id: 'q26', categoryId: 'stack', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram' , acceptance: '49.9%', frequency: '62.5%' },
    { type: 'core', id: 'q_g3', categoryId: 'stack', title: 'Minimum Remove to Make Valid Parentheses', difficulty: 'Medium', url: 'https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses' , acceptance: '71.5%', frequency: '25.0%' },

    // Binary Search
    { type: 'core', id: 'q27', categoryId: 'binary-search', title: 'Binary Search', difficulty: 'Easy', url: 'https://leetcode.com/problems/binary-search' , acceptance: '60.9%', frequency: '50.0%' },
    { type: 'core', id: 'q28', categoryId: 'binary-search', title: 'Search a 2D Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/search-a-2d-matrix' , acceptance: '53.9%', frequency: '37.5%' },
    { type: 'core', id: 'q29', categoryId: 'binary-search', title: 'Koko Eating Bananas', difficulty: 'Medium', url: 'https://leetcode.com/problems/koko-eating-bananas' , acceptance: '50.0%', frequency: '62.5%' },
    { type: 'core', id: 'q30', categoryId: 'binary-search', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array' , acceptance: '54.7%', frequency: '37.5%' },
    { type: 'core', id: 'q31', categoryId: 'binary-search', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array' , acceptance: '44.9%', frequency: '62.5%' },
    { type: 'core', id: 'q32', categoryId: 'binary-search', title: 'Time Based Key-Value Store', difficulty: 'Medium', url: 'https://leetcode.com/problems/time-based-key-value-store' , acceptance: '49.9%', frequency: '25.0%' },
    { type: 'core', id: 'q33', categoryId: 'binary-search', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays' , acceptance: '46.6%', frequency: '75.0%' },
    { type: 'core', id: 'q_g4', categoryId: 'binary-search', title: 'Split Array Largest Sum', difficulty: 'Hard', url: 'https://leetcode.com/problems/split-array-largest-sum' , acceptance: '60.4%', frequency: '62.5%' },

    // Linked List
    { type: 'core', id: 'q34', categoryId: 'linked-list', title: 'Reverse Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-linked-list' , acceptance: '80.6%', frequency: '62.5%' },
    { type: 'core', id: 'q35', categoryId: 'linked-list', title: 'Merge Two Sorted Lists', difficulty: 'Easy', url: 'https://leetcode.com/problems/merge-two-sorted-lists' , acceptance: '68.3%', frequency: '62.5%' },
    { type: 'core', id: 'q36', categoryId: 'linked-list', title: 'Reorder List', difficulty: 'Medium', url: 'https://leetcode.com/problems/reorder-list' , acceptance: '65.3%', frequency: '37.5%' },
    { type: 'core', id: 'q37', categoryId: 'linked-list', title: 'Remove Nth Node From End of List', difficulty: 'Medium', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list' , acceptance: '51.6%', frequency: '50.0%' },
    { type: 'core', id: 'q38', categoryId: 'linked-list', title: 'Copy List with Random Pointer', difficulty: 'Medium', url: 'https://leetcode.com/problems/copy-list-with-random-pointer' , acceptance: '62.9%', frequency: '37.5%' },
    { type: 'core', id: 'q39', categoryId: 'linked-list', title: 'Add Two Numbers', difficulty: 'Medium', url: 'https://leetcode.com/problems/add-two-numbers' , acceptance: '48.5%', frequency: '75.0%' },
    { type: 'core', id: 'q40', categoryId: 'linked-list', title: 'Linked List Cycle', difficulty: 'Easy', url: 'https://leetcode.com/problems/linked-list-cycle' , acceptance: '54.3%', frequency: '50.0%' },
    { type: 'core', id: 'q41', categoryId: 'linked-list', title: 'Find the Duplicate Number', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-the-duplicate-number' , acceptance: '64.3%', frequency: '50.0%' },
    { type: 'core', id: 'q42', categoryId: 'linked-list', title: 'LRU Cache', difficulty: 'Medium', url: 'https://leetcode.com/problems/lru-cache' , acceptance: '47.4%', frequency: '62.5%' },
    { type: 'core', id: 'q43', categoryId: 'linked-list', title: 'Merge k Sorted Lists', difficulty: 'Hard', url: 'https://leetcode.com/problems/merge-k-sorted-lists' , acceptance: '59.6%', frequency: '50.0%' },

    // Trees
    { type: 'core', id: 'q45', categoryId: 'trees', title: 'Invert Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/invert-binary-tree' , acceptance: '80.1%', frequency: '50.0%' },
    { type: 'core', id: 'q46', categoryId: 'trees', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree' , acceptance: '78.2%', frequency: '37.5%' },
    { type: 'core', id: 'q47', categoryId: 'trees', title: 'Diameter of Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/diameter-of-binary-tree' , acceptance: '65.5%', frequency: '50.0%' },
    { type: 'core', id: 'q48', categoryId: 'trees', title: 'Balanced Binary Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/balanced-binary-tree' , acceptance: '58.4%', frequency: '37.5%' },
    { type: 'core', id: 'q49', categoryId: 'trees', title: 'Same Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/same-tree' , acceptance: '67.1%', frequency: '50.0%' },
    { type: 'core', id: 'q50', categoryId: 'trees', title: 'Subtree of Another Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/subtree-of-another-tree' , acceptance: '51.6%', frequency: '25.0%' },
    { type: 'core', id: 'q51', categoryId: 'trees', title: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree' , acceptance: '70.6%', frequency: '25.0%' },
    { type: 'core', id: 'q52', categoryId: 'trees', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal' , acceptance: '72.7%', frequency: '37.5%' },
    { type: 'core', id: 'q53', categoryId: 'trees', title: 'Binary Tree Right Side View', difficulty: 'Medium', url: 'https://leetcode.com/problems/binary-tree-right-side-view' , acceptance: '70.2%', frequency: '37.5%' },
    { type: 'core', id: 'q54', categoryId: 'trees', title: 'Count Good Nodes in Binary Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree' , acceptance: '73.9%', frequency: '12.5%' },
    { type: 'core', id: 'q55', categoryId: 'trees', title: 'Validate Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/validate-binary-search-tree' , acceptance: '35.8%', frequency: '37.5%' },
    { type: 'core', id: 'q56', categoryId: 'trees', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst' , acceptance: '76.8%', frequency: '37.5%' },
    { type: 'core', id: 'q57', categoryId: 'trees', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal' , acceptance: '68.8%', frequency: '37.5%' },
    { type: 'core', id: 'q58', categoryId: 'trees', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum' , acceptance: '42.3%', frequency: '50.0%' },
    { type: 'core', id: 'q59', categoryId: 'trees', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree' , acceptance: '60.8%', frequency: '37.5%' },
    { type: 'core', id: 'q_g5', categoryId: 'trees', title: 'Step-By-Step Directions From a Binary Tree Node to Another', difficulty: 'Medium', url: 'https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another' , acceptance: '56.4%', frequency: '12.5%' },

    // Tries
    { type: 'core', id: 'q60', categoryId: 'tries', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', url: 'https://leetcode.com/problems/implement-trie-prefix-tree' , acceptance: '69.5%', frequency: '37.5%' },
    { type: 'core', id: 'q61', categoryId: 'tries', title: 'Design Add and Search Words Data Structure', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure' , acceptance: '48.5%', frequency: '25.0%' },
    { type: 'core', id: 'q62', categoryId: 'tries', title: 'Word Search II', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-search-ii' , acceptance: '38.5%', frequency: '37.5%' },

    // Heap / Priority Queue
    { type: 'core', id: 'q63', categoryId: 'heap-pq', title: 'Kth Largest Element in a Stream', difficulty: 'Easy', url: 'https://leetcode.com/problems/kth-largest-element-in-a-stream' , acceptance: '61.0%', frequency: '37.5%' },
    { type: 'core', id: 'q64', categoryId: 'heap-pq', title: 'Last Stone Weight', difficulty: 'Easy', url: 'https://leetcode.com/problems/last-stone-weight' , acceptance: '66.5%', frequency: '25.0%' },
    { type: 'core', id: 'q65', categoryId: 'heap-pq', title: 'K Closest Points to Origin', difficulty: 'Medium', url: 'https://leetcode.com/problems/k-closest-points-to-origin' , acceptance: '69.0%', frequency: '25.0%' },
    { type: 'core', id: 'q66', categoryId: 'heap-pq', title: 'Kth Largest Element in an Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array' , acceptance: '68.9%', frequency: '50.0%' },
    { type: 'core', id: 'q67', categoryId: 'heap-pq', title: 'Task Scheduler', difficulty: 'Medium', url: 'https://leetcode.com/problems/task-scheduler' , acceptance: '63.1%', frequency: '37.5%' },
    { type: 'core', id: 'q68', categoryId: 'heap-pq', title: 'Design Twitter', difficulty: 'Medium', url: 'https://leetcode.com/problems/design-twitter' , acceptance: '44.7%', frequency: '25.0%' },
    { type: 'core', id: 'q69', categoryId: 'heap-pq', title: 'Find Median from Data Stream', difficulty: 'Hard', url: 'https://leetcode.com/problems/find-median-from-data-stream' , acceptance: '54.5%', frequency: '50.0%' },

    // Backtracking
    { type: 'core', id: 'q70', categoryId: 'backtracking', title: 'Subsets', difficulty: 'Medium', url: 'https://leetcode.com/problems/subsets' , acceptance: '82.3%', frequency: '50.0%' },
    { type: 'core', id: 'q71', categoryId: 'backtracking', title: 'Combination Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/combination-sum' , acceptance: '76.5%', frequency: '50.0%' },
    { type: 'core', id: 'q72', categoryId: 'backtracking', title: 'Permutations', difficulty: 'Medium', url: 'https://leetcode.com/problems/permutations' , acceptance: '81.9%', frequency: '50.0%' },
    { type: 'core', id: 'q73', categoryId: 'backtracking', title: 'Subsets II', difficulty: 'Medium', url: 'https://leetcode.com/problems/subsets-ii' , acceptance: '61.3%', frequency: '37.5%' },
    { type: 'core', id: 'q74', categoryId: 'backtracking', title: 'Combination Sum II', difficulty: 'Medium', url: 'https://leetcode.com/problems/combination-sum-ii' , acceptance: '59.5%', frequency: '37.5%' },
    { type: 'core', id: 'q75', categoryId: 'backtracking', title: 'Word Search', difficulty: 'Medium', url: 'https://leetcode.com/problems/word-search' , acceptance: '47.4%', frequency: '37.5%' },
    { type: 'core', id: 'q76', categoryId: 'backtracking', title: 'Palindrome Partitioning', difficulty: 'Medium', url: 'https://leetcode.com/problems/palindrome-partitioning' , acceptance: '74.1%', frequency: '50.0%' },
    { type: 'core', id: 'q77', categoryId: 'backtracking', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number' , acceptance: '66.1%', frequency: '62.5%' },
    { type: 'core', id: 'q78', categoryId: 'backtracking', title: 'N-Queens', difficulty: 'Hard', url: 'https://leetcode.com/problems/n-queens' , acceptance: '75.5%', frequency: '62.5%' },

    // Graphs
    { type: 'core', id: 'q79', categoryId: 'graphs', title: 'Number of Islands', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-islands' , acceptance: '64.4%', frequency: '62.5%' },
    { type: 'core', id: 'q80', categoryId: 'graphs', title: 'Max Area of Island', difficulty: 'Medium', url: 'https://leetcode.com/problems/max-area-of-island' , acceptance: '74.0%', frequency: '37.5%' },
    { type: 'core', id: 'q81', categoryId: 'graphs', title: 'Clone Graph', difficulty: 'Medium', url: 'https://leetcode.com/problems/clone-graph' , acceptance: '65.3%', frequency: '37.5%' },
    { type: 'core', id: 'q82', categoryId: 'graphs', title: 'Walls and Gates (Islands and Treasure)', difficulty: 'Medium', url: 'https://leetcode.com/problems/walls-and-gates' , acceptance: '64.0%', frequency: '25.0%' },
    { type: 'core', id: 'q83', categoryId: 'graphs', title: 'Rotting Oranges', difficulty: 'Medium', url: 'https://leetcode.com/problems/rotting-oranges' , acceptance: '58.7%', frequency: '50.0%' },
    { type: 'core', id: 'q84', categoryId: 'graphs', title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow' , acceptance: '61.0%', frequency: '37.5%' },
    { type: 'core', id: 'q85', categoryId: 'graphs', title: 'Surrounded Regions', difficulty: 'Medium', url: 'https://leetcode.com/problems/surrounded-regions' , acceptance: '45.3%', frequency: '37.5%' },
    { type: 'core', id: 'q86', categoryId: 'graphs', title: 'Course Schedule', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule' , acceptance: '51.4%', frequency: '50.0%' },
    { type: 'core', id: 'q87', categoryId: 'graphs', title: 'Course Schedule II', difficulty: 'Medium', url: 'https://leetcode.com/problems/course-schedule-ii' , acceptance: '55.5%', frequency: '37.5%' },
    { type: 'core', id: 'q88', categoryId: 'graphs', title: 'Redundant Connection', difficulty: 'Medium', url: 'https://leetcode.com/problems/redundant-connection' , acceptance: '67.6%', frequency: '37.5%' },
    { type: 'core', id: 'q89', categoryId: 'graphs', title: 'Word Ladder', difficulty: 'Hard', url: 'https://leetcode.com/problems/word-ladder' , acceptance: '45.6%', frequency: '37.5%' },
    { type: 'core', id: 'q_g6', categoryId: 'graphs', title: 'Evaluate Division', difficulty: 'Medium', url: 'https://leetcode.com/problems/evaluate-division' , acceptance: '64.2%', frequency: '37.5%' },

    // Advanced Graphs
    { type: 'core', id: 'q90', categoryId: 'advanced-graphs', title: 'Reconstruct Itinerary', difficulty: 'Hard', url: 'https://leetcode.com/problems/reconstruct-itinerary' , acceptance: '44.6%', frequency: '37.5%' },
    { type: 'core', id: 'q91', categoryId: 'advanced-graphs', title: 'Min Cost to Connect All Points', difficulty: 'Medium', url: 'https://leetcode.com/problems/min-cost-to-connect-all-points' , acceptance: '70.9%', frequency: '12.5%' },
    { type: 'core', id: 'q92', categoryId: 'advanced-graphs', title: 'Network Delay Time', difficulty: 'Medium', url: 'https://leetcode.com/problems/network-delay-time' , acceptance: '60.4%', frequency: '37.5%' },
    { type: 'core', id: 'q93', categoryId: 'advanced-graphs', title: 'Swim in Rising Water', difficulty: 'Hard', url: 'https://leetcode.com/problems/swim-in-rising-water' , acceptance: '67.8%', frequency: '37.5%' },
    { type: 'core', id: 'q94', categoryId: 'advanced-graphs', title: 'Alien Dictionary', difficulty: 'Hard', url: 'https://leetcode.com/problems/alien-dictionary' , acceptance: '37.2%', frequency: '37.5%' },
    { type: 'core', id: 'q95', categoryId: 'advanced-graphs', title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops' , acceptance: '41.8%', frequency: '37.5%' },

    // 1D DP
    { type: 'core', id: 'q96', categoryId: '1d-dp', title: 'Climbing Stairs', difficulty: 'Easy', url: 'https://leetcode.com/problems/climbing-stairs' , acceptance: '54.1%', frequency: '62.5%' },
    { type: 'core', id: 'q97', categoryId: '1d-dp', title: 'Min Cost Climbing Stairs', difficulty: 'Easy', url: 'https://leetcode.com/problems/min-cost-climbing-stairs' , acceptance: '68.3%', frequency: '37.5%' },
    { type: 'core', id: 'q98', categoryId: '1d-dp', title: 'House Robber', difficulty: 'Medium', url: 'https://leetcode.com/problems/house-robber' , acceptance: '53.2%', frequency: '50.0%' },
    { type: 'core', id: 'q99', categoryId: '1d-dp', title: 'House Robber II', difficulty: 'Medium', url: 'https://leetcode.com/problems/house-robber-ii' , acceptance: '44.9%', frequency: '37.5%' },
    { type: 'core', id: 'q100', categoryId: '1d-dp', title: 'Longest Palindromic Substring', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-palindromic-substring' , acceptance: '37.8%', frequency: '75.0%' },
    { type: 'core', id: 'q101', categoryId: '1d-dp', title: 'Palindromic Substrings', difficulty: 'Medium', url: 'https://leetcode.com/problems/palindromic-substrings' , acceptance: '72.8%', frequency: '37.5%' },
    { type: 'core', id: 'q102', categoryId: '1d-dp', title: 'Decode Ways', difficulty: 'Medium', url: 'https://leetcode.com/problems/decode-ways' , acceptance: '38.0%', frequency: '25.0%' },
    { type: 'core', id: 'q103', categoryId: '1d-dp', title: 'Coin Change', difficulty: 'Medium', url: 'https://leetcode.com/problems/coin-change' , acceptance: '48.4%', frequency: '50.0%' },
    { type: 'core', id: 'q104', categoryId: '1d-dp', title: 'Maximum Product Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-product-subarray' , acceptance: '36.4%', frequency: '50.0%' },
    { type: 'core', id: 'q105', categoryId: '1d-dp', title: 'Word Break', difficulty: 'Medium', url: 'https://leetcode.com/problems/word-break' , acceptance: '49.5%', frequency: '50.0%' },
    { type: 'core', id: 'q106', categoryId: '1d-dp', title: 'Longest Increasing Subsequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-increasing-subsequence' , acceptance: '59.4%', frequency: '50.0%' },
    { type: 'core', id: 'q107', categoryId: '1d-dp', title: 'Partition Equal Subset Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/partition-equal-subset-sum' , acceptance: '49.5%', frequency: '50.0%' },

    // 2D DP
    { type: 'core', id: 'q108', categoryId: '2d-dp', title: 'Unique Paths', difficulty: 'Medium', url: 'https://leetcode.com/problems/unique-paths' , acceptance: '66.8%', frequency: '50.0%' },
    { type: 'core', id: 'q109', categoryId: '2d-dp', title: 'Longest Common Subsequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-common-subsequence' , acceptance: '59.2%', frequency: '37.5%' },
    { type: 'core', id: 'q110', categoryId: '2d-dp', title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown' , acceptance: '62.1%', frequency: '37.5%' },
    { type: 'core', id: 'q111', categoryId: '2d-dp', title: 'Coin Change II', difficulty: 'Medium', url: 'https://leetcode.com/problems/coin-change-ii' , acceptance: '60.0%', frequency: '37.5%' },
    { type: 'core', id: 'q112', categoryId: '2d-dp', title: 'Target Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/target-sum' , acceptance: '52.2%', frequency: '37.5%' },
    { type: 'core', id: 'q113', categoryId: '2d-dp', title: 'Interleaving String', difficulty: 'Medium', url: 'https://leetcode.com/problems/interleaving-string' , acceptance: '44.0%', frequency: '25.0%' },
    { type: 'core', id: 'q114', categoryId: '2d-dp', title: 'Longest Increasing Path in a Matrix', difficulty: 'Hard', url: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix' , acceptance: '56.6%', frequency: '37.5%' },
    { type: 'core', id: 'q115', categoryId: '2d-dp', title: 'Distinct Subsequences', difficulty: 'Hard', url: 'https://leetcode.com/problems/distinct-subsequences' , acceptance: '51.9%', frequency: '25.0%' },
    { type: 'core', id: 'q116', categoryId: '2d-dp', title: 'Edit Distance', difficulty: 'Hard', url: 'https://leetcode.com/problems/edit-distance' , acceptance: '60.6%', frequency: '50.0%' },
    { type: 'core', id: 'q117', categoryId: '2d-dp', title: 'Burst Balloons', difficulty: 'Hard', url: 'https://leetcode.com/problems/burst-balloons' , acceptance: '63.5%', frequency: '37.5%' },
    { type: 'core', id: 'q_g7', categoryId: '2d-dp', title: 'Regular Expression Matching', difficulty: 'Hard', url: 'https://leetcode.com/problems/regular-expression-matching' , acceptance: '31.0%', frequency: '50.0%' },

    // Greedy
    { type: 'core', id: 'q118', categoryId: 'greedy', title: 'Maximum Subarray', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray' , acceptance: '53.3%', frequency: '62.5%' },
    { type: 'core', id: 'q119', categoryId: 'greedy', title: 'Jump Game', difficulty: 'Medium', url: 'https://leetcode.com/problems/jump-game' , acceptance: '40.9%', frequency: '62.5%' },
    { type: 'core', id: 'q120', categoryId: 'greedy', title: 'Jump Game II', difficulty: 'Medium', url: 'https://leetcode.com/problems/jump-game-ii' , acceptance: '42.9%', frequency: '50.0%' },
    { type: 'core', id: 'q121', categoryId: 'greedy', title: 'Gas Station', difficulty: 'Medium', url: 'https://leetcode.com/problems/gas-station' , acceptance: '48.0%', frequency: '37.5%' },
    { type: 'core', id: 'q122', categoryId: 'greedy', title: 'Hand of Straights', difficulty: 'Medium', url: 'https://leetcode.com/problems/hand-of-straights' , acceptance: '58.0%', frequency: '25.0%' },
    { type: 'core', id: 'q123', categoryId: 'greedy', title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium', url: 'https://leetcode.com/problems/merge-triplets-to-form-target-triplet' , acceptance: '69.1%', frequency: '25.0%' },
    { type: 'core', id: 'q124', categoryId: 'greedy', title: 'Partition Labels', difficulty: 'Medium', url: 'https://leetcode.com/problems/partition-labels' , acceptance: '81.9%', frequency: '12.5%' },
    { type: 'core', id: 'q125', categoryId: 'greedy', title: 'Valid Parenthesis String', difficulty: 'Medium', url: 'https://leetcode.com/problems/valid-parenthesis-string' , acceptance: '40.1%', frequency: '25.0%' },
    { type: 'core', id: 'q_g8', categoryId: 'greedy', title: 'Minimum Number of Refueling Stops', difficulty: 'Hard', url: 'https://leetcode.com/problems/minimum-number-of-refueling-stops' , acceptance: '41.4%', frequency: '12.5%' },

    // Intervals
    { type: 'core', id: 'q126', categoryId: 'intervals', title: 'Insert Interval', difficulty: 'Medium', url: 'https://leetcode.com/problems/insert-interval' , acceptance: '45.2%', frequency: '50.0%' },
    { type: 'core', id: 'q127', categoryId: 'intervals', title: 'Merge Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/merge-intervals' , acceptance: '51.8%', frequency: '62.5%' },
    { type: 'core', id: 'q128', categoryId: 'intervals', title: 'Non-overlapping Intervals', difficulty: 'Medium', url: 'https://leetcode.com/problems/non-overlapping-intervals' , acceptance: '57.1%', frequency: '25.0%' },
    { type: 'core', id: 'q129', categoryId: 'intervals', title: 'Meeting Rooms', difficulty: 'Easy', url: 'https://leetcode.com/problems/meeting-rooms' , acceptance: '59.4%', frequency: '25.0%' },
    { type: 'core', id: 'q130', categoryId: 'intervals', title: 'Meeting Rooms II', difficulty: 'Medium', url: 'https://leetcode.com/problems/meeting-rooms-ii' , acceptance: '52.7%', frequency: '62.5%' },
    { type: 'core', id: 'q131', categoryId: 'intervals', title: 'Minimum Interval to Include Each Query', difficulty: 'Hard', url: 'https://leetcode.com/problems/minimum-interval-to-include-each-query' , acceptance: '54.4%', frequency: '25.0%' },

    // Math & Geometry
    { type: 'core', id: 'q132', categoryId: 'math-geometry', title: 'Rotate Image', difficulty: 'Medium', url: 'https://leetcode.com/problems/rotate-image' , acceptance: '80.1%', frequency: '50.0%' },
    { type: 'core', id: 'q133', categoryId: 'math-geometry', title: 'Spiral Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/spiral-matrix' , acceptance: '56.8%', frequency: '62.5%' },
    { type: 'core', id: 'q134', categoryId: 'math-geometry', title: 'Set Matrix Zeroes', difficulty: 'Medium', url: 'https://leetcode.com/problems/set-matrix-zeroes' , acceptance: '62.9%', frequency: '50.0%' },
    { type: 'core', id: 'q135', categoryId: 'math-geometry', title: 'Happy Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/happy-number' , acceptance: '59.7%', frequency: '50.0%' },
    { type: 'core', id: 'q136', categoryId: 'math-geometry', title: 'Plus One', difficulty: 'Easy', url: 'https://leetcode.com/problems/plus-one' , acceptance: '50.0%', frequency: '50.0%' },
    { type: 'core', id: 'q137', categoryId: 'math-geometry', title: 'Pow(x, n)', difficulty: 'Medium', url: 'https://leetcode.com/problems/powx-n' , acceptance: '38.7%', frequency: '50.0%' },
    { type: 'core', id: 'q138', categoryId: 'math-geometry', title: 'Multiply Strings', difficulty: 'Medium', url: 'https://leetcode.com/problems/multiply-strings' , acceptance: '44.2%', frequency: '37.5%' },
    { type: 'core', id: 'q139', categoryId: 'math-geometry', title: 'Detect Squares', difficulty: 'Medium', url: 'https://leetcode.com/problems/detect-squares' , acceptance: '52.6%', frequency: '37.5%' },
    { type: 'core', id: 'q_g9', categoryId: 'math-geometry', title: 'Random Pick with Weight', difficulty: 'Medium', url: 'https://leetcode.com/problems/random-pick-with-weight' , acceptance: '49.1%', frequency: '50.0%' },

    // Bit Manipulation
    { type: 'core', id: 'q140', categoryId: 'bit-manipulation', title: 'Single Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/single-number' , acceptance: '77.7%', frequency: '62.5%' },
    { type: 'core', id: 'q141', categoryId: 'bit-manipulation', title: 'Number of 1 Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/number-of-1-bits' , acceptance: '76.8%', frequency: '25.0%' },
    { type: 'core', id: 'q142', categoryId: 'bit-manipulation', title: 'Counting Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/counting-bits' , acceptance: '80.6%', frequency: '25.0%' },
    { type: 'core', id: 'q143', categoryId: 'bit-manipulation', title: 'Reverse Bits', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-bits' , acceptance: '68.4%', frequency: '25.0%' },
    { type: 'core', id: 'q144', categoryId: 'bit-manipulation', title: 'Missing Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/missing-number' , acceptance: '72.0%', frequency: '50.0%' },
    { type: 'core', id: 'q145', categoryId: 'bit-manipulation', title: 'Sum of Two Integers', difficulty: 'Medium', url: 'https://leetcode.com/problems/sum-of-two-integers' , acceptance: '55.5%', frequency: '37.5%' },

    // --- PRACTICE QUESTIONS (LEVEL 2) ---
    // Arrays & Hashing
    { type: 'practice', id: 'p1', categoryId: 'arrays-hashing', title: 'First Missing Positive', difficulty: 'Hard', url: 'https://leetcode.com/problems/first-missing-positive' , acceptance: '42.9%', frequency: '50.0%' },
    { type: 'practice', id: 'p2', categoryId: 'arrays-hashing', title: 'Find All Numbers Disappeared in an Array', difficulty: 'Easy', url: 'https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array' , acceptance: '64.1%', frequency: '50.0%' },
    { type: 'practice', id: 'p3', categoryId: 'arrays-hashing', title: 'Sort Colors', difficulty: 'Medium', url: 'https://leetcode.com/problems/sort-colors' , acceptance: '69.6%', frequency: '50.0%' },
    { type: 'practice', id: 'p4', categoryId: 'arrays-hashing', title: 'Encode and Decode Strings', difficulty: 'Medium', url: 'https://leetcode.com/problems/encode-and-decode-strings' , acceptance: '51.6%', frequency: '37.5%' },
    { type: 'practice', id: 'p5', categoryId: 'arrays-hashing', title: 'Longest Palindrome', difficulty: 'Easy', url: 'https://leetcode.com/problems/longest-palindrome' , acceptance: '56.0%', frequency: '37.5%' },
    
    // Two Pointers
    { type: 'practice', id: 'p6', categoryId: 'two-pointers', title: '4Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/4sum' , acceptance: '40.6%', frequency: '62.5%' },
    { type: 'practice', id: 'p7', categoryId: 'two-pointers', title: 'Trapping Rain Water II', difficulty: 'Hard', url: 'https://leetcode.com/problems/trapping-rain-water-ii' , acceptance: '64.1%', frequency: '37.5%' },
    { type: 'practice', id: 'p8', categoryId: 'two-pointers', title: 'Sort Array By Parity', difficulty: 'Easy', url: 'https://leetcode.com/problems/sort-array-by-parity' , acceptance: '76.5%', frequency: '25.0%' },
    { type: 'practice', id: 'p9', categoryId: 'two-pointers', title: 'Reverse String', difficulty: 'Easy', url: 'https://leetcode.com/problems/reverse-string' , acceptance: '80.8%', frequency: '37.5%' },
    { type: 'practice', id: 'p10', categoryId: 'two-pointers', title: 'Remove Duplicates from Sorted Array II', difficulty: 'Medium', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii' , acceptance: '64.7%', frequency: '37.5%' },

    // Sliding Window
    { type: 'practice', id: 'p11', categoryId: 'sliding-window', title: 'Minimum Size Subarray Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/minimum-size-subarray-sum' , acceptance: '51.7%', frequency: '37.5%' },
    { type: 'practice', id: 'p12', categoryId: 'sliding-window', title: 'Subarrays with K Different Integers', difficulty: 'Hard', url: 'https://leetcode.com/problems/subarrays-with-k-different-integers' , acceptance: '68.1%', frequency: '37.5%' },
    { type: 'practice', id: 'p13', categoryId: 'sliding-window', title: 'Fruit Into Baskets', difficulty: 'Medium', url: 'https://leetcode.com/problems/fruit-into-baskets' , acceptance: '51.1%', frequency: '50.0%' },
    { type: 'practice', id: 'p14', categoryId: 'sliding-window', title: 'Contains Duplicate II', difficulty: 'Easy', url: 'https://leetcode.com/problems/contains-duplicate-ii' , acceptance: '51.3%', frequency: '50.0%' },
    { type: 'practice', id: 'p15', categoryId: 'sliding-window', title: 'Maximum Points You Can Obtain from Cards', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards' , acceptance: '57.7%', frequency: '37.5%' },

    // Stack
    { type: 'practice', id: 'p16', categoryId: 'stack', title: 'Maximal Rectangle', difficulty: 'Hard', url: 'https://leetcode.com/problems/maximal-rectangle' , acceptance: '58.8%', frequency: '50.0%' },
    { type: 'practice', id: 'p17', categoryId: 'stack', title: 'Remove K Digits', difficulty: 'Medium', url: 'https://leetcode.com/problems/remove-k-digits' , acceptance: '36.9%', frequency: '50.0%' },
    { type: 'practice', id: 'p18', categoryId: 'stack', title: 'Online Stock Span', difficulty: 'Medium', url: 'https://leetcode.com/problems/online-stock-span' , acceptance: '69.1%', frequency: '37.5%' },
    { type: 'practice', id: 'p19', categoryId: 'stack', title: 'Next Greater Element I', difficulty: 'Easy', url: 'https://leetcode.com/problems/next-greater-element-i' , acceptance: '76.1%', frequency: '37.5%' },
    { type: 'practice', id: 'p20', categoryId: 'stack', title: 'Simplify Path', difficulty: 'Medium', url: 'https://leetcode.com/problems/simplify-path' , acceptance: '50.6%', frequency: '37.5%' },

    // Binary Search
    { type: 'practice', id: 'p21', categoryId: 'binary-search', title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array' , acceptance: '48.9%', frequency: '50.0%' },
    { type: 'practice', id: 'p22', categoryId: 'binary-search', title: 'Capacity To Ship Packages Within D Days', difficulty: 'Medium', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days' , acceptance: '73.9%', frequency: '50.0%' },
    { type: 'practice', id: 'p23', categoryId: 'binary-search', title: 'Single Element in a Sorted Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/single-element-in-a-sorted-array' , acceptance: '59.3%', frequency: '50.0%' },
    { type: 'practice', id: 'p24', categoryId: 'binary-search', title: 'Guess Number Higher or Lower', difficulty: 'Easy', url: 'https://leetcode.com/problems/guess-number-higher-or-lower' , acceptance: '57.6%', frequency: '25.0%' },
    { type: 'practice', id: 'p25', categoryId: 'binary-search', title: 'Search in a Binary Search Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/search-in-a-binary-search-tree' , acceptance: '82.7%', frequency: '25.0%' },

    // Linked List
    { type: 'practice', id: 'p26', categoryId: 'linked-list', title: 'Reverse Nodes in k-Group', difficulty: 'Hard', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group' , acceptance: '66.1%', frequency: '50.0%' },
    { type: 'practice', id: 'p27', categoryId: 'linked-list', title: 'Sort List', difficulty: 'Medium', url: 'https://leetcode.com/problems/sort-list' , acceptance: '64.4%', frequency: '37.5%' },
    { type: 'practice', id: 'p28', categoryId: 'linked-list', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists' , acceptance: '63.7%', frequency: '37.5%' },
    { type: 'practice', id: 'p29', categoryId: 'linked-list', title: 'Palindrome Linked List', difficulty: 'Easy', url: 'https://leetcode.com/problems/palindrome-linked-list' , acceptance: '58.0%', frequency: '50.0%' },
    { type: 'practice', id: 'p30', categoryId: 'linked-list', title: 'Swap Nodes in Pairs', difficulty: 'Medium', url: 'https://leetcode.com/problems/swap-nodes-in-pairs' , acceptance: '69.5%', frequency: '37.5%' },

    // Trees
    { type: 'practice', id: 'p31', categoryId: 'trees', title: 'Path Sum III', difficulty: 'Medium', url: 'https://leetcode.com/problems/path-sum-iii' , acceptance: '46.4%', frequency: '25.0%' },
    { type: 'practice', id: 'p32', categoryId: 'trees', title: 'Recover Binary Search Tree', difficulty: 'Medium', url: 'https://leetcode.com/problems/recover-binary-search-tree' , acceptance: '59.7%', frequency: '37.5%' },
    { type: 'practice', id: 'p33', categoryId: 'trees', title: 'Populating Next Right Pointers in Each Node', difficulty: 'Medium', url: 'https://leetcode.com/problems/populating-next-right-pointers-in-each-node' , acceptance: '67.2%', frequency: '25.0%' },
    { type: 'practice', id: 'p34', categoryId: 'trees', title: 'Path Sum', difficulty: 'Easy', url: 'https://leetcode.com/problems/path-sum' , acceptance: '54.9%', frequency: '25.0%' },
    { type: 'practice', id: 'p35', categoryId: 'trees', title: 'Symmetric Tree', difficulty: 'Easy', url: 'https://leetcode.com/problems/symmetric-tree' , acceptance: '61.2%', frequency: '37.5%' },

    // Tries
    { type: 'practice', id: 'p36', categoryId: 'tries', title: 'Palindrome Pairs', difficulty: 'Hard', url: 'https://leetcode.com/problems/palindrome-pairs' , acceptance: '37.2%', frequency: '25.0%' },
    { type: 'practice', id: 'p37', categoryId: 'tries', title: 'Replace Words', difficulty: 'Medium', url: 'https://leetcode.com/problems/replace-words' , acceptance: '68.7%', frequency: '12.5%' },
    { type: 'practice', id: 'p38', categoryId: 'tries', title: 'Map Sum Pairs', difficulty: 'Medium', url: 'https://leetcode.com/problems/map-sum-pairs' , acceptance: '57.2%', frequency: '12.5%' },
    { type: 'practice', id: 'p39', categoryId: 'tries', title: 'Longest Word in Dictionary', difficulty: 'Medium', url: 'https://leetcode.com/problems/longest-word-in-dictionary' , acceptance: '54.8%', frequency: '12.5%' },
    { type: 'practice', id: 'p40', categoryId: 'tries', title: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array' , acceptance: '53.5%', frequency: '37.5%' },

    // Heap / Priority Queue
    { type: 'practice', id: 'p41', categoryId: 'heap-pq', title: 'Sliding Window Median', difficulty: 'Hard', url: 'https://leetcode.com/problems/sliding-window-median' , acceptance: '39.0%', frequency: '25.0%' },
    { type: 'practice', id: 'p42', categoryId: 'heap-pq', title: 'Reorganize String', difficulty: 'Medium', url: 'https://leetcode.com/problems/reorganize-string' , acceptance: '57.1%', frequency: '37.5%' },
    { type: 'practice', id: 'p43', categoryId: 'heap-pq', title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix' , acceptance: '64.6%', frequency: '25.0%' },
    { type: 'practice', id: 'p44', categoryId: 'heap-pq', title: 'Top K Frequent Words', difficulty: 'Medium', url: 'https://leetcode.com/problems/top-k-frequent-words' , acceptance: '60.2%', frequency: '37.5%' },
    { type: 'practice', id: 'p45', categoryId: 'heap-pq', title: 'Sort Characters By Frequency', difficulty: 'Medium', url: 'https://leetcode.com/problems/sort-characters-by-frequency' , acceptance: '75.3%', frequency: '37.5%' },

    // Backtracking
    { type: 'practice', id: 'p46', categoryId: 'backtracking', title: 'Sudoku Solver', difficulty: 'Hard', url: 'https://leetcode.com/problems/sudoku-solver' , acceptance: '65.5%', frequency: '50.0%' },
    { type: 'practice', id: 'p47', categoryId: 'backtracking', title: 'Matchsticks to Square', difficulty: 'Medium', url: 'https://leetcode.com/problems/matchsticks-to-square' , acceptance: '41.9%', frequency: '12.5%' },
    { type: 'practice', id: 'p48', categoryId: 'backtracking', title: 'Combination Sum III', difficulty: 'Medium', url: 'https://leetcode.com/problems/combination-sum-iii' , acceptance: '73.2%', frequency: '12.5%' },
    { type: 'practice', id: 'p49', categoryId: 'backtracking', title: 'Combinations', difficulty: 'Medium', url: 'https://leetcode.com/problems/combinations' , acceptance: '74.6%', frequency: '37.5%' },
    { type: 'practice', id: 'p50', categoryId: 'backtracking', title: 'Restore IP Addresses', difficulty: 'Medium', url: 'https://leetcode.com/problems/restore-ip-addresses' , acceptance: '56.0%', frequency: '25.0%' },

    // Graphs
    { type: 'practice', id: 'p51', categoryId: 'graphs', title: 'Is Graph Bipartite?', difficulty: 'Medium', url: 'https://leetcode.com/problems/is-graph-bipartite' , acceptance: '59.3%', frequency: '25.0%' },
    { type: 'practice', id: 'p52', categoryId: 'graphs', title: 'Bus Routes', difficulty: 'Hard', url: 'https://leetcode.com/problems/bus-routes' , acceptance: '47.3%', frequency: '37.5%' },
    { type: 'practice', id: 'p53', categoryId: 'graphs', title: 'Number of Provinces', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-provinces' , acceptance: '70.4%', frequency: '37.5%' },
    { type: 'practice', id: 'p54', categoryId: 'graphs', title: 'Shortest Path in Binary Matrix', difficulty: 'Medium', url: 'https://leetcode.com/problems/shortest-path-in-binary-matrix' , acceptance: '51.5%', frequency: '37.5%' },
    { type: 'practice', id: 'p55', categoryId: 'graphs', title: 'Find the Town Judge', difficulty: 'Easy', url: 'https://leetcode.com/problems/find-the-town-judge' , acceptance: '50.8%', frequency: '25.0%' },

    // Advanced Graphs
    { type: 'practice', id: 'p56', categoryId: 'advanced-graphs', title: 'Critical Connections in a Network', difficulty: 'Hard', url: 'https://leetcode.com/problems/critical-connections-in-a-network' , acceptance: '59.7%', frequency: '25.0%' },
    { type: 'practice', id: 'p57', categoryId: 'advanced-graphs', title: 'Path with Maximum Probability', difficulty: 'Medium', url: 'https://leetcode.com/problems/path-with-maximum-probability' , acceptance: '65.5%', frequency: '25.0%' },
    { type: 'practice', id: 'p58', categoryId: 'advanced-graphs', title: 'Find Eventual Safe States', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-eventual-safe-states' , acceptance: '70.7%', frequency: '37.5%' },
    { type: 'practice', id: 'p59', categoryId: 'advanced-graphs', title: 'Network Delay Time', difficulty: 'Medium', url: 'https://leetcode.com/problems/network-delay-time' , acceptance: '60.4%', frequency: '37.5%' },
    { type: 'practice', id: 'p60', categoryId: 'advanced-graphs', title: 'Connecting Cities With Minimum Cost', difficulty: 'Medium', url: 'https://leetcode.com/problems/connecting-cities-with-minimum-cost' , acceptance: 'N/A', frequency: 'N/A' },

    // 1D DP
    { type: 'practice', id: 'p61', categoryId: '1d-dp', title: 'Decode Ways II', difficulty: 'Hard', url: 'https://leetcode.com/problems/decode-ways-ii' , acceptance: 'N/A', frequency: 'N/A' },
    { type: 'practice', id: 'p62', categoryId: '1d-dp', title: 'Maximum Subarray Sum with One Deletion', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion' , acceptance: '47.6%', frequency: '12.5%' },
    { type: 'practice', id: 'p63', categoryId: '1d-dp', title: 'Perfect Squares', difficulty: 'Medium', url: 'https://leetcode.com/problems/perfect-squares' , acceptance: '56.5%', frequency: '37.5%' },
    { type: 'practice', id: 'p64', categoryId: '1d-dp', title: 'Integer Break', difficulty: 'Medium', url: 'https://leetcode.com/problems/integer-break' , acceptance: '62.3%', frequency: '25.0%' },
    { type: 'practice', id: 'p65', categoryId: '1d-dp', title: 'Fibonacci Number', difficulty: 'Easy', url: 'https://leetcode.com/problems/fibonacci-number' , acceptance: '74.1%', frequency: '50.0%' },

    // 2D DP
    { type: 'practice', id: 'p66', categoryId: '2d-dp', title: 'Cherry Pickup', difficulty: 'Hard', url: 'https://leetcode.com/problems/cherry-pickup' , acceptance: '39.5%', frequency: '12.5%' },
    { type: 'practice', id: 'p67', categoryId: '2d-dp', title: 'Out of Boundary Paths', difficulty: 'Medium', url: 'https://leetcode.com/problems/out-of-boundary-paths' , acceptance: 'N/A', frequency: 'N/A' },
    { type: 'practice', id: 'p68', categoryId: '2d-dp', title: 'Minimum Path Sum', difficulty: 'Medium', url: 'https://leetcode.com/problems/minimum-path-sum' , acceptance: '68.2%', frequency: '37.5%' },
    { type: 'practice', id: 'p69', categoryId: '2d-dp', title: 'Unique Paths II', difficulty: 'Medium', url: 'https://leetcode.com/problems/unique-paths-ii' , acceptance: '44.5%', frequency: '37.5%' },
    { type: 'practice', id: 'p70', categoryId: '2d-dp', title: 'Maximal Square', difficulty: 'Medium', url: 'https://leetcode.com/problems/maximal-square' , acceptance: '50.3%', frequency: '50.0%' },

    // Greedy
    { type: 'practice', id: 'p71', categoryId: 'greedy', title: 'Candy', difficulty: 'Hard', url: 'https://leetcode.com/problems/candy' , acceptance: '48.5%', frequency: '50.0%' },
    { type: 'practice', id: 'p72', categoryId: 'greedy', title: 'Queue Reconstruction by Height', difficulty: 'Medium', url: 'https://leetcode.com/problems/queue-reconstruction-by-height' , acceptance: '74.7%', frequency: '25.0%' },
    { type: 'practice', id: 'p73', categoryId: 'greedy', title: 'Assign Cookies', difficulty: 'Easy', url: 'https://leetcode.com/problems/assign-cookies' , acceptance: '55.0%', frequency: '37.5%' },
    { type: 'practice', id: 'p74', categoryId: 'greedy', title: 'Lemonade Change', difficulty: 'Easy', url: 'https://leetcode.com/problems/lemonade-change' , acceptance: '59.1%', frequency: '25.0%' },
    { type: 'practice', id: 'p75', categoryId: 'greedy', title: 'Wiggle Subsequence', difficulty: 'Medium', url: 'https://leetcode.com/problems/wiggle-subsequence' , acceptance: 'N/A', frequency: 'N/A' },

    // Intervals
    { type: 'practice', id: 'p76', categoryId: 'intervals', title: 'Data Stream as Disjoint Intervals', difficulty: 'Hard', url: 'https://leetcode.com/problems/data-stream-as-disjoint-intervals' , acceptance: '60.1%', frequency: '12.5%' },
    { type: 'practice', id: 'p77', categoryId: 'intervals', title: 'Summary Ranges', difficulty: 'Easy', url: 'https://leetcode.com/problems/summary-ranges' , acceptance: '54.2%', frequency: '37.5%' },
    { type: 'practice', id: 'p78', categoryId: 'intervals', title: 'Teemo Attacking', difficulty: 'Easy', url: 'https://leetcode.com/problems/teemo-attacking' , acceptance: '57.7%', frequency: '12.5%' },
    { type: 'practice', id: 'p79', categoryId: 'intervals', title: 'Find Right Interval', difficulty: 'Medium', url: 'https://leetcode.com/problems/find-right-interval' , acceptance: '55.8%', frequency: '12.5%' },
    { type: 'practice', id: 'p80', categoryId: 'intervals', title: 'Video Stitching', difficulty: 'Medium', url: 'https://leetcode.com/problems/video-stitching' , acceptance: '52.7%', frequency: '25.0%' },

    // Math & Geometry
    { type: 'practice', id: 'p81', categoryId: 'math-geometry', title: 'Rectangle Area', difficulty: 'Medium', url: 'https://leetcode.com/problems/rectangle-area' , acceptance: '49.6%', frequency: '12.5%' },
    { type: 'practice', id: 'p82', categoryId: 'math-geometry', title: 'Max Points on a Line', difficulty: 'Hard', url: 'https://leetcode.com/problems/max-points-on-a-line' , acceptance: '30.7%', frequency: '25.0%' },
    { type: 'practice', id: 'p83', categoryId: 'math-geometry', title: 'Roman to Integer', difficulty: 'Easy', url: 'https://leetcode.com/problems/roman-to-integer' , acceptance: '66.6%', frequency: '62.5%' },
    { type: 'practice', id: 'p84', categoryId: 'math-geometry', title: 'Integer to Roman', difficulty: 'Medium', url: 'https://leetcode.com/problems/integer-to-roman' , acceptance: '71.0%', frequency: '37.5%' },
    { type: 'practice', id: 'p85', categoryId: 'math-geometry', title: 'Add Binary', difficulty: 'Easy', url: 'https://leetcode.com/problems/add-binary' , acceptance: '58.1%', frequency: '50.0%' },

    // Bit Manipulation
    { type: 'practice', id: 'p86', categoryId: 'bit-manipulation', title: 'Single Number II', difficulty: 'Medium', url: 'https://leetcode.com/problems/single-number-ii' , acceptance: '67.1%', frequency: '37.5%' },
    { type: 'practice', id: 'p87', categoryId: 'bit-manipulation', title: 'Single Number III', difficulty: 'Medium', url: 'https://leetcode.com/problems/single-number-iii' , acceptance: '70.3%', frequency: '25.0%' },
    { type: 'practice', id: 'p88', categoryId: 'bit-manipulation', title: 'Bitwise AND of Numbers Range', difficulty: 'Medium', url: 'https://leetcode.com/problems/bitwise-and-of-numbers-range' , acceptance: '49.0%', frequency: '12.5%' },
    { type: 'practice', id: 'p89', categoryId: 'bit-manipulation', title: 'Power of Two', difficulty: 'Easy', url: 'https://leetcode.com/problems/power-of-two' , acceptance: '50.1%', frequency: '50.0%' },
    { type: 'practice', id: 'p90', categoryId: 'bit-manipulation', title: 'Power of Four', difficulty: 'Easy', url: 'https://leetcode.com/problems/power-of-four' , acceptance: '52.1%', frequency: '25.0%' }

];

// App State
let currentCategoryId = 'all';
let completedQuestions = JSON.parse(localStorage.getItem('googlePrepCompleted')) || [];

// DOM Elements
const categoryNav = document.getElementById('category-nav');
const questionsContainer = document.getElementById('questions-container');
const categoryTitle = document.getElementById('current-category-title');
const categoryDesc = document.getElementById('current-category-desc');
const overallPercentage = document.getElementById('overall-percentage');
const overallProgressBar = document.getElementById('overall-progress-bar');
const completedCount = document.getElementById('completed-count');
const totalCount = document.getElementById('total-count');
const resetBtn = document.getElementById('reset-progress-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// Initialize App
function init() {
    renderCategories();
    updateProgress();
    renderQuestions();
    setupEventListeners();
}

// Render Category Navigation
function renderCategories() {
    categoryNav.innerHTML = '';
    categories.forEach(cat => {
        const catQuestions = cat.id === 'all' 
            ? questionsData 
            : questionsData.filter(q => q.categoryId === cat.id);
            
        const div = document.createElement('div');
        div.className = `category-item ${currentCategoryId === cat.id ? 'active' : ''}`;
        div.dataset.id = cat.id;
        div.innerHTML = `
            <span>${cat.name}</span>
            <span class="category-count">${catQuestions.length}</span>
        `;
        div.addEventListener('click', () => {
            currentCategoryId = cat.id;
            categoryTitle.textContent = cat.name;
            categoryDesc.textContent = cat.desc;
            
            // Close mobile menu on select
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('open');
            
            renderCategories();
            renderQuestions();
        });
        categoryNav.appendChild(div);
    });
}

// Helper to create card HTML
function createCard(q, isCompleted) {
    const card = document.createElement('div');
    card.className = `question-card ${isCompleted ? 'completed' : ''}`;
    card.innerHTML = `
        <div class="card-header">
            <a href="${q.url}" target="_blank" rel="noopener noreferrer" class="question-link">
                <h3 class="card-title">${q.title}</h3>
            </a>
            <label class="checkbox-wrapper">
                <input type="checkbox" ${isCompleted ? 'checked' : ''} data-id="${q.id}">
                <div class="checkmark"></div>
            </label>
        </div>
        <div class="card-meta">
            <div class="meta-row top-meta">
                <span class="tag diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                <span class="google-tag">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.662,3.269-5.445,3.269c-3.14,0-5.719-2.585-5.719-5.772 c0-3.187,2.579-5.772,5.719-5.772c1.472,0,2.782,0.528,3.834,1.488l2.802-2.802C17.433,2.83,15.176,1.88,12.545,1.88 C6.945,1.88,2.41,6.415,2.41,12.015c0,5.6,4.535,10.135,10.135,10.135c5.385,0,9.914-3.774,9.914-9.873 c0-0.812-0.082-1.503-0.222-2.038H12.545z"/></svg>
                    ${q.type === 'practice' ? 'Level 2' : 'Top Google'}
                </span>
            </div>
            ${q.acceptance !== 'N/A' ? `
            <div class="meta-row stats-meta">
                <span class="stat-badge" title="Acceptance Rate">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ${q.acceptance}
                </span>
                <span class="stat-badge" title="Google Frequency">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    Freq: ${q.frequency}
                </span>
            </div>` : ''}
        </div>
    `;
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (e) => {
        toggleQuestionCompletion(q.id, e.target.checked);
        card.classList.toggle('completed', e.target.checked);
        
        // Re-render to update practice lock state dynamically
        renderQuestions();
    });
    return card;
}

// Render Questions for Current Category
function renderQuestions() {
    questionsContainer.innerHTML = '';
    
    const filteredQuestions = currentCategoryId === 'all' 
        ? questionsData 
        : questionsData.filter(q => q.categoryId === currentCategoryId);

    const coreQuestions = filteredQuestions.filter(q => q.type === 'core');
    const practiceQuestions = filteredQuestions.filter(q => q.type === 'practice');
    
    // Calculate core completion
    const totalCore = coreQuestions.length;
    const completedCore = coreQuestions.filter(q => completedQuestions.includes(q.id)).length;
    const isPracticeUnlocked = (totalCore > 0 && completedCore === totalCore);

    // Render Core Section
    if (coreQuestions.length > 0) {
        const coreHeaderContainer = document.createElement('div');
        coreHeaderContainer.className = 'section-header-container';
        coreHeaderContainer.innerHTML = `
            <h3 class="section-header">Core Foundation</h3>
            <p class="section-desc">Mastering these core questions provides the complete conceptual foundation required for this topic.</p>
        `;
        questionsContainer.appendChild(coreHeaderContainer);
        
        const coreGrid = document.createElement('div');
        coreGrid.className = 'questions-grid';
        coreQuestions.forEach(q => {
            coreGrid.appendChild(createCard(q, completedQuestions.includes(q.id)));
        });
        questionsContainer.appendChild(coreGrid);
    }

    // Render Practice Section
    if (practiceQuestions.length > 0) {
        const practiceHeaderContainer = document.createElement('div');
        practiceHeaderContainer.className = 'section-header-container practice-header';
        practiceHeaderContainer.innerHTML = `
            <h3 class="section-header">Level 2 Practice ${isPracticeUnlocked ? '<span class="unlocked-badge">Unlocked</span>' : '🔒'}</h3>
            <p class="section-desc">These are completely optional. Dive into these only if you want to further reinforce the core concepts.</p>
        `;
        questionsContainer.appendChild(practiceHeaderContainer);

        const practiceWrapper = document.createElement('div');
        practiceWrapper.className = `practice-wrapper ${isPracticeUnlocked ? 'unlocked' : 'locked'}`;

        if (!isPracticeUnlocked) {
            const overlay = document.createElement('div');
            overlay.className = 'locked-overlay';
            overlay.innerHTML = `
                <div class="lock-icon">🔒</div>
                <h4>Practice Mode Locked</h4>
                <p>Master all ${totalCore} core questions above to unlock Level 2.</p>
                <div class="progress-indicator">${completedCore} / ${totalCore} Completed</div>
            `;
            practiceWrapper.appendChild(overlay);
        }

        const practiceGrid = document.createElement('div');
        practiceGrid.className = 'questions-grid';
        practiceQuestions.forEach(q => {
            practiceGrid.appendChild(createCard(q, completedQuestions.includes(q.id)));
        });
        
        practiceWrapper.appendChild(practiceGrid);
        questionsContainer.appendChild(practiceWrapper);
    }
}

// Toggle Completion Status
function toggleQuestionCompletion(id, isCompleted) {
    if (isCompleted && !completedQuestions.includes(id)) {
        completedQuestions.push(id);
    } else if (!isCompleted) {
        completedQuestions = completedQuestions.filter(qId => qId !== id);
    }
    localStorage.setItem('googlePrepCompleted', JSON.stringify(completedQuestions));
    updateProgress();
}

// Update Overall Progress
function updateProgress() {
    const coreQuestions = questionsData.filter(q => q.type === 'core');
    const total = coreQuestions.length;
    const completed = completedQuestions.filter(id => {
        const q = questionsData.find(q => q.id === id);
        return q && q.type === 'core';
    }).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    completedCount.textContent = completed;
    totalCount.textContent = total;
    overallPercentage.textContent = `${percentage}%`;
    overallProgressBar.style.width = `${percentage}%`;
}

// Event Listeners
function setupEventListeners() {
    resetBtn.addEventListener('click', () => {
        if(confirm('Are you sure you want to reset all your progress?')) {
            completedQuestions = [];
            localStorage.setItem('googlePrepCompleted', JSON.stringify([]));
            updateProgress();
            renderQuestions();
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('open');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
    });
}

// Run init
init();
