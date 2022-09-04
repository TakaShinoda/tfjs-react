import * as tf from '@tensorflow/tfjs'

export const FirstTensor = () => {
  const first = tf.tensor1d([8, 6, 7, 5, 3, 0, 9])
  try {
    // tensor1d を使って2階テンソルを作ろうとしているのでエラーが発生
    const nope = tf.tensor1d([[1], [2]])
  } catch (e) {
    console.log("That's a negative Ghost Rider")
  }
	console.log("Rank:", first.rank)
	console.log("Size:", first.size)
	console.log("Data Type:", first.dtype)
  return <h1>Tensor</h1>
}
