import React from 'react'

const DashBoardFooter = () => {
  const getyear = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-gray-500 py-4">
        © {getyear} datapointexchange
      </footer>
  )
}

export default DashBoardFooter