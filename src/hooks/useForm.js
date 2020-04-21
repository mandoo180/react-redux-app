import { useState } from 'react'

const useForm = defaultContent => {
  const [content, setContent] = useState(defaultContent)

  const reset = () => setContent(defaultContent)
  const bind = {
    content,
    onChange: e => setContent({ ...content, [e.target.name]: e.target.value }),
  }

  return [content, bind, reset]
}

export default useForm
