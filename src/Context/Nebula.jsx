import React, {
    useEffect, useState, useContext, createContext
} from 'react';

import embed from '../NebulaConfig/configure';
import connect from '../NebulaConfig/connect';

const getNebula = async () => {
    const app = await connect({
        // url: 'https://cluster.us.qlikcloud.com',
        // webIntegrationId: 'f-pW61I6iRHS0UUocC1bGLtuFD7_Wjym',
        // appId: '28ee7016-b117-4d3e-a791-447c88bf6c1d'
        url: 'https://dev.clusterdesign.com.br',
        appId: '0aaa136d-eb71-4d60-90b0-2d8c266b07bc'
    });
    return embed(app);
  };

const NebulaContext = createContext();

function NebulaProvider({ children }) {
    const [nebula, setNebula] = useState(null);

    useEffect(() => {
        getNebula().then(res => setNebula(res));
    }, []);

    return (
        <NebulaContext.Provider value={{ nebula }}>
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
