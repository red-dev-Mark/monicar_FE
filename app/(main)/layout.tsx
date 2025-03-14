'use client'

import { Notifications } from '@mantine/notifications'

import Alarm from '@/components/common/Alarm'
import NavBar from '@/components/layout/NavBar'
import '@/styles'
import { layoutContainer, mainContent } from '@/styles/layout.css'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={layoutContainer}>
            <Notifications />
            <NavBar />
            <Alarm />
            <main className={mainContent}>{children}</main>
        </div>
    )
}

export default MainLayout
