import React from 'react';
import WineStatsTable from './WineStatsTable';

// GammaTable component renders WineStatsTable with Gamma property
const GammaTable = ({data=[]}) => {
    return (
        <WineStatsTable 
            data={data}
            propertyName={"Gamma"} // Set propertyName to "Gamma" for GammaTable
        />
    )
}

export default GammaTable;