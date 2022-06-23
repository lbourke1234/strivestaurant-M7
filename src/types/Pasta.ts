import Comment from './Comment'

interface Pasta {
  id: number
  name: string
  image: string
  category: string
  label: string
  price: string
  description: string
  comments: Comment[]
}
export default Pasta
