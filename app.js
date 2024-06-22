const {
  getStokesDataFromYahooFin,
  extractRequiredFields,
} = require("./utils/helper.util");
const { indexSymbol, first20Symbols, second20Symbols } = require("./constant");

exports.fetchYahooFinanceData = async () => {
  try {
    const [indexData, first20Data, second20Data] = await Promise.all([
      getStokesDataFromYahooFin(indexSymbol),
      getStokesDataFromYahooFin(first20Symbols),
      getStokesDataFromYahooFin(second20Symbols),
    ]);

    if (indexData.error || first20Data.error || second20Data.error) {
      console.error(
        "Error:",
        indexData.error || first20Data.error || second20Data.error
      );
    } else {
      // Combine the three arrays into a single array
      const combinedDataArray = [
        ...indexData.quoteResponse.result,
        ...first20Data.quoteResponse.result,
        ...second20Data.quoteResponse.result,
      ];
      const extractedFieldsArray = await extractRequiredFields(
        combinedDataArray
      );
      return extractedFieldsArray;
    }
  } catch (error) {
    return { error: error.message };
  }
};


