import { RightIcon } from '@/public/icons'
import { DailyListItemModel } from '@/types/log'

import * as styles from './styles.css'

interface DailyListItemProps {
    data: DailyListItemModel
    onClick?: () => void
}

const DailyListItem = ({ data, onClick }: DailyListItemProps) => {
    const { drivingDate, totalDistance, totalDrivingSeconds } = data
    return (
        <div>
            <button className={styles.container} onClick={onClick} type='button'>
                <ul className={styles.list}>
                    <li className={styles.itemWrapper}>{drivingDate}</li>
                    <li className={styles.itemWrapper}>{totalDistance.toLocaleString('ko-KR')}km</li>
                    <li className={styles.itemWrapper}>{totalDrivingSeconds.toLocaleString('ko-KR')}km</li>
                </ul>
                <div className={styles.icon}>
                    <RightIcon />
                </div>
            </button>
        </div>
    )
}

export default DailyListItem
