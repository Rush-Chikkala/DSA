function mergeIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    for (const interval of intervals) {
        if (result.length === 0) {
            result.push(interval);
            continue;
        }
        const last = result[result.length - 1];

        if (interval[0] <= last[1]) {
            last[1] = Math.max(last[1], interval[1]);
        } else {
            result.push(interval);
        }
    }

    return result;
}

console.log(mergeIntervals([[2,6],[1,3], [8,10], [9,12]]))
console.log(mergeIntervals([[2,4],[1,10], [8,10], [9,12]]))


// Sorting: O(n log n)
// Single pass to merge: O(n)
// Overall: O(n log n) because the dominant term is sorting.
// Space: O(n) for the result array.