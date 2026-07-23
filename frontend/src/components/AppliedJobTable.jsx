import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <div>
        <Table>
          <TableCaption>A list of your applied jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              [1,2,3].map((item,index)=>(
                <TableRow key={index}>
              <TableCell>12-02-2005</TableCell>
              <TableCell>Mern devloper</TableCell>
              <TableCell> google</TableCell>
              <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
            </TableRow>
              ))
            
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AppliedJobTable