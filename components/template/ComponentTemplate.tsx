import styles from './ComponenTemplate.module.scss'

export interface IComponentTemplate {
  ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const ComponentTemplate: React.FC<IComponentTemplate> = ({
  ComponentTemplateProp,
}) => {
  return <div className={styles.container}>{ComponentTemplateProp}</div>
}

export default ComponentTemplate
