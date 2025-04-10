function isMarkdownClone(markdown) {
  // https://docs.google.com/presentation/d/11hYhjB6z04UtQRjESZcsbKuA5stkzdS9arwZ1I1naR4/edit#slide=id.SLIDES_API1836102292_0

  return (markdown.startsWith('https://docs.google.com/presentation/d/')) && markdown.includes('/edit#slide=id.')
}