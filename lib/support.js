// @flow
export const getOperatorsForCategoryType = (
  categoryType: TokenFilterCategoryType,
): Array<TokenFilterBasicOperator> => {
  let operatorsMap = {
    text: ['===', '!==', 'contains', '!contains'],
    date: ['===', '!==', '<', '>', '<=', '>='],
    number: ['===', '!==', '<', '>', '<=', '>='],
    combobox: ['===', '!=='],
  }

  return operatorsMap[categoryType]
}
