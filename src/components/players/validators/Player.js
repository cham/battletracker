export default (instance) => {
  const statusName = instance.statusName
  const turnsLeft = parseInt(instance.turnsLeft, 0)
  let valid = true

  if (!statusName) {
    instance.$refs.statusname.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.statusname.classList.remove('invalid')
  }

  if (!turnsLeft) {
    instance.$refs.turnsleft.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.turnsleft.classList.remove('invalid')
  }

  return valid
}
