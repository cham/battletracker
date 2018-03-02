export default (instance) => {
  const statusName = instance.statusName
  const turnsLeft = parseInt(instance.turnsLeft, 0)
  let valid = true

  if (!statusName) {
    instance.$refs.statusName.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.statusName.classList.remove('invalid')
  }

  if (!turnsLeft) {
    instance.$refs.turnsLeft.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.turnsLeft.classList.remove('invalid')
  }

  return valid
}
