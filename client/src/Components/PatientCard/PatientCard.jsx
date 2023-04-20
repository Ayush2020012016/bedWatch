import React from 'react'
import PatientNavbar from '../Patientnavbar/PatientNavbar'
import Detail from '../Detail/Detail'
export default function PatientCard({state,setState}) {
  return (
    <div className='patientcard' >

      <PatientNavbar state={state} setState={setState}/>
      <Detail state={state} setState={setState}/>
    </div>
  )
}
