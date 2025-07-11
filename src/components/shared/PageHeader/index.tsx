'use client';

import Link from 'next/link';
import { ROUTES } from '@/config/routes';
import { PageHeaderProps } from './types';
import './styles.css';

export default function PageHeader({
    title = 'MINI EVENT MANAGER',
    actionLabel = '+ New Event',
    actionHref = ROUTES.NEW_EVENT
}: PageHeaderProps) {
    return (
        <div className="page-header">
            <div className='header-container'>
                <h1 className="page-title">{title}</h1>
                {actionLabel && actionHref && (
                    <Link href={actionHref} className="page-action">
                        {actionLabel}
                    </Link>
                )}
            </div>
        </div>
    );
}
