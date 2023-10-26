import styles from '../css/dividerv.module.css'

interface DividerVProps {
    height?: number;
    marginLeft?: number;
}

const DividerV = ({height=100, marginLeft=10}: DividerVProps) => {
    return (
        <div className={styles.dividerV} style={{height: height, marginLeft:marginLeft}}></div>
    )
}

export default DividerV;