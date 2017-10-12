declare type TokenFilterBasicOperator =
  | 'contains'
  | '!contains'
  | '==='
  | '!=='
  | '<'
  | '>'
  | '<='
  | '>='

declare type TokenFilterCategory = string
declare type TokenFilterCategoryType = 'text' | 'date' | 'combobox' | 'number'

declare type TokenFilterEntryCreating = {
  category: ?TokenFilterCategory,
  value: ?string,
  operator: ?TokenFilterBasicOperator,
}

declare type TokenFilterEntry = {
  category: TokenFilterCategory,
  value: string,
  operator: TokenFilterBasicOperator,
}

declare type TokenFilterCategoryDescritor = {
  category: TokenFilterCategory,
  type: TokenFilterCategoryType,
}
