import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar.tsx'
import { CurrentPageProvider, useCurrentPage } from './CurrentPageContext.tsx'
import FlightSummaryChart from './Vizualization/AirlinesSoldoutPlot.tsx'
import TransactionPieChart from './Vizualization/TransactionPieChart.tsx'
import PaymentSummaryChart from './Vizualization/PaymentSummaryChart.tsx'
import { useNavigate } from 'react-router-dom'

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
`

const PageViz = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  height: auto;
  width: 100%;
`

const MainContent = styled.div`
  flex-grow: 1;
  overflow: visible;
  background: #f5f5f9;
  //padding: 1rem;
`
const BoxTitle = styled.h1`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 0.5em;
`

const BoxContent = styled.p`
  font-size: 1.25em;
  color: #555;
  margin-top: 0;
`

const Value = styled.span`
  font-weight: bold;
`
const TotalAmountValue = styled.span`
  font-weight: bold;
  color: limegreen;
`
const TotalFailureValue = styled.span`
  font-weight: bold;
  color: orangered;
`

const Box = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`
const ChartsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
  width: 100%;

  > :first-child {
    flex: 4;
  }

  > :last-child {
    flex: 2;
  }
`

const DashboardContent = () => {
  const { setCurrentPage } = useCurrentPage()
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [failureAmount, setFailureAmount] = useState<number>(0)
  const [totalOrders, setTotalOrders] = useState<number>(0)

  const navigate = useNavigate()

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}')

    if (userProfile.first_name === undefined && userProfile.last_name === undefined) {
      console.log(userProfile)
      return navigate('/login-admin')
    }

    setCurrentPage(`Hello ${userProfile.first_name} ${userProfile.last_name}!`)
  }, [setCurrentPage, navigate])

  return (
    <>
      <Sidebar />
      <MainContent>
        <Navbar />
        <PageViz>
          <Row>
            <Box>
              <BoxTitle>Total Pesanan</BoxTitle>
              <BoxContent>
                <Value>{totalOrders}</Value>
              </BoxContent>
            </Box>
            <Box>
              <BoxTitle>Total Netto</BoxTitle>
              <BoxContent>
                Rp <TotalAmountValue>{totalAmount}</TotalAmountValue>
              </BoxContent>
            </Box>
            <Box>
              <BoxTitle>Total Transaksi Gagal</BoxTitle>
              <BoxContent>
                Rp <TotalFailureValue>{failureAmount}</TotalFailureValue>
              </BoxContent>
            </Box>
          </Row>
          <ChartsContainer>
            <Box>
              <FlightSummaryChart onTotalOrders={setTotalOrders} />
            </Box>
            <Box>
              <TransactionPieChart />
            </Box>
          </ChartsContainer>
          <Box>
            <PaymentSummaryChart setTotalAmount={setTotalAmount} setFailureAmount={setFailureAmount} />
          </Box>
        </PageViz>
      </MainContent>
    </>
  )
}

const Dashboard = () => {
  return (
    <CurrentPageProvider>
      <PageLayout>
        <DashboardContent />
      </PageLayout>
    </CurrentPageProvider>
  )
}

export default Dashboard
