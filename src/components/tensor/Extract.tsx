import * as tf from '@tensorflow/tfjs'

export const Extract = () => {
  const snap = tf.tensor([1, 2, 3])
  const crackle = tf.tensor([3.141592654])
  const pop = tf.tensor([
    [1, 2, 3],
    [4, 5, 6],
  ])

  // 構造を確認できるだけで値は得られない
  console.log(snap)

  // テンソルの構造ではなくデータが表示される
  crackle.print()

  // JSに戻す
  console.log('Welcome Back Array!', pop.arraySync()) // 多次元構造を持つ配列として取り出す
  console.log('Welcome Back Typed!', pop.dataSync()) // 1次元の型付き配列として取り出す

  // 残っているテンソルを削除
  tf.dispose([snap, crackle, pop])


	// --------------
  // 行列の計算
  const mat1 = [
    [91, 82, 13],
    [15, 23, 62],
    [25, 66, 63],
  ]

  const mat2 = [
    [1, 23, 83],
    [33, 12, 5],
    [7, 23, 61],
  ]

  tf.matMul(mat1, mat2).print()
	// --------------

  return <h1>Extract</h1>
}
