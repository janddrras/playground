/* eslint-disable @next/next/no-img-element */
import styles from './CssAnim.module.scss'
import Module from './Module10'

export interface IComponentTemplate {
  //   ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const CssAnim: React.FC<IComponentTemplate> = () => {
  return (
      <div className={styles.container}>
          <Module />
    </div>
  )
}

export default CssAnim
