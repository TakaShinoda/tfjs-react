import { FC, useEffect } from 'react'
import * as toxicity from '@tensorflow-models/toxicity'

export const Toxicity: FC = () => {
  useEffect(() => {
    const threshold = 0.5
    const toxicityLabels = [
      'identity_attack', // 名指しの攻撃
      'insult', // 侮辱
      'obscene', // 猥褻
      'severe_toxicity', // 極端に有害
      'sexual_explicit', // あからさまに性的な表現
      'threat', // 脅迫
      'toxicity', // 有害
    ]

    // load()はネットワーク経由で実際のモデルファイルをダウンロードする
    toxicity.load(threshold, toxicityLabels).then((model) => {
      // 彼女は石器人みたいだ。知性はそれ以下だけど！
      const sentences = [
        'She looks like a cavewoman, only far less intelligent!',
      ]

      model.classify(sentences).then((predictions) => {
        // console.log(predictions)
        console.log(JSON.stringify(predictions, null, 2))
      })
    })
  }, [])

  return <h1>Toxicity</h1>
}
