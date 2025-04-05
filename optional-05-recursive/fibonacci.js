function fibonacci(n) {
    function fibHelper(i, memo = [0, 1]) {
        if (i < memo.length) return memo.slice(0, i + 1);
        const nextValue = memo[memo.length - 1] + memo[memo.length - 2];
        memo.push(nextValue);
        return fibHelper(i, memo);
    }
    return fibHelper(n);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
