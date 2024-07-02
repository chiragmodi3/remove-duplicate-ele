def remove_duplicates(nums):
    if not nums:
        return 0
    
    k = 1  # Initialize the unique element index
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[k] = nums[i]
            k += 1
    
    # Set the remaining elements to None
    for i in range(k, len(nums)):
        nums[i] = None
    
    return k

# Example 1
nums1 = [1, 1, 2]
k1 = remove_duplicates(nums1)
print(f"Output: {k1}, nums = {nums1}")

# Example 2
nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
k2 = remove_duplicates(nums2)
print(f"Output: {k2}, nums = {nums2}")
