export default (instance) => {
  const name = instance.name
  const initiative = parseInt(instance.initiative, 0)
  const totalHp = parseInt(instance.totalHp, 0)
  let valid = true

  if (!name) {
    instance.$refs.name.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.name.classList.remove('invalid')
  }
  if (!initiative) {
    instance.$refs.initiative.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.initiative.classList.remove('invalid')
  }
  if (!totalHp) {
    instance.$refs.hp.classList.add('invalid')
    valid = false
  } else {
    instance.$refs.hp.classList.remove('invalid')
  }

  return valid
}
