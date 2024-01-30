// Function to calculate the mean of a property for a specific alcohol class
export const calcMean = ({ classVal, alcoholClass, property }) => {
  // Filter the dataset to get only the entries for the specified alcohol class
  const classArr = alcoholClass.filter((items) => items.Alcohol === classVal);
  
  // Calculate the sum of the property values for the class
  let sum = classArr.reduce((acc, curr) => {
    return acc + parseFloat(curr[property]);
  }, 0);

  // Calculate the mean and round off to 3 decimal places
  let mean = sum / classArr.length;
  return isNaN(mean) ? 0 : mean.toFixed(3);
};

// Function to calculate the median of a property for a specific alcohol class
export const calcMedian = ({ classVal, alcoholClass, property }) => {
  // Filter the dataset to get only the entries for the specified alcohol class
  const Arr = alcoholClass.filter((items) => items.Alcohol === classVal);
  
  // Extract the property values, sort them, and calculate the median
  const sorted = Arr.map(item => item[property]);
  sorted.sort();
  let mid = sorted.length / 2;
  let median;
  if (sorted.length % 2 !== 0) {
    median = sorted[Math.floor(mid)];
  } else {
    median = (sorted[mid] + sorted[mid - 1]) / 2;
  }

  // Round off the median to 3 decimal places
  return isNaN(median) ? 0 : median.toFixed(3);
}

// Function to calculate the mode of a property for a specific alcohol class
export const calcMode = ({ classVal, alcoholClass, property }) => {
  // Filter the dataset to get only the entries for the specified alcohol class
  const Arr = alcoholClass.filter(items => items.Alcohol === classVal);
  
  // Extract the property values, sort them, and calculate the mode
  const sortedArr = Arr.map(item => item[property]);
  sortedArr.sort();
  let mode = sortedArr.reduce((prev, curr) => {
    const obj = prev;
    obj[curr] = ++obj[curr] || 1;
    return obj;
  }, {});

  // Find the mode and round off to 3 decimal places
  let maxCount = Math.max(...Object.values(mode));
  let ModeResult = Object.keys(mode).find(key => mode[key] === maxCount);
  return isNaN(ModeResult) ? 0 : parseFloat(ModeResult).toFixed(3);
}

// Function to calculate Gamma statistics for each alcohol class
export const calculateGammaStats = data => {
  // Calculate Gamma for each point in the dataset
  data.forEach(entry => {
    entry["Gamma"] = (entry["Ash"] * entry["Hue"]) / entry["Magnesium"];
  });

  // Separate data into classes based on the 'Alcohol' property
  const classWiseData = data.reduce((acc, entry) => {
    const alcoholClass = entry["Alcohol"];
    acc[alcoholClass] = acc[alcoholClass] || [];
    acc[alcoholClass].push(entry);
    return acc;
  }, {});

  // Calculate class-wise mean, median, and mode of Gamma using utility functions
  const gammaStats = {};
  Object.keys(classWiseData).forEach(className => {
    const gammaValues = classWiseData[className].map(entry => entry["Gamma"]);
    gammaStats[className] = {
      Mean: calcMean({
        classVal: className,
        alcoholClass: classWiseData[className],
        property: "Gamma",
      }),
      Median: calcMedian({
        classVal: className,
        alcoholClass: classWiseData[className],
        property: "Gamma",
      }),
      Mode: calcMode({
        classVal: className,
        alcoholClass: classWiseData[className],
        property: "Gamma",
      }),
    };
  });

  return gammaStats;
};
