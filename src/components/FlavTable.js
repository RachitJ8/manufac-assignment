import React from 'react';
import WineStatsTable from './WineStatsTable';

// FlavTable component renders WineStatsTable with Flavanoids property
const FlavTable = ({data=[]}) => {
    return (
        <WineStatsTable 
            data={data}
            propertyName={"Flavanoids"} // Set propertyName to "Flavanoids" for FlavTable
        />
    )
}

export default FlavTable;