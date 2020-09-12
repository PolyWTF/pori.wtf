function consoleMessageWithCSS() {
  const css = ['font-size: 16px;']
  console.log(
    `function everything() {
    try {
      challenge()
    } catch (failure) {
      const experience = improve(failure)
      challenge(experience)
    }
  }
  everything()`,
    css
  )
}

export default consoleMessageWithCSS
