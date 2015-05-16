/**
 * Source:  https://leetcode.com/problems/3sum/
 * Tags:    [Array,Two Pointers]
 * Level:   Medium
 * Title:   3Sum
 * Auther:  @imcoddy
 * Content: Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
 * The solution set must not contain duplicate triplets.
 *
 *
 *
 *
 *     For example, given array S = {-1 0 1 2 -1 -4},
 *
 *     A solution set is:
 *     (-1, 0, 1)
 *     (-1, -1, 2)
 */

 public class Solution {
 	public List < List < Integer >> threeSum(int[] num) {
 		List < List < Integer >> solutionList = new LinkedList < List < Integer >> ();
 		if (num == null || num.length == 0) {
 			return solutionList; // Return empty list
 		}

 		Arrays.sort(num);

		int pivot = 0;
		while (pivot < num.length && num[pivot] < 0) {
			pivot++;
		}
		if(pivot>=num.length-2) pivot = num.length-2;

 		// Outer loop iterates through all of the values from left to right, skipping dups
 		int previousValue = num[0] == 0 ? 1 : 0;
 		for (int i = 0; i <= pivot; ++i) {
 			// Progress the outer loop past duplicate values
 			if (num[i] == previousValue) {
 				previousValue = num[i];
 				continue;
 			}

 			// Inner loop iterates from left to right, starting at outer loop index + 1
 			for (int j = i + 1; j < num.length - 1; ++j) {
 				int desiredValue = 0 - (num[i] + num[j]);
 				if (desiredValue < num[j]) {
 					break; // Array is sorted in increasing order; we won't find desired value
 				}

 				// Perform array search from j + 1 to num.length for desired value
 				int keyIndex = Arrays.binarySearch(num, j + 1, num.length, desiredValue);
 				if (keyIndex >= 0) {
 					List < Integer > solutionSet = new LinkedList < Integer > ();
 					solutionSet.add(num[i]);
 					solutionSet.add(num[j]);
 					solutionSet.add(num[keyIndex]);

 					solutionList.add(solutionSet);
 				}

 				// Progress the inner loop past duplicate values
 				while (j + 1 < num.length && num[j] == num[j + 1]) {
 					++j;
 				}
 			}

 			previousValue = num[i];
 		}

 		return solutionList;
 	}
 }

 public static void main(String[] args) {
     Solution s = new Solution();
     s.threeSum([1,2,3]);
 }
