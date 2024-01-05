'use client'

import styled from "styled-components"
import GridProps from "./GridProps"

type ColsOrRows = number | 'auto';

function getColumnsAndRows(columns: ColsOrRows, rows: ColsOrRows) {
    return {
        gridTemplateColumns: columns === 'auto' ? 'auto' : Array.from(Array(columns).keys()).map(x => '1fr').join(' '),
        gridTemplateRows: rows === 'auto' ? 'auto' : Array.from(Array(rows).keys()).map(x => '1fr').join(' '),

    }
}


const Grid = styled('div')<GridProps>(({ columns=1, rows='auto', gap }) => ({
    ...getColumnsAndRows(columns, rows),
    display: 'grid',
    gap: gap || '12px',
    padding: '0',
    width: '100%',
}))

export default Grid;