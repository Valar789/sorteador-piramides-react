import React from 'react'
import ExcelUploader from '../components/Home/ExcelUploader'
import BreadCrumb from '../components/layout/BreadCrumb'
import Layout from '../components/layout/Layout'


export default function Home() {
  return (
    <Layout>
       <BreadCrumb/>
       <ExcelUploader/>
    </Layout>
  )
}
