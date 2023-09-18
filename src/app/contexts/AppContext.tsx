'use client';

import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState('vi');
    
	return <AppContext.Provider value='dark'>{children}</AppContext.Provider>;
}
