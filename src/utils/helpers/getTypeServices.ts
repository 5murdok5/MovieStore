export function getTypeServ(type: String) {
  switch (type) {
    case 'buy':
      return 'Compra'
    case 'rent':
      return 'Renta'
    default:
      return type
  }
}
