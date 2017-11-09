function produceDrivingRange(blockRange) {
  return function(beginning, ending) {
    const range = parseFloat(ending) - parseFloat(beginning);
    const totalRange = blockRange - range;
    if (totalRange > 0) {
      return `within range by ${totalRange}`
    } else {
      return `${Math.abs(totalRange)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  }
}
