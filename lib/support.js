// @flow
export const getOperatorsForCategoryType = (
  categoryType: TokenFilterCategoryType,
): Array<TokenFilterBasicOperator> => {
  const operatorsMap = {
    text: ['===', '!==', 'contains', '!contains'],
    date: ['===', '!==', '<', '>', '<=', '>='],
    time: ['===', '!==', '<', '>', '<=', '>='],
    number: ['===', '!==', '<', '>', '<=', '>='],
    combobox: ['===', '!=='],
  }

  return operatorsMap[categoryType]
}
