import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/radargraph.css'

/* const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
]; */

const translation = {
  intensity: 'Intensité',
  speed: 'Vitesse',
  strength: 'Force',
  endurance: 'Endurance',
  energy: 'Energie',
  cardio: 'Cardio',
}

function formatPerformanceData (dataOriginal) {
  const { data, kind } = dataOriginal
  const newData = []
  data.forEach(perf => {
    newData.push({
      value: perf.value,
      kind: translation[kind[perf.kind]]
    })
  })
  return newData
}

function RadarGraph({perfData}) {
    
    const data = formatPerformanceData(perfData)
    
    return <div className="radar-graph small">
        <ResponsiveContainer width='100%' aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' fontSize={14} tickLine={false} />
            <Radar dataKey="value" stroke='#E60000' fill="#E60000" fillOpacity={0.7} />
            </RadarChart>
            
      </ResponsiveContainer>
    </div>
}

export default RadarGraph