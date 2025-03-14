import Image from 'next/image'

import Accordion from '@/components/common/Accordion'
import Badge from '@/components/common/Badge'
import { OPERATION_STATUS } from '@/components/common/Badge/constants'
import { useQueryParams } from '@/hooks/useQueryParams'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { VehicleLocation } from '@/types/vehicle'

import * as styles from './styles.css'

interface ViewportVehicleListProps {
    clusterDetail: VehicleLocation[]
}

const ViewportVehicleList = ({ clusterDetail }: ViewportVehicleListProps) => {
    const { addQuery } = useQueryParams()

    const hasVehicles = clusterDetail.length > 0

    const getVehicleStatus = (status: keyof typeof OPERATION_STATUS) => {
        return OPERATION_STATUS[status] === '운행중' ? '운행중' : '미운행'
    }

    return (
        <article className={styles.container}>
            <Accordion title='차량 목록' variant='secondary'>
                {hasVehicles ? (
                    <main className={styles.vehicleList}>
                        <div className={styles.listHeader}>
                            총<span className={styles.vehicleCount}>{clusterDetail.length}</span>대의 차량
                        </div>
                        {clusterDetail.map((cluster) => {
                            const vehicleNumber = addSpaceVehicleNumber(cluster.vehicleNumber)

                            return (
                                <div
                                    key={cluster.vehicleId}
                                    className={styles.listItem}
                                    onClick={() => addQuery('vehicleNumber', vehicleNumber)}
                                    role='presentation'
                                >
                                    <Badge
                                        shape='circle'
                                        variant={getVehicleStatus(cluster.status!)}
                                        className={styles.badge}
                                    />
                                    <p className={styles.vehicleNumber}>{vehicleNumber}</p>
                                    <Image src={'/icons/right-icon.svg'} width={24} height={24} alt='자세히보기 버튼' />
                                </div>
                            )
                        })}
                    </main>
                ) : (
                    <div className={styles.emptyText}>
                        <p>현재 영역에서 찾은 차량이 없습니다</p>
                        <small className={styles.description}>지도를 이동하여 차량을 찾아보세요</small>
                    </div>
                )}
            </Accordion>
        </article>
    )
}

export default ViewportVehicleList
