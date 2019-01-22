import React from 'react';
import { VictoryChart, VictoryLine} from 'victory';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

export const WeatherChart = ({ weatherInfo }) => {

    const data = []
    weatherInfo.map((day) => {
        const weather= {}
        weather.x = day.time.slice(5, 10)
        weather.y = Math.round((((day.temp) * 9 / 5) + 32) * 10) / 10
        data.push(weather);
    });

    console.log(data);

    return (
        <div>
            <Paper style={{margin: '10px', marginTop: '10px', textAlign: 'center'}}>
                <Typography style={{fontSize: '1.75vw', fontWeight: '550', paddingTop: '50px'}}>Weather Temp Timeline</Typography>
                <VictoryChart>
                    <VictoryLine
                        style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={data}
                    />
                </VictoryChart>
            </Paper>
        </div>
    )
}

export default WeatherChart;