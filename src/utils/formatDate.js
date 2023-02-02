const formatDate = (rawDate) => {
  return new Date(rawDate)?.toLocaleDateString('pt-BR');
}

export default formatDate;