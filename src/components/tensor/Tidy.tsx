import * as tf from '@tensorflow/tfjs'

export const Tidy = () => {
  console.log('start', tf.memory().numTensors)

  let keeper, charser, seeker, beater
  tf.tidy(() => {
    keeper = tf.tensor([1, 2, 3])
    charser = tf.tensor([1, 2, 3])
    seeker = tf.tensor([1, 2, 3])
    beater = tf.tensor([1, 2, 3])
    console.log('inside tidy', tf.memory().numTensors)

    // テンソルを保護
    tf.keep(keeper)

    // return されたテンソルは破棄されない
    return charser
  })
  // 2まで減る
  console.log('after tidy', tf.memory().numTensors)

  keeper.dispose()
  charser.dispose()

  console.log('end', tf.memory().numTensors)

  return <h1>Tidy</h1>
}
