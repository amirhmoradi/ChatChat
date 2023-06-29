'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AdminForm = () => {
    const t = useTranslations('dashboard');

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {};

    return (
        <div className='space-y-10 overflow-auto md:my-36 md:w-10/12 md:space-y-16 xl:w-6/12'>
            <div className='space-y-10 rounded-xl md:p-3'>
                <div className='flex w-full flex-col items-start space-y-1'>
                    <p className='text-sm'>Example</p>
                    <Input className='dark:border-stone-400 dark:bg-stone-500' />
                </div>
                <div className='flex justify-end'>
                    <Button variant='default' onClick={() => onSubmit()} disabled={isLoading}>
                        {t('Save')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdminForm;
