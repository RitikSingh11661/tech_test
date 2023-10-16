import React, { useState } from 'react';
import { Box, Flex, Text, Select, Image} from "@chakra-ui/react"
import Chart from 'react-google-charts'
import '../styles/DashboardStyle.css';

export const Dashboard = () => {
    const [tableData, setTableData] = useState([
        ['Cosmetics', 712, 4272, 8, 16568],
        ['Serums', 3961, 27331, 115, 362526],
        ['Facewash', 9462, 76831, 266800],
        ['Shampoos', 439, 2151, 5, 11029],
        ['Conditioners', 1680, 3864, 49, 175, 245],
        ['Facewash 2', 4978, 29370, 189, 623106],
    ]);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const [tableData2, setTableData2] = useState([
        ['Male', 348, 12528, 42, 62118], ['Female', 692, 24912, 35, 5175], ['Unknown', 105, 3943, 3, 4489]
    ]
    );
    const [sortColumn2, setSortColumn2] = useState(null);
    const [sortDirection2, setSortDirection2] = useState('asc');
    const [isChartOpen, setIsChartOpen] = useState(true);

    const [selectedMetric, setSelectedMetric] = useState('Clicks');

    const generateChartData = () => {
        const metricIndex = { Clicks: 1, Cost: 2, Conversations: 3, Revenue: 4 };
        const selectedMetricIndex = metricIndex[selectedMetric];
        const chartData = [['Group', selectedMetric]];
        for (const data of tableData2) chartData.push([data[0], data[selectedMetricIndex]]);
        return chartData;
    };

    const handleMetricChange = (event) => {
        const newMetric = event.target.value;
        setSelectedMetric(newMetric);
    };

    const handleSort = (column) => {
        if (column === sortColumn) setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        else {
            // If a new column is clicked, set the column and default sorting direction to ascending
            setSortColumn(column);
            setSortDirection('asc');
        }

        // Clone the tableData array to avoid mutating the original data
        const sortedData = [...tableData];

        // Sort the data based on the selected column and direction
        sortedData.sort((a, b) => {
            const [valueA, valueB] = [a, b].map((item) => item[column]);

            if (sortDirection === 'asc') return valueA - valueB;
            else return valueB - valueA;
        });

        setTableData(sortedData);
    }

    return (
        // <Flex justifyContent={'center'} gap={'3vw'}>
        //     <Box border={'1px solid grey'} borderBottom={'none'} borderRadius={'6px'} width={'46vw'}>
        //         <Flex justifyContent={'space-between'} p={'1.5vh'} fontWeight={'500'}>
        //             <Text color={'#4e4b4b'} paddingLeft={'2vw'}>Ad Insights</Text>
        //             <Box border={'1px solid #ded7d7'} w={'2vw'} borderRadius={'full'} textColor={'#ded7d7'}>?</Box>
        //         </Flex>
        //         <table style={{ width: '100%' }}>
        //             <thead>
        //                 <tr style={{ color: '#4e4b4b', textAlign: 'center', fontWeight: 500 }}>
        //                     <td onClick={() => handleSort(1)}>Campaigns</td>
        //                     <td onClick={() => handleSort(2)}>Clicks</td>
        //                     <td onClick={() => handleSort(3)}>Cost</td>
        //                     <td onClick={() => handleSort(4)}>Conversations</td>
        //                     <td onClick={() => handleSort(5)}>Revenue</td>
        //                 </tr>
        //             </thead>
        //             <tbody style={{ color: 'grey' }}>
        //                 {tableData.map(data => (
        //                     <tr>
        //                         <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>{data[0]}</td>
        //                         <td style={{ textAlign: 'right' }}>{data[1]}</td>
        //                         <td>USD {data[2]}</td>
        //                         <td style={{ textAlign: 'right' }}>{data[3]}</td>
        //                         <td style={{ textAlign: 'left' }}>USD {data[4]}</td>
        //                     </tr>
        //                 ))}
        //                 <tr>
        //                     <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>Total</td>
        //                     <td style={{ textAlign: 'right' }}>26510</td>
        //                     <td>USD 143810</td>
        //                     <td style={{ textAlign: 'right' }}>489</td>
        //                     <td style={{ textAlign: 'left' }}>USD 1573563</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </Box>
        //     <Box border={'1px solid grey'} borderRadius={'6px'} width={'46vw'}>
        //         <Flex justifyContent={'space-between'} p={'1.5vh'} fontWeight={'500'}>
        //             <Text color={'#4e4b4b'} paddingLeft={'2vw'}>Ad Insights</Text>
        //             <Flex>
        //               {isChartOpen && <Select width={'10vw'} paddingRight={'2vw'} size={'sm'} value={selectedMetric} onChange={handleMetricChange}>
        //                     <option value='Clicks'>Clicks</option>
        //                     <option value='Cost'>Cost</option>
        //                     <option value='Conversations'>Conversations</option>
        //                     <option value='Revenue'>Revenue</option>
        //                 </Select>}
        //                 <Box border={'1px solid #ded7d7'} w={'2vw'} borderRadius={'full'} textColor={'#ded7d7'}>?</Box>
        //             </Flex>
        //         </Flex>
        //         {!isChartOpen && <table style={{ width: '100%' }}>
        //             <thead>
        //                 <tr style={{ color: '#4e4b4b', textAlign: 'center', fontWeight: 500 }}>
        //                     <td onClick={() => handleSort(1)}>Group</td>
        //                     <td onClick={() => handleSort(2)}>Clicks</td>
        //                     <td onClick={() => handleSort(3)}>Cost</td>
        //                     <td onClick={() => handleSort(4)}>Conversations</td>
        //                     <td onClick={() => handleSort(5)}>Revenue</td>
        //                 </tr>
        //             </thead>
        //             <tbody style={{ color: 'grey' }}>
        //                 {tableData2.map(data => (
        //                     <tr>
        //                         <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>{data[0]}</td>
        //                         <td style={{ textAlign: 'right' }}>{data[1]}</td>
        //                         <td>USD {data[2]}</td>
        //                         <td style={{ textAlign: 'right' }}>{data[3]}</td>
        //                         <td style={{ textAlign: 'left' }}>USD {data[4]}</td>
        //                     </tr>
        //                 ))}
        //                 <tr>
        //                     <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>Total</td>
        //                     <td style={{ textAlign: 'right' }}>1145</td>
        //                     <td>USD 41383</td>
        //                     <td style={{ textAlign: 'right' }}>80</td>
        //                     <td style={{ textAlign: 'left' }}>USD 71782</td>
        //                 </tr>
        //             </tbody>
        //         </table>}
        //         {isChartOpen && <Box width={'60vw'}>
        //             <Chart chartType="PieChart" data={generateChartData()} height={'60vh'} options={{ title: "Ad Insights" }} />
        //         </Box>}
        //         <Flex justifyContent={'end'} gap={'1vw'} marginRight={'1vw'}>
        //             <Image cursor={'pointer'} onClick={()=>setIsChartOpen(!isChartOpen)} width={'5%'} borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/800914?s=200&v=4' alt='iconToHome'/>
        //             <Image cursor={'pointer'}onClick={()=>setIsChartOpen(!isChartOpen)} width={'5%'} src='https://cdn4.iconfinder.com/data/icons/places-solid-style/24/places-home-512.png'/>
        //         </Flex>
        //     </Box>
        // </Flex>
        <Flex justifyContent={'center'} flexDirection={['column', 'row']} gap={['2vh', '3vw']}>
            <Box border={'1px solid grey'} borderBottom={'none'} borderRadius={'6px'} width={['90vw', '46vw']}>
                <Flex justifyContent={'space-between'} p={'1.5vh'} fontWeight={'500'}>
                    <Text color={'#4e4b4b'} paddingLeft={['2vw', '2vw']}>Ad Insights</Text>
                    <Box border={'1px solid #ded7d7'} w={['10vw', '2vw']} borderRadius={'full'} textColor={'#ded7d7'}>?</Box>
                </Flex>
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr style={{ color: '#4e4b4b', textAlign: 'center', fontWeight: 500 }}>
                            <td onClick={() => handleSort(1)}>Campaigns</td>
                            <td onClick={() => handleSort(2)}>Clicks</td>
                            <td onClick={() => handleSort(3)}>Cost</td>
                            <td onClick={() => handleSort(4)}>Conversations</td>
                            <td onClick={() => handleSort(5)}>Revenue</td>
                        </tr>
                    </thead>
                    <tbody style={{ color: 'grey' }}>
                        {tableData.map(data => (
                            <tr key={data[0]}>
                                <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>{data[0]}</td>
                                <td style={{ textAlign: 'right' }}>{data[1]}</td>
                                <td>USD {data[2]}</td>
                                <td style={{ textAlign: 'right' }}>{data[3]}</td>
                                <td style={{ textAlign: 'left' }}>USD {data[4]}</td>
                            </tr>
                        ))}
                        <tr>
                            <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>Total</td>
                            <td style={{ textAlign: 'right' }}>26510</td>
                            <td>USD 143810</td>
                            <td style={{ textAlign: 'right' }}>489</td>
                            <td style={{ textAlign: 'left' }}>USD 1573563</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            <Box border={'1px solid grey'} borderRadius={'6px'} width={['90vw', '46vw']}>
                <Flex justifyContent={'space-between'} p={'1.5vh'} fontWeight={'500'}>
                    <Text color={'#4e4b4b'} paddingLeft={['2vw', '2vw']}>Ad Insights</Text>
                    <Flex>
                        {isChartOpen && (
                            <Select width={['50vw', '10vw']} paddingRight={['2vw', '2vw']} size={'sm'} value={selectedMetric} onChange={handleMetricChange}>
                                <option value='Clicks'>Clicks</option>
                                <option value='Cost'>Cost</option>
                                <option value='Conversations'>Conversations</option>
                                <option value='Revenue'>Revenue</option>
                            </Select>
                        )}
                        <Box border={'1px solid #ded7d7'} w={['10vw', '2vw']} borderRadius={'full'} textColor={'#ded7d7'}>?</Box>
                    </Flex>
                </Flex>
                {!isChartOpen && (
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr style={{ color: '#4e4b4b', textAlign: 'center', fontWeight: 500 }}>
                                <td onClick={() => handleSort(1)}>Group</td>
                                <td onClick={() => handleSort(2)}>Clicks</td>
                                <td onClick={() => handleSort(3)}>Cost</td>
                                <td onClick={() => handleSort(4)}>Conversations</td>
                                <td onClick={() => handleSort(5)}>Revenue</td>
                            </tr>
                        </thead>
                        <tbody style={{ color: 'grey' }}>
                            {tableData2.map(data => (
                                <tr key={data[0]}>
                                    <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>{data[0]}</td>
                                    <td style={{ textAlign: 'right' }}>{data[1]}</td>
                                    <td>USD {data[2]}</td>
                                    <td style={{ textAlign: 'right' }}>{data[3]}</td>
                                    <td style={{ textAlign: 'left' }}>USD {data[4]}</td>
                                </tr>
                            ))}
                            <tr>
                                <td style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>Total</td>
                                <td style={{ textAlign: 'right' }}>1145</td>
                                <td>USD 41383</td>
                                <td style={{ textAlign: 'right' }}>80</td>
                                <td style={{ textAlign: 'left' }}>USD 71782</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {isChartOpen && (
                    <Box width={['90vw', '60vw']}>
                        <Chart chartType="PieChart" data={generateChartData()} height={['60vh', '60vh']} options={{ title: "Ad Insights" }} />
                    </Box>
                )}
                <Flex justifyContent={'end'} gap={['1vw', '1vw']} marginRight={['1vw', '1vw']}>
                    <Image cursor={'pointer'} onClick={() => setIsChartOpen(!isChartOpen)} width={['10%', '5%']} borderRadius={'50%'} src='https://avatars.githubusercontent.com/u/800914?s=200&v=4' alt='iconToHome' />
                    <Image cursor={'pointer'} onClick={() => setIsChartOpen(!isChartOpen)} width={['10%', '5%']} src='https://cdn4.iconfinder.com/data/icons/places-solid-style/24/places-home-512.png' />
                </Flex>
            </Box>
        </Flex>
    )
}