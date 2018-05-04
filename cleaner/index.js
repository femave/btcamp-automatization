export const cleaner = async values => {
  const getValues = await values
  return getValues.map(value => {
    return Object.entries(value).reduce((cleanedValue, [key, value]) => {
      if (!Array.isArray(value))
        cleanedValue[key] = value.replace(/(\r\n\t|\n|\r\t)/gm, '').trim()
      else cleanedValue[key] = value
      return cleanedValue
    }, {})
  })
}
