const findMatchingId = (id, data, field) => {
  if(field === 'name')
    return data?.find((item) => item?.id === id)?.name
  return data?.find((item) => item?.id === id)?.hostname
  
}

export default findMatchingId;