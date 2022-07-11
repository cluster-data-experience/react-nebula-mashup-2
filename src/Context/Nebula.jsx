import React, {
    useEffect, useState, useContext, createContext
} from 'react';

import embed from '../NebulaConfig/configure';
import connect from '../NebulaConfig/connect';

const getNebula = async () => {
    const app = await connect({
        url: 'https://dev.clusterdesign.com.br',
        appId: '0aaa136d-eb71-4d60-90b0-2d8c266b07bc'
    });
    return { nebula: embed(app), app };
  };

const NebulaContext = createContext();

function NebulaProvider({ children }) {
    const [nebula, setNebula] = useState(null);
    const [app, setApp] = useState(null);

    useEffect(() => {
      getNebula().then((res) => {
        setNebula(res.nebula);
        setApp(res.app);
      });
    }, []);

    return (
        <NebulaContext.Provider value={{ nebula, app }}>
            {children}
        </NebulaContext.Provider>
    );
}

function useNebula() {
    const context = useContext(NebulaContext);

    if (!context) {
        throw new Error(' useNebula should be used within a NebulaProvider');
    }

    return context;
}

NebulaProvider.defaultProps = {
    children: {}
};

export { NebulaProvider, useNebula };
