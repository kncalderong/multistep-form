const validateEmail = (email: string) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const emailToTest = email.toLowerCase().replace(/ /g, '')
  if (regex.test(emailToTest)) {
    return emailToTest
  }
  return ''
};

export default validateEmail