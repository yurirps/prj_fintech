import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../Context/DataContext'

const dadosGrafico = [

    {
        data: '2025-01-01',
        pago: 4500,
        processando: 2430,
        falha: 732
    },

    {
        data: '2025-01-02',
        pago: 300000,
        processando: 202000,
        falha: 100700
    },

    {
        data: '2025-01-01',
        pago: 200000,
        processando: 10200,
        falha: 5840
    },
]

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
    return (
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={dadosGrafico} >
                <XAxis dataKey='data' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='pago' stroke='#a36af9' strokeWidth={3} />
                <Line type='monotone' dataKey='processando' stroke='#fbcb21' strokeWidth={3} />
                <Line type='monotone' dataKey='falha' stroke='#000' strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default GraficoVendas