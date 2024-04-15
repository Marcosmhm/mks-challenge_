import styles from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
  )
}