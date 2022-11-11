import styles from './Layout.module.scss'

export interface ILayout {
  children: any
  //   ComponentTemplateProp: string
}

// ---------------------------------------------------------------------------

const Layout: React.FC<ILayout> = ({ children }) => {
  return <main className={styles.container}>{children}</main>
}

export default Layout
