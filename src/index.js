module.exports = function towelSort (matrix) {
    return matrix ? matrix.reduce((acc, curr, ind) => {
      return ind % 2 == 0 ? acc.concat(curr) : acc.concat(curr.reverse());
    }, []) : [];
}
